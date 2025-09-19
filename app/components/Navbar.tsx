"use client"
import Image from "next/image"
import Link from "next/link"
import React, { useLayoutEffect, useRef, useEffect, useState } from "react"
import { gsap } from "gsap"
import { usePathname } from "next/navigation"
import logo from "../assets/logo2.svg"

const Navbar = () => {
  const pathname = usePathname()
  const navWrapperRef = useRef<HTMLDivElement | null>(null)
  const navRef = useRef<HTMLUListElement | null>(null)
  const highlightRef = useRef<HTMLDivElement | null>(null)
  const navbarRef = useRef<HTMLElement | null>(null)
  const mobileMenuRef = useRef<HTMLDivElement | null>(null)
  const initialized = useRef(false)
  const activeLinkRef = useRef<HTMLElement | null>(null)

  const [isVisible, setIsVisible] = useState(true)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [drawerWidth, setDrawerWidth] = useState(0)
  const lastScrollY = useRef(0)

  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen)
  const closeMobileMenu = () => setIsMobileMenuOpen(false)

  // Calculate drawer width (75% of screen)
  useEffect(() => {
    const calculateDrawerWidth = () => {
      const screenWidth = window.innerWidth
      setDrawerWidth(Math.floor(screenWidth * 0.75))
    }

    calculateDrawerWidth()
    window.addEventListener('resize', calculateDrawerWidth)
    return () => window.removeEventListener('resize', calculateDrawerWidth)
  }, [])

  // Scroll handler
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY
      if (currentScrollY <= 10) {
        setIsVisible(true)
      } else if (currentScrollY > lastScrollY.current && currentScrollY > 100) {
        setIsVisible(false)
      } else if (currentScrollY < lastScrollY.current) {
        setIsVisible(true)
      }
      lastScrollY.current = currentScrollY
    }

    let ticking = false
    const throttledHandleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          handleScroll()
          ticking = false
        })
        ticking = true
      }
    }

    window.addEventListener("scroll", throttledHandleScroll, { passive: true })
    return () => window.removeEventListener("scroll", throttledHandleScroll)
  }, [])

  // Animate navbar visibility
  useEffect(() => {
    if (navbarRef.current) {
      gsap.to(navbarRef.current, {
        y: isVisible ? 0 : -100,
        opacity: isVisible ? 1 : 0,
        duration: 0.8,
        ease: "power2.inOut"
      })
    }
  }, [isVisible])

  // Animate mobile menu
  useEffect(() => {
    if (mobileMenuRef.current && drawerWidth > 0) {
      if (isMobileMenuOpen) {
        gsap.set(mobileMenuRef.current, { display: "block" })
        gsap.to(mobileMenuRef.current, {
          x: 0,
          opacity: 1,
          duration: 0.5,
          ease: "power3.out"
        })
        document.body.style.overflow = "hidden"
      } else {
        gsap.to(mobileMenuRef.current, {
          x: -drawerWidth,
          opacity: 0,
          duration: 0.4,
          ease: "power3.in",
          onComplete: () => {
            gsap.set(mobileMenuRef.current, { display: "none" })
          }
        })
        document.body.style.overflow = "unset"
      }
    }
    return () => {
      document.body.style.overflow = "unset"
    }
  }, [isMobileMenuOpen, drawerWidth])

  // Highlight animation
  useLayoutEffect(() => {
    if (!navRef.current) return

    const ctx = gsap.context(() => {
      const links = navRef.current!.querySelectorAll("li a")
      if (!links) return

      const activeLink = [...links].find(
        (link) => link.getAttribute("href") === pathname
      ) as HTMLElement | null

      function moveHighlight(target: HTMLElement, animate = true) {
        const rect = target.getBoundingClientRect()
        const wrapperRect = navWrapperRef.current?.getBoundingClientRect()
        if (wrapperRect && highlightRef.current) {
          const props = {
            x: rect.left - wrapperRect.left,
            y: rect.top - wrapperRect.top,
            width: rect.width,
            height: rect.height,
          }

          // reset all link colors first
          gsap.set(links, { color: "#000" })

          if (animate) {
            gsap.to(highlightRef.current, { ...props, ease: "power3.out", duration: 0.4 })
            gsap.to(target, { color: "#fff", duration: 0.3 })
          } else {
            gsap.set(highlightRef.current, props)
            gsap.set(target, { color: "#fff" })
          }

          activeLinkRef.current = target
        }
      }

      if (activeLink) {
        requestAnimationFrame(() => {
          moveHighlight(activeLink, initialized.current) // animate after first load
          if (!initialized.current) initialized.current = true
        })
      }

      const handleMouseEnter = (e: Event) =>
        moveHighlight(e.currentTarget as HTMLElement)
      const handleMouseLeave = () => {
        if (activeLinkRef.current) moveHighlight(activeLinkRef.current)
      }

      links.forEach((link) => {
        link.addEventListener("mouseenter", handleMouseEnter)
        link.addEventListener("mouseleave", handleMouseLeave)
      })

      return () => {
        links.forEach((link) => {
          link.removeEventListener("mouseenter", handleMouseEnter)
          link.removeEventListener("mouseleave", handleMouseLeave)
        })
      }
    }, navRef)

    return () => ctx.revert()
  }, [pathname])

  return (
    <>
      <nav
        ref={navbarRef}
        className="fixed top-[10px] left-[15px] right-[15px] max-w-[1920px] bg-white z-50 rounded-xl min-h-[62px] px-5 shadow-md border !border-gray-400 transition-all duration-700 ease-in-out"
      >
        <div className="flex items-center justify-between h-full min-h-[65px] !px-4 sm:!px-8 lg:!px-10 xl:!px-14">
          {/* Left: Logo */}
          <div className="flex-shrink-0 h-full flex items-center">
            <Link href="/" className="flex items-center h-full">
              <Image
                src={logo}
                alt="Logo"
                width={150}
                height={100}
                className="cursor-pointer object-contain w-24 sm:w-32 lg:w-36 xl:w-40"
              />
            </Link>
          </div>

          {/* Center: Desktop Navigation */}
          <div
            ref={navWrapperRef}
            className="hidden lg:flex relative bg-gray-100 rounded-full !px-1 !py-1 shadow-inner"
          >
            {/* Highlight */}
            <div
              ref={highlightRef}
              className="absolute top-0 left-0 bg-black rounded-full pointer-events-none z-0"
            ></div>

            {/* Links */}
            <ul
              ref={navRef}
              className="flex items-center gap-6 text-base font-medium text-black relative z-10"
            >
              <li>
                <Link href="/" className="block !px-4 !py-2 rounded-full">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="block !px-4 !py-2 rounded-full">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/projects" className="block !px-4 !py-2 rounded-full">
                  Projects
                </Link>
              </li>
              <li>
                <Link href="/services" className="block !px-4 !py-2 rounded-full">
                  Service
                </Link>
              </li>
            </ul>
          </div>

          {/* Right: Desktop Contact Button + Mobile Hamburger */}
          <div className="flex items-center gap-4">
            <Link
              href="/contact"
              className="hidden lg:flex items-center gap-3 !px-6 xl:!px-10 !py-2 rounded-lg cursor-pointer bg-teal-600 !text-white transition-transform duration-300 hover:scale-105 hover:bg-teal-700 text-sm xl:text-base"
            >
              Contact Us
            </Link>
            {/* Mobile Hamburger */}
            <button
              onClick={toggleMobileMenu}
              className="lg:hidden flex flex-col justify-center items-center w-10 h-10 rounded-lg bg-gray-100 hover:bg-gray-200 transition-colors duration-200 focus:outline-none relative"
              aria-label="Toggle mobile menu"
            >
              <span
                className={`block w-5 h-0.5 bg-black transition-all duration-300 absolute ${
                  isMobileMenuOpen ? "rotate-45" : "translate-y-[-4px]"
                }`}
              ></span>
              <span
                className={`block w-5 h-0.5 bg-black transition-all duration-300 ${
                  isMobileMenuOpen ? "opacity-0" : ""
                }`}
              ></span>
              <span
                className={`block w-5 h-0.5 bg-black transition-all duration-300 absolute ${
                  isMobileMenuOpen ? "-rotate-45" : "translate-y-[4px]"
                }`}
              ></span>
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Drawer */}
      <div
        ref={mobileMenuRef}
        className="lg:hidden fixed top-0 left-0 h-full bg-gradient-to-b from-white to-gray-50 shadow-2xl z-[60] hidden border-r border-gray-200 backdrop-blur-sm"
        style={{ 
          width: `${drawerWidth}px`,
          transform: `translateX(-${drawerWidth}px)`
        }}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-200 bg-white/80 backdrop-blur-md">
          <Link href="/" className="flex items-center" onClick={closeMobileMenu}>
            <Image
              src={logo}
              alt="Logo"
              width={140}
              height={90}
              className="cursor-pointer object-contain"
            />
          </Link>
          <button
            onClick={closeMobileMenu}
            className="p-2 rounded-xl hover:bg-gray-100 transition-all duration-200 hover:rotate-90 bg-gray-50"
            aria-label="Close menu"
          >
            <svg
              className="w-6 h-6 text-gray-700"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2.5"
                d="M6 18L18 6M6 6l12 12"
              ></path>
            </svg>
          </button>
        </div>

        {/* Menu Content */}
        <div className="flex flex-col h-full pt-8 pb-6">
          {/* Navigation Links */}
          <div className="flex-1 px-6">
            <div className="mb-6">
              <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-4 px-4">
                Navigation
              </h3>
              <ul className="space-y-3">
                <li>
                  <Link
                    href="/"
                    className={`block px-5 py-4 rounded-xl text-lg font-medium transition-all duration-300 relative overflow-hidden group ${
                      pathname === "/"
                        ? "bg-gradient-to-r from-teal-600 to-teal-700 text-white shadow-lg shadow-teal-600/25"
                        : "text-gray-800 hover:bg-gray-100 hover:shadow-md"
                    }`}
                    onClick={closeMobileMenu}
                  >
                    <div className="flex items-center justify-between">
                      <span>Home</span>
                      <svg className={`w-5 h-5 transition-transform duration-300 ${pathname === "/" ? "translate-x-0" : "translate-x-1 group-hover:translate-x-0"}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                      </svg>
                    </div>
                    {pathname !== "/" && (
                      <div className="absolute inset-0 bg-gradient-to-r from-teal-600/5 to-teal-700/5 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300"></div>
                    )}
                  </Link>
                </li>
                <li>
                  <Link
                    href="/about"
                    className={`block px-5 py-4 rounded-xl text-lg font-medium transition-all duration-300 relative overflow-hidden group ${
                      pathname === "/about"
                        ? "bg-gradient-to-r from-teal-600 to-teal-700 text-white shadow-lg shadow-teal-600/25"
                        : "text-gray-800 hover:bg-gray-100 hover:shadow-md"
                    }`}
                    onClick={closeMobileMenu}
                  >
                    <div className="flex items-center justify-between">
                      <span>About Us</span>
                      <svg className={`w-5 h-5 transition-transform duration-300 ${pathname === "/about" ? "translate-x-0" : "translate-x-1 group-hover:translate-x-0"}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                      </svg>
                    </div>
                    {pathname !== "/about" && (
                      <div className="absolute inset-0 bg-gradient-to-r from-teal-600/5 to-teal-700/5 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300"></div>
                    )}
                  </Link>
                </li>
                <li>
                  <Link
                    href="/projects"
                    className={`block px-5 py-4 rounded-xl text-lg font-medium transition-all duration-300 relative overflow-hidden group ${
                      pathname === "/projects"
                        ? "bg-gradient-to-r from-teal-600 to-teal-700 text-white shadow-lg shadow-teal-600/25"
                        : "text-gray-800 hover:bg-gray-100 hover:shadow-md"
                    }`}
                    onClick={closeMobileMenu}
                  >
                    <div className="flex items-center justify-between">
                      <span>Projects</span>
                      <svg className={`w-5 h-5 transition-transform duration-300 ${pathname === "/projects" ? "translate-x-0" : "translate-x-1 group-hover:translate-x-0"}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                      </svg>
                    </div>
                    {pathname !== "/projects" && (
                      <div className="absolute inset-0 bg-gradient-to-r from-teal-600/5 to-teal-700/5 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300"></div>
                    )}
                  </Link>
                </li>
                <li>
                  <Link
                    href="/services"
                    className={`block px-5 py-4 rounded-xl text-lg font-medium transition-all duration-300 relative overflow-hidden group ${
                      pathname === "/services"
                        ? "bg-gradient-to-r from-teal-600 to-teal-700 text-white shadow-lg shadow-teal-600/25"
                        : "text-gray-800 hover:bg-gray-100 hover:shadow-md"
                    }`}
                    onClick={closeMobileMenu}
                  >
                    <div className="flex items-center justify-between">
                      <span>Services</span>
                      <svg className={`w-5 h-5 transition-transform duration-300 ${pathname === "/services" ? "translate-x-0" : "translate-x-1 group-hover:translate-x-0"}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                      </svg>
                    </div>
                    {pathname !== "/services" && (
                      <div className="absolute inset-0 bg-gradient-to-r from-teal-600/5 to-teal-700/5 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300"></div>
                    )}
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          {/* Footer CTA */}
          <div className="px-6 pt-6 border-t border-gray-200 bg-gradient-to-r from-gray-50 to-white">
            <Link
              href="/contact"
              className="block w-full px-6 py-4 bg-gradient-to-r from-teal-600 to-teal-700 text-white text-center text-lg font-semibold rounded-2xl hover:from-teal-700 hover:to-teal-800 transition-all duration-300 shadow-lg shadow-teal-600/25 hover:shadow-xl hover:shadow-teal-600/30 hover:scale-105 active:scale-95"
              onClick={closeMobileMenu}
            >
              <span className="flex items-center justify-center gap-3">
                Contact Us
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
                </svg>
              </span>
            </Link>
          </div>
        </div>
      </div>

      {/* Enhanced Backdrop */}
      {isMobileMenuOpen && (
        <div
          className="lg:hidden fixed inset-0 bg-gradient-to-r from-black/60 to-black/40 backdrop-blur-sm z-[55] transition-all duration-300"
          onClick={closeMobileMenu}
        ></div>
      )}
    </>
  )
}

export default Navbar