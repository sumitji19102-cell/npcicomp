"use client";

export default function Page() {
  return (
    <div className="w-full min-h-screen bg-[#f5f5f5] flex justify-center py-6 px-3">
      <div className="w-full max-w-[560px] bg-[#efefef] rounded-[6px] p-5">
        {/* ROW 1 */}
        <div className="grid grid-cols-[150px_1fr] gap-5">
          <div>
            <h2 className="text-[11px] font-semibold text-black mt-3">
              Select Product
            </h2>
          </div>

          <div>
            {/* SELECT PRODUCT */}
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

            {/* TRANSACTION TYPE */}
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
            {/* DATE + ID */}
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

            {/* AMOUNT */}
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
            {/* BANK */}
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
                  Please enter your bank account number
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
      </div>
    </div>
  );
}