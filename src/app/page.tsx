import Link from 'next/link'
import { User } from './app/components/User'

// export const revalidate = 30

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>Hello World</h1>

      <Link href="/dashboard">Go to Dashboard</Link>

      {/** @ts-expect-error Async Server Component */}
      <User />
    </main>
  )
}
