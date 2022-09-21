import Link from 'next/link'
import { forwardRef } from 'react'

// `onClick`, `href` и `ref` должны быть переданы DOM-элементу
const MyButton = forwardRef(({ onClick, href }, ref) => {
  return (
    <a href={href} onClick={onClick} ref={ref}>
      Кликни
    </a>
  )
})

export default function Home() {
  return (
    <Link href="/about" passHref>
      <MyButton />
    </Link>
  )
}