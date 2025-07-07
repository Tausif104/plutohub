'use client'
import PrimaryBtn from '@/components/shared/primary-btn'
import { ArrowRight } from 'lucide-react'
import Image from 'next/image'
import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

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
                  <h1>Design, Develop, & Dominate the Digital Space</h1>
                  <p>
                    We Create Unique Digital Experiences For Global Brands By
                    Integrating AI, Innovative Design, And Advanced Technology.
                  </p>
                  <PrimaryBtn url='/'>Let’s Explore Our Services</PrimaryBtn>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className='circle-animation-section' ref={sectionRef}>
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
      </section>


    </>
  )
}

export default HomePage
