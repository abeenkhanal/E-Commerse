import CategoriesList from "@/components/homepage/categories-list";
import HeroSection from "@/components/homepage/herosection";
import Navbar from "@/components/shared-components/navbar";
import Image from "next/image";

export default function Home() {
  return (
<div className='container py-20'>

  <section>
<HeroSection/>
<CategoriesList/>

  </section>
</div>
    
  );
}
