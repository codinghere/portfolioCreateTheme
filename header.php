<!doctype html>
<html lang="en">

<head>
  <!-- Required meta tags -->
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
<?php
 wp_head();
 ?>
 </head>
<body <?php body_class(); ?> >

  <!-- header  -->
  <header>
    <div class="main-menu">
      <nav class="navbar navbar-expand-sm navbar-light">
        <a class="navbar-brand" href="#">
          <img src="<?php echo get_template_directory_uri(); ?>/assets/img/Own-log1o.webp" alt="Bootstrap" class="d-inline-block align-top">
        </a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#toggleMobileMenu"
          aria-controls="toggleMobileMenu" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse nav-left" id="toggleMobileMenu">

          <ul class="navbar-nav ms-auto text-center">
            <li>
              <a class="nav-link active" target="_blank" href="home.html">Home</a>
            </li>

            <li>
              <a class="nav-link" target="_blank" href="work.html">My Work</a>
            </li>
          </ul>
        </div>
        <!-- <button type="button" class="btn btn-head btn-danger ">Lets Talk</button> -->
      </nav>
    </div>
  </header>
  <!-- end header  -->













