import React from 'react'

export default function Footer({ onLinkClick = () => {}, mobile = false }) {
  const links = [
    { label: "Contact", href: "/contact" },
    { label: "Privacy", href: "/privacy" },
    { label: "Policies", href: "/policies" },
  ]

  return (
    <footer className='footer'>
      <div  className='footer-text'>
        <ul className={`nav-list ${mobile ? 'mobile' : ''}`}>
            {links.map((link) => (
              <li key={link.href}>
                <a href={link.href} onClick={onLinkClick}>
                  {link.label}
                </a>
              </li>
            ))}
        </ul>
      </div>
    </footer>

  )
}