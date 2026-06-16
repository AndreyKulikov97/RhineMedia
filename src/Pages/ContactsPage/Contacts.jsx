import React from 'react'
import './contacts.css'
import Footer from '../../Components/Footer/Footer'

export default function Contacts() {
	return (
		<>
			{/* <!-- =========================================================
       NAVIGATION
  ========================================================= --> */}

			{/* <div className='mob-menu' id='mobMenu'>
				<span className='mob-close' id='mobClose'>
					✕
				</span>
				<a href='index.html#verticals'>Verticals</a>
				<a href='index.html#traffic'>Traffic Sources</a>
				<a href='index.html#partners'>Partners</a>
				<a href='index.html#why-us'>Why Us</a>
				<a href='contact.html'>Contact</a>
				<a
					href='#contact-form'
					className='btn btn-primary'
					style={{ marginTop: '14px' }}
				>
					Send Message
				</a>
			</div> */}

			{/* <!-- =========================================================
       PAGE HERO
  ========================================================= --> */}
			<header className='page-hero'>
				<div className='container'>
					<div className='eyebrow vis' data-a='up'>
						Get in Touch
					</div>
					<h1 data-a='up' data-d='1' className='vis'>
						Contact <span className='text-gold'>Rhine Media</span>
					</h1>
					<p data-a='up' data-d='2' className='vis'>
						Ready to start? Have a question? Our team responds within 24 hours.
					</p>
				</div>
			</header>

			{/* <!-- =========================================================
       CONTACT MAIN SECTION
  ========================================================= --> */}
			<main className='page-body' id='contact-form'>
				<div className='container'>
					<div className='contact-layout'>
						{/* <!-- LEFT: Info --> */}
						<div className='contact-intro vis' data-a='left'>
							<h3>
								Let's Build Something<br></br>
								<span className='text-gold'>Profitable Together</span>
							</h3>
							<p>
								Whether you're an advertiser looking to scale your offers, an
								affiliate network seeking a reliable buying team, or a brand
								ready to expand globally — we want to hear from you.
							</p>

							<div className='cinfo-list'>
								<div className='cinfo-item'>
									<div className='cinfo-ico'>✈</div>
									<div className='cinfo-text'>
										<h4>Telegram</h4>
										<a
											href='https://t.me/rhinemedia'
											target='_blank'
											rel='noopener'
										>
											@rhinemedia
										</a>
									</div>
								</div>

								<div className='cinfo-item'>
									<div className='cinfo-ico'>✉️</div>
									<div className='cinfo-text'>
										<h4>Email</h4>
										<a href='mailto:hello@rhine-media.com'>
											hello@rhine-media.com
										</a>
									</div>
								</div>

								<div className='cinfo-item'>
									<div className='cinfo-ico'>💼</div>
									<div className='cinfo-text'>
										<h4>Business Hours</h4>
										<p>Mon – Fri &nbsp;·&nbsp; 09:00 – 20:00 CET</p>
									</div>
								</div>

								<div className='cinfo-item'>
									<div className='cinfo-ico'>⚡</div>
									<div className='cinfo-text'>
										<h4>Response Time</h4>
										<p>Typically within 2–4 business hours</p>
									</div>
								</div>
							</div>

							{/* <!-- Preferred channels --> */}
							<p
								style={{
									fontSize: '0.83rem',
									color: 'var(--t3)',
									marginBottom: '8px',
									fontWeight: 600,
									letterSpacing: '0.05em',
									textTransform: 'uppercase',
								}}
							>
								Also available on
							</p>
							<div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
								<a
									href='#'
									className='btn btn-ghost'
									style={{ padding: '10px 18px', fontSize: '0.8rem' }}
								>
									Skype
								</a>
								<a
									href='#'
									className='btn btn-ghost'
									style={{ padding: '10px 18px', fontSize: '0.8rem' }}
								>
									WhatsApp
								</a>
								<a
									href='#'
									className='btn btn-ghost'
									style={{ padding: '10px 18px', fontSize: '0.8rem' }}
								>
									LinkedIn
								</a>
							</div>

							{/* <!-- Map placeholder --> */}
							<div className='map-stub-grid'>
								<div className='map-stub-grid-inner'></div>
								<div className='map-stub-label'>
									<div className='map-stub-pin'></div>
									<span>Rhine Media · Global Operations</span>
								</div>
							</div>
						</div>

						{/* <!-- RIGHT: Form --> */}
						<div className='form-card vis' data-a='right'>
							<h3>Send Us a Message</h3>

							<form id='contactForm' novalidate=''>
								<div className='form-row-2'>
									<div className='fg'>
										<label for='fname'>First Name *</label>
										<input
											type='text'
											id='fname'
											name='fname'
											placeholder='John'
											required=''
										/>
									</div>
									<div className='fg'>
										<label for='lname'>Last Name *</label>
										<input
											type='text'
											id='lname'
											name='lname'
											placeholder='Smith'
											required=''
										/>
									</div>
								</div>

								<div className='fg'>
									<label for='email'>Email Address *</label>
									<input
										type='email'
										id='email'
										name='email'
										placeholder='john@company.com'
										required=''
									/>
								</div>

								<div className='fg'>
									<label for='company'>Company / Brand</label>
									<input
										type='text'
										id='company'
										name='company'
										placeholder='Your company name'
									/>
								</div>

								<div className='fg'>
									<label for='telegram'>Telegram / Skype Handle</label>
									<input
										type='text'
										id='telegram'
										name='telegram'
										placeholder='@yourusername'
									/>
								</div>

								<div className='fg'>
									<label for='vertical'>Vertical / Niche *</label>
									<select id='vertical' name='vertical' required=''>
										<option value='' disabled='' selected=''>
											Select a vertical…
										</option>
										<option value='dating'>Dating</option>
										<option value='nutra'>Nutra / Health &amp; Beauty</option>
										<option value='gambling'>Gambling / Casino</option>
										<option value='igaming'>iGaming / Betting</option>
										<option value='sweepstakes'>Sweepstakes</option>
										<option value='adult'>Adult</option>
										<option value='crypto'>Crypto Offers</option>
										<option value='mainstream'>Mainstream / Other</option>
									</select>
								</div>

								<div className='fg'>
									<label for='budget'>Monthly Budget (USD)</label>
									<select id='budget' name='budget'>
										<option value='' disabled='' selected=''>
											Select budget range…
										</option>
										<option value='under5k'>Under $5,000</option>
										<option value='5k-20k'>$5,000 – $20,000</option>
										<option value='20k-50k'>$20,000 – $50,000</option>
										<option value='50k-100k'>$50,000 – $100,000</option>
										<option value='100k+'>$100,000+</option>
									</select>
								</div>

								<div className='fg'>
									<label for='message'>Message *</label>
									<textarea
										id='message'
										name='message'
										placeholder='Tell us about your offer, goals, GEOs and any other details that will help us understand your needs…'
										required=''
									></textarea>
								</div>

								{/* <!-- Privacy consent --> */}
								<div
									className='fg'
									style={{
										display: 'flex',
										alignItems: 'flex-start',
										gap: '10px',
										marginBottom: '28px',
									}}
								>
									<input
										type='checkbox'
										id='consent'
										name='consent'
										style={{
											width: 'auto',
											marginTop: '3px',
											flexShrink: 0,
											accentColor: 'var(--gold)',
										}}
										required=''
									/>
									<label
										for='consent'
										style={{
											fontSize: '0.8rem',
											color: 'var(--t2)',
											fontWeight: 400,
											lineHeight: '1.6',
										}}
									>
										I agree to the
										<a
											href='privacy-policy.html'
											style={{
												color: 'var(--gold-lt)',
												textDecoration: 'none',
											}}
										>
											Privacy Policy
										</a>
										and
										<a
											href='terms.html'
											style={{
												color: 'var(--gold-lt)',
												textDecoration: 'none',
											}}
										>
											Terms of Service
										</a>
										. I consent to Rhine Media processing my data to respond to
										this enquiry.
									</label>
								</div>

								<button
									type='submit'
									className='btn btn-primary'
									style={{ width: '100%', justifyContent: 'center' }}
								>
									Send Message
									<svg
										width='14'
										height='14'
										viewBox='0 0 14 14'
										fill='none'
										aria-hidden='true'
									>
										<path
											d='M1 7h12M7.5 1.5L13 7l-5.5 5.5'
											stroke='currentColor'
											stroke-width='1.8'
											stroke-linecap='round'
											stroke-linejoin='round'
										></path>
									</svg>
								</button>

								<div className='success-msg' id='successMsg'>
									✅ &nbsp;Your message has been sent! We'll get back to you
									within 2–4 business hours.
								</div>
							</form>
						</div>
					</div>
				</div>
			</main>

			{/* <!-- =========================================================
       FAQ SECTION
  ========================================================= --> */}
			<section className='faq-section'>
				<div className='container'>
					<div className='sec-center vis' data-a='up'>
						<div className='eyebrow'>FAQ</div>
						<h2 className='sec-title'>
							Common <span className='text-gold'>Questions</span>
						</h2>
						<p className='sec-sub'>
							Everything you need to know before starting a cooperation with
							Rhine Media.
						</p>
					</div>

					<div className='faq-list'>
						<div className='faq-item' data-a='up' data-d='1'>
							<button className='faq-q' aria-expanded='false'>
								What verticals does Rhine Media specialise in?
								<span className='faq-arrow'>▾</span>
							</button>
							<div className='faq-a'>
								We specialise in Dating, Nutra, Gambling, iGaming, Sweepstakes,
								Adult, Crypto Offers and Mainstream verticals. Our team has deep
								domain expertise in each of these niches and maintains direct
								relationships with top publishers and affiliate networks across
								all major GEOs.
							</div>
						</div>

						<div className='faq-item' data-a='up' data-d='2'>
							<button className='faq-q' aria-expanded='false'>
								What is the minimum monthly budget to work with you?
								<span className='faq-arrow'>▾</span>
							</button>
							<div className='faq-a'>
								We typically work with partners investing a minimum of
								$5,000/month in media spend. For certain verticals or exclusive
								deal structures, higher minimums may apply. Contact us to
								discuss your specific situation — we're flexible for the right
								partnerships.
							</div>
						</div>

						<div className='faq-item' data-a='up' data-d='3'>
							<button className='faq-q' aria-expanded='false'>
								How quickly can you launch a campaign?
								<span className='faq-arrow'>▾</span>
							</button>
							<div className='faq-a'>
								Once we have all required materials (creatives, landing pages,
								offer details, tracking setup), we can typically launch
								campaigns within 24–48 hours. Our streamlined onboarding process
								ensures you're never waiting long to get traffic flowing.
							</div>
						</div>

						<div className='faq-item' data-a='up' data-d='4'>
							<button className='faq-q' aria-expanded='false'>
								Do you work on a CPA, CPL or revenue share basis?
								<span className='faq-arrow'>▾</span>
							</button>
							<div className='faq-a'>
								We work across multiple pricing models including managed spend
								(flat fee + performance bonus), CPA, CPL, RevShare and hybrid
								structures. The right model depends on your vertical, volume and
								offer type. We'll recommend the most suitable approach during
								our initial consultation.
							</div>
						</div>

						<div className='faq-item' data-a='up' data-d='5'>
							<button className='faq-q' aria-expanded='false'>
								Which GEOs do you cover?
								<span className='faq-arrow'>▾</span>
							</button>
							<div className='faq-a'>
								We have active campaigns running in 60+ GEOs worldwide,
								including all Tier-1 markets (US, UK, DE, AU, CA, FR), LATAM
								(BR, MX, CO), APAC (IN, PH, TH, JP), and MENA (AE, SA, EG). If
								you need a specific GEO, let us know and we'll confirm our
								capabilities.
							</div>
						</div>

						<div className='faq-item' data-a='up' data-d='6'>
							<button className='faq-q' aria-expanded='false'>
								What reporting and tracking do you provide?
								<span className='faq-arrow'>▾</span>
							</button>
							<div className='faq-a'>
								All clients receive access to real-time performance dashboards
								with full transparency on impressions, clicks, conversions,
								spend and revenue. We integrate with all major tracking
								platforms including Voluum, Binom, RedTrack, and custom S2S
								postback setups. Weekly summary reports are provided as
								standard.
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* <!-- =========================================================
       FOOTER
  ========================================================= --> */}
			<Footer />
		</>
	)
}
