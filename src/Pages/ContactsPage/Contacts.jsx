import React from 'react'
import './contacts.css'
import { useScrollAnimation } from '../../hooks/useScrollAnimation'
import Accordion from '../../Components/Accordion/Accordion';

export default function Contacts() {
	useScrollAnimation();

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

							<form id='contactForm' noValidate=''>
								<div className='form-row-2'>
									<div className='fg'>
										<label htmlFor='fname'>First Name *</label>
										<input
											type='text'
											id='fname'
											name='fname'
											placeholder='John'
											required=''
										/>
									</div>
									<div className='fg'>
										<label htmlFor='lname'>Last Name *</label>
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
									<label htmlFor='email'>Email Address *</label>
									<input
										type='email'
										id='email'
										name='email'
										placeholder='john@company.com'
										required=''
									/>
								</div>

								<div className='fg'>
									<label htmlFor='company'>Company / Brand</label>
									<input
										type='text'
										id='company'
										name='company'
										placeholder='Your company name'
									/>
								</div>

								<div className='fg'>
									<label htmlFor='telegram'>Telegram / Skype Handle</label>
									<input
										type='text'
										id='telegram'
										name='telegram'
										placeholder='@yourusername'
									/>
								</div>

								<div className='fg'>
									<label htmlFor='vertical'>Vertical / Niche *</label>
									{/* 1. Добавили defaultValue='' и сделали required правильным булевым свойством */}
									<select
										id='vertical'
										name='vertical'
										defaultValue=''
										required
									>
										{/* 2. Убрали пустые кавычки у disabled и полностью удалили selected */}
										<option value='' disabled>
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
									<label htmlFor='budget'>Monthly Budget (USD)</label>
									{/* Добавили defaultValue='' для управления дефолтным выбором */}
									<select id='budget' name='budget' defaultValue=''>
										{/* Убрали лишнее, оставив чистый disabled */}
										<option value='' disabled>
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
									<label htmlFor='message'>Message *</label>
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
										htmlFor='consent'
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
											strokeWidth='1.8'
											strokeLinecap='round'
											strokeLinejoin='round'
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
				<Accordion />
			</section>

			{/* <!-- =========================================================
       FOOTER
  ========================================================= --> */}
		</>
	)
}
