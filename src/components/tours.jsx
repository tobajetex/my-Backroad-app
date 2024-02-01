import React from 'react'
import { tourProfile } from './data'
function Tours() {
  return (
    <section class="section" id="tours">
      <div class="section-title">
        <h2>
          featured <span>tours</span>
        </h2>
      </div>

      <div class="section-center featured-center">
        {tourProfile.map((tour) => {
          const {
            tourImage,
            place,
            description,
            location,
            duration,
            cost,
            tourDate,
          } = tour
          return (
            <article class="tour-card">
              <div class="tour-img-container">
                <img src={tourImage} class="tour-img" alt="" />
                <p class="tour-date">{tourDate}</p>
              </div>
              <div class="tour-info">
                <div class="tour-title">
                  <h4>{place}</h4>
                </div>
                <p>{description}</p>
                <div class="tour-footer">
                  <p>
                    <span>
                      <i class="fas fa-map"></i>
                    </span>{' '}
                    {location}
                  </p>
                  <p>{`${duration} days`}</p>
                  <p>from $2100{`from ${cost}`}</p>
                </div>
              </div>
            </article>
          )
        })}
      </div>
    </section>
  )
}

export default Tours
