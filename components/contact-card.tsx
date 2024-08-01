import React from "react";
import { Spacer } from "@nextui-org/spacer";
import { Button } from "@nextui-org/button";

import HoverScale from "./animation/hover-scale";
import { ContactIcon } from "./icons";
import { subtitle, title } from "./primitives";

interface IContactCard {
  iconName: string;
  cardTitle: string;
  descritpion: string;
  disabled?: boolean;
  callToAction: string;
}

const ContactCard: React.FC<IContactCard> = function ContactCardComponent({
  iconName,
  cardTitle,
  descritpion,
  disabled,
  callToAction,
}) {
  return (
    <HoverScale className="bg-content2/80 rounded-2xl flex flex-col items-start flex-1 w-full p-6">
      <div className="p-4 bg-content3 rounded-xl flex">
        <ContactIcon iconName={iconName} />
      </div>
      <Spacer y={5} />
      <div className="flex-1" />
      <h2 className={title({ size: "sm" })}>{cardTitle}</h2>
      <h3 className={`${subtitle()}`}>{descritpion}</h3>
      <Spacer y={5} />
      <Button
        className="mr-10"
        color="primary"
        isDisabled={disabled}
        variant="flat"
      >
        {callToAction}
      </Button>
    </HoverScale>
  );
};

ContactCard.defaultProps = {
  disabled: false,
};

export default ContactCard;
