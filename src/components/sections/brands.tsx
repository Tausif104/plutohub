import Image from 'next/image'
import { Col, Container, Row } from 'react-bootstrap'

const BrandsSection = () => {
  return (
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
  )
}

export default BrandsSection
