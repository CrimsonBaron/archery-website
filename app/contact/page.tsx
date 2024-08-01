import { Spacer } from "@nextui-org/spacer";

import FadeIn from "@/components/animation/fade-in";
import { siteConfig } from "@/config/site";
import ContactForm from "@/components/contact-form";
import LocationMap from "@/components/location-map";
import ContactCard from "@/components/contact-card";

export default function ContactPage() {
  return (
    <>
      <section aria-label="contact form" className="w-full">
        <div className="w-full h-full flex flex-col md:flex-row gap-4 justify-center items-center">
          <ContactForm />
          <LocationMap />
        </div>
      </section>
      <Spacer y={10} />
      <section aria-label="contact cards" className="w-full">
        <FadeIn className="w-full">
          <div className="flex flex-col sm:grid sm:grid-cols-2 xl:flex xl:flex-row w-full gap-8">
            {siteConfig.contactOptions.map((item) => (
              <ContactCard
                key={item.title}
                callToAction={item.callToAction}
                cardTitle={item.title}
                descritpion={item.description}
                disabled={item.disabled}
                iconName={item.icon}
              />
            ))}
          </div>
        </FadeIn>
      </section>
    </>
  );
}
