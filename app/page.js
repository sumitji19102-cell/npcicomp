"use client";

import { Poppins } from "next/font/google";

import { FaChevronDown } from "react-icons/fa";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { AiFillSound } from "react-icons/ai";
import { MdRefresh } from "react-icons/md";
import { AiOutlineCalendar } from "react-icons/ai";
import { GoHome } from "react-icons/go";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export default function Page() {
  return (
    <div
      className={`${poppins.className} w-full min-h-screen bg-[#f4f1eb] overflow-x-hidden`}
    >
      {/* TOP BAR */}
      <div className="w-full bg-[#f5f5f5] border-b border-[#e5e5e5]">
        <div className="max-w-[1540px] mx-auto h-[42px] flex items-center justify-end px-3 md:px-6">
          <div className="flex items-center gap-3 md:gap-8 text-[11px] md:text-[13px] text-[#4d4d4d]">
            <span>Careers</span>
            <span>Contact us</span>
            <span>Skip to content</span>

            <div className="flex items-center gap-2 md:gap-3">
              <span>A+</span>
              <span>A</span>
              <span>A-</span>
            </div>

            <div className="flex items-center gap-1">
              <span>English</span>

              <FaChevronDown className="text-[9px]" />
            </div>
          </div>
        </div>
      </div>

      {/* NAVBAR */}
      <div className="w-full bg-white border-b border-[#ececec]">
        <div className="max-w-[1540px] mx-auto h-auto md:h-[88px] flex flex-col md:flex-row md:items-center justify-between px-3 md:px-6 py-4 md:py-0 gap-5 md:gap-0">
          {/* LEFT */}
          <div className="flex flex-col md:flex-row md:items-center gap-6 md:gap-16">
            {/* LOGO */}
            <div className="leading-none">
              <h1 className="text-[38px] md:text-[54px] font-extrabold italic tracking-tight text-[#23356f]">
                NPCI
              </h1>

              <p className="text-[10px] md:text-[14px] font-semibold text-[#23356f] tracking-wide mt-1">
                ALWAYS FORWARD
              </p>
            </div>

            {/* MENUS */}
            <div className="flex flex-wrap items-center gap-4 md:gap-10 text-[14px] md:text-[18px] font-medium text-[#232323]">
              <div className="flex items-center gap-2">
                <span>About NPCI</span>

                <FaChevronDown className="text-[10px]" />
              </div>

              <div className="flex items-center gap-2">
                <span>Customer</span>

                <FaChevronDown className="text-[10px]" />
              </div>

              <div className="flex items-center gap-2">
                <span>Business</span>

                <FaChevronDown className="text-[10px]" />
              </div>

              <div className="flex items-center gap-2">
                <span>Statistics</span>

                <FaChevronDown className="text-[10px]" />
              </div>
            </div>
          </div>

          {/* BUTTON */}
          <button className="h-[50px] md:h-[58px] px-6 md:px-8 rounded-[16px] bg-[#f89a1d] flex items-center justify-center gap-4 text-[16px] md:text-[18px] font-semibold text-black w-full md:w-auto">
            <span>All Products</span>

            <div className="grid grid-cols-2 gap-[3px]">
              <div className="w-[5px] h-[5px] bg-black rounded-full"></div>
              <div className="w-[5px] h-[5px] bg-black rounded-full"></div>
              <div className="w-[5px] h-[5px] bg-black rounded-full"></div>
              <div className="w-[5px] h-[5px] bg-black rounded-full"></div>
            </div>
          </button>
        </div>
      </div>

      {/* HERO */}
      <div className="w-full bg-gradient-to-r from-[#b86d1a] via-[#35347d] to-[#00793d]">
        <div className="max-w-[1540px] mx-auto px-3 md:px-6 py-12 md:py-0 md:h-[230px] flex items-center justify-center">
          <div className="w-full">
            {/* BREADCRUMB */}
            <div className="flex items-center gap-2 text-[11px] md:text-[13px] mt-[-70] text-white  md:mb-0 md:absolute">
              <GoHome className="text-[15px]" />

              <span>/</span>

              <span>Customer</span>

              <span>/</span>

              <span>Complaint Register</span>
            </div>

            <h1 className="text-[44px] leading-[52px] md:text-[64px] md:leading-none font-semibold text-white text-center">
              Other Product Complaint
            </h1>
          </div>
        </div>
      </div>

      {/* MAIN */}
      <div className="w-full bg-[#f2ebe3] pt-6 md:pt-8 pb-16">
        {/* UPI BOX */}
        <div className="max-w-[1540px] mx-auto px-3 md:px-6">
          <div className="max-w-[1020px] mx-auto bg-[#f7f7f7] border border-[#bdbdbd] rounded-[22px] p-5 md:px-10 md:h-[120px] flex flex-col md:flex-row md:items-center justify-between gap-5">
            <div className="flex items-center gap-4 md:gap-6">
              <div className="w-[48px] h-[48px] md:w-[56px] md:h-[56px] rounded bg-[#eef2ff] flex items-center justify-center text-[13px] md:text-[14px] font-bold text-[#23356f]">
                UPI
              </div>

              <p className="text-[16px] md:text-[20px] leading-[28px] font-medium text-[#232323]">
                Click here for queries related to UPI
                Transactions & UPI Mandates.
              </p>
            </div>

            <MdOutlineKeyboardArrowRight className="text-[30px] md:text-[38px] text-[#444]" />
          </div>
        </div>

        {/* TITLE */}
        <div className="max-w-[1540px] mx-auto px-3 md:px-6 mt-8">
          <h2 className="text-[22px] font-semibold text-black">
            Kindly select the Product type and fill the form
          </h2>

          <div className="mt-4 text-[15px] md:text-[17px] leading-[30px] md:leading-[32px] text-[#2e2e2e]">
            <p>
              <span className="font-semibold">Note:</span>{" "}
              Complaints with respect to
              fraudulent/unidentified/unauthorised
              transactions to be raised with your
              respective bank for redressal.
            </p>

            <p>* denotes mandatory fields</p>
          </div>
        </div>

        {/* FORM */}
        <div className="max-w-[1540px] mx-auto px-3 md:px-6 mt-10">
          <div className="bg-[#efefef] rounded-[12px] p-4 md:p-14">
            <div className="grid grid-cols-1 md:grid-cols-[360px_1fr] gap-6 md:gap-10">
              {/* LEFT LABELS */}
              <div className="flex flex-col gap-8 md:block md:space-y-[120px] md:pt-8">
                <h2 className="text-[20px] md:text-[26px] font-semibold text-black md:text-right">
                  Select Product
                </h2>

                <h2 className="text-[20px] md:text-[26px] font-semibold text-black md:text-right leading-[34px]">
                  Card Related Details
                </h2>

                <h2 className="text-[20px] md:text-[26px] font-semibold text-black md:text-right leading-[34px]">
                  Transaction Related Details
                </h2>

                <h2 className="text-[20px] md:text-[26px] font-semibold text-black md:text-right">
                  Bank Details
                </h2>
              </div>

              {/* RIGHT FORM */}
              <div className="w-full overflow-hidden">
                {/* PRODUCT */}
                <div className="w-full md:max-w-[560px]">
                  <Label text="Select Product*" />

                  <Select />
                </div>

                <div className="w-full md:max-w-[560px] mt-6 md:mt-10">
                  <Label text="Transaction Type*" />

                  <Select />
                </div>

                {/* CARD */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 md:gap-8 mt-8 md:mt-14">
                  <div>
                    <Label text="First 6 digits of your card number*" />

                    <Input />
                  </div>

                  <div>
                    <Label text="Last 4 digits of your card number*" />

                    <Input />
                  </div>
                </div>

                {/* TRANSACTION */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 md:gap-8 mt-8 md:mt-10">
                  <div>
                    <Label text="Date of transaction*" />

                    <div className="relative">
                      <Input />

                      <AiOutlineCalendar className="absolute right-4 md:right-5 top-1/2 -translate-y-1/2 text-[22px] md:text-[26px] text-[#444]" />
                    </div>

                    <p className="text-[12px] md:text-[14px] mt-2 md:mt-3 text-[#3d3d3d]">
                      MM/DD/YYYY
                    </p>
                  </div>

                  <div>
                    <Label text="Transaction ID/RRN*" />

                    <Input />

                    <p className="text-[12px] md:text-[14px] mt-2 md:mt-3 leading-[20px] text-[#3d3d3d]">
                      Please enter your transaction
                      reference number that starts with
                      1,7,8,9 or 0
                    </p>
                  </div>
                </div>

                {/* AMOUNT */}
                <div className="w-full md:max-w-[560px] mt-8 md:mt-10">
                  <Label text="Transaction amount*" />

                  <Input />

                  <p className="text-[12px] md:text-[14px] mt-2 md:mt-3 text-[#3d3d3d]">
                    Amount should be less than 10000
                  </p>
                </div>

                {/* BANK */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 md:gap-8 mt-8 md:mt-12">
                  <div>
                    <Label text="Bank Name*" />

                    <Select />
                  </div>

                  <div>
                    <Label text="Account Number" />

                    <Input />

                    <p className="text-[12px] md:text-[14px] mt-2 md:mt-3 text-[#3d3d3d]">
                      Please enter your bank account
                      number
                    </p>
                  </div>
                </div>

                {/* CAPTCHA */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 md:gap-8 mt-8 md:mt-14 items-end">
                  <div>
                    <Label text="Captcha" />

                    <div className="flex items-center gap-3 md:gap-4 flex-wrap">
                      <div className="w-[130px] md:w-[160px] h-[52px] md:h-[62px] border border-[#d4d4d4] bg-[#edf4ed] flex items-center justify-center text-[28px] md:text-[38px] italic tracking-[2px]">
                        1QUkE
                      </div>

                      <button>
                        <MdRefresh className="text-[28px] md:text-[34px] text-[#666]" />
                      </button>

                      <button>
                        <AiFillSound className="text-[28px] md:text-[34px] text-[#666]" />
                      </button>
                    </div>
                  </div>

                  <div>
                    <Label text="Write text from image*" />

                    <Input />
                  </div>
                </div>

                {/* BUTTON */}
                <div className="flex justify-center md:justify-end mt-8 md:mt-12">
                  <button className="bg-[#f89a1d] hover:bg-[#ef8d08] h-[56px] md:h-[64px] w-full md:w-auto px-10 md:px-16 rounded-[10px] text-[16px] md:text-[18px] font-semibold text-black flex items-center justify-center gap-4 md:gap-5">
                    Save & Proceed

                    <MdOutlineKeyboardArrowRight className="text-[22px] md:text-[28px]" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Label({ text }) {
  return (
    <label className="block text-[14px] md:text-[16px] font-medium text-black mb-2 md:mb-3">
      {text}
    </label>
  );
}

function Input() {
  return (
    <input
      type="text"
      className="w-full h-[58px] md:h-[74px] border border-[#9f9f9f] bg-[#f8f8f8] rounded-[4px] px-4 md:px-5 text-[16px] md:text-[20px] outline-none"
    />
  );
}

function Select() {
  return (
    <div className="relative">
      <select className="w-full h-[58px] md:h-[74px] border border-[#9f9f9f] bg-[#f8f8f8] rounded-[4px] px-4 md:px-5 text-[16px] md:text-[20px] appearance-none outline-none">
        <option>Select</option>
      </select>

      <div className="absolute right-4 md:right-5 top-1/2 -translate-y-1/2">
        <FaChevronDown className="text-[14px] md:text-[18px]" />
      </div>
    </div>
  );
}