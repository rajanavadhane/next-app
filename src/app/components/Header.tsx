"use client"
import React, { useState } from "react"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { SocialPill } from "./SocialPill"

const Header = () => {
  function DesktopNav() {
    const path = usePathname()

    const determineActiveClass = (link: string): string => {
      return path === link ? "text-text-primary" : "text-gray-500"
    }
    type NavigationLink = {
      name: string
      link: string
    }
    const navigationLinks: readonly NavigationLink[] = [
      { name: "Home", link: "/" },
      { name: "About", link: "/about" },
      { name: "Blog", link: "/blog" },
      { name: "Projects", link: "/projects" },
      { name: "Speaking", link: "/speaking" },
      { name: "Toolbox", link: "/toolbox" },
    ] as const

    return (
      <nav
        className="hidden h-16 w-full items-center justify-between border-border-primary/50 px-4 md:flex"
        aria-label="Desktop navigation"
      >
        <div className="w-[104px]">
          <Link href="/" aria-label="Home">
            <img src="/code-solid.svg" alt="App Logo" className="h-6 w-6" />
          </Link>
        </div>
        <ul className="flex place-items-center space-x-4 rounded-full border border-border-primary px-5 py-2 text-sm text-gray-500">
          {navigationLinks.map(link => (
            <li key={link.name}>
              <Link
                href={link.link}
                prefetch={true}
                className={`${determineActiveClass(
                  link.link
                )} font-medium hover:text-text-primary`}
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
        <SocialPill />
      </nav>
    )
  }

  return (
    <div>
      <DesktopNav />
    </div>
  )
}

export default Header
