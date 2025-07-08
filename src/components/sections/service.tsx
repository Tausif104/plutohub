import Image from 'next/image'
import { Col, Container, Row } from 'react-bootstrap'

const ServiceSection = () => {
  return (
    <section className='services-area'>
      <Container>
        <Row className=''>
          <Col xl={4}>
            <div className='section-title-wrapper'>
              <h2 className='section-title'>Our Services</h2>
              <p>
                We Create Unique Digital Experiences For Global Brands By
                Integrating AI, Innovative Design, And Advanced Technology.
              </p>
              <div className='services-ratings'>
                <Image
                  className='review-icon'
                  src='/images/review-icon2.svg'
                  width={67}
                  height={33}
                  alt='review-icon'
                />
                <div className='services-ratings-text'>
                  <Image
                    src='/images/star.svg'
                    width={72}
                    height={12}
                    alt='star'
                  />
                  <p>
                    <span>
                      Based on <strong>24 clutch</strong> reviews
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </Col>
          <Col xl={8}>
            <div className='services-items'>
              {/* single services item */}
              <div className='single-service-item'>
                <div className='flip-card flipbox-front'>
                  <Image
                    src='/images/service-thumb1.png'
                    width={350}
                    height={330}
                    alt='service-thumb1'
                  />
                  <h4>UI/UX Design</h4>
                </div>
                <div className='flip-card flipbox-back'>
                  <h4>UI/UX Design</h4>
                </div>
              </div>
              {/* single services item */}
              <div className='single-service-item'>
                <div className='flip-card flipbox-front'>
                  <Image
                    src='/images/service-thumb2.png'
                    width={350}
                    height={330}
                    alt='service-thumb1'
                  />
                  <h4>Mobile App Design</h4>
                </div>
                <div className='flip-card flipbox-back'>
                  <h4>Mobile App Design</h4>
                </div>
              </div>
              {/* single services item */}
              <div className='single-service-item'>
                <div className='flip-card flipbox-front'>
                  <Image
                    src='/images/service-thumb3.png'
                    width={350}
                    height={330}
                    alt='service-thumb1'
                  />
                  <h4>Saas Design</h4>
                </div>
                <div className='flip-card flipbox-back'>
                  <h4>Saas Design</h4>
                </div>
              </div>
              {/* single services item */}
              <div className='single-service-item'>
                <div className='flip-card flipbox-front'>
                  <Image
                    src='/images/service-thumb4.png'
                    width={350}
                    height={330}
                    alt='service-thumb1'
                  />
                  <h4>Mobile App Design</h4>
                </div>
                <div className='flip-card flipbox-back'>
                  <h4>Mobile App Design</h4>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default ServiceSection
