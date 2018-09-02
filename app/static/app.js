// $.mobile.loader.prototype.options.text = "";

$(document).ready(function() {
	console.log('power overwhelming');
	let activeNav = false;
	let slotify = false;
	let casino31 = false;
	let ultimateFan = false;
	let powder = false;

	//=========================================================//
	//						 NAVIGATION
	//=========================================================//
	


	//---------------- BEHAVIOR -------------//
	
	if ($('.cb-nav__checkbox').is(':checked'))	{
		$('.cb-nav__checkbox').prop('checked', false);
	}

	// sticky navigation trigger
	if($('.nav').css("position") === "absolute") {
		$('.nav').waypoint(function(direction) {
			if (direction == "down") {
				console.log('triggered down');
				$('.nav').addClass('sticky');
			} else {
				$('.nav').removeClass('sticky');
				console.log('triggered up');
			}
		});
	}

	// activate mobile nav
	$(document).on('click', '.cb-nav__button', function() {
		$('nav').toggleClass('active-nav');
		activeNav = !activeNav;
	})

	//---------------- ROUTES -------------//
	
	$(document).on('click', '.about-nav', function() {
		loadAbout();
		$('html, body').animate({scrollTop: $('#fold').offset().top}, 1000);
		$('nav').removeClass('active-nav');
		$('.cb-nav__checkbox').prop('checked', false);
	})

	$(document).on('click', '.portfolio-nav', function() {
		loadPortfolio();
		$('html, body').animate({scrollTop: $('#fold').offset().top}, 1000);
		$('nav').removeClass('active-nav');
		$('.cb-nav__checkbox').prop('checked', false);
	})
	
	$(document).on('click', '.tech-nav', function() {
		loadTech();
		$('html, body').animate({scrollTop: $('#fold').offset().top}, 1000);
		$('nav').removeClass('active-nav');
		$('.cb-nav__checkbox').prop('checked', false);
	})

	$(document).on('click', '.contact-nav', function() {
		loadContact();
		$('html, body').animate({scrollTop: $('#fold').offset().top}, 1000);
		$('nav').removeClass('active-nav');
		$('.cb-nav__checkbox').prop('checked', false);
	})

	$(document).on('click', '#reload_home', function() {
		$('nav').removeClass('active-nav');
		$('.cb-nav__checkbox').prop('checked', false);
	})

	//=========================================================//
	//					   TECH DESCRIPTIONS
	//=========================================================//

	
	$(document).on('click', '.hexagon', function() {
		id = this.innerText;
		console.log(id);
		$.ajax({
			url: `/tech/${id}`,
			dataType: 'json',
			success: function(res) {
				blurb = res['blurb'];
				name = res['name'];
				document.getElementById('blurb').innerHTML=`
				<p>${blurb}</p>
				`;
				document.getElementById('tech_image').innerHTML=`
				<img src="/static/img/tlogos/${name}.png">
				`;
				$('.tech__logo').addClass('tech__active');
			}
		});
	})

	//=========================================================//
	//					   PORTFOLIO MORE INFO
	//=========================================================//

	$(document).on('click', '#slotify_button', function() {
		if(slotify){
			let content = document.getElementById('slotify_html');
			content.innerHTML = '';
		} else {
			loadSlotify();
			$('#slotify_tech').addClass('show-text');
			$('.slotify_tech_row').addClass('show-text');
		}
		slotify = !slotify;
	})
	
	$(document).on('click', '#casino_31_button', function() {
		if(casino31){
			let content = document.getElementById('casino_31_html');
			content.innerHTML = '';
		} else {
			loadCasino31();
			$('#casino_31_tech').addClass('show-text');
			$('.casino_31_tech_row').addClass('show-text');
		}
		casino31 = !casino31;
	})

	$(document).on('click', '#ultimate_fan_button', function() {
		if(ultimateFan){
			let content = document.getElementById('ultimate_fan_html');
			content.innerHTML = '';
		} else {
			loadUltimateFan();
			$('#ultimate_fan_tech').addClass('show-text');
			$('.ultimate_fan_tech_row').addClass('show-text');
		}
		ultimateFan = !ultimateFan;
	})
	
	$(document).on('click', '#powder_button', function() {
		if(powder) {
			let content = document.getElementById('powder_html');
			content.innerHTML = '';
		} else {
			loadPowder();
			$('#powder_tech').addClass('show-text');
			$('.powder_tech_row').addClass('show-text');
		}
		powder = !powder;
	})
	
	//=========================================================//
	//					   SITE MORE INFO
	//=========================================================//

	
	$(document).on('click', '#front_end_more', function() {
		console.log('clicked');
		$('#front_end_more-box').toggleClass('show-text');
		$('#front_end_more-text').toggleClass('show-text');
	})

	$(document).on('click', '#back_end_more', function() {
		console.log('clicked');
		$('#back_end_more-box').toggleClass('show-text');
		$('#back_end_more-text').toggleClass('show-text');
	})
	
	$(document).on('click', '#database_more', function() {
		console.log('clicked');
		$('#database_more-box').toggleClass('show-text');
		$('#database_more-text').toggleClass('show-text');
	})

	$(document).on('click', '#dev_tools_more', function() {
		console.log('clicked');
		$('#dev_tools_more-box').toggleClass('show-text');
		$('#dev_tools_more-text').toggleClass('show-text');
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
					background in the arts and sciences. I graduated from Manhattan 
					School of Music with a bachelor of music in classical vocal 
					performance (opera). After moving to Seattle, I became a business 
					owner taking evening classes to return to grad school in biology. 
					During this time, I minimized a lot of business costs by maintaining 
					my own business web presences which taught me much about coding.
					However, it was during my time at ASU as a researcher when 
					I began learning R and Python for my research papers that my love 
					for programming began to take shape.</p>
			</div>
		</section>
		<section class="services">
			<h2 class="services--heading">What I Do</h2>
			<div class="services--container">
				<div class="empty-space">
					<!-- empty -->
				</div>
				<div class="wrapper">
					<div class="services--front-end">
						<div class="cube__container">
							<h3>Front End</h3>
							<img 
								title="Skills"
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
					<div class="services--backend">
						<div class="cube__container">
							<h3>Back End</h3>
							<img 
								title="Skills"
								class="cube__img"
								src="/static/img/cube_red.png" 
								alt="red cube">
						</div>
						<div class="cube__text">
							<ul class="services--list">
								<li>MVC Architecture</li>
								<li>Restful API Design</li>
								<li>Object Relational Mapping</li>
							</ul>
						</div>
					</div>
					<div class="services--db">
						<div class="cube__container">
							<h3>Databases</h3>
							<img 
								title="Skills"
								class="cube__img"
								src="/static/img/cube_teal.png" 
								alt="teal cube">
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
			<h2 class="portfolio__header">Some of My Work</h2>
			
			<div class="project">
				<div class="project__header">
					<div class="project__header--heading-box">
						<h3 class="project__header--heading">Slotify</h3>
					</div>
					<div class="project__container--empty"></div>
				</div>
				<div class="project__container">
					<div class="project__container--desktop">
						<div class="project__desktop">
							<a 
								title="View Website"
								href="http://54.193.101.95/"
								target="_blank">
								<img 
									src="/static/img/slotify.png" 
									alt="project web page"
									class="project__desktop--img">
							</a>
						</div>
					</div>
					<div class="project__container--text-box">
						<p class="project__description--text">
							<span class="u-color-red">Slotify</span>
							is a video game music player that includes playlist
							creation, song/album saving, shuffle, repeat, option
							drop-down menus, and other standard spotify functionalities.
						</p>
						<p class="project__description--link">
							<a 
								href="http://54.193.101.95/"
								target="_blank">Visit Website &rarr;</a>
							<a 
								title="Open link to GitHub"
								href="https://github.com/prescottbreeden/slotify"
								target="_blank">View Source Code &rarr;</a>
						</p>
						<p class="project__description--contrib">
							<span class="u-color-red">Contributors:</span> 
							<a 
								title="Open link to GitHub"
		
								href="https://github.com/ReeceKenney"
								target="_blank"	
								class="project__description--contrib-link">
									Reece Kenney</a>
						</p>
					</div>
				</div>
				<div onclick='' id="slotify_button" class="more__button">
					<div class="more__button--spacer"></div>
					<div class="more__button--box">
						<p class="more__button--box-text">Built With</p>
						<svg class="more__button--box-icon">
							<use 
								xlink:href="/static/img/icomoon/sprite.svg#icon-circle-right">
							</use>
						</svg>
					</div>
				</div>
				<div id="slotify_tech" class="project__tech">
					<div id="slotify_html"></div>
				</div>
			</div>
			<div class="project">
				<div class="project__header">
					<div class="project__header--heading-box">
						<h3 class="project__header--heading">Powder</h3>
					</div>
					<div class="project__container--empty"></div>
				</div>
				<div class="project__container">
					<div class="project__container--desktop">
						<div class="project__desktop">
							<a 
								title="View Website"
								href="http://13.58.172.1/"
								target="_blank">
								<img 
									src="/static/img/powder_desktop.png" 
									alt="project web page"
									class="project__desktop--img">
							</a>
						</div>
					</div>
					<div class="project__container--text-box">
						<p class="project__description--text">
							<span class="u-color-red">Powder</span> is a mock-landing page showcasing various animations 
							and features capable with just CSS3 and HTML5 alone. The 
							site is fully responsive to provide a smooth user 
							experience on various device sizes.
						</p>
						<p class="project__description--link">
							<a 
								href="http://13.58.172.1/"
								target="_blank">Visit Website &rarr;</a>
							<a 
								title="Open link to GitHub"
								href="https://github.com/prescottbreeden/powder_angular"
								target="_blank">View Source Code &rarr;</a>
						</p>
						<p class="project__description--contrib">
							<span class="u-color-red">Contributors:</span> 
							<a 
								title="Open link to GitHub"
		
								href="https://github.com/jonasschmedtmann"
								target="_blank"	
								class="project__description--contrib-link">
									Jonas Schmedtmann</a>
						</p>
					</div>
				</div>
				<div onclick='' id="powder_button" class="more__button">
					<div class="more__button--spacer"></div>
					<div class="more__button--box">
						<p class="more__button--box-text">Built With</p>
						<svg class="more__button--box-icon">
							<use 
								xlink:href="/static/img/icomoon/sprite.svg#icon-circle-right">
							</use>
						</svg>
					</div>
				</div>
				<div id="slotify_tech" class="project__tech">
					<div id="slotify_html"></div>
				</div>
			</div>
			<div class="project">
				<div class="project__header">
					<div class="project__header--heading-box">
						<h3 class="project__header--heading">Casino 31</h3>
					</div>
					<div class="project__container--empty"></div>
				</div>
				<div class="project__container">
					<div class="project__container--desktop">
						<a 
							title="View Website"
							href="http://18.188.70.127/"
							target="_blank">
							<img 
								src="/static/img/casino31.png" 
								alt="project web page"
								class="project__desktop--img">
						</a>
					</div>
					<div class="project__container--text-box">
						<p class="project__description--text">
							<span class="u-color-red">Casino 31</span> 
							is a card game for 1-6 players. Users can play with 
							their friends, the AI computer, or even just watch the 
							computer play. Cards are served from our own API on a 
							seperate express server.
						</p>
						<p class="project__description--link">
							<a 
								href="http://18.188.70.127/"
								target="_blank">Visit Website &rarr;</a>
							<a 
								title="Open link to GitHub"
								href="https://github.com/prescottbreeden/_31_by_3"
								target="_blank">View Source Code &rarr;</a>
						</p>
						<div class="project__description--contrib-row">
							<p class="project__description--contrib">
							<span class="u-color-red">Contributors:</span> 
								<a 
									title="Open link to GitHub"
									href="https://www.linkedin.com/in/lawyerhelbling" 
									target="_blank"
									class="project__description--contrib-link">
										Lawyer Helbing</a>
								<a 
									title="Open link to GitHub"
									href="https://www.linkedin.com/in/justin-peterson-6b38b66a" 
									target="_blank"
									class="project__description--contrib-link">
										Justin Peterson</a>
							</p>
						</div>
					</div>
				</div>
				<div onclick='' id="casino_31_button" class="more__button">
					<div class="more__button--spacer"></div>
					<div class="more__button--box">
						<p class="more__button--box-text">Built With</p>
						<svg class="more__button--box-icon">
							<use 
								xlink:href="/static/img/icomoon/sprite.svg#icon-circle-right">
							</use>
						</svg>
					</div>
				</div>
				<div id="casino_31_tech" class="project__tech">
					<div id="casino_31_html"></div>
				</div>
			</div>
			
			<div class="project">
				<div class="project__header">
					<div class="project__header--heading-box">
						<h3 class="project__header--heading">Ultimate Fan</h3>
					</div>
					<div class="project__container--empty"></div>
				</div>
				<div class="project__container">
					<div class="project__container--desktop">
						<a 
							title="View Website"
							href="http://18.220.231.186/"
							target="blank">
							<img 
								src="/static/img/ultimate_fan.png" 
								alt="project web page"
								class="project__desktop--img">
						</a>
					</div>
					<div class="project__container--text-box">
						<p class="project__description--text">
							<span class="u-color-red">Ultimate Fan</span> is a website that tests users about 
							their knowledge of athletes from selected categories. All trivia questions 
							were generated via web scraping robot and data visualization is powered by Chart.js. 
						</p>
						<p class="project__description--link">
							<a 
								href="http://18.220.231.186/"
								target="_blank">Visit Website &rarr;</a>
							<a 
								title="Open link to GitHub"
								href="https://github.com/prescottbreeden/ultimate_fan_project"
								target="_blank">View Source Code &rarr;</a>
						</p>
						<p class="project__description--contrib">
							<span class="u-color-red">Contributors:</span> 
							<a 
								title="Open link to GitHub"
								href="https://www.linkedin.com/in/stephen-silverstein/"
								target="_blank"	
								class="project__description--contrib-link">
									Stephen Silverstein</a>
						</p>
					</div>
				</div>
				<div onclick='' id="ultimate_fan_button" class="more__button">
					<div class="more__button--spacer"></div>
					<div class="more__button--box">
						<p class="more__button--box-text">Built With</p>
						<svg class="more__button--box-icon">
							<use 
								xlink:href="/static/img/icomoon/sprite.svg#icon-circle-right">
							</use>
						</svg>
					</div>
				</div>
				<div id="ultimate_fan_tech" class="project__tech">
					<div id="ultimate_fan_html"></div>
				</div>
			</div>
		</section>
		`;
		
	}


	//------------------- TECH -----------------------//

	function loadTech() {

		let technologies = [
			'html5',
			'css3', 
			'javascript',
			'angular', 
			'react', 
			'jquery',
			'sass',
			'flask',
			'django',
			'python', 
			'dotnet', 
			'csharp',
			'nodejs',
			'express',
			'sql',
			'sqlite',
			'mongodb', 
			'ubuntu',
			'apache',
			'php',
			'github'
		];

		technologies = technologies.reverse();

		const content = document.getElementById('fold');
		const total = 21;
		let counter = 1;
		let grid = ` 
				<section class="tech">
					<h2 class="tech__header">Some of My Favorite Tech</h2>
					<ul class="grid clear">
		`
		//===============================================//
		//					tech grid					 //
		//===============================================//

		for(let i = 1; i <= total; i++) {
			let techName = technologies.pop();
			grid += `
				<li class="hex-container">
					<a 
						onclick=''
						class="hexagon img-${i} tech__animate-${i}">
						<span class="transparent">${techName}</span>
					</a>
				</li>     
			`	
		}

		//===============================================//
		//					tech details				//
		//===============================================//

		grid += `
			</ul>
			<div class="tech__details">
				<div class="tech__details--container">
					<div class="tech__logo-box">
						<div class="tech__logo-pad">
							<div class="tech__logo" id="tech_image">
								<img 
									src="/static/img/cube_primary.png" 
									alt="tech cube">
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
					<div class="site__container">
						<div 
							class="site__container--heading">
								<h3>Front-end</h3>					
						</div>
						<div class="site__container--text-box">
							<div class="site__container--tool-box">
								<div class="site__container--tool tool-img-1">
									<h4 class="site__container--tool-name">
										HTML5	
									</h4>
								</div>
								<div class="site__container--tool tool-img-2">
									<h4 class="site__container--tool-name">
										CSS3	
									</h4>
								</div>
								<div class="site__container--tool tool-img-3">
									<h4 class="site__container--tool-name">
										JavaScript	
									</h4>
								</div>
								<div class="site__container--tool tool-img-6">
									<h4 class="site__container--tool-name">
										jQuery	
									</h4>
								</div>
							</div>
							<div onclick='' id="front_end_more" class="more__button">
								<div class="more__button--spacer"></div>
								<div class="more__button--box">
									<p class="more__button--box-text">More</p>
									<svg class="more__button--box-icon">
										<use 
											xlink:href="/static/img/icomoon/sprite.svg#icon-circle-right">
										</use>
									</svg>
								</div>
							</div>
							<div id="front_end_more-box" class="site__container--text">
								<p id="front_end_more-text" class="site__hidden-text">
									Given the small scale of this project, a front-end
									framework was simply not necessary. jQuery takes
									care of all the dynamic content and the waypoints
									library enabled the implementation of the 
									"sticky nav-bar" effect and page scrolling. HTML5
									tags are optimized for added accessibility and 
									all	CSS was built with SASS.
								</p>
							</div>
						</div>
					</div>
				</div>
				<div class="site__wrapper">
					<div class="site__container">
						<div 
							class="site__container--heading">
								<h3>Back-end</h3>					
						</div>
						<div class="site__container--text-box">
							<div class="site__container--tool-box">
								<div class="site__container--tool tool-img-8">
									<h4 class="site__container--tool-name">
										Flask	
									</h4>
								</div>
								<div class="site__container--tool tool-img-10">
									<h4 class="site__container--tool-name">
										Python	
									</h4>
								</div>
								<div class="site__container--tool tool-img-19">
									<h4 class="site__container--tool-name">
										Ubuntu
									</h4>
								</div>
								<div class="site__container--tool tool-img-26">
									<h4 class="site__container--tool-name">
										Nginx
									</h4>
								</div>
								<div class="site__container--tool tool-img-29">
									<h4 class="site__container--tool-name">
										Gunicorn
									</h4>
								</div>
							</div>
							<div onclick='' id="back_end_more" class="more__button">
								<div class="more__button--spacer"></div>
								<div class="more__button--box">
									<p class="more__button--box-text">More</p>
									<svg class="more__button--box-icon">
										<use 
											xlink:href="/static/img/icomoon/sprite.svg#icon-circle-right">
										</use>
									</svg>
								</div>
							</div>
							<div id="back_end_more-box" class="site__container--text">
								<p id="back_end_more-text" class="site__hidden-text">
									I chose to use Flask as my back-end for this site
									because as a micro-framework, Flask is unopinionated
									about how it is structured and the tech you wish 
									to integrate with it. I went with a fairly minimalist 
									modularization of the server and opted to have 
									just a single-route serving the site so that it 
									felt snappy and modern while also decreasing the 
									number of incoming server requests. The site is
									being hosted on an Ubuntu server running Nginx
									and Gunicorn.
								</p>
							</div>
						</div>
					</div>
				</div>
				<div class="site__wrapper">
					<div class="site__container">
						<div 
							class="site__container--heading">
							<h3>Database</h3>					
						</div>
						<div class="site__container--text-box">
							<div class="site__container--tool-box">
								<div class="site__container--tool tool-img-16">
									<h4 class="site__container--tool-name">
										SQLite
									</h4>
								</div>
								<div class="site__container--tool tool-img-30">
									<h4 class="site__container--tool-name">
										SQLALchemy
									</h4>
								</div>
							</div>
							<div onclick='' id="database_more" class="more__button">
								<div class="more__button--spacer"></div>
								<div class="more__button--box">
									<p class="more__button--box-text">More</p>
									<svg class="more__button--box-icon">
										<use 
											xlink:href="/static/img/icomoon/sprite.svg#icon-circle-right">
										</use>
									</svg>
								</div>
							</div>
							<div id="database_more-box" class="site__container--text">
								<p id="database_more-text" class="site__hidden-text">
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
				</div>
				<div class="site__wrapper">
					<div class="site__container">
						<div 
							class="site__container--heading">
								<h3>Dev Tools</h3>					
						</div>
						<div class="site__container--text-box">
							<div class="site__container--tool-box">
								<div class="site__container--tool tool-img-7">
									<h4 class="site__container--tool-name">
										SASS
									</h4>
								</div>
								<div class="site__container--tool tool-img-13">
									<h4 class="site__container--tool-name">
										Node.js
									</h4>
								</div>
								<div class="site__container--tool tool-img-21">
									<h4 class="site__container--tool-name">
										GitHub
									</h4>
								</div>
								<div class="site__container--tool tool-img-33">
									<h4 class="site__container--tool-name">
										Vim
									</h4>
								</div>
								<div class="site__container--tool tool-img-24">
									<h4 class="site__container--tool-name">
										AWS
									</h4>
								</div>
							</div>
							<div onclick='' id="dev_tools_more" class="more__button">
								<div class="more__button--spacer"></div>
								<div class="more__button--box">
									<p class="more__button--box-text">More</p>
									<svg class="more__button--box-icon">
										<use 
											xlink:href="/static/img/icomoon/sprite.svg#icon-circle-right">
										</use>
									</svg>
								</div>
							</div>
							<div id="dev_tools_more-box" class="site__container--text">
								<p id="dev_tools_more-text" class="site__hidden-text">
									The Node package manager (NPM) was used to install
									node-sass and generate my watch, compile, compress,
									and prefix scripts to streamline the CSS build 
									process. GitHub was used for version control, all
									writing and editing was done in Vim, and the site
									is hosted on a free-tier server with AWS.
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
		` 
		
		content.innerHTML = grid;

	}




	//------------------- CONTACT -----------------------//


	function loadContact() {
		const content = document.getElementById('fold');

		content.innerHTML = `
		<section class="contact">
			<h2 class="contact__header">Get In Touch</h2>
			<h3 class="contact__info--header">Connect</h3>
			<ul class="contact__info">
				<li class="contact__info--item">
					<a 
						title="Send Email"
						href="mailto:prescott.breeden@gmail.com"
						class="contact__info--link">
						<svg class="contact__icon">
							<use 
								xlink:href="/static/img/icomoon/sprite.svg#icon-envelop">
							</use>
						</svg>
						Email
					</a>
				</li>
				<li class="contact__info--item">
					<a 
						title="Open Link"
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
				<li class="contact__info--item">
					<a 
						title="Open Link"
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
				</li>
			</ul>
		</section>
		`;

	}

	//===============================================//
	//			SLOTIFY PORTFOLIO MORE			     //
	//===============================================//

	function loadSlotify() {
		const content = document.getElementById('slotify_html');

		content.innerHTML = `
			<div class="more__container">
				<div class="more__container--heading">
					<h3>Front-End</h3>	
				</div>
				<div class="project__tech-row slotify_tech_row">
					<div class="site__container--tool tool-img-1">
						<h4 class="site__container--tool-name">
							HTML5	
						</h4>
					</div>
					<div class="site__container--tool tool-img-2">
						<h4 class="site__container--tool-name">
							CSS3	
						</h4>
					</div>
					<div class="site__container--tool tool-img-3">
						<h4 class="site__container--tool-name">
							JavaScript	
						</h4>
					</div>
					<div class="site__container--tool tool-img-6">
						<h4 class="site__container--tool-name">
							jQuery	
						</h4>
					</div>
				</div>
			</div>
			<div class="more__container">
				<div class="more__container--heading">
					<h3>Back-End</h3>	
				</div>
				<div class="project__tech-row slotify_tech_row">
					<div class="site__container--tool tool-img-20">
						<h4 class="site__container--tool-name">
							PHP
						</h4>
					</div>
					<div class="site__container--tool tool-img-18">
						<h4 class="site__container--tool-name">
							Apache
						</h4>
					</div>
					<div class="site__container--tool tool-img-19">
						<h4 class="site__container--tool-name">
							Ubuntu
						</h4>
					</div>
				</div>
			</div>
			<div class="more__container">
				<div class="more__container--heading">
					<h3>Database</h3>	
				</div>
				<div class="project__tech-row slotify_tech_row">
					<div class="site__container--tool tool-img-16">
						<h4 class="site__container--tool-name">
							MySQL
						</h4>
					</div>
				</div>
			</div>
			<div class="more__container">
				<div class="more__container--heading">
					<h3>Dev Tools</h3>	
				</div>
				<div class="project__tech-row slotify_tech_row">
					<div class="site__container--tool tool-img-7">
						<h4 class="site__container--tool-name">
							SASS
						</h4>
					</div>
					<div class="site__container--tool tool-img-21">
						<h4 class="site__container--tool-name">
							GitHub
						</h4>
					</div>
					<div class="site__container--tool tool-img-33">
						<h4 class="site__container--tool-name">
							Vim
						</h4>
					</div>
					<div class="site__container--tool tool-img-24">
						<h4 class="site__container--tool-name">
							AWS
						</h4>
					</div>
				</div>
			</div>
		`
		
	}
	//===============================================//
	//			CASINO31 PORTFOLIO MORE			     //
	//===============================================//

	function loadCasino31() {
		const content = document.getElementById('casino_31_html');

		content.innerHTML = `
			<div class="more__container">
				<div class="more__container--heading">
					<h3>Front-End</h3>	
				</div>
				<div class="project__tech-row casino_31_tech_row">
					<div class="site__container--tool tool-img-1">
						<h4 class="site__container--tool-name">
							HTML5	
						</h4>
					</div>
					<div class="site__container--tool tool-img-2">
						<h4 class="site__container--tool-name">
							CSS3	
						</h4>
					</div>
					<div class="site__container--tool tool-img-3">
						<h4 class="site__container--tool-name">
							JavaScript	
						</h4>
					</div>
					<div class="site__container--tool tool-img-6">
						<h4 class="site__container--tool-name">
							jQuery	
						</h4>
					</div>
					<div class="site__container--tool tool-img-27">
						<h4 class="site__container--tool-name">
							Bootstrap
						</h4>
					</div>
				</div>
			</div>
			<div class="more__container">
				<div class="more__container--heading">
					<h3>Back-End</h3>	
				</div>
				<div class="project__tech-row casino_31_tech_row">
					<div class="site__container--tool tool-img-12">
						<h4 class="site__container--tool-name">
							C#	
						</h4>
					</div>
					<div class="site__container--tool tool-img-11">
						<h4 class="site__container--tool-name">
							.NET Core
						</h4>
					</div>
					<div class="site__container--tool tool-img-19">
						<h4 class="site__container--tool-name">
							Ubuntu
						</h4>
					</div>
					<div class="site__container--tool tool-img-26">
						<h4 class="site__container--tool-name">
							Nginx
						</h4>
					</div>
					<div class="site__container--tool tool-img-31">
						<h4 class="site__container--tool-name">
							Supervisor
						</h4>
					</div>
				</div>
			</div>
			<div class="more__container">
				<div class="more__container--heading">
					<h3>Dev Tools</h3>	
				</div>
				<div class="project__tech-row casino_31_tech_row">
					<div class="site__container--tool tool-img-7">
						<h4 class="site__container--tool-name">
							SASS
						</h4>
					</div>
					<div class="site__container--tool tool-img-21">
						<h4 class="site__container--tool-name">
							GitHub
						</h4>
					</div>
					<div class="site__container--tool tool-img-28">
						<h4 class="site__container--tool-name">
							VS Code
						</h4>
					</div>
					<div class="site__container--tool tool-img-24">
						<h4 class="site__container--tool-name">
							AWS
						</h4>
					</div>
				</div>
			</div>
			<div class="more__container">
				<div class="more__container--heading">
					<h3>Card API</h3>	
				</div>
				<div class="project__tech-row casino_31_tech_row">
					<div class="site__container--tool tool-img-3">
						<h4 class="site__container--tool-name">
							JavaScript
						</h4>
					</div>
					<div class="site__container--tool tool-img-14">
						<h4 class="site__container--tool-name">
							Express
						</h4>
					</div>
					<div class="site__container--tool tool-img-13">
						<h4 class="site__container--tool-name">
							Node.js
						</h4>
					</div>
					<div class="site__container--tool tool-img-32">
						<h4 class="site__container--tool-name">
							Heroku
						</h4>
					</div>
				</div>
			</div>
		`
		
	}

	//===============================================//
	//			ULTIMATE FAN PORTFOLIO MORE		     //
	//===============================================//

	function loadUltimateFan() {
		const content = document.getElementById('ultimate_fan_html');

		content.innerHTML = `
			<div class="more__container">
				<div class="more__container--heading">
					<h3>Front-End</h3>	
				</div>
				<div class="project__tech-row ultimate_fan_tech_row">
					<div class="site__container--tool tool-img-1">
						<h4 class="site__container--tool-name">
							HTML5	
						</h4>
					</div>
					<div class="site__container--tool tool-img-2">
						<h4 class="site__container--tool-name">
							CSS3	
						</h4>
					</div>
					<div class="site__container--tool tool-img-3">
						<h4 class="site__container--tool-name">
							JavaScript	
						</h4>
					</div>
					<div class="site__container--tool tool-img-6">
						<h4 class="site__container--tool-name">
							jQuery	
						</h4>
					</div>
				</div>
			</div>
			<div class="more__container">
				<div class="more__container--heading">
					<h3>Back-End</h3>	
				</div>
				<div class="project__tech-row ultimate_fan_tech_row">
					<div class="site__container--tool tool-img-10">
						<h4 class="site__container--tool-name">
							Python	
						</h4>
					</div>
					<div class="site__container--tool tool-img-9">
						<h4 class="site__container--tool-name">
							Django	
						</h4>
					</div>
					<div class="site__container--tool tool-img-19">
						<h4 class="site__container--tool-name">
							Ubuntu	
						</h4>
					</div>
					<div class="site__container--tool tool-img-26">
						<h4 class="site__container--tool-name">
							Nginx
						</h4>
					</div>
					<div class="site__container--tool tool-img-29">
						<h4 class="site__container--tool-name">
							Gunicorn
						</h4>
					</div>
				</div>
			</div>
			<div class="more__container">
				<div class="more__container--heading">
					<h3>Database</h3>	
				</div>
				<div class="project__tech-row ultimate_fan_tech_row">
					<div class="site__container--tool tool-img-16">
						<h4 class="site__container--tool-name">
							SQLite	
						</h4>
					</div>
				</div>
			</div>
			<div class="more__container">
				<div class="more__container--heading">
					<h3>Dev Tools</h3>	
				</div>
				<div class="project__tech-row ultimate_fan_tech_row">
					<div class="site__container--tool tool-img-7">
						<h4 class="site__container--tool-name">
							SASS
						</h4>
					</div>
					<div class="site__container--tool tool-img-13">
						<h4 class="site__container--tool-name">
							Node.js
						</h4>
					</div>
					<div class="site__container--tool tool-img-21">
						<h4 class="site__container--tool-name">
							GitHub
						</h4>
					</div>
					<div class="site__container--tool tool-img-33">
						<h4 class="site__container--tool-name">
							Vim
						</h4>
					</div>
					<div class="site__container--tool tool-img-24">
						<h4 class="site__container--tool-name">
							AWS
						</h4>
					</div>
				</div>
			</div>
		`
	}

	//===============================================//
	//			POWDER PORTFOLIO MORE			     //
	//===============================================//

	function loadPowder() {
		const content = document.getElementById('powder_html');

		content.innerHTML = `
			<div class="more__container">
				<div class="more__container--heading">
					<h3>Front-End</h3>	
				</div>
				<div class="project__tech-row powder_tech_row">
					<div class="site__container--tool tool-img-1">
						<h4 class="site__container--tool-name">
							HTML5	
						</h4>
					</div>
					<div class="site__container--tool tool-img-2">
						<h4 class="site__container--tool-name">
							CSS3	
						</h4>
					</div>
					<div class="site__container--tool tool-img-3">
						<h4 class="site__container--tool-name">
							JavaScript	
						</h4>
					</div>
					<div class="site__container--tool tool-img-4">
						<h4 class="site__container--tool-name">
							Angular
						</h4>
					</div>
				</div>
			</div>
			<div class="more__container">
				<div class="more__container--heading">
					<h3>Back-End</h3>	
				</div>
				<div class="project__tech-row powder_tech_row">
					<div class="site__container--tool tool-img-3">
						<h4 class="site__container--tool-name">
							JavaScript
						</h4>
					</div>
					<div class="site__container--tool tool-img-14">
						<h4 class="site__container--tool-name">
							Express
						</h4>
					</div>
					<div class="site__container--tool tool-img-19">
						<h4 class="site__container--tool-name">
							Ubuntu
						</h4>
					</div>
					<div class="site__container--tool tool-img-26">
						<h4 class="site__container--tool-name">
							Nginx
						</h4>
					</div>
				</div>
			</div>
			<div class="more__container">
				<div class="more__container--heading">
					<h3>Dev Tools</h3>	
				</div>
				<div class="project__tech-row powder_tech_row">
					<div class="site__container--tool tool-img-7">
						<h4 class="site__container--tool-name">
							SASS
						</h4>
					</div>
					<div class="site__container--tool tool-img-13">
						<h4 class="site__container--tool-name">
							Node.js
						</h4>
					</div>
					<div class="site__container--tool tool-img-21">
						<h4 class="site__container--tool-name">
							GitHub
						</h4>
					</div>
					<div class="site__container--tool tool-img-33">
						<h4 class="site__container--tool-name">
							Vim
						</h4>
					</div>
					<div class="site__container--tool tool-img-24">
						<h4 class="site__container--tool-name">
							AWS
						</h4>
					</div>
				</div>
			</div>
		`
	}

});
