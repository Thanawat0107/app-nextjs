import React from 'react'

type Props = {
  params: {
    id: string;
  }
}

export default function Id({ params: { id } }: Props) {
  return <div>id: {id}</div>;
}
