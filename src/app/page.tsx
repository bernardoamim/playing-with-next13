import { Suspense } from 'react'
import Link from 'next/link'
import { User } from './app/components/User'

// export const revalidate = 30

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Link href="/app">Go to Dashboard</Link>

      <Suspense fallback={<p>Loading User...</p>}>
        {/** @ts-expect-error Async Server Component */}
        <User />
      </Suspense>
    </main>
  )
}
