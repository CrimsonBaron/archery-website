"use client";

import { Spacer } from "@nextui-org/spacer";
import { useState } from "react";
import { Divider } from "@nextui-org/divider";

import { siteConfig } from "@/config/site";
import { subtitle, title } from "@/components/primitives";
import PricingCard from "@/components/pricing-card";
import Feature from "@/components/feature";
import PricingPlanSelector from "@/components/pricing-plan-selector";

export default function PricingPage() {
  const [selectedIndex, setSelectedIndex] = useState<number>(0);

  return (
    <>
      <div className="flex justify-center items-center w-full flex-col">
        <h1 className={title({ size: "lg" })}>Pricing plans</h1>
        <h2 className={`${subtitle()} text-center text-9xl w-full`}>
          We offer a wide range of lesson plans for all to enjoy
        </h2>
      </div>
      <Spacer y={5} />
      <PricingPlanSelector
        callback={setSelectedIndex}
        selectedIndex={selectedIndex}
      />
      <Spacer y={10} />
      <div className="flex flex-col md:flex-row gap-8 w-full items-center justify-center">
        {siteConfig.pricingPlans[selectedIndex].plans.map((item) => (
          <PricingCard
            key={item.name}
            description={item.description}
            name={item.name}
            price={item.price}
          />
        ))}
      </div>
      <div className="md:block hidden w-full p-2 ">
        <div className="flex w-full">
          <div className="font-bold text-lg ">Features</div>
          <div className="flex-1" />
          {siteConfig.pricingPlans[selectedIndex].plans.map((item) => (
            <>
              <div className="font-bold text-lg">{item.name}</div>
              <div className="flex-1" />
            </>
          ))}
        </div>
        <Spacer y={3} />
        <Divider />
        <Spacer y={3} />
        <div className="flex w-full">
          <div className="font-bold text-lg ">Introdactury lesson</div>
          <div className="flex-1" />
          {siteConfig.pricingPlans[selectedIndex].plans.map((item) => (
            <Feature key={item.name} isFeature={item.introducturyLesson} />
          ))}
        </div>
        <Spacer y={3} />
        <div className="flex w-full">
          <div className="font-bold text-lg ">Flexible Scheduling</div>
          <div className="flex-1" />
          {siteConfig.pricingPlans[selectedIndex].plans.map((item) => (
            <Feature key={item.name} isFeature={item.flexibleScheduling} />
          ))}
        </div>
        <Spacer y={3} />
        <div className="flex w-full">
          <div className="font-bold text-lg ">Equipment included</div>
          <div className="flex-1" />
          {siteConfig.pricingPlans[selectedIndex].plans.map((item) => (
            <Feature key={item.name} isFeature={item.equipmentIncluded} />
          ))}
        </div>
      </div>
    </>
  );
}
