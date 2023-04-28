import { useState } from "react";
import H2 from "@/components/typography/H2";
import Image from "next/image";
import Accordion from "@/components/customs/Accordion";
import TextInput from "@/components/inputs/TextInput";
import Button from "@/components/buttons/Button";
import Link from "next/link";
import MainLayout from "@/components/layouts/MainLayout";

const Checkout = () => {
  const [paymentMode, setPaymentMode] = useState("");
  return (
    <MainLayout>
      <div className="p-5">
        <H2>Checkout</H2>
        <div className="flex flex-col md:flex-row gap-x-[138px] mt-4">
          <div className="basis-3/5 flex flex-col gap-y-4">
            <Accordion name="Add New Address">
              <div className="flex flex-col gap-y-4">
                <div className="flex flex-col md:flex-row gap-y-2 gap-x-2">
                  <TextInput label="Full Name" placeholder="Full Name" />
                  <TextInput label="Phone Number" placeholder="Phone Number" />
                </div>
                <div className="flex flex-col md:flex-row gap-y-2 gap-x-2">
                  <TextInput
                    label="Street Address"
                    placeholder="Street Address"
                  />
                  <TextInput label="State" placeholder="State" />
                </div>
                <div className="flex flex-col md:flex-row gap-y-2 gap-x-2">
                  <TextInput label="City" placeholder="City" />
                  <TextInput label="Pin Code" placeholder="Pin Code" />
                </div>
              </div>
            </Accordion>
            <Accordion name="Select Payment Method">
              <div className="flex flex-col gap-y-4 mt-4">
                <div className="flex items-center justify-between">
                  <label htmlFor="mode">Flutter Wave</label>
                  <input
                    className="accent-[#1B4B66] w-[18px] h-[18px] cursor-pointer"
                    type="radio"
                    id="mode"
                    name="mode"
                    value={paymentMode}
                    onChange={() => setPaymentMode("card")}
                  />
                </div>
                <div className="flex items-center justify-between">
                  <label htmlFor="mode">Pay On Delivery</label>
                  <input
                    className="accent-[#1B4B66] w-[18px] h-[18px] cursor-pointer"
                    type="radio"
                    id="mode"
                    name="mode"
                    value={paymentMode}
                    onChange={() => setPaymentMode("offline")}
                  />
                </div>
              </div>
            </Accordion>
          </div>
          <div className="basis-2/5">
            <H2>Order Summary</H2>
            <div className="flex flex-col gap-y-2">
              <div className="flex justify-between">
                <span>Sub Total</span>
                <span>$119.69</span>
              </div>
              <div className="flex justify-between">
                <span>Discount</span>
                <span>$13.40</span>
              </div>
              <div className="flex justify-between">
                <span>Delivery Fees</span>
                <span>$0.00</span>
              </div>
              <div className="flex justify-between">
                <span>Grand Total</span>
                <span>$109.69</span>
              </div>
            </div>
          </div>
        </div>
        <div className="flex">
          <div className="basis-3/5 flex items-center justify-between mt-4">
            <Link href="/cart" className="underline">
              Back to cart
            </Link>
            <Button size="small">Next</Button>
          </div>
          <div></div>
        </div>
      </div>
    </MainLayout>
  );
};

export default Checkout;
