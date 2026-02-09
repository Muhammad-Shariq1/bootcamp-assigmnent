import FeaturedBlogs from "@/components/FeaturedBlogs";
import Hero from "@/components/Hero";
import PopularBlogs from "@/components/PopularBlogs";

export default function Home() {
  return (
   <>
    <Hero/>
    <PopularBlogs/>
    <FeaturedBlogs/>
   </>
  )
}
