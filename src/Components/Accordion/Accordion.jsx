import React, { useState } from 'react'

export default function Accordion() {
	const [openIndex, setOpenIndex] = useState(null)

	const toggleFAQ = index => {
		setOpenIndex(openIndex === index ? null : index)
	}

	const faqData = [
		{
			q: 'What verticals does Rhine Media specialise in?',
			a: 'We specialise in Dating, Nutra, Gambling, iGaming, Sweepstakes, Adult, Crypto Offers and Mainstream verticals. Our team has deep domain expertise in each of these niches and maintains direct relationships with top publishers and affiliate networks across all major GEOs.',
		},
		{
			q: 'What is the minimum monthly budget to work with you?',
			a: "We typically work with partners investing a minimum of $5,000/month in media spend. For certain verticals or exclusive deal structures, higher minimums may apply. Contact us to discuss your specific situation — we're flexible for the right partnerships.",
		},
		{
			q: 'How quickly can you launch a campaign?',
			a: "Once we have all required materials (creatives, landing pages, offer details, tracking setup), we can typically launch campaigns within 24–48 hours. Our streamlined onboarding process ensures you're never waiting long to get traffic flowing.",
		},
		{
			q: 'Do you work on a CPA, CPL or revenue share basis?',
			a: "We work across multiple pricing models including managed spend (flat fee + performance bonus), CPA, CPL, RevShare and hybrid structures. The right model depends on your vertical, volume and offer type. We'll recommend the most suitable approach during our initial consultation.",
		},
		{
			q: 'Which GEOs do you cover?',
			a: "We have active campaigns running in 60+ GEOs worldwide, including all Tier-1 markets (US, UK, DE, AU, CA, FR), LATAM (BR, MX, CO), APAC (IN, PH, TH, JP), and MENA (AE, SA, EG). If you need a specific GEO, let us know and we'll confirm our capabilities.",
		},
		{
			q: 'What reporting and tracking do you provide?',
			a: 'All clients receive access to real-time performance dashboards with full transparency on impressions, clicks, conversions, spend and revenue. We integrate with all major tracking platforms including Voluum, Binom, RedTrack, and custom S2S postback setups. Weekly summary reports are provided as standard.',
		},
	]

	return (
		<div className='container'>
			<div className='sec-center vis' data-a='up'>
				<div className='eyebrow'>FAQ</div>
				<h2 className='sec-title'>
					Common <span className='text-gold'>Questions</span>
				</h2>
				<p className='sec-sub'>
					Everything you need to know before starting a cooperation with Rhine
					Media.
				</p>
			</div>

			<div className='faq-list'>
				{faqData.map((item, index) => {
					const isOpen = openIndex === index

					return (
						<div
							key={index}
							className={`faq-item vis ${isOpen ? 'open' : ''}`}
							data-a='up'
							data-d={index + 1}
							/* ХАРДКОДИМ ФОН КАРТОЧКИ: теперь никакой фокус её не очернит */
							style={{
								background: isOpen
									? 'rgba(255, 255, 255, 0.03)'
									: 'var(--bg-card)',
								borderColor: isOpen ? 'var(--gold)' : 'var(--b0)',
							}}
						>
							<button
								type='button'
								className='faq-q'
								aria-expanded={isOpen ? 'true' : 'false'}
								onClick={e => {
									e.preventDefault()
									toggleFAQ(index)
								}}
								/* ХАРДКОДИМ ЦВЕТ ТЕКСТА КНОПКИ */
								style={{
									color: isOpen ? 'var(--gold)' : 'var(--t1)',
									background: 'transparent',
									backgroundColor: 'transparent',
								}}
							>
								{item.q}
								<span className={`faq-arrow ${isOpen ? 'rotated' : ''}`}>
									▾
								</span>
							</button>

							<div className='faq-a'>
								<div
									className='faq-a-content'
									/* ХАРДКОДИМ ЦВЕТ ТЕКСТА ОТВЕТА */
									style={{
										color: 'var(--t2)',
									}}
								>
									{item.a}
								</div>
							</div>
						</div>
					)
				})}
			</div>
		</div>
	)
}
