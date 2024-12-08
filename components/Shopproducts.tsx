import React from 'react'
import Image from 'next/image'

function Shopproducts() {
  return (
    <div className="w-full grid md:grid-cols-4 md:grid-row-1 grid-cols-16 md:mt-40 md:pl-24 justify-center overflow-y-auto md:overflow-y-visible md:max-h-full max-h-[300px]">
        {/* product 1 */}
        <div className="w-full md:w-[224px] h-auto flex flex-col items-center md:items-start mt-4">
          <Image
            src="/Mask group.png"
            alt="Product 1"
            width={200}
            height={200}
            className="object-contain"
          />
          <h3 className="font-poppins font-normal text-[16px] leading-6 text-[#000000] mt-2">
            Trenton modular sofa_3
          </h3>
          <p className="font-poppins font-medium text-[24px] leading-9 text-[#000000] mt-6">
            Rs. 25,000.00
          </p>
        </div>

        {/* product 2 */}
        <div className="w-full md:w-[224px] h-auto flex flex-col items-center md:items-start mt-6">
          <Image
            src="/Granite dining table with dining chair 1.png"
            alt="Product 2"
            width={200}
            height={200}
            className="object-contain pt-12"
          />
          <h3 className="font-poppins font-normal text-[16px] leading-6 text-[#000000] mt-2">
            Granite dining table with dining chair
          </h3>
          <p className="font-poppins font-medium text-[24px] leading-9 text-[#000000]">
            Rs. 25,000.00
          </p>
        </div>

        {/* product 3 */}
        <div className="w-full md:w-[224px] h-auto flex flex-col items-center md:items-start">
          <Image
            src="/Outdoor bar table and stool 1.png"
            alt="Product 3"
            width={200}
            height={200}
            className="object-contain pt-5"
          />
          <h3 className="font-poppins font-normal text-[16px] leading-6 text-[#000000] mt-2">
            Outdoor bar table and stool
          </h3>
          <p className="font-poppins font-medium text-[24px] leading-9 text-[#000000] mt-6">
            Rs. 25,000.00
          </p>
        </div>

        {/* product 4 */}
        <div className="w-full md:w-[224px] h-auto flex flex-col items-center md:items-start mt-6">
          <Image
            src="/Plain console with teak mirror 1.png"
            alt="Product 4"
            width={200}
            height={200}
            className="object-contain pt-12"
          />
          <h3 className="font-poppins font-normal text-[16px] leading-6 text-[#000000] mt-2">
            Plain console with teak mirror
          </h3>
          <p className="font-poppins font-medium text-[24px] leading-9 text-[#000000] mt-6">
            Rs. 25,000.00
          </p>
        </div>

        {/* product 5 */}
        <div className="w-full md:w-[224px] h-auto flex flex-col items-center md:items-start mt-14">
          <Image
            src="/Grain coffee table 1.png"
            alt="Product 1"
            width={200}
            height={200}
            className="object-contain"
          />
          <h3 className="font-poppins font-normal text-[16px] leading-6 text-[#000000] mt-4">
          Grain coffee table
          </h3>
          <p className="font-poppins font-medium text-[24px] leading-9 text-[#000000] mt-6">
          Rs. 15,000.00
          </p>
        </div>

        {/* product 6 */}
        <div className="w-full md:w-[224px] h-auto flex flex-col items-center md:items-start mt-6">
          <Image
            src="/Kent coffee table 1.png"
            alt="Product 2"
            width={200}
            height={200}
            className="object-contain pt-12"
          />
          <h3 className="font-poppins font-normal text-[16px] leading-6 text-[#000000] mt-4">
          Kent coffee table
          </h3>
          <p className="font-poppins font-medium text-[24px] leading-9 text-[#000000] mt-4">
          Rs. 225,000.00
          </p>
        </div>

        {/* product 7 */}
        <div className="w-full md:w-[224px] h-auto flex flex-col items-center md:items-start">
          <Image
            src="/Round coffee table_color 2 1.png"
            alt="Product 3"
            width={200}
            height={200}
            className="object-contain pt-5"
          />
          <h3 className="font-poppins font-normal text-[16px] leading-6 text-[#000000] mt-0">
          Round coffee table_color 2
          </h3>
          <p className="font-poppins font-medium text-[24px] leading-9 text-[#000000] mt-4">
          Rs. 251,000.00
          </p>
        </div>

        {/* product 8 */}
        <div className="w-full md:w-[224px] h-auto flex flex-col items-center md:items-start mt-6">
          <Image
            src="/Reclaimed teak coffee table 1.png"
            alt="Product 4"
            width={200}
            height={200}
            className="object-contain pt-12"
          />
          <h3 className="font-poppins font-normal text-[16px] leading-6 text-[#000000] mt-2">
          Reclaimed teak coffee table
          </h3>
          <p className="font-poppins font-medium text-[24px] leading-9 text-[#000000] mt-4">
          Rs. 25,200.00
          </p>
        </div>

        {/* product 9 */}
        <div className="w-full md:w-[224px] h-auto flex flex-col items-center md:items-start mt-28">
          <Image
            src="/Plain console_ 1.png"
            alt="Product 1"
            width={200}
            height={200}
            className="object-contain"
          />
          <h3 className="font-poppins font-normal text-[16px] leading-6 text-[#000000] mt-8">
          Plain console_
          </h3>
          <p className="font-poppins font-medium text-[24px] leading-9 text-[#000000] mt-4">
          Rs. 258,200.00
          </p>
        </div>

        {/* product 10 */}
        <div className="w-full md:w-[240px] h-auto flex flex-col items-center md:items-start mt-0">
          <Image
            src="/Reclaimed teak Sideboard 1.png"
            alt="Product 2"
            width={200}
            height={200}
            className="object-contain pt-12"
          />
          <h3 className="font-poppins font-normal text-[16px] leading-6 text-[#000000] mt-0">
          Reclaimed teak Sideboardr
          </h3>
          <p className="font-poppins font-medium text-[24px] leading-9 text-[#000000] mt-4">
          Rs. 20,000.00
          </p>
        </div>

        {/* product 11 */}
        <div className="w-full md:w-[240px] h-auto flex flex-col items-center md:items-start mt-14">
          <Image
            src="/SJP_0825  1.png"
            alt="Product 3"
            width={200}
            height={200}
            className="object-contain pt-5"
          />
          <h3 className="font-poppins font-normal text-[16px] leading-6 text-[#000000] mt-2">
          SJP_0825 
          </h3>
          <p className="font-poppins font-medium text-[24px] leading-9 text-[#000000] mt-4">
          Rs. 200,000.00
          </p>
        </div>

        {/* product 12 */}
        <div className="w-full md:w-[224px] h-auto flex flex-col items-center md:items-start mt-10">
          <Image
            src="/Bella chair and table 1.png"
            alt="Product 4"
            width={200}
            height={200}
            className="object-contain pt-12"
          />
          <h3 className="font-poppins font-normal text-[16px] leading-6 text-[#000000] mt-2">
          Bella chair and table
          </h3>
          <p className="font-poppins font-medium text-[24px] leading-9 text-[#000000] mt-4">
          Rs. 100,000.00
          </p>
        </div>

        {/* product 13 */}
        <div className="w-full md:w-[224px] h-auto flex flex-col items-center md:items-start mt-12">
          <Image
            src="/Granite square side table 1.png"
            alt="Product 1"
            width={200}
            height={150}
            className="object-contain"
          />
          <h3 className="font-poppins font-normal text-[16px] leading-6 text-[#000000] mt-0">
          Granite square side table
          </h3>
          <p className="font-poppins font-medium text-[24px] leading-9 text-[#000000] mt-4">
          Rs. 258,800.00
          </p>
        </div>

        {/* product 14 */}
        <div className="w-full md:w-[224px] h-auto flex flex-col items-center md:items-start mt-4">
          <Image
            src="/Asgaard sofa 1 (1).png"
            alt="Product 2"
            width={200}
            height={200}
            className="object-contain pt-12"
          />
          <h3 className="font-poppins font-normal text-[16px] leading-6 text-[#000000] mt-0">
          Asgaard sofa
          </h3>
          <p className="font-poppins font-medium text-[24px] leading-9 text-[#000000] mt-4">
          Rs. 250,000.00
          </p>
        </div>

        {/* product 15 */}
        <div className="w-full md:w-[224px] h-auto flex flex-col items-center md:items-start mt-20">
          <Image
            src="/Maya sofa three seater 1.png"
            alt="Product 3"
            width={200}
            height={200}
            className="object-contain pt-5"
          />
          <h3 className="font-poppins font-normal text-[16px] leading-6 text-[#000000] mt-10">
          Maya sofa three seater
          </h3>
          <p className="font-poppins font-medium text-[24px] leading-9 text-[#000000] mt-4">
          Rs. 115,000.00
          </p>
        </div>

        {/* product 16 */}
        <div className="w-full md:w-[224px] h-auto flex flex-col items-center md:items-start mt-6">
          <Image
            src="/Outdoor sofa set 1.png"
            alt="Product 4"
            width={200}
            height={200}
            className="object-contain pt-12"
          />
          <h3 className="font-poppins font-normal text-[16px] leading-6 text-[#000000] mt-4">
          Outdoor sofa set
          </h3>
          <p className="font-poppins font-medium text-[24px] leading-9 text-[#000000] mt-4">
          Rs. 244,000.00
          </p>
        </div>
      </div>
  )
}

export default Shopproducts
