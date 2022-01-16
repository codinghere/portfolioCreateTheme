<?php

$bloggy_fp = new WP_Query(

	array(

		'meta_key'=> 'featured',
		'meta_value'=> '1',
		'posts_per_page'=>3

	)
);
$post_data = array();

while ($bloggy_fp->have_posts()) {
	$bloggy_fp->the_post();
	$categories=get_the_category();
	$post_data[]=array(

		"title"=> get_the_title(),
		"date"=>get_the_date(),
		"thumbnail"=>get_the_post_thumbnail_url(get_the_ID(),"medium"),
		"cat"=>get_the_category(),
		"content"=>get_the_content(),
		"tags"=>get_the_tags()

		);
}

 // echo "<pre>";
	// print_r($post_data);
	// wp_die();
	
// if ($bloggy_fp->post_count>4):
?>
		<?php

			if (is_home()) {
				get_template_part("template-parts/blog-home/sticky-post");
			}
		?>
    </div>
    </div>
</section>
<!-- end header -->

<!-- Why Us Section  -->
<section id="top-blog">
    <div class="container">
        <div class="row">
            <div class="col-md-12">
                <div class="icon-boxes">
                    <div class="row user">
                    	<?php 
                    		for ($i=1; $i <4 ; $i++) :
                    			?>
	                    			<div class="col-md-2">
			                            <div class="top-blog-user-img">                               
			                                <img src="<?php echo esc_url($post_data[$i]['thumbnail']);?>" alt="">
			                            </div>
	                               </div>

			                        <div class="col-md-2">
			                            <div class="top-blog-user-content">
			                                <h4><?php echo esc_html($post_data[$i]["title"]);?></h4>
			                                <span><?php  echo esc_html( $post_data[$i]["date"]);?></span>
			                            </div>
			                        </div>
                    			<?php
                    		endfor;
                    	?>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section> 
<!-- End Why -->


<?php

// endif;
?>