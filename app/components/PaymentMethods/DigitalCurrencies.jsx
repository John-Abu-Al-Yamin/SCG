"use client";

import { motion } from "framer-motion";

const DigitalCurrencies = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="">
        <p className="text-[#2B1F51] text-center text-4xl font-bold">
          العملات الرقمية
        </p>
        <p className="text-[#2B1F51] text-center text-lg font-medium pt-6">
          احصل على ترخيص مفرد للخوادم الخاصة و الخوادم المخصصة الكاملة{" "}
        </p>
      </div>
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        whileInView={{
          opacity: 1,
          y: 0,
          transition: { duration: 0.4, ease: "easeOut" },
        }}
        className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 justify-items-center"
      >
        <div className="w-[200px] h-[200px] flex items-center justify-center bg-white p-8 rounded-lg shadow-md  hover:shadow-xl transition-shadow duration-300 ">
          <img
            src="/scg/images/digitalcurrencies.png"
            alt="Online Payment"
            width={150}
            height={150}
            className="object-contain"
          />
        </div>
        <div className="w-[200px] h-[200px] flex items-center justify-center bg-white p-8 rounded-lg shadow-md  hover:shadow-xl transition-shadow duration-300 ">
          <img
            src="/scg/images/digitalcurrencies1.png"
            alt="Online Payment"
            width={150}
            height={150}
            className="object-contain"
          />
        </div>
        <div className="w-[200px] h-[200px] flex items-center justify-center bg-white p-8 rounded-lg shadow-md  hover:shadow-xl transition-shadow duration-300 ">
          <img
            src="/scg/images/digitalcurrencies2.png"
            alt="Online Payment"
            height={150}
            width={150}
            className="object-contain"
          />
        </div>
        <div className="w-[200px] h-[200px] flex items-center justify-center bg-white p-8 rounded-lg shadow-md  hover:shadow-xl transition-shadow duration-300 ">
          <img
            src="/scg/images/digitalcurrencies3.png"
            alt="Online Payment"
            height={150}
            width={150}
            className="object-contain"
          />
        </div>
      </motion.div>
    </div>
  );
};

export default DigitalCurrencies;
