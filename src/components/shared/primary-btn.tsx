import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

interface PrimaryBtnProps {
  url: string
  children: any
}

const PrimaryBtn = ({ url, children }: PrimaryBtnProps) => {
  return (
    <Link className='primary-btn' href={url}>
      {children} <ArrowRight className='ms-2' />
    </Link>
  )
}

export default PrimaryBtn
