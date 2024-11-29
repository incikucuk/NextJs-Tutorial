import Link from 'next/link'
import React from 'react'

function Navbar() {
  return (
    <nav className='max-w-3xl mx-auto py-4 flex gap-x-2 border-b 1'>
        <Link href="/">Home</Link>
        <Link href="/counters">Counter</Link>
        <Link href="/tours">Tours</Link>
        <Link href="/actions">Actions</Link>
    </nav>
  )
}

export default Navbar