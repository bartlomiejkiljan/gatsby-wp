import React from "react"

const HeroSection = ({ items }) => (
  <div className="hero-section">
    { items.map((hero, i) => {
      const {
        title,
        bgColor,
        bgType,
        bgUrl,
        buttonText,
        buttonUrl,
        caption,
        imageAlign,
        imageAlt,
        imageUrl,
      } = hero.attributes;

      return (
        <div className={`wp-block-custom-hero-item wp-block-custom-hero-item--${imageAlign}`}
             style={{background: bgType === 'image' ? `url('${process.env.WORDPRESS_URL+bgUrl}') center/cover no-repeat` : bgColor}}
             key={`hero-${i}`}
        >
          <div className={imageUrl ? 'hero-section__content' : 'hero-section__content--center'}>
            <h1 className="hero-section__title">{title}</h1>
            <p className="hero-section__caption">{caption}</p>
            { buttonUrl &&
              <a href={buttonUrl} className="button button--primary">{buttonText}</a>
            }
          </div>
          { imageUrl &&
            <div className="hero-section__img">
              <img src={process.env.WORDPRESS_URL+imageUrl} alt={imageAlt} />
            </div>
          }
        </div>
      )
      })
    }
  </div>
);

export default HeroSection;