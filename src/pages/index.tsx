import { useEffect } from "react";
// import Image from "next/image";
import { Inter } from "next/font/google";
import Hero from "@/components/customs/Hero";
import H1 from "@/components/typography/H1";
import Button from "@/components/buttons/Button";
import { FaArrowRight } from "react-icons/fa";
import H2 from "@/components/typography/H2";
import ProductCard from "@/components/customs/ProductCard";
import Link from "next/link";
import CategoryCard from "@/components/customs/CategoryCard";
import BrandCard from "@/components/customs/BrandCard";
import MainLayout from "@/components/layouts/MainLayout";
import { EffectCreative } from "swiper";

import { useProductsStore } from "@/stores/useProductsStore";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
// Navigation, Pagination, Scrollbar, A11y, Autoplay
import "swiper/css";
import "swiper/css/effect-creative";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/autoplay";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const { products, isLoading, error, fetchData } = useProductsStore();

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  console.log(products[0]);

  return (
    <MainLayout>
      <main className={``}>
        <div className="p-5">
          <Hero bgImg="/herobackg.jpg">
            <div className="h-full flex justify-end">
              <div className="w-full md:w-[759px] bg-[#DEDEDE]/70 h-[316px] rounded-2xl py-[25px] px-[47px]">
                <H1>Carry your Funk</H1>
                <p className="font-medium text-[24px] md:text-[28px] md:leading-[38px] text-[#1B4B66] md:max-w-[530px]">
                  Trendy handbags collection for your outing.
                </p>
                <p className="mt-4">
                  <Button leftIcon={<FaArrowRight />}>See more</Button>
                </p>
              </div>
            </div>
          </Hero>
          <div className="pt-4">
            <div className="flex justify-between items-center">
              <H2>New Arrivals</H2>
              <Link href="/">View All</Link>
            </div>
            <div className="pt-4 grid md:grid-cols-4 gap-y-4 md:gap-x-4">
              <ProductCard {...products[0]} />
              {/* <ProductCard img="/womenbg.jpg" />
              <ProductCard />
              <ProductCard img="/womenbg.jpg" /> */}
            </div>
          </div>
        </div>
        <div className="bg-[#1B4B66] p-4">
          <div className="flex justify-between items-center">
            <H2 className="text-white">New Arrivals</H2>
          </div>
          <div className="pt-4 grid md:grid-cols-4 gap-y-4 md:gap-x-4">
            <CategoryCard />
            <CategoryCard />
            <CategoryCard />
            <CategoryCard />
          </div>
        </div>
        <div className="p-4">
          <div className="flex justify-between items-center mb-4">
            <H2 className="">Shop by Brands</H2>
          </div>
          <Swiper
            // slides-per-view="auto"
            // space-between="10"
            // modules={[Autoplay]}
            // autoplay={{
            //   delay: 1,
            //   disableOnInteraction: false,
            //   pauseOnMouseEnter: false,
            //   stopOnLastSlide: false,
            //   waitForTransition: true,
            // }}
            slidesPerView={3}
            spaceBetween={10}
            breakpoints={{
              640: {
                slidesPerView: 3,
                spaceBetween: 5,
              },
              1024: {
                slidesPerView: 10,
                spaceBetween: 20,
              },
            }}

            // speed={3000}
            // loop={true}
            // effect="slide"
          >
            <SwiperSlide>
              <BrandCard img="/ggmodest.jpg" />
            </SwiperSlide>
            <SwiperSlide>
              <BrandCard img="/ASHLOGO.png" />
            </SwiperSlide>
            {/* <SwiperSlide>
          <BrandCard />
        </SwiperSlide>
        <SwiperSlide>
          <BrandCard />
        </SwiperSlide>
        <SwiperSlide>
          <BrandCard />
        </SwiperSlide>
        <SwiperSlide>
          <BrandCard />
        </SwiperSlide>
        <SwiperSlide>
          <BrandCard />
        </SwiperSlide>
        <SwiperSlide>
          <BrandCard />
        </SwiperSlide>{" "}
        <SwiperSlide>
          <BrandCard />
        </SwiperSlide>
        <SwiperSlide>
          <BrandCard />
        </SwiperSlide>
        <SwiperSlide>
          <BrandCard />
        </SwiperSlide>
        <SwiperSlide>
          <BrandCard />
        </SwiperSlide> */}
          </Swiper>
        </div>
      </main>
    </MainLayout>
  );
}
