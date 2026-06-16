import React, { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom' 
import './navbar.css'

export default function Navbar() {
	const [isScrolled, setIsScrolled] = useState(false)
	const [burgerMenu, setBurgerMenu] = useState(false)

	// <-- 2. Получаем текущий путь (выдаст "/" или "/contacts")
	const location = useLocation()

	useEffect(() => {
		const handleScroll = () => {
			if (window.scrollY > 55) {
				setIsScrolled(true)
			} else {
				setIsScrolled(false)
			}
		}
		window.addEventListener('scroll', handleScroll)
		return () => window.removeEventListener('scroll', handleScroll)
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
	}, [burgerMenu])

	const toggleMenu = () => setBurgerMenu(!burgerMenu)
	const closeMenu = () => setBurgerMenu(false)

	// <-- 3. Проверяем, находится ли пользователь на странице контактов
	const isContactsPage = location.pathname === '/contacts'

	return (
		<nav className={`navbar ${isScrolled ? 'scrolled' : ''}`} id='navbar'>
			<div className='container'>
				<div className='nav-inner'>
					<Link to='/' className='logo'>
						<div className='logo-mark'>RM</div>
						<div className='logo-name'>
							Rhine <span>Media</span>
						</div>
					</Link>

					{/* Desktop links */}
					<ul className='nav-links'>
						<li>
							<a href='/#verticals'>Verticals</a>
						</li>
						<li>
							<a href='/#traffic'>Traffic Sources</a>
						</li>
						<li>
							<a href='/#partners'>Partners</a>
						</li>
						<li>
							<a href='/#why-us'>Why Us</a>
						</li>
						<li>
							<Link to='/contacts'>Contact</Link>
						</li>
					</ul>

					{/* Right CTA + hamburger */}
					<div className='nav-right'>
						{/* 4. Используем тернарный оператор для смены кнопок на десктопе */}
						{isContactsPage ? (
							<>
								<Link to='/' className='btn btn-ghost'>
									Back to Home
								</Link>
								{/* Кнопку Send Message можно сделать тегом button или ссылкой на форму */}
								<a href='#contact-form' className='btn btn-primary btn-mobile'>
									Send Message
								</a>
							</>
						) : (
							<>
								<Link to='/contacts' className='btn btn-ghost'>
									Get in Touch
								</Link>
								<Link to='/contacts' className='btn btn-primary btn-mobile'>
									Start Cooperation
								</Link>
							</>
						)}

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

			{/* Mobile menu drawer */}
			<div className={`mob-menu ${burgerMenu ? 'open' : ''}`} id='mobMenu'>
				<span className='mob-close' id='mobClose' onClick={closeMenu}>
					✕
				</span>
				<a href='/#verticals' className='mob-link' onClick={closeMenu}>
					Verticals
				</a>
				<a href='/#traffic' className='mob-link' onClick={closeMenu}>
					Traffic Sources
				</a>
				<a href='/#partners' className='mob-link' onClick={closeMenu}>
					Partners
				</a>
				<a href='/#why-us' className='mob-link' onClick={closeMenu}>
					Why Us
				</a>
				<Link to='/contacts' className='mob-link' onClick={closeMenu}>
					Contact
				</Link>

				{/* 5. Точно такая же проверка для мобильного меню */}
				{isContactsPage ? (
					<Link
						to='/'
						className='btn btn-primary'
						style={{ marginTop: '14px' }}
						onClick={closeMenu}
					>
						Back to Home
					</Link>
				) : (
					<Link
						to='/contacts'
						className='btn btn-primary'
						style={{ marginTop: '14px' }}
						onClick={closeMenu}
					>
						Start Cooperation
					</Link>
				)}
			</div>
		</nav>
	)
}
