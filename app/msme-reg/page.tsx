import { div } from "framer-motion/client";
import {
  Banknote,
  BarChart,
  ClipboardList,
  CreditCard,
  FileText,
  IdCard,
  ListOrdered,
  ShieldCheck,
} from "lucide-react";
import React from "react";

const Page = () => {
  return (
    <div>
      <div
        className="relative min-h-[50vh] bg-cover bg-center"
        style={{ backgroundImage: "url('/images/Msme-Registration.jpg')" }}
      >
        {/* Semi-transparent overlay to improve text readability */}
        <div className="absolute inset-0 bg-black opacity-50 ">
          <section className="relative z-10 flex flex-col justify-center items-center text-white  min-h-[50vh] px-4">
            <div className="max-w-7xl mx-auto text-center">
              <h1 className="text-4xl md:text-6xl font-bold mb-6 drop-shadow-lg">
                MSME Registration | Never Been Easier!
              </h1>
              <p className="text-xl md:text-2xl text-gray-200 mb-8 drop-shadow-md">
                Streamline your MSME registration process with our professional
                legal assistance
              </p>
            </div>
          </section>
        </div>
      </div>

      <div className="bg-gray-100 py-12">
        <div className="max-w-7xl mx-auto px-4">
          {/* Headline & Subheading */}
          <div id = 'Headline & Subheading' className="text-center mb-10">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900">
              MSME Registration in India | Transparent & Lowest Pricing
            </h1>
            <p className="text-gray-600 mt-2">
              Start focusing on your business growth while our trusted experts
              handle your MSME registration with seamless assistance in
              documentation, filing, and compliance.
            </p>
          </div>

          {/* Content Section */}
          <div className=" grid md:grid-cols-2 gap-8 items-start">
            {/* Left Side - Form Section */}
            <div id = 'Form Section' className="bg-white p-6 shadow-lg rounded-2xl">
              <h2 className="text-xl font-semibold text-gray-800 mb-4">
                Need Help with Public Limited Company Registration?
              </h2>
              <p className="text-gray-600 mb-4">
                Fill up the below-mentioned form
              </p>

              <form>
                <div className="mb-4">
                  <label className="block text-gray-700 font-medium mb-1">
                    Name *
                  </label>
                  <input
                    type="text"
                    placeholder="Your Name"
                    className="w-full border rounded px-3 py-2"
                  />
                </div>

                <div className="mb-4">
                  <label className="block text-gray-700 font-medium mb-1">
                    Email *
                  </label>
                  <input
                    type="email"
                    placeholder="Your Email Address"
                    className="w-full border rounded px-3 py-2"
                  />
                </div>

                <div className="mb-4">
                  <label className="block text-gray-700 font-medium mb-1">
                    Mobile *
                  </label>
                  <input
                    type="text"
                    placeholder="Your Phone Number (Without 0 or +91)"
                    className="w-full border rounded px-3 py-2"
                  />
                </div>

                <div className="mb-4">
                  <label className="block text-gray-700 font-medium mb-1">
                    State *
                  </label>
                  <select className="w-full border rounded px-3 py-2">
                    <option>Select State</option>
                    <option>Maharashtra</option>
                    <option>Karnataka</option>
                    <option>Tamil Nadu</option>
                    <option>Delhi</option>
                  </select>
                </div>

                <div className="flex items-start mb-4">
                  <input type="checkbox" id="terms" className="mr-2" />
                  <label htmlFor="terms" className="text-gray-600 text-sm">
                    I have read & agreed to the company's Terms and Conditions,
                    disclaimer, and refund policy.
                  </label>
                </div>

                <button className="w-full bg-green-600 text-white py-2 rounded text-lg font-semibold hover:bg-green-700">
                  Request for Call Back
                </button>
              </form>
            </div>


            <div id="msme-benefits"
              className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-shadow duration-300">
              {/* Header Section */}
              <div className="flex items-center space-x-3">
                {/* Icon Container */}
                <div className="w-10 h-10 bg-yellow-100 rounded-full flex items-center justify-center">
                  <ShieldCheck className="w-6 h-6 text-yellow-500" />
                </div>

                {/* Title */}
                <h3 className="text-xl font-semibold text-gray-700">
                  Benefits of MSME Registration
                </h3>
              </div>

              {/* Benefits List */}
              <div className="mt-5 space-y-4">
                <div className="flex items-start space-x-3">
                  <span className="text-yellow-500 font-semibold">✔</span>
                  <p>
                    <strong>Collateral-Free Loans</strong> – Access priority
                    financing under government-backed schemes without the need
                    for collateral.
                  </p>
                </div>

                <div className="flex items-start space-x-3">
                  <span className="text-yellow-500 font-semibold">✔</span>
                  <p>
                    <strong>Subsidized Interest Rates</strong> – Avail lower
                    interest rates through exclusive MSME financing programs.
                  </p>
                </div>

                <div className="flex items-start space-x-3">
                  <span className="text-yellow-500 font-semibold">✔</span>
                  <p>
                    <strong>Tax Benefits</strong> – Enjoy exemptions from select
                    direct taxes as per MSME eligibility criteria.
                  </p>
                </div>

                <div className="flex items-start space-x-3">
                  <span className="text-yellow-500 font-semibold">✔</span>
                  <p>
                    <strong>Government Tenders</strong> – Gain priority in
                    public procurement and exemption from Earnest Money Deposit
                    (EMD).
                  </p>
                </div>

                <div className="flex items-start space-x-3">
                  <span className="text-yellow-500 font-semibold">✔</span>
                  <p>
                    <strong>Protection Against Delayed Payments</strong> – MSMEs
                    can charge compound interest on late payments from buyers.
                  </p>
                </div>

                <div className="flex items-start space-x-3">
                  <span className="text-yellow-500 font-semibold">✔</span>
                  <p>
                    <strong>Subsidies & Incentives</strong> – Avail various
                    state and central government subsidies and incentives.
                  </p>
                </div>

                <div className="flex items-start space-x-3">
                  <span className="text-yellow-500 font-semibold">✔</span>
                  <p>
                    <strong>Credit Guarantee Scheme</strong> – Get access to
                    government-backed credit guarantees for small businesses.
                  </p>
                </div>
              </div>
            </div>

            <div
              id="Documents Required"
              className="container mx-auto p-8 w-screen bg-slate-50 rounded-2xl"
            >
              {/* Title Section */}
              <h2 className="text-2xl font-bold text-center text-gray-800 mb-4">
                Documents Required
              </h2>
              <div className="w-16 h-1 bg-green-500 mx-auto mb-6"></div>

              {/* Documents Grid */}
              <div className="grid md:grid-cols-3 sm:grid-cols-2 gap-8 text-center">
                {/* Aadhaar Card */}
                <div className="p-6 bg-white shadow-md rounded-xl hover:shadow-lg transition-shadow duration-300 flex flex-col items-center">
                  <div className="w-16 h-16 border-2 border-blue-300 rounded-full flex items-center justify-center mb-4">
                    <IdCard className="w-10 h-10 text-yellow-500" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-800">
                    Aadhaar Card
                  </h3>
                  <p className="text-gray-600 mt-2">
                    Aadhaar Card of the business owner.
                  </p>
                </div>

                {/* PAN Card */}
                <div className="p-6 bg-white shadow-md rounded-xl hover:shadow-lg transition-shadow duration-300 flex flex-col items-center">
                  <div className="w-16 h-16 border-2 border-blue-300 rounded-full flex items-center justify-center mb-4">
                    <CreditCard className="w-10 h-10 text-yellow-500" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-800">
                    PAN Card
                  </h3>
                  <p className="text-gray-600 mt-2">
                    PAN Card of the business entity.
                  </p>
                </div>

                {/* Business Registration */}
                <div className="p-6 bg-white shadow-md rounded-xl hover:shadow-lg transition-shadow duration-300 flex flex-col items-center">
                  <div className="w-16 h-16 border-2 border-blue-300 rounded-full flex items-center justify-center mb-4">
                    <FileText className="w-10 h-10 text-yellow-500" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-800">
                    Business Registration
                  </h3>
                  <p className="text-gray-600 mt-2">
                    Partnership Deed, Certificate of Incorporation, or GST
                    registration.
                  </p>
                </div>

                {/* Bank Details */}
                <div className="p-6 bg-white shadow-md rounded-xl hover:shadow-lg transition-shadow duration-300 flex flex-col items-center">
                  <div className="w-16 h-16 border-2 border-blue-300 rounded-full flex items-center justify-center mb-4">
                    <Banknote className="w-10 h-10 text-yellow-500" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-800">
                    Bank Details
                  </h3>
                  <p className="text-gray-600 mt-2">
                    Bank account details and IFSC code.
                  </p>
                </div>

                {/* Investment & Turnover */}
                <div className="p-6 bg-white shadow-md rounded-xl hover:shadow-lg transition-shadow duration-300 flex flex-col items-center">
                  <div className="w-16 h-16 border-2 border-blue-300 rounded-full flex items-center justify-center mb-4">
                    <BarChart className="w-10 h-10 text-yellow-500" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-800">
                    Investment & Turnover
                  </h3>
                  <p className="text-gray-600 mt-2">
                    Based on latest ITR and GST return.
                  </p>
                </div>

                {/* NIC Code */}
                <div className="p-6 bg-white shadow-md rounded-xl hover:shadow-lg transition-shadow duration-300 flex flex-col items-center">
                  <div className="w-16 h-16 border-2 border-blue-300 rounded-full flex items-center justify-center mb-4">
                    <ListOrdered className="w-10 h-10 text-yellow-500" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-800">
                    NIC Code
                  </h3>
                  <p className="text-gray-600 mt-2">
                    National Industrial Classification code for business
                    activity.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
