import React from 'react'
import './statsband.css'
import { useScrollAnimation } from '../../hooks/useScrollAnimation'

const STATS_DATA = [
	{
		id: 1,
		delay: '1',
		num: '4.2B+',
		lbl: 'Ad Impressions / Month',
		sub: 'Across all traffic sources',
	},
	{
		id: 2,
		delay: '2',
		num: '340%',
		lbl: 'Average ROI',
		sub: 'Verified by partners',
	},
	{
		id: 3,
		delay: '3',
		num: '7',
		lbl: 'Verticals Mastered',
		sub: 'Dating, Nutra, Gambling & more',
	},
	{
		id: 4,
		delay: '4',
		num: '60+',
		lbl: 'Global GEOs',
		sub: 'Tier-1 & emerging markets',
	},
]

export default function StatsBand() {
    useScrollAnimation();

	return (
		<div className='stats-band'>
			<div className='container'>
				<div className='stats-row'>
					{STATS_DATA.map(src => (
						<div className='stat-cell' data-a='up' data-d={src.delay} key={src.id}>
							<p className='stat-num'>{src.num}</p>
							<p className='stat-lbl'>{src.lbl}</p>
							<p className='stat-sub'>{src.sub}</p>
						</div>
					))}
				</div>
			</div>
		</div>
	)
}
