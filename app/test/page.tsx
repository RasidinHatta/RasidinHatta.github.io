import Link from 'next/link'
import React from 'react'

const TestPage = () => {
  return (
    <div className='overflow-hidden'>
        <h1>TestPage</h1>
        <Link href="/test/bento">Bento</Link>
    </div>
  )
}

export default TestPage