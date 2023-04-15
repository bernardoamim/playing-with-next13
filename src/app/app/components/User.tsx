import { cookies, headers } from 'next/headers'
import { Repo } from './Repo'

export async function User() {
  // const [count, setCount] = useState(0)  requires "use client"
  const userCookies = cookies()
  const userHeaders = headers()

  await new Promise((resolve) => setTimeout(resolve, 2000))

  const response = await fetch('https://api.github.com/users/bernardoamim', {
    cache: 'no-store', // SSR-like
    next: {
      revalidate: 30, // 🥳 This is pretty cool
    },
  })
  const user = await response.json()

  return (
    <div className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>User</h1>

      {/* {count} */}
      <button
        className="flex bg-slate-600 text-white p-2"
        type="button"
        // onClick={() => setCount((prev) => prev + 1)}
      >
        Increment
      </button>

      <pre>{JSON.stringify(user, null, 2)}</pre>

      {/** @ts-expect-error Async Server Component */}
      <Repo />

      <pre>Cookies: {JSON.stringify(userCookies, null, 2)}</pre>
      <pre>Headers: {JSON.stringify(userHeaders, null, 2)}</pre>
    </div>
  )
}
