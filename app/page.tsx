import Link from 'next/link'
import React from 'react'

function HomePage() {
  return (
    <div>
      <h1>Hi Homepage</h1>
      <Link href="/about" className="text-xl text-blue-500 inline-block mt-8">About Page</Link>
      <Link href="/info" className="text-xl text-blue-500 inline-block mt-8">Info Page</Link>
    </div>
  )
}

export default HomePage