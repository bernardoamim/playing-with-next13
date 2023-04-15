interface IProductProps {
  params: {
    id: string
  }
}

export async function generateMetadata({ params }: { params: { id: string } }) {
  return {
    title: `Product ${params.id}`,
  }
}

export default function Product({ params: { id } }: IProductProps) {
  return <h1>Product: {id}</h1>
}
