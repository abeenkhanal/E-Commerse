import React from "react";
import categoriesData from "@/data/categories.json";
import { Category } from "@/type/category";
import Image from "next/image";
import SingleCardComponent from "./single-card-item";
type Props = {};

export default function CategoriesList({}: Props) {
  return (
    <section className="grid grid-cols-6">
      {(categoriesData as Category[]).map((category, index) => {
        return (
          <div key={index} className="">
            <SingleCardComponent category={category} />
          </div>
        );
      })}
    </section>
  );
}