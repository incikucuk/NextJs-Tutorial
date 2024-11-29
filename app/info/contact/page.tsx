import Link from 'next/link'
import React from 'react'

function ContactPage() {
  return (
    <div>
      <h1>Hi Contact page</h1>
      <Link href='/' className='text-xl text-blue-500 inline-bloack mt-8'>About Page</Link>
    </div>
  )
}

export default ContactPage