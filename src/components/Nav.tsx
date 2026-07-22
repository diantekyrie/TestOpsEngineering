'use client'

import { useState, useEffect } from 'react'
import { usePathname } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'

export default function Nav() {
  const pathname = usePathname()
  const isHome = pathname === '/' || pathname === ''
  const [menuOpen, setMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('')

  // On non-home pages, prefix section links with '/' so they navigate home first
  const s = (hash: string) => isHome ? hash : `/${hash}`

  useEffect(() => {
    if (!isHome) return
    const handleScroll = () => {
      const scrollY = window.pageYOffset
      const sections = document.querySelectorAll<HTMLElement>('section[id], div[id]')
      sections.forEach((section) => {
        const top = section.offsetTop - 80
        const bottom = top + section.offsetHeight
        const id = section.getAttribute('id')
        if (scrollY >= top && scrollY < bottom && id) {
          setActiveSection(id)
        }
      })
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [isHome])

  useEffect(() => {
    const handleOutsideClick = (e: MouseEvent) => {
      const menu = document.getElementById('mobileMenu')
      const hamburger = document.querySelector('.nav-hamburger')
      if (
        menuOpen &&
        menu &&
        hamburger &&
        !menu.contains(e.target as Node) &&
        !hamburger.contains(e.target as Node)
      ) {
        setMenuOpen(false)
      }
    }
    document.addEventListener('click', handleOutsideClick)
    return () => document.removeEventListener('click', handleOutsideClick)
  }, [menuOpen])

  const navColor = (id: string) =>
    isHome && activeSection === id ? 'var(--accent)' : undefined

  return (
    <nav>
      <div className="nav-inner">
        <Link className="logo" href="/">
          <Image src="/test_ops_logo.png" alt="TestOps Engineering logo" width={34} height={34} />
          TestOps Engineering
        </Link>
        <div className="nav-right">
          <ul className="nav-links">
            <li><a href={s('#for')}      style={{ color: navColor('for') }}>Who it&apos;s for</a></li>
            <li><a href={s('#services')} style={{ color: navColor('services') }}>Services</a></li>
            <li><a href={s('#work')}     style={{ color: navColor('work') }}>Work</a></li>
            <li><a href={s('#pricing')}  style={{ color: navColor('pricing') }}>Pricing</a></li>
          </ul>
          {isHome
            ? <Link className="nav-cta" href="/contact">Contact</Link>
            : <Link className="nav-cta" href="/">Home</Link>
          }
          <button
            className="nav-hamburger"
            onClick={() => setMenuOpen((o) => !o)}
            aria-label="Toggle navigation"
          >
            <span /><span /><span />
          </button>
        </div>
      </div>

      <div className={`mobile-menu${menuOpen ? ' open' : ''}`} id="mobileMenu">
        <a href={s('#for')}      onClick={() => setMenuOpen(false)}>Who it&apos;s for</a>
        <a href={s('#services')} onClick={() => setMenuOpen(false)}>Services</a>
        <a href={s('#work')}     onClick={() => setMenuOpen(false)}>Work</a>
        <a href={s('#pricing')}  onClick={() => setMenuOpen(false)}>Pricing</a>
        {isHome
          ? <Link href="/contact" className="accent" onClick={() => setMenuOpen(false)}>Contact</Link>
          : <Link href="/" className="accent" onClick={() => setMenuOpen(false)}>Home</Link>
        }
      </div>
    </nav>
  )
}
