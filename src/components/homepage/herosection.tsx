"use client"
import React from 'react'

import Autoplay from "embla-carousel-autoplay"
import categoryData from '@/data/categories.json'
import { Category } from '@/type/category'
import { Card, CardContent } from "@/components/ui/card"
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"
import Image from 'next/image'
type Props = {}

export default function HeroSection({ }: Props) {
    const plugin = React.useRef(
        Autoplay({ delay: 2000, stopOnInteraction: true })
    )
    return (
        <div className='px-10'>

            <Carousel
                plugins={[plugin.current]}
                className="max-h-[400px]"
                onMouseEnter={plugin.current.stop}
                onMouseLeave={plugin.current.reset}
            >
                <CarouselContent>
                    {
                        (categoryData as Category[]).map((category, index) => {
                            return (
                                <CarouselItem key={index}>
                                    <div className='p-1'>
                                        <Card className='h-[400px]'>
                                            <CardContent>
                                                <Image src={category.imageUrl} fill alt='imageddhsjf' />
                                                <div>{category.name}</div>
                                            </CardContent>
                                        </Card>
                                    </div>
                                </CarouselItem>
                            )
                        })
                    }
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
            </Carousel>

        </div>
    )
}