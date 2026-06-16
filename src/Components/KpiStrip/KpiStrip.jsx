import React from 'react'
import './kpistrip.css'
import { useScrollAnimation } from '../../hooks/useScrollAnimation'

const KPI_DATA = [
	{ id: 1, v: '$12M+', l: 'Monthly Ad Spend' },
	{ id: 2, v: '340%', l: 'Average Campaign ROI' },
	{ id: 3, v: '8+', l: 'Traffic Channels' },
	{ id: 4, v: '60+', l: 'GEOs Worldwide' },
]

export default function KpiStrip() {
    useScrollAnimation();

	return (
		<div className='hero-kpis vis' data-a='up' data-d='4'>
			{KPI_DATA.map(src => (
				<div className='kpi' key={src.id}>
					<span className='kpi-v'>{src.v}</span>
					<span className='kpi-l'>{src.l}</span>
				</div>
			))}
		</div>
	)
}
