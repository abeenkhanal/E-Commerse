import React from 'react'
import productDAta from '@/data/product.json'
import { TProduct } from '@/type/product'
import Singleproductcard from './single-product-card'
type Props = {}

export default function productslist({ }: Props) {
    return (
        <section>
            {
                (productDAta as TProduct[].map((product, ind) => {
                    return <Singleproductcard key={ind} product={product} />
                })
            }
        </section>
    )
}