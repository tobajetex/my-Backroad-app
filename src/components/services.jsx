import React from 'react'
import { servicesData } from './data'
function Services() {
  return (
    <section class="section services" id="services">
      <div class="section-title">
        <h2>
          our <span>services</span>
        </h2>
      </div>
      <div class="section-center services-center">
        {servicesData.map((service) => {
          const { headlineText, paraText, classIcon } = service
          return (
            <article class="service">
              <span class="service-icon">
                <i class={`fas ${classIcon} fa-fw`}></i>
              </span>
              <div class="service-info">
                <h4 class="service-title">{headlineText}</h4>
                <p class="service-text">{paraText}</p>
              </div>
            </article>
          )
        })}
      </div>
    </section>
  )
}

export default Services
