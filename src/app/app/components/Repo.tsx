export async function Repo() {
  const response = await fetch(
    'https://api.github.com/users/bernardoamim/repos',
    {
      cache: 'no-store', // SSR-like
      next: {
        revalidate: 30,
      },
    },
  )
  const repos = await response.json()

  return (
    <div className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>Repos: {repos.name}</h1>
      <pre>{JSON.stringify(repos, null, 2)}</pre>
    </div>
  )
}
