import React from "react";
import HeroSection from "../components/HeroSection/HeroSection";
import PricingCard from "../components/SharedHosting/PricingCard";
import BackupsGrowSection from "../components/Backups/BackupsGrowSection";
import BeastSection from "../components/DataCenter/BeastSection/BeastSection";
import Asks from "../components/DataCenter/Asks/Asks";
import PlatformSupport from "../components/Backups/PlatformSupport";

const ServerManagement = () => {
  return (
    <div className="overflow-x-hidden">
      <HeroSection
        title="الاستضافات المشتركة"
        description="كلام و وصف للاستضافات المشتركة كلام و وصف للاستضافات المشتركة كلام و وصف للاستضافات كلام و المشتركة كلام و وصف للاستضافات المشتركة"
        primaryButtonText="انشاء حساب"
        secondaryButtonText="عرض الاسعار"
        imagesrc="/scg/images/Group4027.png"
        imageAlt="Hero Background"
      />
      <PricingCard />
      <BackupsGrowSection />
      <PlatformSupport />
      <BeastSection />
      <Asks />
    </div>
  );
};

export default ServerManagement;
