'use client'

import { useEffect, useRef } from 'react'
import { Col, Container, Row } from 'react-bootstrap'

const CounterSection = () => {
  const circleRef = useRef<HTMLDivElement | null>(null)
  const sectionRef = useRef<HTMLElement | null>(null)
  const titleTextRefs = useRef<HTMLSpanElement[]>([])
  const countersRef = useRef<(HTMLHeadingElement | null)[]>([])

  // Safely add refs
  const addToTitleRefs = (el: HTMLSpanElement | null) => {
    if (el && !titleTextRefs.current.includes(el)) {
      titleTextRefs.current.push(el)
    }
  }

  useEffect(() => {
    // const ctx = gsap.context(() => {
    //   // Hide initially
    //   gsap.set(titleTextRefs.current, {
    //     display: 'none',
    //     opacity: 0,
    //   })

    //   const tl = gsap.timeline({
    //     scrollTrigger: {
    //       trigger: sectionRef.current,
    //       start: 'top top',
    //       end: '+=1500',
    //       scrub: true,
    //       pin: true,
    //       anticipatePin: 1,
    //     },
    //   })

    //   // Circle animation
    //   tl.to(circleRef.current, {
    //     width: 797,
    //     height: 720,
    //     borderRadius: '1000px',
    //     backgroundColor: '#fff',
    //     borderWidth: 0,
    //     ease: 'none',
    //   })

    //   tl.to(circleRef.current, {
    //     width: 66,
    //     height: 41,
    //     borderRadius: '1000px',
    //     backgroundColor: 'transparent',
    //     border: '6px solid #fff',
    //     ease: 'none',
    //   })

    //   // Show title texts
    //   tl.set(titleTextRefs.current, { display: 'inline-block' })
    //   tl.to(titleTextRefs.current, {
    //     opacity: 1,
    //     duration: 0.5,
    //     stagger: 0.1,
    //     ease: 'power1.out',
    //   })
    // }, sectionRef)

    // return () => ctx.revert()

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const counter = entry.target as HTMLHeadingElement
            animateCounter(counter)
            observer.unobserve(counter) // Stop observing after animation
          }
        })
      },
      { threshold: 0.6 } // Trigger when 60% visible
    )

    countersRef.current.forEach((counter) => {
      if (counter) observer.observe(counter)
    })

    return () => observer.disconnect()
  }, [])

  const animateCounter = (element: HTMLHeadingElement) => {
    const target = parseFloat(element.getAttribute('data-target') || '0')
    const suffix = element.getAttribute('data-suffix') || '+'
    let count = 0
    const duration = 2000
    const increment = target / (duration / 16)

    const updateCounter = () => {
      count += increment
      if (count < target) {
        // Keep 1 decimal for float numbers like 1.5
        element.innerText = `${
          target % 1 !== 0 ? count.toFixed(1) : Math.floor(count)
        }${suffix}`
        requestAnimationFrame(updateCounter)
      } else {
        element.innerText = `${target}${suffix}`
      }
    }

    requestAnimationFrame(updateCounter)
  }

  return (
    <>
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
      <section className='counter-area'>
        <Container>
          <Row className='align-items-center'>
            <Col xl={12}>
              <div className='section-title-wrapper text-center mb-5'>
                <h2 className='section-title'>Numbers Don’t Lie</h2>
                <p>
                  With a track record of excellence, we’ve helped hundreds of
                  businesses achieve their goals.
                </p>
              </div>
            </Col>
          </Row>
          <Row className='align-items-center gy-4'>
            {[
              { num: 12, suffix: '+', text: 'Years of experience' },
              { num: 1.5, suffix: 'k+', text: 'Happy Clients' },
              { num: 100, suffix: '%', text: 'Awards Won' },
              { num: 50, suffix: '+', text: 'Years of Experience' },
            ].map((item, index) => (
              <Col xl={3} lg={6} md={6} sm={6} key={index}>
                <div className='counter-box'>
                  <h3
                    ref={(el) => (countersRef.current[index] = el)}
                    data-target={item.num}
                    data-suffix={item.suffix}
                  >
                    0{item.suffix}
                  </h3>
                  <p>{item.text}</p>
                </div>
              </Col>
            ))}
          </Row>
        </Container>
      </section>
    </>
  )
}

export default CounterSection
