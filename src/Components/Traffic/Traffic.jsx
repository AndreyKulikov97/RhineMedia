import React from 'react'
import './traffic.css'
import { useScrollAnimation } from '../../hooks/useScrollAnimation'

const TRAFFIC_SOURCES = [
	{
		id: 1,
		ico: '🚀',
		name: 'PropellerAds',
		sub: 'Push / Pop / OnClick',
		delay: '1',
	},
	{
		id: 2,
		ico: '🔍',
		name: 'Google Ads',
		sub: 'Search / Display / YouTube',
		delay: '2',
	},
	{
		id: 3,
		ico: '🍎',
		name: 'Apple Search Ads',
		sub: 'iOS App Install',
		delay: '3',
	},
	{
		id: 4,
		ico: '📘',
		name: 'Meta Ads',
		sub: 'Facebook / Instagram',
		delay: '4',
	},
	{
		id: 5,
		ico: '🎵',
		name: 'TikTok Ads',
		sub: 'In-Feed / TopView / Spark',
		delay: '1',
	},
	{
		id: 6,
		ico: '📰',
		name: 'Native Ads',
		sub: 'Taboola / Outbrain',
		delay: '2',
	},
	{
		id: 7,
		ico: '🔔',
		name: 'Push Notifications',
		sub: 'Web & In-App Push',
		delay: '3',
	},
	{
		id: 8,
		ico: '💥',
		name: 'Pop Traffic',
		sub: 'Popunder / Interstitial',
		delay: '4',
	},
]

export default function Traffic() {
    useScrollAnimation();

  return (
		<div className='container'>
			<div className='sec-center' data-a='up' data-d='1'>
				<div className='eyebrow'>Traffic Sources We Master</div>
				<h2 className='sec-title'>
					Every Major <span className='text-blue'>Channel</span>
				</h2>
				<p className='sec-sub'>
					Full-stack traffic expertise across paid, native, push and
					programmatic channels worldwide.
				</p>
			</div>

			<div className='src-grid'>
				{TRAFFIC_SOURCES.map(src => (
					<div className='src-card' data-a='left' data-d={src.delay} key={src.id}>
                        <div className='src-ico'>{src.ico}</div>
						<div className='src-name'>{src.name}</div>
						<div className='src-sub'>{src.sub}</div>
					</div>
				))}
			</div>
		</div>
	)
}
