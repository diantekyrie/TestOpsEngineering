'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'

export default function Nav() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('')

  useEffect(() => {
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
  }, [])

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
    activeSection === id ? 'var(--accent)' : undefined

  return (
    <nav>
      <div className="nav-inner">
        <Link className="logo" href="/">
          <Image src="/test_ops_logo.png" alt="TestOps Engineering logo" width={34} height={34} />
          TestOps Engineering
        </Link>
        <div className="nav-right">
          <ul className="nav-links">
            <li><a href="#for"      style={{ color: navColor('for') }}>Who it&apos;s for</a></li>
            <li><a href="#services" style={{ color: navColor('services') }}>Services</a></li>
            <li><a href="#work"     style={{ color: navColor('work') }}>Work</a></li>
            <li><a href="#pricing"  style={{ color: navColor('pricing') }}>Pricing</a></li>
          </ul>
          <Link className="nav-cta" href="/contact">Contact</Link>
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
        <a href="#for"      onClick={() => setMenuOpen(false)}>Who it&apos;s for</a>
        <a href="#services" onClick={() => setMenuOpen(false)}>Services</a>
        <a href="#work"     onClick={() => setMenuOpen(false)}>Work</a>
        <a href="#pricing"  onClick={() => setMenuOpen(false)}>Pricing</a>
        <Link href="/contact" className="accent" onClick={() => setMenuOpen(false)}>Contact</Link>
      </div>
    </nav>
  )
}
