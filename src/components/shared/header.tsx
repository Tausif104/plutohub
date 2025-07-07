import Image from 'next/image'
import Link from 'next/link'
import { Col, Container, Row } from 'react-bootstrap'
import { ArrowRight } from 'lucide-react'
import PrimaryBtn from './primary-btn'

const Header = () => {
  return (
    <header>
      <Container>
        <Row>
          <Col xxl={12}>
            <div className='header-content d-flex align-items-center justify-content-between'>
              <div className='site-logo'>
                <Link href='/'>
                  <Image
                    src='/images/logo.svg'
                    alt='Plutohob'
                    width={110}
                    height={24}
                  />
                </Link>
              </div>
              <nav>
                <ul>
                  <li>
                    <Link href='/services'>Services</Link>
                  </li>
                  <li>
                    <Link href='/about'>About Us</Link>
                  </li>
                  <li>
                    <Link href='/about'>Projects</Link>
                  </li>
                  <li>
                    <Link href='/about'>Blog</Link>
                  </li>
                </ul>
              </nav>

              <div className='header-btn'>
                <PrimaryBtn url='/test'>Lets Talk</PrimaryBtn>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </header>
  )
}

export default Header
