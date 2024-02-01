import React from 'react'
import { pageLinks, navIcon } from './data'
function Footer() {
  return (
    <footer class="section footer">
      <ul class="footer-links">
        {pageLinks.map((link) => {
          const { href, text } = link
          return (
            <li>
              <a href={href} class="footer-link">
                {text}
              </a>
            </li>
          )
        })}
      </ul>
      <ul class="footer-icons">
        {navIcon.map((icon) => {
          const { href, class: classIcon } = icon
          return (
            <li>
              <a href={href} target="_blank" class="footer-icon">
                <i class={classIcon}></i>
              </a>
            </li>
          )
        })}
      </ul>
      <p class="copyright">
        copyright &copy; Backroads travel tours company
        <span id="date"></span> all rights reserved
      </p>
    </footer>
  )
}

export default Footer
