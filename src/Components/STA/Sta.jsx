import React from 'react'
import './sta.css'
import { useScrollAnimation } from '../../hooks/useScrollAnimation'

export default function Sta() {
    useScrollAnimation();

  return (
		
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
						<a href='contact.html' className='btn btn-primary btn-sta'>
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
		
	)
}
