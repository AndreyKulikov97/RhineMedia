import React, { useEffect } from 'react'

export function useScrollAnimation() {
    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('vis')
                        observer.unobserve(entry.target)
                    }
                })
            },
            {
                threshold: 0.1,
                rootMargin: '0px 0px -40px 0px'
            }
        )

        const animatedElements = document.querySelectorAll('[data-a')
        animatedElements.forEach(el => observer.observe(el))

        return() => observer.disconnect()
    }, [])
}
