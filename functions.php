<?php


// include_once("inc/customizer/kirki-installer.php");
// include_once("inc/customizer/customizer-main.php");

// Version check
/*
if (site_url() == "http://localhost/") {
	define('VERSION', time());

} else {
	define('VERSION', wp_get_theme()->get('Version'));
}*/

// require_once get_theme_file_path( '/lib/tgm.php' );

function portfolio_setup()
{

	load_theme_textdomain('portfolio', get_template_directory() . '/languages');

	add_theme_support('automatic-feed-links');


	add_theme_support('title-tag');


	add_theme_support('post-thumbnails');

	// register_nav_menus( array(
	// 	'topmenu' => esc_html__( 'Top Menu', 'portfolio' )
	// ) );


	// add_theme_support( 'html5', array(
	// 	'comment-form',
	// 	'comment-list',
	// 	'caption',
	// ) );

	add_theme_support('custom-background', apply_filters('portfolio_custom_background_args', array(
		'default-color' => 'ffffff',
		'default-image' => '',
	)));

	// Add theme support for selective refresh for widgets.
	add_theme_support('customize-selective-refresh-widgets');

	// add_theme_support('post-formats',array('recent-post','travel','life-style','video'));


}

add_action('after_setup_theme', 'portfolio_setup');

function portfolio_add_editor_styles()
{
	add_editor_style('custom-editor-style.css');
}

add_action('admin_init', 'portfolio_add_editor_styles');


function portfolio_widgets_init()
{
	register_sidebar(array(
		'name'          => esc_html__('Sidebar', 'portfolio'),
		'id'            => 'sidebar-1',
		'description'   => esc_html__('Add widgets here.', 'portfolio'),
		'before_widget' => '<section id="%1$s" class="widget %2$s">',
		'after_widget'  => '</section>',
		'before_title'  => '<h3 class="widget-title">',
		'after_title'   => '</h3>',
	));
}

add_action('widgets_init', 'portfolio_widgets_init');


function portfolio_assets()
{

	/* add css */
	wp_enqueue_style('bootstrap-min', '//cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta2/dist/css/bootstrap.min.css');
	wp_enqueue_style('bootstrap-select-min', '//cdnjs.cloudflare.com/ajax/libs/bootstrap-select/1.13.18/css/bootstrap-select.min.css');
	wp_enqueue_style('google-fonts', '//fonts.googleapis.com');
	wp_enqueue_style('google-fonts-two', '//fonts.gstatic.com');
	wp_enqueue_style('resume-progress', '//jquery.lineProgressbar.css');
	wp_enqueue_style('google-fonts-three', '//fonts.googleapis.com/css2?family=Nunito+Sans:ital,wght@0,600;0,700;0,800;0,900;1,300;1,400&display=swap');
	wp_enqueue_style('font-awesome', '//cdnjs.cloudflare.com/ajax/libs/font-awesome/5.13.0/css/all.min.css');
	wp_enqueue_style('owl-carousel-min', '//cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/assets/owl.carousel.min.css');
	wp_enqueue_style('owl-carousel-theme-min', '//cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/assets/owl.theme.default.min.css');
	wp_enqueue_style('animate-min', '//cdnjs.cloudflare.com/ajax/libs/animate.css/3.7.2/animate.min.css');
	wp_enqueue_style('themify-icons', '//themify.me/wp-content/themes/themify-v32/themify-icons/themify-icons.css');
	wp_enqueue_style('select-two-min', get_theme_file_uri('/assets/css/select2.min.css'));
	wp_enqueue_style('responsive', get_theme_file_uri('/assets/css/responsive.css'));
	wp_enqueue_style('portfolio-work', get_theme_file_uri('/assets/css/work.css'));
	wp_enqueue_style('portfolio-main', get_theme_file_uri('/assets/css/main.css'));
	wp_enqueue_style('portfolio', get_stylesheet_uri());


	/* add javascript */

	wp_enqueue_script('bootstrap-bundle', '//cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta2/dist/js/bootstrap.bundle.min.js', array(), '1.0', true);
	wp_enqueue_script('bootstrap-min', '//stackpath.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js', array(), '1.0', true);
	wp_enqueue_script('bootstrap-select-min', '//cdnjs.cloudflare.com/ajax/libs/bootstrap-select/1.13.18/js/bootstrap-select.min.js', array(), '1.0', true);
	wp_enqueue_script('code-icon', '//code.iconify.design/2/2.1.1/iconify.min.js', array(), '1.0', true);
	wp_enqueue_script('platform-', '//apps.elfsight.com/p/platform.js', array(), '1.0', true);
	wp_enqueue_script('jQuery-min', '//cdnjs.cloudflare.com/ajax/libs/jquery/3.6.0/jquery.min', array(), '1.0', true);

	wp_enqueue_script('jQuery-min-two', '//cdnjs.cloudflare.com/ajax/libs/jquery/3.4.1/jquery.min.js', array(), '1.0', true);
	wp_enqueue_script('jQuery-migrate', '//cdnjs.cloudflare.com/ajax/libs/jquery-migrate/3.1.0/jquery-migrate.min.js', array(), '1.0', true);
	wp_enqueue_script('jQuery-waypoints', '//cdnjs.cloudflare.com/ajax/libs/waypoints/4.0.1/jquery.waypoints.js', array(), '1.0', true);

	wp_enqueue_script('owl-carousel', '//cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/owl.carousel.min.js', array(), '1.0', true);
	wp_enqueue_script('select-two-min', get_theme_file_uri('/assets/js/select2.min.js'), ['jquery'], 'default', true);
	// wp_enqueue_script('particles', get_theme_file_uri('/assets/js/particles.js'), ['jquery'], 'default', true);
	wp_enqueue_script('portfolio', get_theme_file_uri('/assets/js/main.js'), ['jquery'], '1.1', true);
	if (is_singular() && comments_open() && get_option('thread_comments')) {
		wp_enqueue_script('comment-reply');
	}
}
add_action('wp_enqueue_scripts', 'portfolio_assets');


// function my_nav_special_class($classes,$item,$args,$depth){

// if ($item->ID == 9) {
// 	$classes[] =" active";
// } else{
// 	$classes[] ="nav-link";
// }
	// echo "<pre>";
	// print_r($args);
	// wp_die();

// 	$classes[]="nav-link";

// return $classes;


// }

// add_filter('nav_menu_css_class','my_nav_special_class',10,4);

// function submenu($classes){

// 	$classes[]= "submenu";
// 	return $classes;

	// echo "<pre>";
	// print_r($classes);
	// wp_die();
// }

// add_filter('nav_menu_submenu_css_class','submenu');
