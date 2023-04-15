import Link from 'next/link'
import { Suspense } from 'react'
import { Todo } from './components/Todo'

export default function Dashboard() {
  return (
    <div>
      <h1>Dashboard</h1>
      <Link href="/">Go to Home</Link>

      <Suspense fallback={<p>Loading Todos...</p>}>
        {/** @ts-expect-error Async Server Component */}
        <Todo />
      </Suspense>
    </div>
  )
}
