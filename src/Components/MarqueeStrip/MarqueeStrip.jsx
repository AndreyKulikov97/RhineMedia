import React from 'react'
import './marqueeStrip.css'
import Ticker from '../Ticker/Ticker'

export default function MarqueeStrip() {
	return (
		<div className='marquee-wrap' style={{ marginTop: '44px' }}>
			<div className='marquee-track'>
				{/* <!-- Set 1 --> */}
				<Ticker />
				{/* <!-- Set 2 — duplicate for seamless infinite scroll --> */}
				<Ticker />
			</div>
		</div>
	)
}
