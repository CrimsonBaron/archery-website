import { Link } from "@nextui-org/link";
import { button as buttonStyles } from "@nextui-org/theme";
import { Spacer } from "@nextui-org/spacer";
import { Image } from "@nextui-org/image";

import { title, subtitle } from "@/components/primitives";
import FadeIn from "@/components/animation/fade-in";
import { Logo } from "@/components/icons";
import Bobing from "@/components/animation/bobing";
import { Card, Carousel } from "@/components/card-carousel";
import WobbleCard from "@/components/wobble-card";
import Faq from "@/components/faq";

const data = [
  {
    category: "Artificial Intelligence",
    title: "You can do more with AI.",
    src: "https://images.unsplash.com/photo-1593508512255-86ab42a8e620?q=80&w=3556&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    content: <div>Ahoj</div>,
  },
  {
    category: "Productivity",
    title: "Enhance your productivity.",
    src: "https://images.unsplash.com/photo-1531554694128-c4c6665f59c2?q=80&w=3387&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    content: <div>Ahoj</div>,
  },
  {
    category: "Product",
    title: "Launching the new Apple Vision Pro.",
    src: "https://images.unsplash.com/photo-1713869791518-a770879e60dc?q=80&w=2333&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    content: <div>Ahoj</div>,
  },

  {
    category: "Product",
    title: "Maps for your iPhone 15 Pro Max.",
    src: "https://images.unsplash.com/photo-1599202860130-f600f4948364?q=80&w=2515&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    content: <div>Ahoj</div>,
  },
  {
    category: "iOS",
    title: "Photography just got better.",
    src: "https://images.unsplash.com/photo-1602081957921-9137a5d6eaee?q=80&w=2793&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    content: <div>Ahoj</div>,
  },
  {
    category: "Hiring",
    title: "Hiring for a Staff Software Engineer",
    src: "https://images.unsplash.com/photo-1511984804822-e16ba72f5848?q=80&w=2048&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    content: <div>Ahoj</div>,
  },
];

export default function Home() {
  const cards = data.map((card, index) => (
    <Card key={card.src} card={card} index={index} />
  ));

  return (
    <FadeIn>
      <section className=" flex p-16 dark:bg-dot-white/[0.3] bg-dot-black/[0.3] rounded-2xl">
        <div className="flex flex-col gap-10 flex-1 w-full">
          <div className="text-left w-full">
            <h1 className={title()}>Unleash your arrows.</h1>
            <br />
            <h1 className={title()}>Find your focus. Become legendary.</h1>
            <h2 className={`${subtitle({ class: "mt-4" })}`}>
              We are a dedicated archery club, fostering a welcoming community
              where archers of all levels can hone their skills, forge lasting
              friendships, and experience the thrill of hitting the mark.
            </h2>
          </div>
          <div className="flex gap-3">
            <Link
              className={buttonStyles({
                color: "primary",
                radius: "full",
                variant: "shadow",
                size: "lg",
              })}
              href="/contact"
              target="_self"
            >
              Join us now!
            </Link>
          </div>
        </div>
        <FadeIn className="aboslute" transition={{ duration: 1 }}>
          <Bobing className="">
            <Logo className="scale-x-[-1] rotate-12 " size={450} />
          </Bobing>
        </FadeIn>
        <Spacer y={56} />
      </section>
      <section className="flex flex-col items-start justify-start gap-4 p-14 w-full">
        <div className="text-left justify-start items-center w-full">
          <h1 className={title()}>Latest news at our club</h1>
        </div>
        <Carousel items={cards} />
      </section>
      <section aria-label="taught by the best" className="p-14 gap-4 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 max-w-7xl mx-auto w-full">
          <WobbleCard
            className=""
            containerClassName="col-span-1 lg:col-span-2 h-full min-h-[500px] lg:min-h-[300px] bg-content2/80"
          >
            <div className="max-w-xs">
              <h2 className="text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em]">
                Gippity AI powers the entire universe
              </h2>
              <p className="mt-4 text-left text-base/6">
                With over 100,000 mothly active bot users, Gippity AI is the
                most popular AI platform for developers.
              </p>
              <div className="w-full flex justify-end">
                <Link href="/contact">see more...</Link>
              </div>
            </div>
            <Image
              alt="linear demo image"
              className="absolute -right-4 lg:-right-[40%] grayscale filter -bottom-10 object-contain rounded-2xl"
              height={500}
              src="/linear.webp"
              width={500}
            />
          </WobbleCard>
          <WobbleCard containerClassName="col-span-1 bg-content2/80 min-h-[300px]">
            <h2 className="max-w-80  text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em]">
              No shirt, no shoes, no weapons.
            </h2>
            <p className="mt-4 max-w-[26rem] text-left  text-base/6">
              If someone yells “stop!”, goes limp, or taps out, the fight is
              over.
            </p>
            <div className="w-full flex justify-end">
              <Link href="/contact">see more...</Link>
            </div>
          </WobbleCard>
          <WobbleCard containerClassName="col-span-1 bg-content2/80 lg:col-span-3 min-h-[500px] lg:min-h-[600px] xl:min-h-[300px]">
            <div className="max-w-sm">
              <h2 className="max-w-sm md:max-w-lg  text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em]">
                Signup for blazing-fast cutting-edge state of the art Gippity AI
                wrapper today!
              </h2>
              <p className="mt-4 max-w-[26rem] text-left  text-base/6">
                With over 100,000 mothly active bot users, Gippity AI is the
                most popular AI platform for developers.
              </p>
              <div className="w-full flex justify-end">
                <Link href="/contact">see more...</Link>
              </div>
            </div>
            <Image
              alt="linear demo image"
              className="absolute -right-10 md:-right-[40%] lg:-right-[20%] -bottom-10 object-contain rounded-2xl"
              height={500}
              src="/linear.webp"
              width={500}
            />
          </WobbleCard>
        </div>
      </section>
      <Spacer y={20} />
      <section
        aria-label="join us rn section"
        className="w-full h-full flex items-center justify-center flex-col gap-8"
      >
        <h1 className={title({ size: "lg" })}>Become the next archer master</h1>
        <h2 className=" text-lg text-black/50 dark:text-white/50">
          Join the wonderfull community at our range
        </h2>
        <Link
          className={buttonStyles({
            color: "primary",
            radius: "full",
            variant: "shadow",
            size: "lg",
          })}
          href="/contact"
        >
          Join us now!
        </Link>
      </section>
      <Spacer y={20} />
      <section aria-label="faq" className="gap-4 w-full p-14">
        <div className="w-full h-full bg-content2/80 rounded-2xl p-8">
          <Faq />
        </div>
      </section>
      <Spacer y={20} />
    </FadeIn>
  );
}
