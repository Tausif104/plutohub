import Image from 'next/image'
import { Col, Container, Row } from 'react-bootstrap'

const AboutSection = () => {
  return (
    <section className='about-section'>
      <Container>
        <Row className='align-items-center'>
          <Col lg={6} md={6}>
            <div className='about-top-left'>
              <h2 className='section-title'>About us</h2>
              <div className='about-ratings'>
                <Image
                  src='/images/users.svg'
                  width={67}
                  height={33}
                  alt='users'
                />
                <div className='about-ratings-text'>
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

          <Col lg={6} md={6}>
            <div className='about-right'>
              <p>
                PlutoHub is here for you and your business! We create awesome
                digital product designs that are tailored just for you to help
                you succeed.
              </p>
            </div>
          </Col>
        </Row>

        <Row className='about-items'>
          <Col xl={3} lg={6} md={6} sm={12}>
            <div className='about-box'>
              <Image
                src='/images/about-icons/1.svg'
                width={100}
                height={100}
                alt='Creative Innovators'
              />
              <h3>Creative Innovators</h3>
              <p>
                We blend creativity and technology for unique UI and UX designs.
              </p>
            </div>
          </Col>
          <Col xl={3} lg={6} md={6} sm={12}>
            <div className='about-box'>
              <Image
                src='/images/about-icons/2.svg'
                width={100}
                height={100}
                alt='Expert Developers'
              />
              <h3>Expert Developers</h3>
              <p>
                We create responsive, user-friendly websites using WordPress and
                Webflow.
              </p>
            </div>
          </Col>
          <Col xl={3} lg={6} md={6} sm={12}>
            <div className='about-box'>
              <Image
                src='/images/about-icons/3.svg'
                width={100}
                height={100}
                alt='Brand Strategists'
              />
              <h3>Brand Strategists</h3>
              <p>
                We design logos and branding that capture your brand's essence.
              </p>
            </div>
          </Col>
          <Col xl={3} lg={6} md={6} sm={12}>
            <div className='about-box'>
              <Image
                src='/images/about-icons/4.svg'
                width={100}
                height={100}
                alt='Client-Centric Approach'
              />
              <h3>Client-Centric Approach</h3>
              <p>
                We prioritize your goals with tailored solutions and teamwork.
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default AboutSection
