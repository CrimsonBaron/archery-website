import React from "react";
import { Spacer } from "@nextui-org/spacer";
import { button as buttonStyles } from "@nextui-org/theme";
import { Link } from "@nextui-org/link";

import { title } from "./primitives";
import HoverScale from "./animation/hover-scale";

interface IPricingCard {
  name: string;
  description: string;
  price: string;
}

const PricingCard: React.FC<IPricingCard> = function PricingCardComponent({
  name,
  description,
  price,
}) {
  return (
    <HoverScale className="flex flex-col justify-start items-start p-4 rounded-2xl bg-content2/80 flex-1 w-full h-64">
      <h2 className="font-bold">{name}</h2>
      <h3>{description}</h3>
      <div className="flex-1" />
      <Spacer y={5} />
      <h1 className={title({ size: "sm" })}>{price}</h1>
      <Spacer y={5} />
      <Link
        className={`${buttonStyles({
          color: "primary",
        })} w-full`}
        href="/contact"
      >
        Get started
      </Link>
    </HoverScale>
  );
};

export default PricingCard;
