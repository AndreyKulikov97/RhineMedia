import './App.css'
import Features from './Components/Features/Features'
import Navbar from './Components/Navbar/Navbar'

function App() {
	return (
		<>
			{/* <!-- =========================================================
       NAVIGATION
  ========================================================= --> */}
			<Navbar />
			{/* <!-- =========================================================
       HERO
  ========================================================= --> */}
			<section className='hero'>
				{/* <!-- Decorative BG --> */}
				<div className='hero-grid'></div>
				<div
					className='orb orb-a'
					style={{ transform: 'translateY(0px)' }}
				></div>
				<div
					className='orb orb-b'
					style={{ transform: 'translateY(0px)' }}
				></div>
				<div className='orb orb-c'></div>

				{/* <!-- Decorative SVG rings (right side) --> */}
				<div className='hero-deco' aria-hidden='true'>
					<svg
						viewBox='0 0 600 800'
						fill='none'
						xmlns='http://www.w3.org/2000/svg'
						preserveAspectRatio='xMidYMid slice'
					>
						<circle
							cx='400'
							cy='400'
							r='320'
							stroke='rgba(201,151,59,0.6)'
							strokeWidth='1'
						></circle>
						<circle
							cx='400'
							cy='400'
							r='220'
							stroke='rgba(62,114,236,0.5)'
							strokeWidth='0.8'
						></circle>
						<circle
							cx='400'
							cy='400'
							r='120'
							stroke='rgba(201,151,59,0.4)'
							strokeWidth='0.6'
						></circle>
						<line
							x1='80'
							y1='400'
							x2='720'
							y2='400'
							stroke='rgba(255,255,255,0.2)'
							strokeWidth='0.5'
						></line>
						<line
							x1='400'
							y1='80'
							x2='400'
							y2='720'
							stroke='rgba(255,255,255,0.2)'
							strokeWidth='0.5'
						></line>
						<circle cx='400' cy='80' r='5' fill='rgba(201,151,59,0.8)'></circle>
						<circle
							cx='720'
							cy='400'
							r='5'
							fill='rgba(62,114,236,0.8)'
						></circle>
						<circle
							cx='400'
							cy='720'
							r='5'
							fill='rgba(201,151,59,0.8)'
						></circle>
						<circle cx='80' cy='400' r='5' fill='rgba(62,114,236,0.8)'></circle>
					</svg>
				</div>

				<div className='container' style={{ position: 'relative', zIndex: 2 }}>
					<div style={{ maxWidth: '780px' }}>
						{/* <!-- Status badge --> */}
						<div className='hero-badge vis' >
							<span className='badge-pulse'></span>
							Performance Media Buying Team
						</div>

						{/* <!-- Headline --> */}
						<h1 className='hero-h1 vis' data-a='up' data-d='1'>
							<span style={{ display: 'block' }}>Performance Media</span>
							<span style={{ display: 'block' }}>
								Buying Team |&nbsp;
								<span className='hl'>Rhine Media</span>
							</span>
						</h1>

						{/* <!-- Subheadline --> */}
						<p className='hero-sub vis' data-a='up' data-d='2'>
							We buy traffic for{' '}
							<strong>Dating, Nutra, Gambling, Sweepstakes, iGaming </strong>
							and more — across all major channels, in every major GEO, at
							premium scale.
						</p>

						{/* <!-- Action buttons --> */}
						<div className='hero-actions vis' data-a='up' data-d='3'>
							<a href='contact.html' className='btn btn-primary'>
								Start Cooperation
								<svg
									width='13'
									height='13'
									viewBox='0 0 13 13'
									fill='none'
									aria-hidden='true'
								>
									<path
										d='M1 6.5h11M6.5 1.5l5 5-5 5'
										stroke='currentColor'
										strokeWidth='1.8'
										strokeLinecap='round'
										strokeLinejoin='round'
									></path>
								</svg>
							</a>
							<a href='contact.html' className='btn btn-ghost'>
								Get in Touch
							</a>
						</div>

						{/* <!-- KPI strip --> */}
						<div className='hero-kpis vis' data-a='up' data-d='4'>
							<div className='kpi'>
								<span className='kpi-v'>$12M+</span>
								<span className='kpi-l'>Monthly Ad Spend</span>
							</div>
							<div className='kpi'>
								<span className='kpi-v'>340%</span>
								<span className='kpi-l'>Average Campaign ROI</span>
							</div>
							<div className='kpi'>
								<span className='kpi-v'>8+</span>
								<span className='kpi-l'>Traffic Channels</span>
							</div>
							<div className='kpi'>
								<span className='kpi-v'>60+</span>
								<span className='kpi-l'>GEOs Worldwide</span>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* <!-- =========================================================
       STATS BAND
  ========================================================= --> */}
			<div className='stats-band'>
				<div className='container'>
					<div className='stats-row'>
						<div className='stat-cell'>
							<p className='stat-num'>4.2B+</p>
							<p className='stat-lbl'>Ad Impressions / Month</p>
							<p className='stat-sub'>Across all traffic sources</p>
						</div>

						<div className='stat-cell'>
							<p className='stat-num'>340%</p>
							<p className='stat-lbl'>Average ROI</p>
							<p className='stat-sub'>Verified by partners</p>
						</div>

						<div className='stat-cell'>
							<p className='stat-num'>7</p>
							<p className='stat-lbl'>Verticals Mastered</p>
							<p className='stat-sub'>Dating, Nutra, Gambling & more</p>
						</div>

						<div className='stat-cell'>
							<p className='stat-num'>60+</p>
							<p className='stat-lbl'>Global GEOs</p>
							<p className='stat-sub'>Tier-1 & emerging markets</p>
						</div>
					</div>
				</div>
			</div>

			{/* <!-- =========================================================
       VERTICALS
  ========================================================= --> */}
			<section className='section verticals' id='verticals'>
				<div className='container'>
					<div className='sec-center'>
						<div className='eyebrow'>Our Verticals</div>
						<h2 className='sec-title'>
							Niches We <span className='text-gold'>Dominate</span>
						</h2>
						<p className='sec-sub'>
							Deep expertise across the highest-performing verticals in
							performance marketing.
						</p>
					</div>

					<div className='v-grid'>
						{/* <!-- Dating --> */}
						<div className='v-card'>
							<span className='v-emoji'>💘</span>
							<h3 className='v-name'>Dating</h3>
							<p className='v-desc'>
								Mainstream & adult dating campaigns. SOI, DOI and trial offers
								across tier-1 GEOs with proven funnels.
							</p>
							<span className='v-pill'>High Volume</span>
						</div>

						{/* <!-- Nutra --> */}
						<div className='v-card'>
							<span className='v-emoji'>💊</span>
							<h3 className='v-name'>Nutra</h3>
							<p className='v-desc'>
								Weight loss, supplements, skincare. Native & push traffic
								specialization with compliant creatives.
							</p>
							<span className='v-pill'>Premium GEOs</span>
						</div>

						{/* <!-- Gambling --> */}
						<div className='v-card'>
							<span className='v-emoji'>🎰</span>
							<h3 className='v-name'>Gambling</h3>
							<p className='v-desc'>
								Online casino, sports betting, poker. FTD-focused funnels with
								high player LTV and retention.
							</p>
							<span className='v-pill'>Top ROI</span>
						</div>

						{/* <!-- Adult --> */}
						<div className='v-card'>
							<span className='v-emoji'>🔞</span>
							<h3 className='v-name'>Adult</h3>
							<p className='v-desc'>
								Adult content & services. Compliant campaigns via premium adult
								traffic networks at scale.
							</p>
							<span className='v-pill'>Specialized</span>
						</div>

						{/* <!-- Sweepstakes --> */}
						<div className='v-card'>
							<span className='v-emoji'>🎁</span>
							<h3 className='v-name'>Sweepstakes</h3>
							<p className='v-desc'>
								CC-submit & SOI sweeps. Push, pop and display traffic with high
								conversion rates globally.
							</p>
							<span className='v-pill'>Mass Scale</span>
						</div>

						{/* <!-- Crypto --> */}
						<div className='v-card'>
							<span className='v-emoji'>₿</span>
							<h3 className='v-name'>Crypto Offers</h3>
							<p className='v-desc'>
								Crypto trading platforms, wallets and exchange offers. FTD & CPA
								models in regulated GEOs.
							</p>
							<span className='v-pill'>Emerging</span>
						</div>

						{/* <!-- Mainstream --> */}
						<div className='v-card'>
							<span className='v-emoji'>📱</span>
							<h3 className='v-name'>Mainstream</h3>
							<p className='v-desc'>
								App installs, e-commerce, utilities. Google, Meta and TikTok
								performance campaigns at scale.
							</p>
							<span className='v-pill'>Versatile</span>
						</div>

						{/* <!-- iGaming --> */}
						<div className='v-card'>
							<span className='v-emoji'>🎮</span>
							<h3 className='v-name'>iGaming</h3>
							<p className='v-desc'>
								Fantasy sports, esports betting and skill-based gaming
								platforms. Fast-growing vertical expertise.
							</p>
							<span className='v-pill'>Fast Growth</span>
						</div>
					</div>
				</div>
			</section>

			{/* <!-- =========================================================
       TRAFFIC SOURCES
  ========================================================= --> */}
			<section className='section traffic' id='traffic'>
				<div className='container'>
					<div className='sec-center'>
						<div className='eyebrow'>Traffic Sources We Master</div>
						<h2 className='sec-title'>
							Every Major <span className='text-blue'>Channel</span>
						</h2>
						<p className='sec-sub'>
							Full-stack traffic expertise across paid, native, push and
							programmatic channels worldwide.
						</p>
					</div>

					<div className='src-grid'>
						<div className='src-card'>
							<div className='src-ico'>🚀</div>
							<div className='src-name'>PropellerAds</div>
							<div className='src-sub'>Push / Pop / OnClick</div>
						</div>

						<div className='src-card'>
							<div className='src-ico'>🔍</div>
							<div className='src-name'>Google Ads</div>
							<div className='src-sub'>Search / Display / YouTube</div>
						</div>

						<div className='src-card'>
							<div className='src-ico'>🍎</div>
							<div className='src-name'>Apple Search Ads</div>
							<div className='src-sub'>iOS App Install</div>
						</div>

						<div className='src-card'>
							<div className='src-ico'>📘</div>
							<div className='src-name'>Meta Ads</div>
							<div className='src-sub'>Facebook / Instagram</div>
						</div>

						<div className='src-card'>
							<div className='src-ico'>🎵</div>
							<div className='src-name'>TikTok Ads</div>
							<div className='src-sub'>In-Feed / TopView / Spark</div>
						</div>

						<div className='src-card'>
							<div className='src-ico'>📰</div>
							<div className='src-name'>Native Ads</div>
							<div className='src-sub'>Taboola / Outbrain</div>
						</div>

						<div className='src-card'>
							<div className='src-ico'>🔔</div>
							<div className='src-name'>Push Notifications</div>
							<div className='src-sub'>Web & In-App Push</div>
						</div>

						<div className='src-card'>
							<div className='src-ico'>💥</div>
							<div className='src-name'>Pop Traffic</div>
							<div className='src-sub'>Popunder / Interstitial</div>
						</div>
					</div>
				</div>
			</section>

			{/* <!-- =========================================================
       PARTNERS MARQUEE
  ========================================================= --> */}
			<section className='partners' id='partners'>
				<div className='container'>
					<div className='sec-center'>
						<div className='eyebrow'>Trusted Partners & Networks</div>
						<h2 className='sec-title'>
							Working with the <span className='text-gold'>Best in Class</span>
						</h2>
						<p className='sec-sub'>
							We maintain direct relationships with premium ad networks,
							affiliate networks and CPA platforms worldwide.
						</p>
					</div>
				</div>

				{/* <!-- Scrolling marquee strip --> */}
				<div className='marquee-wrap' style={{ marginTop: '44px' }}>
					<div className='marquee-track'>
						{/* <!-- Set 1 --> */}
						<div className='p-chip'>
							<div className='p-chip-ico'>🌐</div>
							<span className='p-chip-name'>Ads.com</span>
						</div>
						<div className='p-chip'>
							<div className='p-chip-ico'>⚡</div>
							<span className='p-chip-name'>Tonic</span>
						</div>
						<div className='p-chip'>
							<div className='p-chip-ico'>🔭</div>
							<span className='p-chip-name'>Visymo</span>
						</div>
						<div className='p-chip'>
							<div className='p-chip-ico'>💼</div>
							<span className='p-chip-name'>ClickDealer</span>
						</div>
						<div className='p-chip'>
							<div className='p-chip-ico'>🏅</div>
							<span className='p-chip-name'>VortexHub</span>
						</div>
						<div className='p-chip'>
							<div className='p-chip-ico'>🎯</div>
							<span className='p-chip-name'>AdVance Pro</span>
						</div>
						<div className='p-chip'>
							<div className='p-chip-ico'>💎</div>
							<span className='p-chip-name'>PeakNet CPA</span>
						</div>
						<div className='p-chip'>
							<div className='p-chip-ico'>🔗</div>
							<span className='p-chip-name'>LynkAffiliates</span>
						</div>
						<div className='p-chip'>
							<div className='p-chip-ico'>🚀</div>
							<span className='p-chip-name'>FluxMedia</span>
						</div>
						<div className='p-chip'>
							<div className='p-chip-ico'>🌟</div>
							<span className='p-chip-name'>NorthStar Network</span>
						</div>
						<div className='p-chip'>
							<div className='p-chip-ico'>📊</div>
							<span className='p-chip-name'>Affiliate Networks</span>
						</div>
						<div className='p-chip'>
							<div className='p-chip-ico'>🤝</div>
							<span className='p-chip-name'>CPA Networks</span>
						</div>
						{/* <!-- Set 2 — duplicate for seamless infinite scroll --> */}
						<div className='p-chip'>
							<div className='p-chip-ico'>🌐</div>
							<span className='p-chip-name'>Ads.com</span>
						</div>
						<div className='p-chip'>
							<div className='p-chip-ico'>⚡</div>
							<span className='p-chip-name'>Tonic</span>
						</div>
						<div className='p-chip'>
							<div className='p-chip-ico'>🔭</div>
							<span className='p-chip-name'>Visymo</span>
						</div>
						<div className='p-chip'>
							<div className='p-chip-ico'>💼</div>
							<span className='p-chip-name'>ClickDealer</span>
						</div>
						<div className='p-chip'>
							<div className='p-chip-ico'>🏅</div>
							<span className='p-chip-name'>VortexHub</span>
						</div>
						<div className='p-chip'>
							<div className='p-chip-ico'>🎯</div>
							<span className='p-chip-name'>AdVance Pro</span>
						</div>
						<div className='p-chip'>
							<div className='p-chip-ico'>💎</div>
							<span className='p-chip-name'>PeakNet CPA</span>
						</div>
						<div className='p-chip'>
							<div className='p-chip-ico'>🔗</div>
							<span className='p-chip-name'>LynkAffiliates</span>
						</div>
						<div className='p-chip'>
							<div className='p-chip-ico'>🚀</div>
							<span className='p-chip-name'>FluxMedia</span>
						</div>
						<div className='p-chip'>
							<div className='p-chip-ico'>🌟</div>
							<span className='p-chip-name'>NorthStar Network</span>
						</div>
						<div className='p-chip'>
							<div className='p-chip-ico'>📊</div>
							<span className='p-chip-name'>Affiliate Networks</span>
						</div>
						<div className='p-chip'>
							<div className='p-chip-ico'>🤝</div>
							<span className='p-chip-name'>CPA Networks</span>
						</div>
					</div>
				</div>
			</section>

			{/* <!-- =========================================================
       WHY US / FEATURES
  ========================================================= --> */}
			<Features />

			{/* <!-- =========================================================
       CTA SECTION
  ========================================================= --> */}
			<section className='cta-sec'>
				<div className='container'>
					<div className='cta-box' data-a='scale'>
						<div className='eyebrow' style={{ justifyContent: 'center' }}>
							Let's Scale Together
						</div>
						<h2>
							Ready to <span className='text-gold'>Maximize</span> Your ROI?
						</h2>
						<p>
							Join the brands and affiliate partners who trust Rhine Media to
							deliver performance at scale, in every major GEO.
						</p>
						<div className='cta-btns'>
							<a href='contact.html' className='btn btn-primary'>
								Start Cooperation
								<svg
									width='13'
									height='13'
									viewBox='0 0 13 13'
									fill='none'
									aria-hidden='true'
								>
									<path
										d='M1 6.5h11M6.5 1.5l5 5-5 5'
										stroke='currentColor'
										strokeWidth='1.8'
										strokeLinecap='round'
										strokeLinejoin='round'
									></path>
								</svg>
							</a>
							<a href='contact.html' className='btn btn-gold-outline'>
								Get in Touch
							</a>
						</div>
					</div>
				</div>
			</section>

			{/* <!-- =========================================================
       FOOTER
  ========================================================= --> */}
			<footer className='footer'>
				<div className='container'>
					<div className='footer-cols'>
						{/* <!-- Brand col --> */}
						<div>
							<a href='index.html' className='logo'>
								<div className='logo-mark'>RM</div>
								<div className='logo-name'>
									Rhine <span>Media</span>
								</div>
							</a>
							<p className='fb-desc'>
								Premium performance media buying for the world's most ambitious
								advertisers and affiliate partners. Built for scale. Optimised
								for ROI.
							</p>
							<div className='footer-social'>
								<a href='#' className='soc-btn' aria-label='Telegram'>
									✈
								</a>
								<a href='#' className='soc-btn' aria-label='LinkedIn'>
									in
								</a>
								<a href='#' className='soc-btn' aria-label='Twitter / X'>
									𝕏
								</a>
								<a href='#' className='soc-btn' aria-label='Skype'>
									☁
								</a>
							</div>
						</div>

						{/* <!-- Services --> */}
						<div>
							<h4 className='fc-head'>Verticals</h4>
							<ul className='fc-links'>
								<li>
									<a href='#verticals'>Dating Traffic</a>
								</li>
								<li>
									<a href='#verticals'>Nutra Campaigns</a>
								</li>
								<li>
									<a href='#verticals'>Gambling / iGaming</a>
								</li>
								<li>
									<a href='#verticals'>Sweepstakes</a>
								</li>
								<li>
									<a href='#verticals'>Crypto Offers</a>
								</li>
								<li>
									<a href='#verticals'>Adult</a>
								</li>
							</ul>
						</div>

						{/* <!-- Traffic --> */}
						<div>
							<h4 className='fc-head'>Traffic Sources</h4>
							<ul className='fc-links'>
								<li>
									<a href='#traffic'>Google Ads</a>
								</li>
								<li>
									<a href='#traffic'>Meta Ads</a>
								</li>
								<li>
									<a href='#traffic'>TikTok Ads</a>
								</li>
								<li>
									<a href='#traffic'>PropellerAds</a>
								</li>
								<li>
									<a href='#traffic'>Native Ads</a>
								</li>
								<li>
									<a href='#traffic'>Push &amp; Pop</a>
								</li>
							</ul>
						</div>

						{/* <!-- Company --> */}
						<div>
							<h4 className='fc-head'>Company</h4>
							<ul className='fc-links'>
								<li>
									<a href='#why-us'>About Rhine Media</a>
								</li>
								<li>
									<a href='contact.html'>Contact Us</a>
								</li>
								<li>
									<a href='#partners'>Partners</a>
								</li>
								<li>
									<a href='terms.html'>Terms of Service</a>
								</li>
								<li>
									<a href='privacy-policy.html'>Privacy Policy</a>
								</li>
							</ul>
						</div>
					</div>

					<div className='footer-bottom'>
						<p className='copy'>
							© 2026 Rhine Media. All rights reserved.{' '}
							<span style={{ color: 'var(--t3)' }}>rhine-media.com</span>
						</p>
						<nav className='f-legal' aria-label='Legal'>
							<a href='terms.html'>Terms</a>
							<a href='privacy-policy.html'>Privacy</a>
							<a href='contact.html'>Contact</a>
						</nav>
					</div>
				</div>
			</footer>

			
		</>
	)
}

export default App
