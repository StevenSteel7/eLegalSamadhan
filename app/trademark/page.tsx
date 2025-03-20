import { Briefcase, Globe, Lock, Scale, ShieldCheck, Star } from 'lucide-react'
import React from 'react'

const page = () => {
  return (
    <div>
        <div
        className="relative min-h-[50vh] bg-cover bg-center"
        style={{ backgroundImage: "url('/images/trademark.jpg')" }}
        >
        {/* Semi-transparent overlay to improve text readability */}
            <div className="absolute inset-0 bg-black opacity-50 ">
                <section className="relative z-10 flex flex-col justify-center items-center text-white  min-h-[50vh] px-4">
                    <div className="max-w-7xl mx-auto text-center">
                        <h1 className="text-4xl md:text-6xl font-bold text-white drop-shadow-lg">
                            Secure Your Brand | Trademark Registration Made Easy
                        </h1>
                        <p className="text-xl md:text-2xl text-gray-700 mt-4 drop-shadow-md"/>
                            
                       
                    </div>
                </section>
            </div>
        </div>


        <div className="bg-gray-100 py-12">
            <div className="max-w-7xl mx-auto px-4">
                <div className="grid md:grid-cols-2 gap-8 justify-items-center">
                {/* Why Choose Trademark Registration Section */}
                <div id="Why Choose Trademark Registration" className="group col-span-2 bg-slate-50 rounded-2xl p-8">
                    {/* Title Section */}
                    <div className="p-8 mx-auto rounded-2xl md:col-span-2 sm:col-span-1 flex flex-col items-center">
                    <div className="flex flex-col justify-center group cursor-pointer">
                        <span className="text-3xl font-bold text-center text-gray-800 mb-4">
                        Why Register a
                        </span>
                        <span className="text-3xl font-bold text-center text-gray-800 mb-4 px-3 transition-all duration-300 group-hover:text-emerald-500">
                        Trademark?
                        </span>
                    </div>
                    <div className="w-16 h-1 bg-green-500 mx-auto mb-6 md:group-hover:w-2xs transform duration-200"></div>
                    </div>

                    {/* Benefits Grid */}
                    <div className="grid md:grid-cols-3 sm:grid-cols-2 gap-8 text-center">
                    
                    {/* Legal Protection */}
                    <div className="p-6 bg-white shadow-md rounded-xl hover:shadow-xl transition-all duration-300 transform hover:scale-105 flex flex-col items-center group/legal">
                        <div className="w-16 h-16 border-2 border-blue-300 rounded-full flex items-center justify-center mb-4 transition-all duration-300 transform group-hover/legal:rotate-12 group-hover/legal:shadow-lg relative overflow-hidden bg-white">
                        <ShieldCheck className="w-10 h-10 text-yellow-500 transition-transform duration-300 group-hover/legal:scale-110" />
                        </div>
                        <h3 className="text-lg font-semibold text-gray-800 transition-colors duration-300 group-hover/legal:text-blue-600">Legal Protection</h3>
                        <p className="text-gray-600 mt-2 transition-colors duration-300 group-hover/legal:text-gray-800">Prevents unauthorized use and infringement of your brand name or logo.</p>
                    </div>

                    {/* Exclusive Rights */}
                    <div className="p-6 bg-white shadow-md rounded-xl hover:shadow-xl transition-all duration-300 transform hover:scale-105 flex flex-col items-center group/exclusive">
                        <div className="w-16 h-16 border-2 border-blue-300 rounded-full flex items-center justify-center mb-4 transition-all duration-300 transform group-hover/exclusive:rotate-12 group-hover/exclusive:shadow-lg relative overflow-hidden bg-white">
                        <Lock className="w-10 h-10 text-yellow-500 transition-transform duration-300 group-hover/exclusive:scale-110" />
                        </div>
                        <h3 className="text-lg font-semibold text-gray-800 transition-colors duration-300 group-hover/exclusive:text-blue-600">Exclusive Rights</h3>
                        <p className="text-gray-600 mt-2 transition-colors duration-300 group-hover/exclusive:text-gray-800">The owner has exclusive rights to use the trademark for the registered class of goods/services.</p>
                    </div>

                    {/* Brand Recognition */}
                    <div className="p-6 bg-white shadow-md rounded-xl hover:shadow-xl transition-all duration-300 transform hover:scale-105 flex flex-col items-center group/brand">
                        <div className="w-16 h-16 border-2 border-blue-300 rounded-full flex items-center justify-center mb-4 transition-all duration-300 transform group-hover/brand:rotate-12 group-hover/brand:shadow-lg relative overflow-hidden bg-white">
                        <Star className="w-10 h-10 text-yellow-500 transition-transform duration-300 group-hover/brand:scale-110" />
                        </div>
                        <h3 className="text-lg font-semibold text-gray-800 transition-colors duration-300 group-hover/brand:text-blue-600">Brand Recognition</h3>
                        <p className="text-gray-600 mt-2 transition-colors duration-300 group-hover/brand:text-gray-800">Enhances credibility and helps build a strong brand identity.</p>
                    </div>

                    {/* Business Asset */}
                    <div className="p-6 bg-white shadow-md rounded-xl hover:shadow-xl transition-all duration-300 transform hover:scale-105 flex flex-col items-center group/asset">
                        <div className="w-16 h-16 border-2 border-blue-300 rounded-full flex items-center justify-center mb-4 transition-all duration-300 transform group-hover/asset:rotate-12 group-hover/asset:shadow-lg relative overflow-hidden bg-white">
                        <Briefcase className="w-10 h-10 text-yellow-500 transition-transform duration-300 group-hover/asset:scale-110" />
                        </div>
                        <h3 className="text-lg font-semibold text-gray-800 transition-colors duration-300 group-hover/asset:text-blue-600">Business Asset</h3>
                        <p className="text-gray-600 mt-2 transition-colors duration-300 group-hover/asset:text-gray-800">A trademark can be sold, licensed, or franchised to generate revenue.</p>
                    </div>

                    {/* Global Expansion */}
                    <div className="p-6 bg-white shadow-md rounded-xl hover:shadow-xl transition-all duration-300 transform hover:scale-105 flex flex-col items-center group/global">
                        <div className="w-16 h-16 border-2 border-blue-300 rounded-full flex items-center justify-center mb-4 transition-all duration-300 transform group-hover/global:rotate-12 group-hover/global:shadow-lg relative overflow-hidden bg-white">
                        <Globe className="w-10 h-10 text-yellow-500 transition-transform duration-300 group-hover/global:scale-110" />
                        </div>
                        <h3 className="text-lg font-semibold text-gray-800 transition-colors duration-300 group-hover/global:text-blue-600">Global Expansion</h3>
                        <p className="text-gray-600 mt-2 transition-colors duration-300 group-hover/global:text-gray-800">Makes it easier to register the trademark internationally under the Madrid Protocol.</p>
                    </div>

                    {/* Trademark Symbol Usage */}
                    <div className="p-6 bg-white shadow-md rounded-xl hover:shadow-xl transition-all duration-300 transform hover:scale-105 flex flex-col items-center group/symbol">
                        <div className="w-16 h-16 border-2 border-blue-300 rounded-full flex items-center justify-center mb-4 transition-all duration-300 transform group-hover/symbol:rotate-12 group-hover/symbol:shadow-lg relative overflow-hidden bg-white">
                        <span className="text-6xl font-bold text-yellow-500 transition-transform duration-300 group-hover/symbol:scale-110">
                        ®
                        </span>
                        </div>
                        <h3 className="text-lg font-semibold text-gray-800 transition-colors duration-300 group-hover/symbol:text-blue-600">Trademark Symbol Usage</h3>
                        <p className="text-gray-600 mt-2 transition-colors duration-300 group-hover/symbol:text-gray-800">Registered trademarks can use the ® symbol, indicating legal protection.</p>
                    </div>

                    {/* Prevention of Unfair Competition */}
                    <div className="p-6 bg-white shadow-md rounded-xl hover:shadow-xl transition-all duration-300 transform hover:scale-105 flex flex-col items-center group/competition md:col-start-2">
                        <div className="w-16 h-16 border-2 border-blue-300 rounded-full flex items-center justify-center mb-4 transition-all duration-300 transform group-hover/competition:rotate-12 group-hover/competition:shadow-lg relative overflow-hidden bg-white">
                        <Scale className="w-10 h-10 text-yellow-500 transition-transform duration-300 group-hover/competition:scale-110" />
                        </div>
                        <h3 className="text-lg font-semibold text-gray-800 transition-colors duration-300 group-hover/competition:text-blue-600">Prevention of Unfair Competition</h3>
                        <p className="text-gray-600 mt-2 transition-colors duration-300 group-hover/competition:text-gray-800">Prevents competitors from using a similar mark that could mislead consumers.</p>
                    </div>

                    </div>
                </div>
                </div>
            </div>
        </div>



        <div id='Docs Required' className="flex flex-wrap bg-gray-100">
            <div className="max-w-7xl mx-auto p-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                
                {/* Documents Required for Individual or Proprietor */}
                <div className="bg-white p-6 rounded-2xl shadow-lg w-full max-w-4xl mx-auto">
                    {/* Card Header */}
                    <h1 className="text-2xl pb-6 font-bold text-gray-800 text-center mb-4">
                    Documents Required for Individual or Proprietor
                    </h1>

                    {/* Steps Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">

                    <div className="bg-blue-50 p-4 rounded-lg hover:shadow-md transition-all duration-300 flex">
                        <span className="text-xl mr-3">📄</span>
                        <div>
                        <h2 className="font-bold text-lg text-blue-900">Identity Proof</h2>
                        <p className="text-gray-700 text-sm">
                            Copy of Aadhaar, PAN, Passport, or any government-issued ID proof.
                        </p>
                        </div>
                    </div>

                    <div className="bg-blue-50 p-4 rounded-lg hover:shadow-md transition-all duration-300 flex">
                        <span className="text-xl mr-3">🖼</span>
                        <div>
                        <h2 className="font-bold text-lg text-blue-900">Logo or Brand Name</h2>
                        <p className="text-gray-700 text-sm">
                            If applicable, provide a logo in JPEG format.
                        </p>
                        </div>
                    </div>

                    <div className="bg-blue-50 p-4 rounded-lg hover:shadow-md transition-all duration-300 flex">
                        <span className="text-xl mr-3">✍</span>
                        <div>
                        <h2 className="font-bold text-lg text-blue-900">Signed Power of Attorney</h2>
                        <p className="text-gray-700 text-sm">
                            Required if filing through an attorney.
                        </p>
                        </div>
                    </div>

                    <div className="bg-blue-50 p-4 rounded-lg hover:shadow-md transition-all duration-300 flex">
                        <span className="text-xl mr-3">🏠</span>
                        <div>
                        <h2 className="font-bold text-lg text-blue-900">Address Proof</h2>
                        <p className="text-gray-700 text-sm">
                            Submit any valid proof of the applicant’s address.
                        </p>
                        </div>
                    </div>

                    </div>
                </div>

                {/* Documents Required for Company or LLP */}
                <div className="bg-white p-6 rounded-2xl shadow-lg w-full max-w-4xl mx-auto">
                    {/* Card Header */}
                    <h1 className="text-2xl pb-6 font-bold text-gray-800 text-center mb-4">
                    Documents Required for Company or LLP
                    </h1>

                    {/* Steps Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">

                    <div className="bg-blue-50 p-4 rounded-lg hover:shadow-md transition-all duration-300 flex">
                        <span className="text-xl mr-3">🏢</span>
                        <div>
                        <h2 className="font-bold text-lg text-blue-900">Business Incorporation</h2>
                        <p className="text-gray-700 text-sm">
                            Certificate of Incorporation or Partnership Deed.
                        </p>
                        </div>
                    </div>

                    <div className="bg-blue-50 p-4 rounded-lg hover:shadow-md transition-all duration-300 flex">
                        <span className="text-xl mr-3">💳</span>
                        <div>
                        <h2 className="font-bold text-lg text-blue-900">Company PAN Card</h2>
                        <p className="text-gray-700 text-sm">
                            PAN card of the company or LLP.
                        </p>
                        </div>
                    </div>

                    <div className="bg-blue-50 p-4 rounded-lg hover:shadow-md transition-all duration-300 flex">
                        <span className="text-xl mr-3">📜</span>
                        <div>
                        <h2 className="font-bold text-lg text-blue-900">Board Resolution</h2>
                        <p className="text-gray-700 text-sm">
                            Board resolution authorizing trademark registration (if applicable).
                        </p>
                        </div>
                    </div>

                    <div className="bg-blue-50 p-4 rounded-lg hover:shadow-md transition-all duration-300 flex">
                        <span className="text-xl mr-3">✍</span>
                        <div>
                        <h2 className="font-bold text-lg text-blue-900">Signed Power of Attorney</h2>
                        <p className="text-gray-700 text-sm">
                            Required if filing through an attorney.
                        </p>
                        </div>
                    </div>

                    <div className="bg-blue-50 p-4 rounded-lg hover:shadow-md transition-all duration-300 flex md:col-span-2">
                        <span className="text-xl mr-3">📝</span>
                        <div>
                        <h2 className="font-bold text-lg text-blue-900">GST Registration Certificate</h2>
                        <p className="text-gray-700 text-sm">
                            If applicable, provide a GST registration certificate.
                        </p>
                        </div>
                    </div>

                    </div>
                </div>

                </div>
            </div>
        </div>



        <div id='Complaiance container' className="flex flex-wrap bg-gray-100 " > 
            <div  className="max-w-7xl mx-auto p-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

                        {/* Form Section */}
                        <div id="Form Section" className="bg-white p-6 shadow-lg rounded-2xl max-w-2xl w-full">
                        <h2 className="text-2xl font-bold text-gray-800 mb-4">
                            Need Help with Our Trademark Services?
                        </h2>
                        <p className="text-gray-600 mb-4">Fill up the below-mentioned form</p>

                        <form>
                            <div className="mb-4">
                            <label className="block text-gray-700 font-medium mb-1">Name *</label>
                            <input type="text" placeholder="Your Name" className="w-full border rounded px-3 py-2" />
                            </div>

                            <div className="mb-4">
                            <label className="block text-gray-700 font-medium mb-1">Email *</label>
                            <input type="email" placeholder="Your Email Address" className="w-full border rounded px-3 py-2" />
                            </div>

                            <div className="mb-4">
                            <label className="block text-gray-700 font-medium mb-1">Mobile *</label>
                            <input type="text" placeholder="Your Phone Number (Without 0 or +91)" className="w-full border rounded px-3 py-2" />
                            </div>

                            <div className="mb-4">
                            <label className="block text-gray-700 font-medium mb-1">State *</label>
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
                                I have read & agreed to the company's Terms and Conditions, disclaimer, and refund policy.
                            </label>
                            </div>

                            <button className="w-full bg-green-600 text-white py-2 rounded text-lg font-semibold hover:bg-green-700">
                            Request for Call Back
                            </button>
                        </form>
                        </div>

                        <div className="bg-white p-6 rounded-2xl shadow-lg w-full max-w-4xl mx-auto">
                            {/* Card Header */}
                            <h1 className="text-2xl pb-6 font-bold text-gray-800 text-center mb-4">
                                Compliances Required After Registration
                            </h1>

                            {/* Steps Grid */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">

                                {/* Trademark Renewal */}
                                <div className="bg-blue-50 p-4 rounded-lg hover:shadow-md transition-all duration-300 flex">
                                <span className="text-xl mr-3">🔄</span>
                                <div>
                                    <h2 className="font-bold text-lg text-blue-900">Trademark Renewal</h2>
                                    <p className="text-gray-700 text-sm">
                                    A registered trademark must be renewed every 10 years to maintain protection.
                                    </p>
                                </div>
                                </div>

                                {/* Trademark Monitoring */}
                                <div className="bg-blue-50 p-4 rounded-lg hover:shadow-md transition-all duration-300 flex">
                                <span className="text-xl mr-3">👀</span>
                                <div>
                                    <h2 className="font-bold text-lg text-blue-900">Trademark Monitoring</h2>
                                    <p className="text-gray-700 text-sm">
                                    Regularly check for any infringing trademarks in the marketplace.
                                    </p>
                                </div>
                                </div>

                                {/* Usage of Trademark */}
                                <div className="bg-blue-50 p-4 rounded-lg hover:shadow-md transition-all duration-300 flex">
                                <span className="text-xl mr-3">✅</span>
                                <div>
                                    <h2 className="font-bold text-lg text-blue-900">Usage of Trademark</h2>
                                    <p className="text-gray-700 text-sm">
                                    Ensure continuous and consistent use of the trademark to prevent cancellation due to non-use.
                                    </p>
                                </div>
                                </div>

                                {/* Legal Enforcement */}
                                <div className="bg-blue-50 p-4 rounded-lg hover:shadow-md transition-all duration-300 flex">
                                <span className="text-xl mr-3">⚖️</span>
                                <div>
                                    <h2 className="font-bold text-lg text-blue-900">Legal Enforcement</h2>
                                    <p className="text-gray-700 text-sm">
                                    Take legal action against any unauthorized use or infringement of the registered trademark.
                                    </p>
                                </div>
                                </div>

                                {/* Assignment or Licensing */}
                                <div className="bg-blue-50 p-4 rounded-lg hover:shadow-md transition-all duration-300 flex">
                                <span className="text-xl mr-3">📜</span>
                                <div>
                                    <h2 className="font-bold text-lg text-blue-900">Assignment or Licensing</h2>
                                    <p className="text-gray-700 text-sm">
                                    If the trademark is transferred, sold, or licensed, the change must be recorded with the Trademark Office.
                                    </p>
                                </div>
                                </div>

                                {/* Filing Opposition Against Similar Trademarks */}
                                <div className="bg-blue-50 p-4 rounded-lg hover:shadow-md transition-all duration-300 flex ">
                                <span className="text-xl mr-3">📝</span>
                                <div>
                                    <h2 className="font-bold text-lg text-blue-900">Filing Opposition Against Similar Trademarks</h2>
                                    <p className="text-gray-700 text-sm">
                                    If a new application is filed that is similar to your trademark, an opposition may be required.
                                    </p>
                                </div>
                                </div>

                            </div>
                        
                        </div>

                </div>



            </div>  
        </div>




    </div>
  )
}

export default page