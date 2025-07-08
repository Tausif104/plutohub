import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

interface PrimaryBtnProps {
  url: string
  children: any
  type: string
}

const PrimaryBtn = ({ url, type, children }: PrimaryBtnProps) => {
  return (
    <Link className={`${type} primary-btn`} href={url}>
      <span className='button-inside'>
        <span className='btn-text'>{children}</span>
        <span className='btn-icon'>
          <ArrowRight
            color={type === 'default' ? 'white' : '#06D6A0'}
            size={16}
          />
        </span>
      </span>
    </Link>
  )
}

export default PrimaryBtn
