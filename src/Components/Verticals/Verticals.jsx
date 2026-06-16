import React from 'react'
import './verticals.css'
import { useScrollAnimation } from '../../hooks/useScrollAnimation'

const VERTICALS_DATA = [
	{ id: 1, delay: '1', emoji: '💘', name: 'Dating', pill: 'High Volume', desc: 'Mainstream & adult dating campaigns. SOI, DOI and trial offers across tier-1 GEOs with proven funnels.' },
  { id: 2, delay: '2', emoji: '💊', name: 'Nutra', pill: 'Premium GEOs', desc: 'Weight loss, supplements, skincare. Native & push traffic specialization with compliant creatives.' },
  { id: 3, delay: '3', emoji: '🎰', name: 'Gambling', pill: 'Top ROI', desc: 'Online casino, sports betting, poker. FTD-focused funnels with high player LTV and retention.' },
  { id: 4, delay: '4', emoji: '🔞', name: 'Adult', pill: 'Specialized', desc: 'Adult content & services. Compliant campaigns via premium adult traffic networks at scale.' },
  { id: 5, delay: '5', emoji: '🎁', name: 'Sweepstakes', pill: 'Mass Scale', desc: 'CC-submit & SOI sweeps. Push, pop and display traffic with high conversion rates globally.' },
  { id: 6, delay: '6', emoji: '₿', name: 'Crypto Offers', pill: 'Emerging', desc: 'Crypto trading platforms, wallets and exchange offers. FTD & CPA models in regulated GEOs.' },
  { id: 7, delay: '7', emoji: '📱', name: 'Mainstream', pill: 'Versatile', desc: 'App installs, e-commerce, utilities. Google, Meta and TikTok performance campaigns at scale.' },
  { id: 8, delay: '8', emoji: '🎮', name: 'iGaming', pill: 'Fast Growth', desc: 'Fantasy sports, esports betting and skill-based gaming platforms. Fast-growing vertical expertise.' }
];

export default function Verticals() {
    useScrollAnimation();

  return (
		<div className='container'>
			<div className='sec-center' data-a='up' data-d='1'>
				<div className='eyebrow'>Our Verticals</div>
				<h2 className='sec-title'>
					Niches We <span className='text-gold'>Dominate</span>
				</h2>
				<p className='sec-sub'>
					Deep expertise across the highest-performing verticals in performance
					marketing.
				</p>
			</div>

			<div className='v-grid'>
				{/* <!-- Dating --> */}
				{VERTICALS_DATA.map(src => (
					<div className='v-card' data-a='left' data-d={src.delay} key={src.id}>
                        <span className='v-emoji'>{src.emoji}</span>
                        <h3 className='v-name'>{src.name}</h3>
						<p className='v-desc'>
							{src.desc}
						</p>
						<span className='v-pill'>{src.pill}</span>
					</div>
				))}
			</div>
		</div>
	)
}
