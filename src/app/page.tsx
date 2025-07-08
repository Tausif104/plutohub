'use client'
import PrimaryBtn from '@/components/shared/primary-btn'
import { ArrowRight, Plus, Minus } from 'lucide-react'
import Image from 'next/image'
import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Accordion, Col, Container, Row } from 'react-bootstrap'

gsap.registerPlugin(ScrollTrigger)

const HomePage = () => {
  const circleRef = useRef<HTMLDivElement | null>(null)
  const sectionRef = useRef<HTMLElement | null>(null)
  const titleTextRefs = useRef<HTMLSpanElement[]>([])

  // Safely add refs
  const addToTitleRefs = (el: HTMLSpanElement | null) => {
    if (el && !titleTextRefs.current.includes(el)) {
      titleTextRefs.current.push(el)
    }
  }

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Hide initially
      gsap.set(titleTextRefs.current, {
        display: 'none',
        opacity: 0,
      })

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top top',
          end: '+=1500',
          scrub: true,
          pin: true,
          anticipatePin: 1,
        },
      })

      // Circle animation
      tl.to(circleRef.current, {
        width: 797,
        height: 720,
        borderRadius: '1000px',
        backgroundColor: '#fff',
        borderWidth: 0,
        ease: 'none',
      })

      tl.to(circleRef.current, {
        width: 66,
        height: 41,
        borderRadius: '1000px',
        backgroundColor: 'transparent',
        border: '6px solid #fff',
        ease: 'none',
      })

      // Show title texts
      tl.set(titleTextRefs.current, { display: 'inline-block' })
      tl.to(titleTextRefs.current, {
        opacity: 1,
        duration: 0.5,
        stagger: 0.1,
        ease: 'power1.out',
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <>
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

      {/* <section className='circle-animation-section' ref={sectionRef}>
        <div className="section-title">
          <h2 className='animated-title text-center'>
            <span className='title-text' ref={addToTitleRefs}>Numbers D</span>
            <div
              className='animation-circle'
              ref={circleRef}
              style={{
                width: '100%',
                height: '1000px',
                background: 'transparent',
                borderRadius: '0px',
                border: '0 solid transparent',
              }}
            ></div>
            <span className='title-text' ref={addToTitleRefs}>rn’t Lie</span>
          </h2>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-lg-12 text-center">
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eius corporis, natus quibusdam inventore deleniti soluta illo qui quasi asperiores deserunt voluptatum excepturi, saepe incidunt laudantium nobis tempore vel provident molestias placeat dolores. Nulla animi ad dolore et quos obcaecati voluptate quidem, tenetur beatae aut, nemo possimus. Distinctio, deserunt libero odio sit voluptas aperiam ullam voluptatibus. Quo, molestiae expedita. Dolore, natus!</p>
            </div>
          </div>
        </div>
      </section> */}

      {/* about section */}
      <section className='about-section'>
        <Container>
          <Row className='align-items-center'>
            <Col xl={6}>
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

            <Col xl={6}>
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
            <Col xl={3}>
              <div className='about-box'>
                <Image
                  src='/images/about-icons/1.svg'
                  width={100}
                  height={100}
                  alt='Creative Innovators'
                />
                <h3>Creative Innovators</h3>
                <p>
                  We blend creativity and technology for unique UI and UX
                  designs.
                </p>
              </div>
            </Col>
            <Col xl={3}>
              <div className='about-box'>
                <Image
                  src='/images/about-icons/2.svg'
                  width={100}
                  height={100}
                  alt='Expert Developers'
                />
                <h3>Expert Developers</h3>
                <p>
                  We create responsive, user-friendly websites using WordPress
                  and Webflow.
                </p>
              </div>
            </Col>
            <Col xl={3}>
              <div className='about-box'>
                <Image
                  src='/images/about-icons/3.svg'
                  width={100}
                  height={100}
                  alt='Brand Strategists'
                />
                <h3>Brand Strategists</h3>
                <p>
                  We design logos and branding that capture your brand's
                  essence.
                </p>
              </div>
            </Col>
            <Col xl={3}>
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

      {/* brands */}
      <section
        className='brands'
        style={{ backgroundImage: 'url(/images/brands-bg.jpg)' }}
      >
        <Container>
          <Row>
            <Col xl={12}>
              <div className='section-title'>
                <h2>Trusted By 200+ Global Brands</h2>
              </div>
            </Col>
          </Row>

          <Row>
            <Col xl={12}>
              <div className='brands-row-one'>
                <Image
                  src='/images/brands/1.svg'
                  alt='1'
                  width={140}
                  height={60}
                />
                <Image
                  src='/images/brands/2.svg'
                  alt='1'
                  width={140}
                  height={60}
                />
                <Image
                  src='/images/brands/3.svg'
                  alt='1'
                  width={140}
                  height={60}
                />
                <Image
                  src='/images/brands/4.svg'
                  alt='1'
                  width={140}
                  height={60}
                />
                <Image
                  src='/images/brands/5.svg'
                  alt='1'
                  width={140}
                  height={60}
                />
                <Image
                  src='/images/brands/6.svg'
                  alt='1'
                  width={140}
                  height={60}
                />
                <Image
                  src='/images/brands/7.svg'
                  alt='1'
                  width={140}
                  height={60}
                />
                <Image
                  src='/images/brands/8.svg'
                  alt='1'
                  width={140}
                  height={60}
                />
              </div>
              <div className='brands-row-two'>
                <Image
                  src='/images/brands/9.svg'
                  alt='1'
                  width={140}
                  height={60}
                />
                <Image
                  src='/images/brands/10.svg'
                  alt='1'
                  width={140}
                  height={60}
                />
                <Image
                  src='/images/brands/11.svg'
                  alt='1'
                  width={140}
                  height={60}
                />
                <Image
                  src='/images/brands/12.svg'
                  alt='1'
                  width={140}
                  height={60}
                />
                <Image
                  src='/images/brands/13.svg'
                  alt='1'
                  width={140}
                  height={60}
                />
                <Image
                  src='/images/brands/14.svg'
                  alt='1'
                  width={140}
                  height={60}
                />
                <Image
                  src='/images/brands/15.svg'
                  alt='1'
                  width={140}
                  height={60}
                />
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <section
        className='faq-section'
        style={{ backgroundImage: 'url(/images/faq-bg.jpg)' }}
      >
        <Container>
          <Row>
            <Col xl={12}>
              <div className='section-title'>
                <h2>
                  Frequently Asked <br /> Questions
                </h2>
              </div>
            </Col>

            <Row className='justify-content-center'>
              <Col xl={10}>
                <Accordion defaultActiveKey='0' flush>
                  <Accordion.Item eventKey='0'>
                    <Accordion.Header>
                      <span className='accordion-title'>
                        How Long Does a Design Project Take?
                      </span>
                      <span className='accordion-icons'>
                        <Plus /> <Minus />
                      </span>
                    </Accordion.Header>
                    <Accordion.Body>
                      Usually, our design process takes a few weeks, depending
                      on the project's complexity and scope. We begin with
                      thorough research and planning, followed by design
                      iterations and client feedback sessions. This
                      collaborative approach ensures that the final design
                      aligns perfectly with your vision and goals.
                    </Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item eventKey='1'>
                    <Accordion.Header>
                      <span className='accordion-title'>
                        Are your apps available on both Android and iOS?
                      </span>
                      <span className='accordion-icons'>
                        <Plus /> <Minus />
                      </span>
                    </Accordion.Header>
                    <Accordion.Body>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo consequat.
                      Duis aute irure dolor in reprehenderit in voluptate velit
                      esse cillum dolore eu fugiat nulla pariatur. Excepteur
                      sint occaecat cupidatat non proident, sunt in culpa qui
                      officia deserunt mollit anim id est laborum.
                    </Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item eventKey='2'>
                    <Accordion.Header>
                      <span className='accordion-title'>
                        How do you use AI in your apps?
                      </span>
                      <span className='accordion-icons'>
                        <Plus /> <Minus />
                      </span>
                    </Accordion.Header>
                    <Accordion.Body>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo consequat.
                      Duis aute irure dolor in reprehenderit in voluptate velit
                      esse cillum dolore eu fugiat nulla pariatur. Excepteur
                      sint occaecat cupidatat non proident, sunt in culpa qui
                      officia deserunt mollit anim id est laborum.
                    </Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item eventKey='3'>
                    <Accordion.Header>
                      <span className='accordion-title'>
                        Do you work with partners or accept collaborations?
                      </span>
                      <span className='accordion-icons'>
                        <Plus /> <Minus />
                      </span>
                    </Accordion.Header>
                    <Accordion.Body>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo consequat.
                      Duis aute irure dolor in reprehenderit in voluptate velit
                      esse cillum dolore eu fugiat nulla pariatur. Excepteur
                      sint occaecat cupidatat non proident, sunt in culpa qui
                      officia deserunt mollit anim id est laborum.
                    </Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item eventKey='4'>
                    <Accordion.Header>
                      <span className='accordion-title'>
                        Can I suggest a feature or report an issue?
                      </span>
                      <span className='accordion-icons'>
                        <Plus /> <Minus />
                      </span>
                    </Accordion.Header>
                    <Accordion.Body>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo consequat.
                      Duis aute irure dolor in reprehenderit in voluptate velit
                      esse cillum dolore eu fugiat nulla pariatur. Excepteur
                      sint occaecat cupidatat non proident, sunt in culpa qui
                      officia deserunt mollit anim id est laborum.
                    </Accordion.Body>
                  </Accordion.Item>
                </Accordion>
              </Col>
            </Row>
          </Row>
        </Container>
      </section>
    </>
  )
}

export default HomePage
