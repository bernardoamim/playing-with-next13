import Link from 'next/link'

// export const revalidate = 30

export default async function Home() {
  const response = await fetch('https://api.github.com/users/bernardoamim', {
    cache: 'no-store', // SSR-like
    next: {
      revalidate: 30, // 🥳 This is pretty cool
    },
  })
  const user = await response.json()

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>Hello World</h1>
      <pre>{JSON.stringify(user, null, 2)}</pre>

      <Link href="/dashboard">Go to Dashboard</Link>
    </main>
  )
}
