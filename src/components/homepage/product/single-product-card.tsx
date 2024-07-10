import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { TProduct } from '@/type/product'
import Image from 'next/image'

import React from 'react'

type Props = {
    product: TProduct,
}

export default function Singleproductcard({product}: Props) {
  return (
    <Card>
        <CardHeader>
            <Image
            src= { product.images[0]}
            alt={product.name}
            height={200}
            width={200}
            />
            <CardTitle>
                {product.name}
            </CardTitle>
        </CardHeader>
        <CardContent>
                <p>{product.price}</p>
                <p>{product.price}</p>
               
            </CardContent>
    </Card>
  )
}