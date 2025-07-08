'use client'

import Image from 'next/image'
import { Col, Container, Row } from 'react-bootstrap'
import Slider from 'react-slick'
import { MoveLeft, MoveRight } from 'lucide-react'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

import { useRef, useState } from 'react'

const TestimonialsSection = () => {
    const sliderRef = useRef<any>(null)
    const [currentSlide, setCurrentSlide] = useState(0)

    const sliderSettings = {
        dots: true,
        arrows: true, // hide default arrows
        infinite: true,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 1,
        autoplay: false,
        autoplaySpeed: 4000,
        beforeChange: (current: number, next: number) => {
            setCurrentSlide(next) // Update current slide index
        },
        responsive: [
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            }
        ]
    }

    const handleDotClick = (index: number) => {
        sliderRef.current?.slickGoTo(index) // Go to the slide based on the clicked dot
    }

    const handlePrevClick = () => {
        sliderRef.current?.slickPrev()
    }

    const handleNextClick = () => {
        sliderRef.current?.slickNext()
    }

    const testimonialsData = [
        {
            id: 1,
            message: "“We are pleased with the quality and comprehensiveness of the outcomes, as well as the ongoing support. The team recognized the limitations of mobile and web app development, avoiding overly flashy designs that complicate front-end coding.”",
            authorName: "Khaled Belkadi",
            authorRole: "Project Manager",
            authorImage: "/images/author-avatar.svg",
        },
        {
            id: 2,
            message: "“We are pleased with the quality and comprehensiveness of the outcomes, as well as the ongoing support. The team recognized the limitations of mobile and web app development, avoiding overly flashy designs that complicate front-end coding.”",
            authorName: "Sarah Johnson",
            authorRole: "Product Owner",
            authorImage: "/images/author-avatar.svg",
        },
        {
            id: 3,
            message: "T“We are pleased with the quality and comprehensiveness of the outcomes, as well as the ongoing support. The team recognized the limitations of mobile and web app development, avoiding overly flashy designs that complicate front-end coding.”",
            authorName: "Michael Smith",
            authorRole: "CTO",
            authorImage: "/images/author-avatar.svg",
        },
    ]

    return (
        <section className='testimonials-area'>
            <Container>
                <Row>
                    <Col xl={3}>
                        <div className='section-title-wrapper'>
                            <h2 className='section-title'>What Clients Love to Tell</h2>
                            <div className="trust-pilot">
                                <h5>Our Happy Customer</h5>
                                <p>
                                    <Image
                                        src='/images/trust-pilot.svg'
                                        width={75}
                                        height={15}
                                        alt='trust-pilot'
                                    /> 5.0 (8.9k Reviews)
                                </p>
                            </div>
                        </div>
                    </Col>
                    <Col xl={9}>
                        <Slider ref={sliderRef} {...sliderSettings} className='testimonials-items'>
                            {testimonialsData.map((testimonial) => (
                                <div key={testimonial.id} className='single-testimonial-item'>
                                    <Image className='quote-image'
                                        src='/images/quote-left.svg'
                                        width={35}
                                        height={35}
                                        alt='quote-left'
                                    />
                                    <p className="message">{testimonial.message}</p>
                                    <div className="author-meta">
                                        <Image className='author-avatar'
                                            src={testimonial.authorImage}
                                            width={50}
                                            height={50}
                                            alt={testimonial.authorName}
                                        />
                                        <div className="author-info">
                                            <h4>{testimonial.authorName}</h4>
                                            <p>{testimonial.authorRole}</p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </Slider>
                    </Col>
                </Row>
                <Row className='text-center'>
                    <Col xl={12}>
                        <div className="testi-navigation">
                            <div className="testi-dots">
                                {[1, 2, 3].map((_, index) => (
                                    <span
                                        key={index}
                                        className={`testi-dot ${index === currentSlide ? 'active' : ''}`}
                                        onClick={() => handleDotClick(index)}
                                    />
                                ))}
                            </div>
                            <div className="testi-nav">
                                <span
                                    className='testi-arrow-left'
                                    onClick={handlePrevClick}
                                    style={{ cursor: 'pointer' }}
                                >
                                    <MoveLeft />
                                </span>
                                <span
                                    className='testi-arrow-right'
                                    onClick={handleNextClick}
                                    style={{ cursor: 'pointer' }}
                                >
                                    <MoveRight />
                                </span>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default TestimonialsSection
