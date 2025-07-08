import { ArrowRight } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { Col, Container, Row } from 'react-bootstrap'

const ContactSection = () => {
  return (
    <section
      className='contact-section'
      style={{ backgroundImage: 'url(/images/contact-bg.jpg)' }}
    >
      <Container>
        <Row>
          <Col xl={12}>
            <div className='section-title-wrapper'>
              <h2 className='section-title'>
                Have a <span className='green-text'>Project</span> Idea?
              </h2>
            </div>
          </Col>
        </Row>

        <Row>
          <Col xl={4}>
            <div className='contact-info'>
              <div className='contact-info-inner'>
                <div className='contact-info-top'>
                  <div className='contact-meta'>
                    <div className='contact-meta-left'>
                      <Image
                        src='/images/shahin.svg'
                        alt='Shahin'
                        width={56}
                        height={56}
                      />
                      <div className='name'>
                        <h4>Shahinul Islam</h4>
                        <p>Founder of Plutohub</p>
                      </div>
                    </div>

                    <div className='contact-meta-right'>
                      <Link className='primary-icon' href='/'>
                        <ArrowRight color='white' />
                      </Link>
                    </div>
                  </div>
                  <p>
                    Lorem ipsum dolor sit amet consectetur. Est amet at
                    adipiscing id augue ac in. Varius elit donec vel non luctus
                    a est tincidunt.
                  </p>
                </div>

                <div className='contact-info-bottom'>
                  <div className='contact-info-box'>
                    <h5>Email</h5>
                    <p>
                      <a target='_blank' href='mailto:hello@plutohub.com'>
                        hello@plutohub.com
                      </a>
                    </p>
                  </div>
                  <div className='contact-info-box'>
                    <h5>Whatsapp</h5>
                    <p>
                      <a target='_blank' href='https://wa.me/8801567666988'>
                        +880 1567 6669 88
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </Col>

          <Col xl={8}>
            <div
              className='contact-form-wrapper'
              style={{ backgroundImage: 'url(/images/contact-form-bg.png)' }}
            >
              <form action=''>
                <Row>
                  <Col xl={12}>
                    <div className='form-group'>
                      <label htmlFor='name'>Full Name*</label>
                      <input
                        type='text'
                        placeholder='e.g. Adam Smith'
                        id='name'
                      />
                    </div>
                  </Col>
                </Row>
                <Row>
                  <Col xl={12}>
                    <div className='form-group'>
                      <label htmlFor='email'>Email Address*</label>
                      <input
                        type='email'
                        placeholder='example@email.com'
                        id='email'
                      />
                    </div>
                  </Col>
                </Row>
                <Row>
                  <Col xl={6}>
                    <div className='form-group'>
                      <label htmlFor='services'>Services*</label>
                      <input
                        type='text'
                        placeholder='Insert your service'
                        id='services'
                      />
                    </div>
                  </Col>
                  <Col xl={6}>
                    <div className='form-group'>
                      <label htmlFor='budget'>Project Budget*</label>
                      <input
                        type='text'
                        placeholder='Insert your range'
                        id='budget'
                      />
                    </div>
                  </Col>
                </Row>
                <Row>
                  <Col xl={12}>
                    <div className='form-group'>
                      <label htmlFor='project'>Project Details*</label>
                      <textarea
                        name='project'
                        id='project'
                        placeholder='Tell us more about your project'
                      ></textarea>
                    </div>
                  </Col>
                </Row>

                <Row>
                  <Col xl={12}>
                    <div className='form-group'>
                      <button type='submit' className='primary-btn invert'>
                        <span className='button-inside'>
                          <span className='btn-text'>Submit Now</span>
                          <span className='btn-icon'>
                            <ArrowRight color='#06D6A0' size={16} />
                          </span>
                        </span>
                      </button>
                    </div>
                  </Col>
                </Row>
              </form>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default ContactSection
