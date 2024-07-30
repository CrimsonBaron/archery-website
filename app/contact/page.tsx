import { subtitle, title } from "@/components/primitives";
import { Spacer } from "@nextui-org/spacer";
import {Input} from "@nextui-org/input";
import {Textarea} from "@nextui-org/input";
import { CiMail } from "react-icons/ci";
import { Button } from "@nextui-org/button";
import FadeIn from "@/components/animation/fade-in";
import { siteConfig } from "@/config/site";
import { ContactIcon } from "@/components/icons";
import HoverScale from "@/components/animation/hover-scale";

export default function ContactPage() {
  return (
   <>
     <div
      className="w-full h-full flex flex-row gap-4 justify-center items-center"
    >
      <div className="w-full h-[42rem] flex flex-col p-10 pt-20 bg-content2/80 rounded-2xl">
        <h2 className={title()}>
          Get in touch
        </h2>
        <h3 className={subtitle()}>
          We are here to answer any question you might have
        </h3>
        <Spacer y={10}/>
        <div className="flex gap-5">
          <Input 
            type="text" 
            label = "First name"
            labelPlacement="outside"
            placeholder="John"
            variant="bordered"
            startContent={
              <CiMail/>
            }
          />
          <Input 
            type="text" 
            label = "Last name"
            labelPlacement="outside"
            placeholder="Doe"
            variant="bordered"
            startContent={
              <CiMail/>
            }
          />
        </div>
        <Spacer y={3}/>
        <Input 
          isRequired
          type="email" 
          label = "Email"
          labelPlacement="outside"
          placeholder="JohnDoe@example.com"
          variant="bordered"
          description="We'll never share your email with anyone else."
          startContent={
            <CiMail/>
          }
        />
        <Spacer y={3}/>
         <Textarea
          isRequired
          label="Message"
          labelPlacement="outside"
          placeholder="Enter your message"
          variant="bordered"
        />
        <Spacer y={3}/>
        <Button
          color="primary"
        >
          Send
        </Button>
      </div>
      <div className="w-full h-[42rem] block rounded-2xl">
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1593.0301914293245!2d15.127933951100257!3d50.43947655794092!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x470ea92bce5cf55f%3A0x9a57138c2fb4bc1f!2sLukost%C5%99elba%20Doln%C3%AD%20Bousov!5e1!3m2!1sen!2scz!4v1722170979682!5m2!1sen!2scz" loading="lazy" className="w-full h-full rounded-2xl"></iframe>
      </div>
    </div>
    <Spacer y={10}/>
    <FadeIn className="w-full">
      <div className="flex flex-row w-full h-80 gap-8">
        {
          siteConfig.contactOptions.map((item)=>{
            return(
              <HoverScale className="bg-content2/80 rounded-2xl flex flex-col items-start flex-1 w-full p-6">
                    <div className="p-4 bg-content3 rounded-xl flex">
                      <ContactIcon iconName={item.icon}/>
                    </div>
                    <div className="flex-1"></div>
                    <h2 className={title({size: "sm"})}>{item.title}</h2>
                    <h3 className={`${subtitle()}`}>{item.description}</h3>
                    <Spacer y={5}/>
                    <Button variant="flat" color="primary" className="mr-10"  isDisabled={item.disabled}>
                      {item.callToAction}
                    </Button>
              </HoverScale>
            )
          })
        }
      </div>
    </FadeIn>
   </>
  );
}