"use client";
import { motion } from "framer-motion";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const ServicesSection = () => {
  const services = [
    {
      imageSrc: "/scg/images/kaas-card1.png",
      imageAlt: "Cloud Server Icon",
      title: "الخوادم المخصصة",
      description: "استضف موقعك بسهولة و اريحية وبتكاليف",
      price: "يبدأ من 45 ر.س / شهريا",
    },
    {
      imageSrc: "/scg/images/shared-hosting-card 1.png",
      imageAlt: "Shared Hosting Icon",
      title: "الاستضافة السحابية المشتركة",
      description: "استضف موقعك بسهولة و اريحية وبتكاليف",
      price: "يبدأ من 45 ر.س / شهريا",
    },
    {
      imageSrc: "/scg/images/ls-cloud-card 1.svg",
      imageAlt: "Website Hosting Icon",
      title: "استضافة المواقع",
      description: "استضف موقعك بسهولة و اريحية وبتكاليف",
      price: "يبدأ من 45 ر.س / شهريا",
    },
    {
      imageSrc: "/scg/images/shared-hosting-card 1.png",
      imageAlt: "Control Panel Icon",
      title: "رخصة لوحة التحكم",
      description: "استضف موقعك بسهولة و اريحية وبتكاليف",
      price: "يبدأ من 45 ر.س / شهريا",
    },
    {
      imageSrc: "/scg/images/shared-hosting-card 1.png",
      imageAlt: "Domains Icon",
      title: "النطاقات",
      description: "استضف موقعك بسهولة و اريحية وبتكاليف",
      price: "يبدأ من 45 ر.س / شهريا",
    },
    {
      imageSrc: "/scg/images/shared-hosting-card 1.png",
      imageAlt: "VPS Server Icon",
      title: "VPS",
      description: "استضف موقعك بسهولة و اريحية وبتكاليف",
      price: "يبدأ من 45 ر.س / شهريا",
    },
  ];

  return (
    <main className="container mx-auto px-4 py-8">
      <section className="relative min-h-screen flex flex-col items-center justify-center py-16 overflow-hidden bg-white">
        <div className="relative z-10 flex flex-col items-center text-center px-4 max-w-6xl mx-auto">
          <div className="bg-[#4A3B8F] text-white text-lg font-bold py-2 px-8 rounded-full mb-4 shadow-md">
            خدماتنا
          </div>
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-12 text-right">
            اكتشف الخدمات المقدمة لك
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 justify-center items-center text-center w-full">
            {services.map((service, index) => (
              <Card
                key={index}
                className="relative flex flex-col items-center p-6 text-center bg-white rounded-lg shadow-lg overflow-hidden w-full max-w-sm mx-auto"
              >
                {/* Subtle gradient at top of card */}
                <div className="absolute inset-x-0 top-0 h-28 bg-[#2B1F51] rounded-b-[100%]" />

                {/* Image */}
                <div className="relative z-10 mb-4">
                  <img
                    src={service.imageSrc || "/placeholder.svg"}
                    alt={service.title}
                    width={100}
                    height={100}
                    className="object-contain mx-auto"
                  />
                </div>

                {/* Title */}
                <CardHeader className="p-0 mb-2 items-center">
                  <CardTitle className="text-xl font-bold text-gray-800">
                    {service.title}
                  </CardTitle>
                </CardHeader>

                {/* Description */}
                <CardContent className="flex-grow p-0 mb-4 items-center">
                  <CardDescription className="text-sm text-gray-600">
                    {service.description}
                  </CardDescription>
                </CardContent>

                {/* Button */}
                <CardFooter className="p-0 w-full flex justify-center">
                  <Button className="bg-[#4A3B8F] hover:bg-[#3A2B7F] text-white font-bold py-2 px-6 rounded-full text-lg">
                    {service.price}
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <div className="">
        <p className="text-center font-bold text-4xl pb-6 ">طرق الدفع</p>
      </div>
      {/* Payment Methods Card */}
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        whileInView={{
          opacity: 1,
          y: 0,
          transition: { duration: 0.4, ease: "easeOut" },
        }}
        className="relative bg-gradient-to-br from-white to-gray-50 hover:from-gray-300 transition duration-300 ease-in-out rounded-xl p-8 md:p-12 shadow-lg flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16 overflow-hidden mb-16"
      >
        <img
          src="/scg/images/right-blocks.png"
          alt="Abstract background pattern"
          width={200}
          height={200}
          className="absolute  bg-gray-700 bottom-0 right-0 opacity-10 translate-x-1/4 translate-y-1/4"
        />

        <p className="text-xl md:text-2xl font-semibold text-right text-[#333366] flex-1">
          ادفع باستخدام فوري أو أكثر من 20 طريقة دفع أخرى
        </p>
        <div className="">
          <img
            src="/scg/images/payment.png"
            alt="PayPal payment logo"
            width={300}
            height={300}
            className="object-cover"
          />
        </div>
      </motion.div>
    </main>
  );
};

export default ServicesSection;
