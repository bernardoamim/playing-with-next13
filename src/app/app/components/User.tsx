import { Repo } from './Repo'

export async function User() {
  const response = await fetch('https://api.github.com/users/bernardoamim', {
    cache: 'no-store', // SSR-like
    next: {
      revalidate: 30, // 🥳 This is pretty cool
    },
  })
  const user = await response.json()

  return (
    <div className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>User: {user.name}</h1>
      <pre>{JSON.stringify(user, null, 2)}</pre>

      {/** @ts-expect-error Async Server Component */}
      <Repo />
    </div>
  )
}