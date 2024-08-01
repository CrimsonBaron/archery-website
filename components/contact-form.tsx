import React from "react";
import { Spacer } from "@nextui-org/spacer";
import { Input, Textarea } from "@nextui-org/input";
import { CiMail } from "react-icons/ci";
import { Button } from "@nextui-org/button";

import { subtitle, title } from "./primitives";

const ContactForm: React.FC = function ContactFormComponent() {
  return (
    <div className="w-full h-[42rem] flex flex-col p-10 pt-20 bg-content2/80 rounded-2xl">
      <h2 className={title()}>Get in touch</h2>
      <h3 className={subtitle()}>
        We are here to answer any question you might have
      </h3>
      <Spacer y={10} />
      <div className="flex gap-5">
        <Input
          label="First name"
          labelPlacement="outside"
          placeholder="John"
          type="text"
          variant="bordered"
        />
        <Input
          label="Last name"
          labelPlacement="outside"
          placeholder="Doe"
          type="text"
          variant="bordered"
        />
      </div>
      <Spacer y={3} />
      <Input
        isRequired
        description="We'll never share your email with anyone else."
        label="Email"
        labelPlacement="outside"
        placeholder="JohnDoe@example.com"
        startContent={<CiMail />}
        type="email"
        variant="bordered"
      />
      <Spacer y={3} />
      <Textarea
        isRequired
        label="Message"
        labelPlacement="outside"
        placeholder="Enter your message"
        variant="bordered"
      />
      <Spacer y={3} />
      <Button color="primary">Send</Button>
    </div>
  );
};

export default ContactForm;
