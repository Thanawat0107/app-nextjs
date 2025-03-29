import React from 'react'

type Props = {
  searchParams: {
    name: string;
    price: number;
  }
}

export default function Product({ searchParams: { name, price } }: Props) {
  return <div>Product Page {name}, {price}</div>;
}
