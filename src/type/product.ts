import { Category } from "./category"
import { TReview } from "./reviews"

export type TProduct ={
    id: string,
    name: string,
    price: string,
    category: Category,
    stockQuantity: number,
    images: string[],
reviews:TReview[]}