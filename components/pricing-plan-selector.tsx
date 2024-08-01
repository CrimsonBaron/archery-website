import { Button, ButtonGroup } from "@nextui-org/button";
import React from "react";

import { siteConfig } from "@/config/site";

interface IPricingPlanSelector {
  selectedIndex: number;
  callback: (value: number) => void;
}

const PricingPlanSelector: React.FC<IPricingPlanSelector> =
  function PricingPlanSelectorCompoment({ selectedIndex, callback }) {
    return (
      <ButtonGroup>
        {siteConfig.pricingPlans.map(({ name }, index) => (
          <Button
            key={name}
            color={selectedIndex === index ? "primary" : "default"}
            variant={selectedIndex === index ? "flat" : "solid"}
            onClick={() => {
              callback(index);
            }}
          >
            {name}
          </Button>
        ))}
      </ButtonGroup>
    );
  };

export default PricingPlanSelector;
