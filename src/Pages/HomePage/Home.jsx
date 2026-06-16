// import './App.css'
import Features from './../../Components/Features/Features'
import { Link } from 'react-router-dom'
import KpiStrip from './../../Components/KpiStrip/KpiStrip'
import MarqueeStrip from './../../Components/MarqueeStrip/MarqueeStrip'

import Partners from './../../Components/Partners/Partners'
import Sta from './../../Components/STA/Sta'
import StatsBand from './../../Components/StatsBand/StatsBand'
import Traffic from './../../Components/Traffic/Traffic'
import Verticals from './../../Components/Verticals/Verticals'


function Home() {
    return (
			<>
				<section className='hero'>
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

					<div
						className='container'
						style={{ position: 'relative', zIndex: 2 }}
					>
						<div style={{ maxWidth: '780px' }}>
							<div className='hero-badge vis'>
								<span className='badge-pulse'></span>
								Performance Media Buying Team
							</div>

							<h1 className='hero-h1 vis' data-a='up' data-d='1'>
								<span style={{ display: 'block' }}>Performance Media</span>
								<span style={{ display: 'block' }}>
									Buying Team |&nbsp;
									<span className='hl'>Rhine Media</span>
								</span>
							</h1>

							<p className='hero-sub vis' data-a='up' data-d='2'>
								We buy traffic for{' '}
								<strong>Dating, Nutra, Gambling, Sweepstakes, iGaming </strong>
								and more — across all major channels, in every major GEO, at
								premium scale.
							</p>

							<div className='hero-actions vis' data-a='up' data-d='3'>
								<Link to='/contacts' className='btn btn-primary'>
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
								</Link>
								<Link to='/contacts' className='btn btn-ghost'>
									Get in Touch
								</Link>
							</div>

							<KpiStrip />
						</div>
					</div>
				</section>

				<StatsBand />

				<section className='section verticals' id='verticals'>
					<Verticals />
				</section>

				<section className='section traffic' id='traffic'>
					<Traffic />
				</section>

				<section className='partners' id='partners'>
					<Partners />
					<MarqueeStrip />
				</section>

				<section className='section features' id='why-us'>
					<Features />
				</section>

				<section className='cta-sec'>
					<Sta />
				</section>
			</>
		)
}

export default Home
