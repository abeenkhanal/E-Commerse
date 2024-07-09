import React from 'react'
import productDAta from '@/data/product.json'
import { TProduct } from '@/type/product'
type Props = {}

export default function productslist({ }: Props) {
    return (
        <section>
            {
                (productDAta as TProduct[]).map((product, i) => {
                    return <Singleproductcard key={i} product={product} />
                })
            }
        </section>
    )
}