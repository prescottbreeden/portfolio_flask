// narrative text
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
								I used jQuery to import the waypoints library
								to create the simple JavaScript "sticky nav-bar" 
								effect as well as auto-scrolling.
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
								I use SASS to modularize my CSS into a folder 
								structure that breaks styling into components,
								layouts, and pages because organized CSS can be
								clean CSS.  SASS also makes the use of variables
								and mixins simple for added consistency.
							</p>
						</div>
						<div class="site__container--tool">
							<h4>HTML5</h4>
							<img 
								src="/static/img/logos/html5.png" 
								alt="html5 logo"
								class="site__container--tool-img">
						</div>
						<div class="site__container--text">
							<p>
								The site is optimized with various tags that 
								HTML5 implements to improve accessibility, site
								rendering, and form validation. 
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
