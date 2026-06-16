import React, { useEffect, useState } from 'react'
import './navbar.css'

export default function Navbar({
	ctagGhostText = 'Get in Touch',
	ctaGhostLink = 'contact.html',
	ctaPrimaryText = 'Start Cooperation',
	ctaPimaryLink = 'conact.html'
}) {
    const [isScrolled, setIsScrolled] = useState(false)
    const [burgerMenu, setBurgerMenu] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 55) {
                setIsScrolled(true)
            } else {
                setIsScrolled(false)
            }
        }

        window.addEventListener('scroll', handleScroll)
        
        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    }, [])

    useEffect(() => {
        if (burgerMenu) {
            document.body.style.overflow = 'hidden'
        } else {
            document.body.style.overflow = ''
        }

        return () => {
            document.body.style.overflow = ''
        }
    },[burgerMenu])

    const toggleMenu = () => setBurgerMenu(!burgerMenu)
    const closeMenu = () => setBurgerMenu(false)

  return (
		<nav className={`navbar ${isScrolled ? 'scrolled' : ''}`} id='navbar'>
			<div className='container'>
				<div className='nav-inner'>
					{/* <!-- Logo --> */}
					<a href='index.html' className='logo'>
						<div className='logo-mark'>RM</div>
						<div className='logo-name'>
							Rhine <span>Media</span>
						</div>
					</a>

					{/* <!-- Desktop links --> */}
					<ul className='nav-links'>
						<li>
							<a href='#verticals'>Verticals</a>
						</li>
						<li>
							<a href='#traffic'>Traffic Sources</a>
						</li>
						<li>
							<a href='#partners'>Partners</a>
						</li>
						<li>
							<a href='#why-us'>Why Us</a>
						</li>
						<li>
							<a href='contact.html'>Contact</a>
						</li>
					</ul>

					{/* <!-- Right CTA + hamburger --> */}
					<div className='nav-right'>
						<a href={ctaGhostLink} className='btn btn-ghost'>
							{ctaPrimaryText}
						</a>
						<a href={ctaPimaryLink} className='btn btn-primary btn-mobile'>
							{ctaPrimaryText}
						</a>
						<button
							className='ham'
							id='ham'
							aria-label='Open menu'
							onClick={toggleMenu}
						>
							<span></span>
							<span></span>
							<span></span>
						</button>
					</div>
				</div>
			</div>
			{/* <!-- Mobile menu drawer --> */}

			<div className={`mob-menu ${burgerMenu ? 'open' : ''}`} id='mobMenu'>
				<span className='mob-close' id='mobClose' onClick={closeMenu}>
					✕
				</span>
				<a href='#verticals' className='mob-link' onClick={closeMenu}>
					Verticals
				</a>
				<a href='#traffic' className='mob-link' onClick={closeMenu}>
					Traffic Sources
				</a>
				<a href='#partners' className='mob-link' onClick={closeMenu}>
					Partners
				</a>
				<a href='#why-us' className='mob-link' onClick={closeMenu}>
					Why Us
				</a>
				<a href='contact.html' className='mob-link' onClick={closeMenu}>
					Contact
				</a>
				<a
					href={ctaPimaryLink}
					className='btn btn-primary'
					style={{ marginTop: '14px' }}
					onClick={closeMenu}
				>
					{ctaPrimaryText}
				</a>
			</div>
		</nav>
	)
}
