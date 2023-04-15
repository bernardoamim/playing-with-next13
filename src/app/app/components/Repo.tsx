export async function Repo() {
  const response = await fetch(
    'https://api.github.com/users/bernardoamim/repos',
  ).then((res) => res.json())

  return (
    <div className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>Repos: </h1>
      <pre>{JSON.stringify(response, null, 2)}</pre>
    </div>
  )
}
