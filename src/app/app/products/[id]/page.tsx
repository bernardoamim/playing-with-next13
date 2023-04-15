interface IProductProps {
  params: {
    id: string
  }
}

export default function Product({ params: { id } }: IProductProps) {
  return <h1>Product: {id}</h1>
}
