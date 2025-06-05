'use client'

import Link from 'next/link'

export default function GlobalError() {
  return (
    <main style={{ padding: '2rem', fontFamily: 'system-ui, sans-serif' }}>
      <h1>An unexpected error occurred</h1>
      <p>
        <Link href='/'>Go back home</Link>
      </p>
    </main>
  )
}
