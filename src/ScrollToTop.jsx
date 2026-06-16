import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

export default function ScrollToTop() {
	//useLocation следит за изменением текущего URL-адреса
	const { pathname } = useLocation()

	useEffect(() => {
		// Как только адрес меняется, принудительно скроллим окно браузера в координаты (0, 0) — самый верх
		window.scrollTo(0, 0)
	}, [pathname])

	return null // Этот компонент ничего не рендерит на экран, он просто выполняет логику
}
