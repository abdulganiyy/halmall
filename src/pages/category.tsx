import Image from "next/image";
import { Inter } from "next/font/google";
import Hero from "@/components/customs/Hero";
import H1 from "@/components/typography/H1";
import Button from "@/components/buttons/Button";
import { FaArrowRight } from "react-icons/fa";
import H2 from "@/components/typography/H2";
import ProductCard from "@/components/customs/ProductCard";
import Link from "next/link";
import CheckBox from "@/components/inputs/CheckBox";
import Select from "@/components/inputs/Select";
import Accordion from "@/components/customs/Accordion";
import { RiGridFill } from "react-icons/ri";
import { IoListSharp } from "react-icons/io5";
import Label from "@/components/customs/Label";
import MainLayout from "@/components/layouts/MainLayout";

const inter = Inter({ subsets: ["latin"] });

export default function Category() {
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
          <div className="my-4">
            <p>
              <H2>Handbags</H2>
            </p>
          </div>
          <div className="flex gap-x-6">
            <div className="md:w-[286px]">
              <Accordion name="Size">
                <CheckBox id="xs" label="XS" />
                <CheckBox id="s" label="SM" />
                <CheckBox id="m" label="M" />
                <CheckBox id="lg" label="LG" />
                <CheckBox id="xl" label="XL" />
                <CheckBox id="2xl" label="2XL" />
              </Accordion>
              <Accordion name="Color">
                <CheckBox id="blue" label="Blue" />
                <CheckBox id="green" label="Green" />
                <CheckBox id="red" label="Red" />
                <CheckBox id="yellow" label="Yellow" />
              </Accordion>
              <Accordion name="Brand">
                <CheckBox id="hermes" label="Hermes" />
                <CheckBox id="zara" label="Zara" />
                <CheckBox id="fendi" label="Fendi" />
                <CheckBox id="ashluxe" label="Ashluxe" />
              </Accordion>
              <Accordion name="Price Range">
                <CheckBox id="<1000" label="Less than 1000NGN" />
                <CheckBox id="1000-5000" label="Between 1000-50000NGN" />
                <CheckBox id="5001-100000" label="Between 50001-100000NGN" />
                <CheckBox id=">100000" label="More than 100000NGN" />
              </Accordion>
              <Accordion name="Discount">
                <CheckBox id="<10" label="Less than 10%" />
                <CheckBox id="10-50" label="Between 10-50%" />
                <CheckBox id="51-70" label="Between 51-70%" />
                <CheckBox id="71-100" label="More than 70%" />
              </Accordion>
              {/* <Accordion name="Availability">
            <CheckBox id="hermes" label="Hermes" />
            <CheckBox id="zara" label="Zara" />
            <CheckBox id="hermes" label="Hermes" />
            <CheckBox id="zara" label="Zara" />
          </Accordion> */}
            </div>
            <div className="flex-auto">
              <div className="flex">
                <div className="mb-4 flex-auto flex items-center gap-x-2">
                  <RiGridFill />
                  <IoListSharp />
                  <span>Showing 1 - 40 of 145 items</span>
                </div>
                <div className="flex-auto flex justify-end gap-x-2">
                  SortBy{" "}
                  <Select
                    options={[
                      "Recent",
                      "Oldest",
                      "Ratings",
                      "Highest Price",
                      "Lowest Price",
                    ]}
                  />
                </div>
              </div>
              <div className="grid md:grid-cols-3 gap-y-4 md:gap-x-4">
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
              </div>
              <div className="flex gap-x-2 mt-4">
                <span className="flex bg-gray-50 p-1 rounded-md">
                  <Label active={true}>1</Label>
                  <Label>2</Label>
                  <Label>3</Label>
                  <Label>4</Label>
                  <Label>5</Label>
                </span>
                <span className="bg-gray-50 p-1 rounded-md">
                  <Label className="bg-[#F1F1F1]">Next</Label>
                </span>
              </div>
            </div>
          </div>
        </div>
      </main>
    </MainLayout>
  );
}
