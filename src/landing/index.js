const yo = require('yo-yo');
const empty = require('empty-element');
//const translate = require('../translate');


module.exports = function main (start) {
	return yo`
	<div>
		<header id="header" class="header fixed-top">
		<div class="container-fluid container-xl d-flex align-items-center justify-content-between">

		  <a href="/" class="logo d-flex align-items-center">
			<img src="assets/img/logo.png" alt="">
			<span>Developer Curriculum</span>
		  </a>

		  <nav id="navbar" class="navbar">
			<ul>
			  <li><a class="nav-link scrollto" href="#about">About</a></li>
			  <li><a class="nav-link scrollto" href="#portfolio">Portfolio</a></li>
			  <li class="dropdown"><a href="#"><span>Language</span> <i class="bi bi-chevron-down"></i></a>
				<ul>
				  <li><a href="#">Spanish</a></li>
				  <li><a href="#">English</a></li>
				</ul>
			  </li>
			  <li><a class="nav-link scrollto" href="#footer">Contact</a></li>	
			</ul>
			<i class="bi bi-list mobile-nav-toggle"></i>
		  </nav><!-- .navbar -->

		</div>
	  </header><!-- End Header -->

	<section id="hero" class="hero d-flex align-items-center">

		<div class="container">
			<div class="row">
				<div class="col-lg-6 d-flex flex-column justify-content-center">
					<h1 data-aos="fade-up">We offer modern solutions for growing your business</h1>
					<h2 data-aos="fade-up" data-aos-delay="400">We are team of talented designers making websites with Bootstrap</h2>
					<div data-aos="fade-up" data-aos-delay="600">
						<div class="text-center text-lg-start">
							
						</div>
					</div>
				</div>
				<div class="col-lg-6 hero-img" data-aos="zoom-out" data-aos-delay="200">
					<img src="/assets/img/hero-img.png" class="img-fluid" alt="">
				</div>
			</div>
		</div>

	</section><!-- End Hero -->

	<main id="main">
		<section id="about" class="about">

			<div class="container" data-aos="fade-up">
				<div class="row gx-0">

					<div class="col-lg-6 d-flex flex-column justify-content-center" data-aos="fade-up" data-aos-delay="200">
						<div class="content">
							<h3>Who We Are</h3>
							<h2>Expedita voluptas omnis cupiditate totam eveniet nobis sint iste. Dolores est repellat corrupti reprehenderit.</h2>
							<p>
								Quisquam vel ut sint cum eos hic dolores aperiam. Sed deserunt et. Inventore et et dolor consequatur itaque ut voluptate sed et. Magnam nam ipsum tenetur suscipit voluptatum nam et est corrupti.
							</p>
							<div class="text-center text-lg-start">
								<a href="#" class="btn-read-more d-inline-flex align-items-center justify-content-center align-self-center">
									<span>Read More</span>
									<i class="bi bi-arrow-right"></i>
								</a>
							</div>
						</div>
					</div>

					<div class="col-lg-6 d-flex align-items-center" data-aos="zoom-out" data-aos-delay="200">
						<img src="assets/img/about.jpg" class="img-fluid" alt="">
					</div>

				</div>
			</div>

		</section><!-- End About Section -->

		${start}
	</main>

	<footer id="footer" class="footer">

		<div class="footer-top">
			<div class="container">
				<div class="row gy-4">
					<div class="col-lg-5 col-md-12 footer-info">
						<a href="index.html" class="logo d-flex align-items-center">
							<img src="assets/img/logo.png" alt="">
							<span>FlexStart</span>
						</a>
						<p>Cras fermentum odio eu feugiat lide par naso tierra. Justo eget nada terra videa magna derita valies darta donna mare fermentum iaculis eu non diam phasellus.</p>
						<div class="social-links mt-3">
							<a href="#" class="twitter"><i class="bi bi-twitter"></i></a>
							<a href="#" class="facebook"><i class="bi bi-facebook"></i></a>
							<a href="#" class="instagram"><i class="bi bi-instagram bx bxl-instagram"></i></a>
							<a href="#" class="linkedin"><i class="bi bi-linkedin bx bxl-linkedin"></i></a>
						</div>
					</div>

					<div class="col-lg-2 col-6 footer-links">
						<h4>Useful Links</h4>
						<ul>
							<li><i class="bi bi-chevron-right"></i> <a href="#">Home</a></li>
							<li><i class="bi bi-chevron-right"></i> <a href="#">About us</a></li>
							<li><i class="bi bi-chevron-right"></i> <a href="#">Terms of service</a></li>
							<li><i class="bi bi-chevron-right"></i> <a href="#">Privacy policy</a></li>
						</ul>
					</div>

					<div class="col-lg-2 col-6 footer-links">
						<h4>Our Services</h4>
						<ul>
							<li><i class="bi bi-chevron-right"></i> <h6>Web Design</h6></li>
							<li><i class="bi bi-chevron-right"></i> <h6>Web Development</h6></li>
							<li><i class="bi bi-chevron-right"></i> <h6>Graphic Design</h6></li>
						</ul>
					</div>

					<div class="col-lg-3 col-md-12 footer-contact text-center text-md-start">
						<h4>Contact Us</h4>
						<p>
							A108 Adam Street <br>
							New York, NY 535022<br>
							United States <br><br>
							<strong>Phone:</strong> +1 5589 55488 55<br>
							<strong>Email:</strong> info@example.com<br>
						</p>

					</div>

				</div>
			</div>
		</div>

		<div class="container">
			<div class="copyright">
				&copy; Copyright <strong><span>FlexStart</span></strong>. All Rights Reserved
			</div>
			<div class="credits">
				<!-- All the links in the footer should remain intact. -->
				<!-- You can delete the links only if you purchased the pro version. -->
				<!-- Licensing information: https://bootstrapmade.com/license/ -->
				<!-- Purchase the pro version with working PHP/AJAX contact form: https://bootstrapmade.com/flexstart-bootstrap-startup-template/ -->
				Designed by <a href="https://bootstrapmade.com/">BootstrapMade</a>
			</div>
		</div>
	</footer><!-- End Footer -->

	</div>
`;
}

