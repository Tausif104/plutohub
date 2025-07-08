import Image from 'next/image'
import PrimaryBtn from '../shared/primary-btn'

const HeroSection = () => {
  return (
    <section
      className='hero-section'
      style={{ backgroundImage: 'url(/images/hero-bg.jpg)' }}
    >
      <div className='container'>
        <div className='row'>
          <div className='col-xl-12'>
            <div className='hero-content'>
              <div className='hero-review'>
                <span className='d-flex align-items-center justify-content-center'>
                  <Image
                    src='/images/review-icon.svg'
                    width={50}
                    height={50}
                    alt='Review Icon'
                  />
                  <Image
                    src='/images/star.svg'
                    width={72}
                    height={12}
                    alt='star'
                  />
                  <span>
                    Based on <strong>24 clutch</strong> reviews
                  </span>
                </span>
              </div>

              <div className='hero-text text-center'>
                <h1>
                  Design, Develop, & <br /> Dominate the Digital Space
                </h1>
                <p>
                  We Create Unique Digital Experiences For Global Brands By
                  Integrating <br /> AI, Innovative Design, And Advanced
                  Technology.
                </p>
                <PrimaryBtn type='invert' url='/'>
                  Let’s Explore Our Services
                </PrimaryBtn>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection
