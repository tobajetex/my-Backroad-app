import React from 'react'
import { pageLinks, navIcon } from './data'
import logo from '../assets/images/logo.svg'

function Navbar() {
  const filteredLinks = pageLinks.filter(
    (newLinksObj) => newLinksObj.text !== 'features'
  )
  const navbar = filteredLinks.map((link) => {
    const { id, href, text } = link
    return (
      <li className="nav-link" key={id}>
        <a href={href} className="nav-link">
          {text}
        </a>
      </li>
    )
  })
  return (
    <nav class="navbar">
      <div class="nav-center">
        <div class="nav-header">
          <img src={logo} class="nav-logo" alt="backroads" />
          <button type="button" class="nav-toggle" id="nav-toggle">
            <i class="fas fa-bars"></i>
          </button>
        </div>
        {/* <!-- left this comment on purpose --> */}

        <ul class="nav-links" id="nav-links">
          {navbar}
        </ul>

        <ul class="nav-icons">
          {navIcon.map((icon) => {
            const { href, class: iconClass } = icon
            return (
              <li>
                <a href={href} target="_blank" class="nav-icon">
                  <i class={iconClass}></i>
                </a>
              </li>
            )
          })}
        </ul>
      </div>
    </nav>
  )
}

export default Navbar
