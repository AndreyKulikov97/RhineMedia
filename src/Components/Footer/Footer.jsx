import React from 'react'
import './footer.css'

export default function Footer() {
  return (
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
							advertisers and affiliate partners. Built for scale. Optimised for
							ROI.
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
	)
}
