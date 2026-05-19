"use client";

import { Poppins } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export default function Page() {
  return (
    <div
      className={`${poppins.className} w-full min-h-screen bg-[#f7f4ef]`}
    >
      {/* TOP HEADER */}
      <div className="w-full bg-[#f7f7f7] border-b border-[#ececec]">
        <div className="max-w-[1400px] mx-auto h-[36px] flex items-center justify-between px-4">
          <div className="flex items-center gap-5 text-[11px] text-[#5d5d5d]">
            <span>Careers</span>
            <span>Contact us</span>
            <span>Skip to content</span>
          </div>

          <div className="flex items-center gap-4 text-[11px] text-[#5d5d5d]">
            <div className="flex items-center gap-2">
              <span>A+</span>
              <span>A</span>
              <span>A-</span>
            </div>

            <div className="flex items-center gap-1">
              <span>English</span>
              <span className="text-[8px]">▼</span>
            </div>
          </div>
        </div>
      </div>

      {/* NAVBAR */}
      <div className="w-full bg-white border-b border-[#ececec]">
        <div className="max-w-[1400px] mx-auto h-[74px] flex items-center justify-between px-4">
          {/* LEFT */}
          <div className="flex items-center gap-10">
            {/* LOGO */}
            <div className="leading-none">
              <h1 className="text-[32px] font-extrabold italic tracking-tight text-[#23356f]">
                NPCI
              </h1>

              <p className="text-[9px] font-semibold tracking-[1px] text-[#23356f] mt-[2px]">
                ALWAYS FORWARD
              </p>
            </div>

            {/* MENUS */}
            <div className="hidden md:flex items-center gap-7 text-[14px] text-[#2f2f2f] font-medium">
              <div className="flex items-center gap-1">
                <span>About NPCI</span>
                <span className="text-[9px]">▼</span>
              </div>

              <div className="flex items-center gap-1">
                <span>Customer</span>
                <span className="text-[9px]">▼</span>
              </div>

              <div className="flex items-center gap-1">
                <span>Business</span>
                <span className="text-[9px]">▼</span>
              </div>

              <div className="flex items-center gap-1">
                <span>Statistics</span>
                <span className="text-[9px]">▼</span>
              </div>
            </div>
          </div>

          {/* BUTTON */}
          <button className="h-[42px] px-5 rounded-[10px] bg-[#f89a1d] text-[14px] font-semibold text-black flex items-center gap-3">
            <span>All Products</span>

            <div className="grid grid-cols-2 gap-[2px]">
              <div className="w-[4px] h-[4px] bg-black rounded-full"></div>
              <div className="w-[4px] h-[4px] bg-black rounded-full"></div>
              <div className="w-[4px] h-[4px] bg-black rounded-full"></div>
              <div className="w-[4px] h-[4px] bg-black rounded-full"></div>
            </div>
          </button>
        </div>
      </div>

      {/* BREADCRUMB */}
      <div className="max-w-[1400px] mx-auto px-4 pt-3">
        <div className="flex items-center gap-2 text-[11px] text-[#7a7a7a]">
          <span>⌂</span>
          <span>/</span>
          <span>Customer</span>
          <span>/</span>
          <span className="text-[#4d4d4d]">
            Complaint Register
          </span>
        </div>
      </div>

      {/* HERO */}
      <div className="mt-3 w-full bg-gradient-to-r from-[#b66b17] via-[#3d2f74] to-[#00783e]">
        <div className="max-w-[1400px] mx-auto h-[170px] flex items-center px-4">
          <h1 className="text-white text-[50px] font-semibold">
            Other Product Complaint
          </h1>
        </div>
      </div>

      {/* UPI BOX */}
      <div className="max-w-[1400px] mx-auto px-4 mt-8">
        <div className="bg-white border border-[#d7d7d7] rounded-[16px] h-[82px] flex items-center justify-between px-6">
          <div className="flex items-center gap-4">
            <div className="w-[42px] h-[42px] rounded bg-[#eef2ff] flex items-center justify-center text-[11px] font-bold text-[#23356f]">
              UPI
            </div>

            <p className="text-[16px] font-medium text-[#2f2f2f]">
              Click here for queries related to UPI
              Transactions & UPI Mandates.
            </p>
          </div>

          <span className="text-[22px] text-[#444]">›</span>
        </div>
      </div>

      {/* TITLE */}
      <div className="max-w-[1400px] mx-auto px-4 mt-6">
        <h2 className="text-[16px] font-semibold text-black">
          Kindly select the Product type and fill the form
        </h2>

        <div className="mt-2 text-[11px] leading-[18px] text-[#4f4f4f]">
          <p>
            Note: Complaints with respect to
            fraudulent/unidentified/unauthorised
            transactions to be raised with your
            respective bank for redressal.
          </p>

          <p>* denotes mandatory fields</p>
        </div>
      </div>

      {/* FORM */}
      <div className="max-w-[1400px] mx-auto px-4 mt-6 pb-10">
        <div className="w-full bg-[#efefef] rounded-[6px] p-5">
          {/* ROW 1 */}
          <div className="grid grid-cols-[150px_1fr] gap-5">
            <div>
              <h2 className="text-[11px] font-semibold text-black mt-3">
                Select Product
              </h2>
            </div>

            <div>
              <div>
                <label className="block text-[10px] text-black mb-1">
                  Select Product*
                </label>

                <div className="relative">
                  <select className="w-full h-[28px] border border-[#bdbdbd] bg-white text-[12px] px-2 appearance-none outline-none rounded-[2px]">
                    <option>NFS ATM</option>
                  </select>

                  <div className="absolute right-2 top-1/2 -translate-y-1/2 text-[10px]">
                    ▼
                  </div>
                </div>
              </div>

              <div className="mt-5">
                <label className="block text-[10px] text-black mb-1">
                  Transaction Type*
                </label>

                <div className="relative">
                  <select className="w-full h-[28px] border border-[#bdbdbd] bg-white text-[12px] px-2 appearance-none outline-none rounded-[2px]">
                    <option>Select</option>
                  </select>

                  <div className="absolute right-2 top-1/2 -translate-y-1/2 text-[10px]">
                    ▼
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* ROW 2 */}
          <div className="grid grid-cols-[150px_1fr] gap-5 mt-4">
            <div>
              <h2 className="text-[11px] font-semibold text-black mt-4 leading-[18px]">
                Card Related Details
              </h2>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-[10px] text-black mb-1">
                  First 6 digits of your card number*
                </label>

                <input
                  type="text"
                  className="w-full h-[28px] border border-[#bdbdbd] bg-white px-2 text-[12px] outline-none rounded-[2px]"
                />
              </div>

              <div>
                <label className="block text-[10px] text-black mb-1">
                  Last 4 digits of your card number*
                </label>

                <input
                  type="text"
                  className="w-full h-[28px] border border-[#bdbdbd] bg-white px-2 text-[12px] outline-none rounded-[2px]"
                />
              </div>
            </div>
          </div>

          {/* ROW 3 */}
          <div className="grid grid-cols-[150px_1fr] gap-5 mt-4">
            <div>
              <h2 className="text-[11px] font-semibold text-black mt-4 leading-[18px]">
                Transaction Related Details
              </h2>
            </div>

            <div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-[10px] text-black mb-1">
                    Date of transaction*
                  </label>

                  <div className="relative">
                    <input
                      type="text"
                      className="w-full h-[28px] border border-[#bdbdbd] bg-white px-2 text-[12px] outline-none rounded-[2px]"
                    />

                    <div className="absolute right-2 top-1/2 -translate-y-1/2 text-[12px]">
                      📅
                    </div>
                  </div>

                  <p className="text-[9px] mt-1 text-[#444]">
                    MM/DD/YYYY
                  </p>
                </div>

                <div>
                  <label className="block text-[10px] text-black mb-1">
                    Transaction ID/RRN*
                  </label>

                  <input
                    type="text"
                    className="w-full h-[28px] border border-[#bdbdbd] bg-white px-2 text-[12px] outline-none rounded-[2px]"
                  />

                  <p className="text-[8px] mt-1 leading-[10px] text-[#444]">
                    Please enter your transaction
                    reference number that starts
                    with 1,7,8,9 or 0
                  </p>
                </div>
              </div>

              <div className="mt-5 w-[48%]">
                <label className="block text-[10px] text-black mb-1">
                  Transaction amount*
                </label>

                <input
                  type="text"
                  className="w-full h-[28px] border border-[#bdbdbd] bg-white px-2 text-[12px] outline-none rounded-[2px]"
                />

                <p className="text-[8px] mt-1 text-[#444]">
                  Amount should be less than 10000
                </p>
              </div>
            </div>
          </div>

          {/* ROW 4 */}
          <div className="grid grid-cols-[150px_1fr] gap-5 mt-5">
            <div>
              <h2 className="text-[11px] font-semibold text-black mt-4">
                Bank Details
              </h2>
            </div>

            <div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-[10px] text-black mb-1">
                    Bank Name*
                  </label>

                  <div className="relative">
                    <select className="w-full h-[28px] border border-[#bdbdbd] bg-white text-[12px] px-2 appearance-none outline-none rounded-[2px]">
                      <option>Select</option>
                    </select>

                    <div className="absolute right-2 top-1/2 -translate-y-1/2 text-[10px]">
                      ▼
                    </div>
                  </div>
                </div>

                <div>
                  <label className="block text-[10px] text-black mb-1">
                    Account Number
                  </label>

                  <input
                    type="text"
                    className="w-full h-[28px] border border-[#bdbdbd] bg-white px-2 text-[12px] outline-none rounded-[2px]"
                  />

                  <p className="text-[8px] mt-1 text-[#444]">
                    Please enter your bank account
                    number
                  </p>
                </div>
              </div>

              {/* CAPTCHA */}
              <div className="grid grid-cols-2 gap-4 mt-5 items-end">
                <div>
                  <label className="block text-[10px] text-black mb-1">
                    Captcha
                  </label>

                  <div className="flex items-center gap-2">
                    <div className="h-[28px] w-[70px] border border-[#d5d5d5] bg-[#edf4ed] flex items-center justify-center text-[18px] italic tracking-[1px]">
                      WJMAE
                    </div>

                    <button className="text-[16px] text-[#666]">
                      ↻
                    </button>

                    <button className="text-[16px] text-[#666]">
                      🔊
                    </button>
                  </div>
                </div>

                <div>
                  <label className="block text-[10px] text-black mb-1">
                    Write text from image*
                  </label>

                  <input
                    type="text"
                    className="w-full h-[28px] border border-[#bdbdbd] bg-white px-2 text-[12px] outline-none rounded-[2px]"
                  />
                </div>
              </div>

              {/* BUTTON */}
              <div className="flex justify-end mt-5">
                <button className="bg-[#f89a1d] hover:bg-[#ef8d08] h-[34px] px-8 rounded-[4px] text-[12px] font-semibold text-black flex items-center gap-3">
                  Save & Proceed

                  <span className="text-[14px]">›</span>
                </button>
              </div>
            </div>
          </div>

          {/* DISCLAIMER */}
          <div className="mt-10">
            <h2 className="text-[20px] font-semibold text-[#1f1f1f] mb-5">
              Disclaimer
            </h2>

            <div className="grid grid-cols-2 gap-8 text-[11px] leading-[22px] text-[#555]">
              <p>
                NPCI is facilitating customers of the
                Banks & other Institutions that are
                using payment systems operated by NPCI &
                are routing transactions through NPCI’s
                payment systems (“Members”), to check
                the status of a financial transaction in
                NPCI’s records and to register
                complaints with the Member/s & check
                status thereof.
              </p>

              <p>
                NPCI will make available the complaint
                to relevant Member/s where the
                complainant holds its account, for
                necessary action & Member/s shall be
                responsible to resolve the complaint.
                Once a complaint is registered or is
                closed on this website, the user may
                check the final status of such complaint
                or such transaction with its (Member)
                Bank or Institution using the relevant
                transaction details or Complaint
                Reference Number (CRN)
              </p>
            </div>
          </div>
        </div>

        {/* FAQ */}
        <div className="mt-10 text-center">
          <h2 className="text-[42px] font-semibold text-[#1f1f1f]">
            Frequently Asked Questions
          </h2>
        </div>
      </div>
    </div>
  );
}