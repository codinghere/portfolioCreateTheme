

<?php 
    if (is_home()) {

            if (have_posts() ) { 
                the_post(); ?>

        <div class="home-banner-main">
            <div class="row">
                <div class="col-md-6 col-sm-12 col-xs-12">
                    <div class="home-banner-content-left">
                        <span class="home-banner-news"><a href=""><?php the_tags()?></a></span>
                        <h2><?php the_title(); ?>
                        </h2>
                        <h1>Never Been Better </h1>

                       <p><?php the_content();?></p>
                    </div>
                </div>
                <div class="col-md-6 col-sm-12 col-xs-12">
                    <div class="home-banner-content-right">
                        <img src="<?php  the_post_thumbnail(); ?>"> 
                    </div>
                </div>
            </div>
        </div>


      
            <?php wp_reset_query();

        }
    }

?>
