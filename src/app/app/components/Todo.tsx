export async function Todo() {
  await new Promise((resolve) => setTimeout(resolve, 2000))

  const response = await fetch('https://jsonplaceholder.typicode.com/todos/1', {
    cache: 'no-store',
  }).then((res) => res.json())

  return (
    <div className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>Todos: </h1>
      <pre>{JSON.stringify(response, null, 2)}</pre>
    </div>
  )
}
