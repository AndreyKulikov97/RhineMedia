import React from 'react'
import './features.css'
import { useScrollAnimation } from '../../hooks/useScrollAnimation'

export default function Features() {
	useScrollAnimation()

	return (
		<div className='container'>
			<div className='feat-layout'>
				{/* <!-- Left: content + checklist --> */}
				<div className='feat-content' data-a='left'>
					<div className='eyebrow'>Why Choose Rhine Media</div>
					<h2 className='sec-title'>
						Precision. Scale. <span className='text-gold'>Performance.</span>
						<br></br>
					</h2>
					<p className='sec-sub'>
						We're not a media network — we're your in-house buying team. Deep
						expertise, real accountability and transparent reporting on every
						dollar spent.
					</p>

					<div className='check-list' style={{ marginTop: '36px' }}>
						<div className='check-item' data-a='up' data-d='1'>
							<div className='chk'>✓</div>
							<div className='chk-body'>
								<h4>Full Funnel Optimization</h4>
								<p>
									From creative A/B testing to post-click landing page
									optimization. Every touchpoint tracked and improved
									continuously.
								</p>
							</div>
						</div>

						<div className='check-item' data-a='up' data-d='2'>
							<div className='chk'>✓</div>
							<div className='chk-body'>
								<h4>Direct Publisher Relationships</h4>
								<p>
									We maintain direct deals with top publishers and ad networks —
									cutting costs and boosting campaign performance.
								</p>
							</div>
						</div>

						<div className='check-item' data-a='up' data-d='3'>
							<div className='chk'>✓</div>
							<div className='chk-body'>
								<h4>Real-Time Reporting Dashboards</h4>
								<p>
									Live dashboards with full transparency on spend, impressions,
									conversions and revenue attribution — 24/7.
								</p>
							</div>
						</div>

						<div className='check-item' data-a='up' data-d='4'>
							<div className='chk'>✓</div>
							<div className='chk-body'>
								<h4>Dedicated Account Manager</h4>
								<p>
									Every partner gets a dedicated team member. No ticket queues,
									no delays — direct Telegram/Skype communication.
								</p>
							</div>
						</div>
					</div>
				</div>

				{/* <!-- Right: staggered cards --> */}
				<div className='feat-cards'>
					<div className='fc' data-a='scale' data-d='1'>
						<div className='fc-ico'>📈</div>
						<h4 className='fc-title'>Data-Driven Buying</h4>
						<p className='fc-body'>
							Bidding strategies informed by real conversion data. No guesswork
							— pure performance logic at scale.
						</p>
					</div>

					<div className='fc' data-a='scale' data-d='2'>
						<div className='fc-ico'>🛡️</div>
						<h4 className='fc-title'>Brand-Safe Traffic</h4>
						<p className='fc-body'>
							Custom placement lists and negative keyword exclusions to protect
							your brand at all times.
						</p>
					</div>

					<div className='fc' data-a='scale' data-d='3'>
						<div className='fc-ico'>🌍</div>
						<h4 className='fc-title'>Global GEO Coverage</h4>
						<p className='fc-body'>
							Tier-1, LATAM, APAC and MENA — we have the infrastructure to scale
							to any region instantly.
						</p>
					</div>

					<div className='fc' data-a='scale' data-d='4'>
						<div className='fc-ico'>⚡</div>
						<h4 className='fc-title'>48h Campaign Launch</h4>
						<p className='fc-body'>
							From brief to live in under 48 hours. Streamlined onboarding means
							you never miss a traffic window.
						</p>
					</div>
				</div>
			</div>
		</div>
	)
}
