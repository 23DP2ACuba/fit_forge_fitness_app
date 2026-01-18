import React from 'react'
export default function Navigation({ onLinkClick = () => {}, mobile = false }) {
  const links = [
    { label: "Home", href: "#hero" },
    { label: "AI Personalization", href: "#ai-personalization" },
    { label: "Progress Tracking", href: "#progress" },
  ]

  return (
    <ul className={`nav-list ${mobile ? 'mobile' : ''}`}>
      {links.map((link) => (
        <li key={link.href}>
          <a href={link.href} onClick={onLinkClick}>
            {link.label}
          </a>
        </li>
      ))}
    </ul>
  )
}

