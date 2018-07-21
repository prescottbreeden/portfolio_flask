$.mobile.loader.prototype.options.text = "";

$(document).ready(function() {
	console.log('power overwhelming');


	// sticky navigation trigger
	$('nav').waypoint(function(direction) {
		if (direction == "down") {
			console.log('triggered down');
			$('.nav').addClass('sticky');
		} else {
			$('.nav').removeClass('sticky');
			console.log('triggered up');
		}
	});

	//=========================================================//
	//						 NAVIGATION
	//=========================================================//

	$(document).on('click', '.about-nav', function() {
		loadAbout();
		$('html, body').animate({scrollTop: $('#fold').offset().top}, 1000);
	})

	$(document).on('click', '.portfolio-nav', function() {
		loadPortfolio();
		$('html, body').animate({scrollTop: $('#fold').offset().top}, 1000);
	})
	
	$(document).on('click', '.tech-nav', function() {
		loadTech();
		$('html, body').animate({scrollTop: $('#fold').offset().top}, 1000);
	})

	$(document).on('click', '.contact-nav', function() {
		loadContact();
		$('html, body').animate({scrollTop: $('#fold').offset().top}, 1000);
	})


	//=========================================================//
	//					   TECH DESCRIPTIONS
	//=========================================================//

	
	$(document).on('click', '.hexagon', function() {
		id = this.innerText;
		$.ajax({
			url: `/tech/${id}`,
			dataType: 'json',
			success: function(res) {
				blurb = res['blurb'];
				name = res['name'];
				document.getElementById('blurb').innerHTML=`
				<p>${blurb}</p>
				`
				document.getElementById('tech_image').innerHTML=`
				<img src="/static/img/logos/${name}.png">
				`
			}
		});
	})


	$(document).on('vclick', '.hexagon', function() {
		id = this.innerText;
		$.ajax({
			url: `/tech/${id}`,
			dataType: 'json',
			success: function(res) {
				blurb = res['blurb'];
				name = res['name'];
				document.getElementById('blurb').innerHTML=`
				<p>${blurb}</p>
				`
				document.getElementById('tech_image').innerHTML=`
				<img src="/static/img/logos/${name}.png">
				`
			}
		});
	})

	
	//==========================================================//
	//					      DOM CONTENT
	//==========================================================//


	//------------------- ABOUT -----------------------//

	function loadAbout() {
		const content = document.getElementById('fold');

		content.innerHTML = `

		<section class="about">
			<h2 class="u-center">Welcome!</h2>
			<div class="about__text-box">
				<h2 class="about__heading">About Me</h2>
				<p class="about__blurb">I'm a full-stack software developer with a 
					background in the arts and sciences. As a former opera singer, then
					CEO and then neuro&shy;scientist, the one consistency across all
					realms was the need for newer and better tech to drive innovation. 
					I love to think big and have a passion for tackling challenges to 
					find elegant solutions that are clean, efficient and reusable.</p>
			</div>
		</section>
		<section class="services">
			<h2 class="services--heading">What I Do</h2>
			<div class="services--container">
				<div class="empty-space">
					<!-- empty -->
				</div>
				<div class="wrapper">
					<h3>Front End</h3>
					<div class="services--front-end">
						<div class="cube__container">
							<img 
							class="cube__img"
							src="/static/img/cube_primary.png" 
							alt="blue cube">
						</div>	
						<div class="cube__text">
							<ul class="services--list">
								<li>Responsive Layouts</li>
								<li>Styling and Animations</li>
								<li>Front-end Architecture</li>
							</ul>
						</div>
					</div>
					<h3>Back End</h3>
					<div class="services--backend">
						<div class="cube__container">
							<img 
							class="cube__img"
							src="/static/img/cube_red.png" 
							alt="blue cube">
						</div>
						<div class="cube__text">
							<ul class="services--list">
								<li>MVC Architecture</li>
								<li>Restful API Design</li>
								<li>Object Relational Mapping</li>
							</ul>
						</div>
					</div>
					<h3>Databases</h3>
					<div class="services--db">
						<div class="cube__container">
							<img 
							class="cube__img"
							src="/static/img/cube_teal.png" 
							alt="blue cube">
						</div>
						<div class="cube__text">
							<ul class="services--list">
								<li>Database Design</li>
								<li>SQL Databases</li>
								<li>NoSQL Databases</li>
							</ul>
						</div>
					</div>
				</div>
			</div>
		</section>

		`;

	}


	//------------------- PORTFOLIO -----------------------//

	function loadPortfolio() {
		const content = document.getElementById('fold');

		content.innerHTML = `

		<section class="portfolio">
			<h2 class="portfolio__header">My Work</h2>
			<div class="project">
				<div class="project__description">
					<h2 class="project__description--header">
						Powder
					</h2>
					<p class="project__description--text">
						<span class="u-color-red">Powder</span> is a mock-landing page showcasing various animations 
						and features capable with just CSS3 and HTML5 alone. The 
						site is fully responsive to provide a smooth user 
						experience on various device sizes.
					</p>
					<div class="project__tech">
						<p>Built with:</p>
					</div>
					<div class="project__tech-row">
						<img
							src="/static/img/logos/angular.png"
							alt="angular logo"
							class="project__tech-row--img">
						<img
							src="/static/img/logos/express.png"
							alt="express logo"
							class="project__tech-row--img">
						<img
							src="/static/img/logos/nodejs.png"
							alt="nodejs logo"
							class="project__tech-row--img">
						<img
							src="/static/img/logos/sass.png"
							alt="sass logo"
							class="project__tech-row--img">
						<img
							src="/static/img/logos/aws.png"
							alt="aws logo"
							class="project__tech-row--img">
						<img
							src="/static/img/logos/html5.png"
							alt="html5 logo"
							class="project__tech-row--img">
						<img
							src="/static/img/logos/css3.png"
							alt="css3 logo"
							class="project__tech-row--img">
						<img
							src="/static/img/logos/javascript.png"
							alt="javascript logo"
							class="project__tech-row--img">
					</div>
					<p class="project__description--link">
						<a 
							href="https://github.com/prescottbreeden/powder_angular"
							target="_blank">Source Code &rarr;</a>
						<a 
							href="http://13.58.172.1/"
							target="_blank">Visit Website &rarr;</a>
					</p>
				</div>
				<div class="project__desktop">
					<a 
						href="http://13.58.172.1/"
						target="_blank">
						<img 
							src="/static/img/powder_desktop.png" 
							alt="project web page"
							class="project__desktop--img">
					</a>
				</div>
			</div>
			<div class="project">
				<div class="project__description">
					<h2 class="project__description--header">
						Ultimate Fan
					</h2>
					<p class="project__description--text">
						<span class="u-color-red">Ultimate Fan</span> is a trivia game that tests users about 
						athletes from selected categories. All trivia questions 
						were generated via web scraping robot. 
					</p>
					<p>
						<span class="u-color-red">Contributors:</span> 
						<a href="https://github.com/" class="contrib-link">
							Stephen Silverstein
						</a>
					</p>
					<div class="project__tech">
						<p>Built with:</p>
						<div class="project__tech-row">
							<img
								src="/static/img/logos/django.png"
								alt="django logo"
								class="project__tech-row--img">
							<img
								src="/static/img/logos/python.png"
								alt="python logo"
								class="project__tech-row--img">
							<img
								src="/static/img/logos/nodejs.png"
								alt="nodejs logo"
								class="project__tech-row--img">
							<img
								src="/static/img/logos/sqlite.png"
								alt="sqlite logo"
								class="project__tech-row--img">
							<img
								src="/static/img/logos/sass.png"
								alt="sass logo"
								class="project__tech-row--img">
							<img
								src="/static/img/logos/jquery.png"
								alt="jquery logo"
								class="project__tech-row--img">
							<img
								src="/static/img/logos/aws.png"
								alt="aws logo"
								class="project__tech-row--img">
							<img
								src="/static/img/logos/html5.png"
								alt="html5 logo"
								class="project__tech-row--img">
							<img
								src="/static/img/logos/css3.png"
								alt="css3 logo"
								class="project__tech-row--img">
							<img
								src="/static/img/logos/javascript.png"
								alt="javascript logo"
								class="project__tech-row--img">
						</div>
					</div>
					<p class="project__description--link">
						<a 
							href="https://github.com/prescottbreeden/ultimate_fan_project"
							target="_blank">Source Code &rarr;</a>
						<a 
							href="http://18.220.231.186/"
							target="_blank">Visit Website &rarr;</a>
					</p>
				</div>
				<div class="project__desktop">
					<a 
						href="http://18.220.231.186/"
						target="blank">
						<img 
							src="/static/img/ultimate_fan.png" 
							alt="project web page"
							class="project__desktop--img">
					</a>
				</div>
			</div>
			<div class="project">
				<div class="project__description">
					<h2 class="project__description--header">
						Casino 31
					</h2>
					<p class="project__description--text">
						<span class="u-color-red">Casino 31</span> is a card game for 1-6 players. Users can play 
						with their friends, the AI computer, or even just watch the 
						computer play. Cards are served from our own API on a 
						seperate express server 
					</p>
					<p>
						<span class="u-color-red">Contributors:</span> 
						<a href="https://github.com/lawyerh" class="contrib-link">
							Lawyer Helbing 
						</a>
						<a href="https://github.com/petersonjustin" class="contrib-link">
							Justin Peterson
						</a>
					</p>
					<p>
						<span class="u-color-red">Note:</span> due to free-hosting limitations, the
						card-API server takes about 30s to fire up before they can
						be rendered with gameplay.
					</p>
					<div class="project__tech">
						<p>Built with:</p>
						<div class="project__tech-row">
							<img
								src="/static/img/logos/dotnet.png"
								alt="dotnet logo"
								class="project__tech-row--img">
							<img
								src="/static/img/logos/csharp.png"
								alt="csharp logo"
								class="project__tech-row--img">
							<img
								src="/static/img/logos/express.png"
								alt="express logo"
								class="project__tech-row--img">
							<img
								src="/static/img/logos/nodejs.png"
								alt="nodejs logo"
								class="project__tech-row--img">
							<img
								src="/static/img/logos/bootstrap.png"
								alt="bootstrap logo"
								class="project__tech-row--img">
							<img
								src="/static/img/logos/sass.png"
								alt="sass logo"
								class="project__tech-row--img">
							<img
								src="/static/img/logos/jquery.png"
								alt="jquery logo"
								class="project__tech-row--img">
							<img
								src="/static/img/logos/aws.png"
								alt="aws logo"
								class="project__tech-row--img">
							<img
								src="/static/img/logos/html5.png"
								alt="html5 logo"
								class="project__tech-row--img">
							<img
								src="/static/img/logos/css3.png"
								alt="css3 logo"
								class="project__tech-row--img">
							<img
								src="/static/img/logos/javascript.png"
								alt="javascript logo"
								class="project__tech-row--img">
						</div>
					</div>
					<p class="project__description--link">
						<a 
							href="https://github.com/prescottbreeden/_31_by_3"
							target="_blank">Source Code &rarr;</a>
						<a 
							href="http://18.188.70.127/"
							target="_blank">Visit Website &rarr;</a>
					</p>
				</div>
				<div class="project__desktop">
					<a 
						href="http://18.188.70.127/"
						target="_blank">
						<img 
							src="/static/img/casino31.png" 
							alt="project web page"
							class="project__desktop--img">
					</a>
				</div>
			</div>
		</section>

		`;
		
	}


	//------------------- TECH -----------------------//

	function loadTech() {
		const content = document.getElementById('fold');

		content.innerHTML = `

		<section class="tech">
			<h2 class="tech__header">Some of My Favorite Tech</h2>
			<ul class="grid clear">
				<li class="hex-container" >
					<div class="hexagon img-1"> 
						<span class="transparent">flask</span>
					</div>
				</li>     
				<li class="hex-container" >
					<div class="hexagon img-9">
						<span class="transparent">django</span>
					</div>
				</li>     
				<li class="hex-container" >
					<div class="hexagon img-10">
						<span class="transparent">dotnet</span>
					</div>
				</li>     
				<li class="hex-container" >
					<div class="hexagon img-17">
						<span class="transparent">nodejs</span>
					</div>
				</li>     
				<li class="hex-container" >
					<div class="hexagon img-18">
						<span class="transparent">express</span>
					</div>
				</li>     
				<li class="hex-container" >
					<div class="hexagon img-19">
						<span class="transparent">angular</span>
					</div>
				</li>     
				<li class="hex-container" >
					<div class="hexagon img-27">
						<span class="transparent">react</span>
					</div>
				</li>     
				<li class="hex-container" >
					<div class="hexagon img-2" >
						<span class="transparent">python</span>
					</div>
				</li>     
				<li class="hex-container" >
					<div class="hexagon img-8">
						<span class="transparent">csharp</span>
					</div>
				</li>     
				<li class="hex-container" >
					<div class="hexagon img-11">
						<span class="transparent">r</span>
					</div>
				</li>     
				<li class="hex-container" >
					<div class="hexagon img-16">
						<span class="transparent">sql</span>
					</div>
				</li>     
				<li class="hex-container" >
					<div class="hexagon img-20">
						<span class="transparent">mongodb</span>
					</div>
				</li>     
				<li class="hex-container" >
					<div class="hexagon img-26">
						<span class="transparent">firebase</span>
					</div>
				</li>     
				<li class="hex-container" >
					<div class="hexagon img-28">
						<span class="transparent">sqlite</span>
					</div>
				</li>     
				<li class="hex-container" >
					<div class="hexagon img-3">
						<span class="transparent">sass</span>
					</div>
				</li>     
				<li class="hex-container" >
					<div class="hexagon img-5">
						<span class="transparent">jquery</span>
					</div>
				</li>     
				<li class="hex-container" >
					<div class="hexagon img-7">
						<span class="transparent">bootstrap</span>
					</div>
				</li>     
				<li class="hex-container" >
					<div class="hexagon img-12">
						<span class="transparent">postman</span>
					</div>
				</li>     
				<li class="hex-container" >
					<div class="hexagon img-15">
						<span class="transparent">git</span>
					</div>
				</li>     
				<li class="hex-container" >
					<div class="hexagon img-21">
						<span class="transparent">github</span>
					</div>
				</li>     
				<li class="hex-container" >
					<div class="hexagon img-25">
						<span class="transparent">vim</span>
					</div>
				</li>     
				<li class="hex-container" >
					<div class="hexagon img-4">
						<span class="transparent">aws</span>
					</div>
				</li>     
				<li class="hex-container" >
					<div class="hexagon img-6">
						<span class="transparent">ubuntu</span>
					</div>
				</li>     
				<li class="hex-container" >
					<div class="hexagon img-13">
						<span class="transparent">nginx</span>
					</div>
				</li>     
				<li class="hex-container" >
					<div class="hexagon img-14">
						<span class="transparent">html5</span>
					</div>
				</li>     
				<li class="hex-container" >
					<div class="hexagon img-22">
						<span class="transparent">css3</span>
					</div>
				</li>     
				<li class="hex-container" >
					<div class="hexagon img-23">
						<span class="transparent">javascript</span>
					</div>
				</li>     
				<li class="hex-container" >
					<div class="hexagon img-24">
						<span class="transparent">vscode</span>
					</div>
				</li>     
			</ul>
			<div class="tech__details">
				<div class="tech__details--container">
					<div class="tech__logo-box">
						<div class="tech__logo-pad">
							<div class="tech__logo" id="tech_image">
								<!-- empty -->
							</div>
						</div>
					</div>
					<div class="tech__explain" id="blurb">
						<p>
							Click on a logo above to learn more about some of
							my favorite tech!
						</p>
					</div>
				</div>
			</div>
			<div class="site">
				<h2 class="site__header">What This Website is Built With</h2>		
				<div class="site__wrapper">
					<h3 class="site__subheading">Front-end</h3>
					<div class="site__container">
						<div class="site__container--tool">
							<h4>jQuery</h4>
							<img 
								src="/static/img/logos/jquery.png" 
								alt="jquery logo"
								class="site__container--tool-img">
						</div>
						<div class="site__container--text">
							<p>
								Initially I built this website with Angular. 
								Ultimately, the project was just too small to 
								justify the use of such a high-powered framework.  
								Switching to jQuery allowed for simple JavaScript
								animations for the "sticky nav-bar" effect and 
								for page scrolling. Perhaps most importantly, the 
								loading time of the site was decreased locally
								from 5 seconds to about 300ms on average.
							</p>
						</div>
					</div>
					<div class="site__container">
						<div class="site__container--tool">
							<h4>SASS</h4>
							<img 
								src="/static/img/logos/sass.png" 
								alt="sass logo"
								class="site__container--tool-img">
						</div>
						<div class="site__container--text">
							<p>
								SASS is an invaluable tool for generating CSS.
								For example, the hexagon grid at the top of this 
								page is the result of 28 individual animations 
								separated by 0.05s to create the 
								<span class="tech-nav u-color-primary">
								waterfall effect</span>. SASS functions allowed 
								me to generate the sequence of animations with 
								just 3 lines of code.
							</p>
						</div>
					</div>
					<div class="site__container">
						<div class="site__container--tool">
							<h4>HTML5</h4>
							<img 
								src="/static/img/logos/html5.png" 
								alt="html5 logo"
								class="site__container--tool-img">
						</div>
						<div class="site__container--text">
							<p>
								The source code of this site is optimized with various 
								tags that HTML5 added to improve accessibility and site
								rendering.  Many developers I speak with are surprised
								away when they see how many features they believed 
								to be unique to front-end frameworks like Angular 
								can be accomplished with just HTML5 and CSS3, such
								as regex-based front-end form-validation.
							</p>
						</div>
					</div>
					<div class="site__container">
						<div class="site__container--tool">
							<h4>CSS3</h4>
							<img 
								src="/static/img/logos/css3.png" 
								alt="css3 logo"
								class="site__container--tool-img">
						</div>
						<div class="site__container--text">
							<p>
								As powerful as JavaScript is for animations,
								CSS3 provides great performance with minimal code
								overhead for basic transformation and opacity
								animations. All styles were compiled and minified 
								to decrease	the size of the packet coming from 
								the server request when the page is visited.
							</p>
						</div>
					</div>
				</div>
				<div class="site__wrapper">
					<h3 class="site__subheading">Back-end</h3>
					<div class="site__container">
						<div class="site__container--tool">
							<h4>Python</h4>
							<img 
								src="/static/img/logos/python.png" 
								alt="python logo"
								class="site__container--tool-img">
						</div>
						<div class="site__container--text">
							<p>
								Python is without a doubt one of my favorite 
								languages for writing anything from scrapers, to
								bots and crawlers, to scripts, to back-end servers. 
								Python is an extremely rich language and PEP8 
								provides great consistency across code bases.
							</p>
						</div>
					</div>
					<div class="site__container">
						<div class="site__container--tool">
							<h4>Flask</h4>
							<img 
								src="/static/img/logos/flask.png" 
								alt="flask logo"
								class="site__container--tool-img">
						</div>
						<div class="site__container--text">
							<p>
								I chose to use Flask as my back-end for this site
								because as a micro-framework, Flask is unopinionated
								about how it is structured and the tech you wish 
								to integrate with it. I went with a fairly minimalist 
								modularization of the server and opted to have 
								just a single-route serving the site so that it 
								felt snappy and modern while also decreasing the 
								number of incoming server requests.
							</p>
						</div>
					</div>
					<div class="site__container">
						<div class="site__container--tool">
							<h4>Ubuntu</h4>
							<img 
								src="/static/img/logos/ubuntu.png" 
								alt="ubuntu logo"
								class="site__container--tool-img">
						</div>
						<div class="site__container--text">
							<p>
								This site is hosted on a Linux machine running
								Ubuntu through Amazon Web Services.
							</p>
						</div>
					</div>
				</div>
				<div class="site__wrapper">
					<h3 class="site__subheading">Database</h3>
					<div class="site__container">
						<div class="site__container--tool">
							<h4>SQLite</h4>
							<img 
								src="/static/img/logos/sqlite.png" 
								alt="sqlite logo"
								class="site__container--tool-img">
						</div>
						<div class="site__container--text">
							<p>
								Data and databases rock, so even though this 
								project really did not need a database (sad panda), 
								I decided to use one to store the descriptions
								for each tech shown above. For simplicity I chose 
								to use SQLite to take advantage of the prebuilt-ORM 
								SQLAlchemy provides Flask and the simple migration 
								features of flask-migrate. Database queries are
								handled via AJAX calls with jQuery that return 
								JSON data back to the browser. This was a much 
								dryer solution than writing a form into each 
								hexagon individually.
							</p>
						</div>
					</div>
				</div>
				<div class="site__wrapper">
					<h4 class="site__subheading">Dev Tools</h4>
					<div class="site__container">
						<div class="site__container--tool">
							<h4>Node.js</h4>
							<img 
								src="/static/img/logos/nodejs.png" 
								alt="nodejs logo"
								class="site__container--tool-img">
						</div>
						<div class="site__container--text">
							<p>
								The Node package manager (NPM) was used to install
								node-sass and generate my watch, compile, compress, 
								and prefix scripts to streamline the CSS build process.
							</p>
						</div>
					</div>
					<div class="site__container">
						<div class="site__container--tool">
							<h4>Github</h4>
							<img 
								src="/static/img/logos/github.png" 
								alt="github logo"
								class="site__container--tool-img">
						</div>
						<div class="site__container--text">
							<p>
								Github is my "go to" for source-code version 
								control. I tend to make commits frequently by
								the component I'm working on so my git logs
								do not contain multiple tasks completed at once.
								You can see the git log for this project 
								<a
									href="https://github.com/prescottbreeden/portfolio_flask/network"
									target="_blank"	
									class="contrib-link">
									here
								</a>.
							</p>
						</div>
					</div>
					<div class="site__container">
						<div class="site__container--tool">
							<h4>Vim</h4>
							<img 
								src="/static/img/logos/vim.png" 
								alt="vim logo"
								class="site__container--tool-img">
						</div>
						<div class="site__container--text">
							<p>
								Integrated Development Environments (IDEs) and editors
								like Visual Studio, Visual Studio Code, Sublime, 
								and Atom are great, however they can also be a crutch.
								I moved to Vim to be better programmer, and in the 
								process fell in love with the number of features
								and the sheer ergonomics of typing with Vim. 
							</p>
						</div>
					</div>
					<div class="site__container">
						<div class="site__container--tool">
							<h4>Amazon Web Services</h4>
							<img 
								src="/static/img/logos/aws.png" 
								alt="aws logo"
								class="site__container--tool-img">
						</div>
						<div class="site__container--text">
							<p>
								AWS offers a huge number of tools for development
								and remains my preferred service for deployment.
							</p>
						</div>
					</div>
				</div>
			</div>
		</section>

		`;

	}



	//------------------- CONTACT -----------------------//


	function loadContact() {
		const content = document.getElementById('fold');

		content.innerHTML = `

		<section class="contact">
			<h2 class="contact__header">Get In Touch</h2>
			<div class="contact__container">
				<div class="contact__form-box">
					<!-- empty -->
				</div>
				<form class="form" action="/process" method="POST">
					<div class="form__group">
						<input 
							class="form__input" 
							id="name_fieild" 
							type="text" 
							name="name"
							placeholder="Full Name"
							autocomplete="name">
						<label 
							for="name"
							class="form__label">
							Full Name
						</label>
					</div>
					<div class="form__group">
						<input 
							class="form__input" 
							id="email_field" 
							type="email" 
							name="email"
							placeholder="Email Address"
							autocomplete="email">
						<label 
							for="email"
							class="form__label">
							Email Address
						</label>
					</div>
					<div class="form__group">
					<p class="form__textarea-label">
						Got an idea for a project?</p>
						
					<textarea 
						name="project"
						maxlength="500"
						wrap="hard"
						class="form__textarea"></textarea>
					</div>	
					<button class="form__btn">Send &#9993;</button>
					<p class="form__cta">Send a message and let's chat!</p>
				</form>
			</div>
			<h3 class="contact__info--header">Connect</h3>
			<ul class="contact__info">
				<li class="contact__info--item">
					<a 
						href="https://github.com/prescottbreeden"
						target="_blank"
						class="contact__info--link">
						<svg class="contact__icon">
							<use 
								xlink:href="/static/img/icomoon/sprite.svg#icon-github">
							</use>
						</svg>
						Github
					</a>
					<a 
						href="http://www.linkedin.com/in/prescottbreeden"
						target="_blank"
						class="contact__info--link">
						<svg class="contact__icon">
							<use 
								xlink:href="/static/img/icomoon/sprite.svg#icon-linkedin">
							</use>
						</svg>
						LinkedIn
					</a>
			
				</li>
			</ul>
		</section>

		`;

	}


});
