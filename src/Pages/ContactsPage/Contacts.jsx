import React, { useState } from 'react'
import './contacts.css'
import { useScrollAnimation } from '../../hooks/useScrollAnimation'
import Accordion from '../../Components/Accordion/Accordion'

export default function Contacts() {
	useScrollAnimation()

	// 1. Стейт для данных формы
	const [formData, setFormData] = useState({
		fname: '',
		lname: '',
		email: '',
		company: '',
		telegram: '',
		vertical: '',
		budget: '',
		message: '',
		consent: false,
	})

	// 2. Стейт для хранения ошибок валидации (true означает наличие ошибки)
	const [errors, setErrors] = useState({})

	// 3. Стейт для отображения успешного сообщения
	const [isSubmitted, setIsSubmitted] = useState(false)

	// Обработчик изменений в полях
	const handleChange = e => {
		const { name, value, type, checked } = e.target
		setFormData(prev => ({
			...prev,
			[name]: type === 'checkbox' ? checked : value,
		}))

		// Сбрасываем ошибку поля, если пользователь начал что-то вводить/выбирать
		if (errors[name]) {
			setErrors(prev => ({ ...prev, [name]: false }))
		}
	}

	// Основная функция валидации при отправке
	const handleSubmit = e => {
		e.preventDefault()
		const newErrors = {}

		// Валидация First Name (только буквы, латиница/кириллица, не пустое)
		const nameRegex = /^[A-Za-zА-Яа-яЁёІіЇїЄєҐґ]+$/
		if (!formData.fname.trim() || !nameRegex.test(formData.fname.trim())) {
			newErrors.fname = true
		}

		// Валидация Last Name (только буквы)
		if (!formData.lname.trim() || !nameRegex.test(formData.lname.trim())) {
			newErrors.lname = true
		}

		// Валидация Email (формат *****@***.(ru|com|ua|org))
		const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.(ru|com|ua|org)$/i
		if (!emailRegex.test(formData.email.trim())) {
			newErrors.email = true
		}

		// Валидация Company / Brand (не менее одной буквы, исключая только пробелы)
		const letterRegex = /[A-Za-zА-Яа-яЁёІіЇїЄєҐґ]/
		if (formData.company && !letterRegex.test(formData.company)) {
			newErrors.company = true
		}

		// Валидация Telegram / Skype Handle (длина не менее 3 символов, если заполнено)
		if (formData.telegram && formData.telegram.trim().length < 3) {
			newErrors.telegram = true
		}

		// Валидация Vertical / Niche (обязательный выбор из списка)
		if (!formData.vertical) {
			newErrors.vertical = true
		}

		// Валидация Monthly Budget (обязательный выбор из списка)
		if (!formData.budget) {
			newErrors.budget = true
		}

		// Валидация Message (не менее 3 символов)
		if (formData.message.trim().length < 3) {
			newErrors.message = true
		}

		// Валидация чекбокса Privacy Policy
		if (!formData.consent) {
			newErrors.consent = true
		}

		// Сохраняем ошибки в стейт
		setErrors(newErrors)

		// Если объект с ошибками пустой — форма валидна
		if (Object.keys(newErrors).length === 0) {
			setIsSubmitted(true)

			// Здесь можно сделать реальный запрос на сервер (fetch/axios)
			console.log('Данные формы отправлены:', formData)

			// Опционально: очистить форму после отправки
			setFormData({
				fname: '',
				lname: '',
				email: '',
				company: '',
				telegram: '',
				vertical: '',
				budget: '',
				message: '',
				consent: false,
			})
		} else {
			setIsSubmitted(false)
		}
	}

	return (
		<>
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

			<main className='page-body' id='contact-form'>
				<div className='container'>
					<div className='contact-layout'>
						<div className='contact-intro vis' data-a='left'>
							<h3>
								Let's Build Something
								<br />
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
							<div
								style={{
									display: 'flex',
									gap: '10px',
									flexWrap: 'wrap',
									marginBottom: '24px',
								}}
							>
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

							<div className='map-container'>
								<div className='map-grid-overlay'></div>
								<div className='map-content'>
									<div className='location-marker'>
										<div className='pulse-ring'></div>
										<div className='pin-wrap'>
											<div className='marker-pin'>
												<div className='marker-dot'></div>
											</div>
										</div>
									</div>
									<div className='location-label'>
										Rhine Media <span className='label-dot'>·</span> Global
										Operations
									</div>
								</div>
							</div>
						</div>

						{/* ФОРМА С ВАЛИДАЦИЕЙ */}
						<div className='form-card vis' data-a='right'>
							<h3>Send Us a Message</h3>

							<form id='contactForm' noValidate onSubmit={handleSubmit}>
								<div className='form-row-2'>
									<div className='fg'>
										<label htmlFor='fname'>First Name *</label>
										<input
											type='text'
											id='fname'
											name='fname'
											placeholder='John'
											value={formData.fname}
											onChange={handleChange}
											className={errors.fname ? 'input-error' : ''}
										/>
									</div>
									<div className='fg'>
										<label htmlFor='lname'>Last Name *</label>
										<input
											type='text'
											id='lname'
											name='lname'
											placeholder='Smith'
											value={formData.lname}
											onChange={handleChange}
											className={errors.lname ? 'input-error' : ''}
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
										value={formData.email}
										onChange={handleChange}
										className={errors.email ? 'input-error' : ''}
									/>
								</div>

								<div className='fg'>
									<label htmlFor='company'>Company / Brand</label>
									<input
										type='text'
										id='company'
										name='company'
										placeholder='Your company name'
										value={formData.company}
										onChange={handleChange}
										className={errors.company ? 'input-error' : ''}
									/>
								</div>

								<div className='fg'>
									<label htmlFor='telegram'>Telegram / Skype Handle</label>
									<input
										type='text'
										id='telegram'
										name='telegram'
										placeholder='@yourusername'
										value={formData.telegram}
										onChange={handleChange}
										className={errors.telegram ? 'input-error' : ''}
									/>
								</div>

								<div className='fg'>
									<label htmlFor='vertical'>Vertical / Niche *</label>
									<select
										id='vertical'
										name='vertical'
										value={formData.vertical}
										onChange={handleChange}
										className={errors.vertical ? 'input-error' : ''}
									>
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
									<label htmlFor='budget'>Monthly Budget (USD) *</label>
									<select
										id='budget'
										name='budget'
										value={formData.budget}
										onChange={handleChange}
										className={errors.budget ? 'input-error' : ''}
									>
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
										placeholder='Tell us about your offer, goals, GEOs and any other details...'
										value={formData.message}
										onChange={handleChange}
										className={errors.message ? 'input-error' : ''}
									></textarea>
								</div>

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
										checked={formData.consent}
										onChange={handleChange}
										style={{
											width: 'auto',
											marginTop: '3px',
											flexShrink: 0,
											accentColor: 'var(--gold)',
											outline: errors.consent ? '2px solid #ff4a4a' : 'none',
										}}
									/>
									<label
										htmlFor='consent'
										style={{
											fontSize: '0.8rem',
											color: errors.consent ? '#ff4a4a' : 'var(--t2)',
											fontWeight: 400,
											lineHeight: '1.6',
											transition: 'color 0.2s',
										}}
									>
										I agree to the
										<a
											href='privacy-policy.html'
											style={{
												color: 'var(--gold-lt)',
												textDecoration: 'none',
												marginLeft: '4px',
												marginRight: '4px',
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
												marginLeft: '4px',
											}}
										>
											Terms of Service
										</a>
										.
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

								{/* Контролируемое отображение надписи успеха */}
								{isSubmitted && (
									<div className='success-msg visible' id='successMsg'>
										✅ &nbsp;Your message has been sent! We'll get back to you
										within 2–4 business hours.
									</div>
								)}
							</form>
						</div>
					</div>
				</div>
			</main>

			<section className='faq-section'>
				<Accordion />
			</section>
		</>
	)
}
