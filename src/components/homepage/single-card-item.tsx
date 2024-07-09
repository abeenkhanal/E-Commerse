import React from 'react'
import { CardHeader, Card, CardContent } from '../ui/card'
import { stringify } from 'querystring';
import { Category } from '@/type/category';
import Image from 'next/image';

type Props = {
    category: Category;

}

export default function singlecarditem({ category}: Props) {

    return (
        <div>
            <Card>
                <CardHeader>

                    <Image src={category.imageUrl}
                        alt='category image' height={100} width={100}
                        className='w-auto h-[100px] object-cover'/>
                </CardHeader>

                <CardHeader>

                </CardHeader>
            </Card>
        </div>
    )
}