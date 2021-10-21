const yo = require('yo-yo');
const main = require('../landing');


const start = yo`
<div>
	<!-- ======= Pricing Section ======= -->
		<section id="pricing" class="pricing">

			<div class="container" data-aos="fade-up">

				<header class="section-header">
					<h2>Pricing</h2>
					<p>Check our Pricing</p>
				</header>

				<div class="row gy-4" data-aos="fade-left">

					<div class="col-lg-3 col-md-6" data-aos="zoom-in" data-aos-delay="100">
						<div class="box">
							<h3 style="color: #07d5c0;">Free Plan</h3>
							<div class="price"><sup>$</sup>0<span> / mo</span></div>
							<img src="assets/img/pricing-free.png" class="img-fluid" alt="">
							<ul>
								<li>Aida dere</li>
								<li>Nec feugiat nisl</li>
								<li>Nulla at volutpat dola</li>
								<li class="na">Pharetra massa</li>
								<li class="na">Massa ultricies mi</li>
							</ul>
							<a href="#" class="btn-buy">Buy Now</a>
						</div>
					</div>

					<div class="col-lg-3 col-md-6" data-aos="zoom-in" data-aos-delay="200">
						<div class="box">
							<span class="featured">Featured</span>
							<h3 style="color: #65c600;">Starter Plan</h3>
							<div class="price"><sup>$</sup>19<span> / mo</span></div>
							<img src="assets/img/pricing-starter.png" class="img-fluid" alt="">
							<ul>
								<li>Aida dere</li>
								<li>Nec feugiat nisl</li>
								<li>Nulla at volutpat dola</li>
								<li>Pharetra massa</li>
								<li class="na">Massa ultricies mi</li>
							</ul>
							<a href="#" class="btn-buy">Buy Now</a>
						</div>
					</div>

					<div class="col-lg-3 col-md-6" data-aos="zoom-in" data-aos-delay="300">
						<div class="box">
							<h3 style="color: #ff901c;">Business Plan</h3>
							<div class="price"><sup>$</sup>29<span> / mo</span></div>
							<img src="assets/img/pricing-business.png" class="img-fluid" alt="">
							<ul>
								<li>Aida dere</li>
								<li>Nec feugiat nisl</li>
								<li>Nulla at volutpat dola</li>
								<li>Pharetra massa</li>
								<li>Massa ultricies mi</li>
							</ul>
							<a href="#" class="btn-buy">Buy Now</a>
						</div>
					</div>

					<div class="col-lg-3 col-md-6" data-aos="zoom-in" data-aos-delay="400">
						<div class="box">
							<h3 style="color: #ff0071;">Ultimate Plan</h3>
							<div class="price"><sup>$</sup>49<span> / mo</span></div>
							<img src="assets/img/pricing-ultimate.png" class="img-fluid" alt="">
							<ul>
								<li>Aida dere</li>
								<li>Nec feugiat nisl</li>
								<li>Nulla at volutpat dola</li>
								<li>Pharetra massa</li>
								<li>Massa ultricies mi</li>
							</ul>
							<a href="#" class="btn-buy">Buy Now</a>
						</div>
					</div>

				</div>

			</div>

		</section><!-- End Pricing Section -->

		<!-- ======= Portfolio Section ======= -->
		<section id="portfolio" class="portfolio">

			<div class="container" data-aos="fade-up">

				<header class="section-header">
					<h2>Portfolio</h2>
					<p>Check our latest work</p>
				</header>


				<div class="row gy-4 portfolio-container" data-aos="fade-up" data-aos-delay="200">

					<div class="col-lg-4 col-md-6 portfolio-item filter-app">
						<div class="portfolio-wrap">
							<img src="assets/img/portfolio/portfolio-1.jpg" class="img-fluid" alt="">
							<div class="portfolio-info">
								<h4>App 1</h4>
								<p>App</p>
								<div class="portfolio-links">
									<a href="assets/img/portfolio/portfolio-1.jpg" data-gallery="portfolioGallery" class="portfokio-lightbox" title="App 1"><i class="bi bi-plus"></i></a>
									<a href="portfolio-details.html" title="More Details"><i class="bi bi-link"></i></a>
								</div>
							</div>
						</div>
					</div>

					<div class="col-lg-4 col-md-6 portfolio-item filter-web">
						<div class="portfolio-wrap">
							<img src="assets/img/portfolio/portfolio-2.jpg" class="img-fluid" alt="">
							<div class="portfolio-info">
								<h4>Web 3</h4>
								<p>Web</p>
								<div class="portfolio-links">
									<a href="assets/img/portfolio/portfolio-2.jpg" data-gallery="portfolioGallery" class="portfokio-lightbox" title="Web 3"><i class="bi bi-plus"></i></a>
									<a href="portfolio-details.html" title="More Details"><i class="bi bi-link"></i></a>
								</div>
							</div>
						</div>
					</div>

					<div class="col-lg-4 col-md-6 portfolio-item filter-app">
						<div class="portfolio-wrap">
							<img src="assets/img/portfolio/portfolio-3.jpg" class="img-fluid" alt="">
							<div class="portfolio-info">
								<h4>App 2</h4>
								<p>App</p>
								<div class="portfolio-links">
									<a href="assets/img/portfolio/portfolio-3.jpg" data-gallery="portfolioGallery" class="portfokio-lightbox" title="App 2"><i class="bi bi-plus"></i></a>
									<a href="portfolio-details.html" title="More Details"><i class="bi bi-link"></i></a>
								</div>
							</div>
						</div>
					</div>

					<div class="col-lg-4 col-md-6 portfolio-item filter-card">
						<div class="portfolio-wrap">
							<img src="assets/img/portfolio/portfolio-4.jpg" class="img-fluid" alt="">
							<div class="portfolio-info">
								<h4>Card 2</h4>
								<p>Card</p>
								<div class="portfolio-links">
									<a href="assets/img/portfolio/portfolio-4.jpg" data-gallery="portfolioGallery" class="portfokio-lightbox" title="Card 2"><i class="bi bi-plus"></i></a>
									<a href="portfolio-details.html" title="More Details"><i class="bi bi-link"></i></a>
								</div>
							</div>
						</div>
					</div>

					<div class="col-lg-4 col-md-6 portfolio-item filter-web">
						<div class="portfolio-wrap">
							<img src="assets/img/portfolio/portfolio-5.jpg" class="img-fluid" alt="">
							<div class="portfolio-info">
								<h4>Web 2</h4>
								<p>Web</p>
								<div class="portfolio-links">
									<a href="assets/img/portfolio/portfolio-5.jpg" data-gallery="portfolioGallery" class="portfokio-lightbox" title="Web 2"><i class="bi bi-plus"></i></a>
									<a href="portfolio-details.html" title="More Details"><i class="bi bi-link"></i></a>
								</div>
							</div>
						</div>
					</div>

					<div class="col-lg-4 col-md-6 portfolio-item filter-app">
						<div class="portfolio-wrap">
							<img src="assets/img/portfolio/portfolio-6.jpg" class="img-fluid" alt="">
							<div class="portfolio-info">
								<h4>App 3</h4>
								<p>App</p>
								<div class="portfolio-links">
									<a href="assets/img/portfolio/portfolio-6.jpg" data-gallery="portfolioGallery" class="portfokio-lightbox" title="App 3"><i class="bi bi-plus"></i></a>
									<a href="portfolio-details.html" title="More Details"><i class="bi bi-link"></i></a>
								</div>
							</div>
						</div>
					</div>

				</div>

			</div>

		</section><!-- End Portfolio Section -->
</div>
	`;

module.exports = main(start);