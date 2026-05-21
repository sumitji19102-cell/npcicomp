"use client";

import { Poppins } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export default function Page() {
  return (
    <div
      className={`${poppins.className} w-full min-h-screen bg-[#f4f1eb]`}
    >
      {/* TOP BAR */}
      <div className="w-full bg-[#f5f5f5] border-b border-[#e5e5e5]">
        <div className="max-w-[1540px] mx-auto h-[42px] flex items-center justify-end px-6">
          <div className="flex items-center gap-8 text-[13px] text-[#4d4d4d]">
            <span>Careers</span>
            <span>Contact us</span>
            <span>Skip to content</span>

            <div className="flex items-center gap-3">
              <span>A+</span>
              <span>A</span>
              <span>A-</span>
            </div>

            <div className="flex items-center gap-1">
              <span>English</span>
              <span className="text-[9px]">▼</span>
            </div>
          </div>
        </div>
      </div>

      {/* NAVBAR */}
      <div className="w-full bg-white border-b border-[#ececec]">
        <div className="max-w-[1540px] mx-auto h-[88px] flex items-center justify-between px-6">
          {/* LEFT */}
          <div className="flex items-center gap-16">
            {/* LOGO */}
            <div className="leading-none">
              <h1 className="text-[54px] font-extrabold italic tracking-tight text-[#23356f]">
                NPCI
              </h1>

              <p className="text-[14px] font-semibold text-[#23356f] tracking-wide mt-1">
                ALWAYS FORWARD
              </p>
            </div>

            {/* MENUS */}
            <div className="hidden md:flex items-center gap-10 text-[18px] font-medium text-[#232323]">
              <div className="flex items-center gap-2">
                <span>About NPCI</span>
                <span className="text-[10px]">▼</span>
              </div>

              <div className="flex items-center gap-2">
                <span>Customer</span>
                <span className="text-[10px]">▼</span>
              </div>

              <div className="flex items-center gap-2">
                <span>Business</span>
                <span className="text-[10px]">▼</span>
              </div>

              <div className="flex items-center gap-2">
                <span>Statistics</span>
                <span className="text-[10px]">▼</span>
              </div>
            </div>
          </div>

          {/* BUTTON */}
          <button className="h-[58px] px-8 rounded-[16px] bg-[#f89a1d] flex items-center gap-4 text-[18px] font-semibold text-black">
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

      {/* BREADCRUMB */}
      <div className="max-w-[1540px] mx-auto px-6 pt-5">
        <div className="flex items-center gap-2 text-[13px] text-white absolute z-10">
          <span>⌂</span>
          <span>/</span>
          <span>Customer</span>
          <span>/</span>
          <span>Complaint Register</span>
        </div>
      </div>

      {/* HERO */}
      <div className="mt-0 w-full bg-gradient-to-r from-[#b86d1a] via-[#35347d] to-[#00793d]">
        <div className="max-w-[1540px] mx-auto h-[230px] flex items-center justify-center px-6">
          <h1 className="text-[64px] font-semibold text-white">
            Other Product Complaint
          </h1>
        </div>
      </div>

      {/* MAIN */}
      <div className="w-full bg-[#f2ebe3] pt-8 pb-16">
        {/* UPI BOX */}
        <div className="max-w-[1540px] mx-auto px-6">
          <div className="max-w-[1020px] mx-auto bg-[#f7f7f7] border border-[#bdbdbd] rounded-[22px] h-[120px] flex items-center justify-between px-10">
            <div className="flex items-center gap-6">
              <div className="w-[56px] h-[56px] rounded bg-[#eef2ff] flex items-center justify-center text-[14px] font-bold text-[#23356f]">
                UPI
              </div>

              <p className="text-[20px] font-medium text-[#232323]">
                Click here for queries related to UPI
                Transactions & UPI Mandates.
              </p>
            </div>

            <span className="text-[38px] text-[#444]">›</span>
          </div>
        </div>

        {/* TITLE */}
        <div className="max-w-[1540px] mx-auto px-6 mt-8">
          <div className="max-w-[1540px]">
            <h2 className="text-[22px] font-semibold text-black">
              Kindly select the Product type and fill the form
            </h2>

            <div className="mt-5 text-[17px] leading-[32px] text-[#2e2e2e]">
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
        </div>

        {/* FORM CONTAINER */}
        <div className="max-w-[1540px] mx-auto px-6 mt-10">
          <div className="bg-[#efefef] rounded-[12px] p-14">
            {/* FORM GRID */}
            <div className="grid grid-cols-[360px_1fr] gap-10">
              {/* LEFT LABELS */}
              <div className="space-y-[120px] pt-8">
                <h2 className="text-[26px] font-semibold text-black text-right">
                  Select Product
                </h2>

                <h2 className="text-[26px] font-semibold text-black text-right leading-[36px]">
                  Card Related Details
                </h2>

                <h2 className="text-[26px] font-semibold text-black text-right leading-[36px]">
                  Transaction Related Details
                </h2>

                <h2 className="text-[26px] font-semibold text-black text-right">
                  Bank Details
                </h2>
              </div>

              {/* RIGHT FORM */}
              <div>
                {/* PRODUCT */}
                <div className="max-w-[560px]">
                  <Label text="Select Product*" />

                  <Select />
                </div>

                <div className="max-w-[560px] mt-10">
                  <Label text="Transaction Type*" />

                  <Select />
                </div>

                {/* CARD */}
                <div className="grid grid-cols-2 gap-8 mt-14">
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
                <div className="grid grid-cols-2 gap-8 mt-10">
                  <div>
                    <Label text="Date of transaction*" />

                    <div className="relative">
                      <Input />

                      <div className="absolute right-5 top-1/2 -translate-y-1/2 text-[24px]">
                        📅
                      </div>
                    </div>

                    <p className="text-[14px] mt-3 text-[#3d3d3d]">
                      MM/DD/YYYY
                    </p>
                  </div>

                  <div>
                    <Label text="Transaction ID/RRN*" />

                    <Input />

                    <p className="text-[14px] mt-3 leading-[20px] text-[#3d3d3d]">
                      Please enter your transaction
                      reference number that starts with
                      1,7,8,9 or 0
                    </p>
                  </div>
                </div>

                {/* AMOUNT */}
                <div className="max-w-[560px] mt-10">
                  <Label text="Transaction amount*" />

                  <Input />

                  <p className="text-[14px] mt-3 text-[#3d3d3d]">
                    Amount should be less than 10000
                  </p>
                </div>

                {/* BANK */}
                <div className="grid grid-cols-2 gap-8 mt-12">
                  <div>
                    <Label text="Bank Name*" />

                    <Select />
                  </div>

                  <div>
                    <Label text="Account Number" />

                    <Input />

                    <p className="text-[14px] mt-3 text-[#3d3d3d]">
                      Please enter your bank account
                      number
                    </p>
                  </div>
                </div>

                {/* CAPTCHA */}
                <div className="grid grid-cols-2 gap-8 mt-14 items-end">
                  <div>
                    <Label text="Captcha" />

                    <div className="flex items-center gap-4">
                      <div className="w-[160px] h-[62px] border border-[#d4d4d4] bg-[#edf4ed] flex items-center justify-center text-[38px] italic tracking-[2px]">
                        1QUkE
                      </div>

                      <button className="text-[34px] text-[#666]">
                        ↻
                      </button>

                      <button className="text-[34px] text-[#666]">
                        🔊
                      </button>
                    </div>
                  </div>

                  <div>
                    <Label text="Write text from image*" />

                    <Input />
                  </div>
                </div>

                {/* BUTTON */}
                <div className="flex justify-end mt-12">
                  <button className="bg-[#f89a1d] hover:bg-[#ef8d08] h-[64px] px-16 rounded-[10px] text-[18px] font-semibold text-black flex items-center gap-5">
                    Save & Proceed

                    <span className="text-[28px]">›</span>
                  </button>
                </div>
              </div>
            </div>

            {/* DISCLAIMER */}
            <div className="mt-20">
              <h2 className="text-[48px] font-semibold text-[#232323] mb-10">
                Disclaimer
              </h2>

              <div className="grid grid-cols-2 gap-12 text-[17px] leading-[38px] text-[#4a4a4a]">
                <p>
                  NPCI is facilitating customers of the
                  Banks & other Institutions that are
                  using payment systems operated by NPCI
                  & are routing transactions through
                  NPCI’s payment systems (“Members”), to
                  check the status of a financial
                  transaction in NPCI’s records and to
                  register complaints with the Member/s
                  & check status thereof.
                </p>

                <p>
                  NPCI will make available the complaint
                  to relevant Member/s where the
                  complainant holds its account, for
                  necessary action & Member/s shall be
                  responsible to resolve the complaint.
                  Once a complaint is registered or is
                  closed on this website, the user may
                  check the final status of such
                  complaint or such transaction with its
                  (Member) Bank or Institution using the
                  relevant transaction details or
                  Complaint Reference Number (CRN)
                </p>
              </div>
            </div>
          </div>

          {/* FAQ */}
          <div className="text-center mt-16">
            <h2 className="text-[58px] font-semibold text-[#232323]">
              Frequently Asked Questions
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
}

function Label({ text }) {
  return (
    <label className="block text-[16px] font-medium text-black mb-3">
      {text}
    </label>
  );
}

function Input() {
  return (
    <input
      type="text"
      className="w-full h-[74px] border border-[#9f9f9f] bg-[#f8f8f8] rounded-[4px] px-5 text-[20px] outline-none"
    />
  );
}

function Select() {
  return (
    <div className="relative">
      <select className="w-full h-[74px] border border-[#9f9f9f] bg-[#f8f8f8] rounded-[4px] px-5 text-[20px] appearance-none outline-none">
        <option>Select</option>
      </select>

      <div className="absolute right-5 top-1/2 -translate-y-1/2 text-[18px]">
        ▼
      </div>
    </div>
  );
}