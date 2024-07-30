import { Link } from "@nextui-org/link";
import { Snippet } from "@nextui-org/snippet";
import { Code } from "@nextui-org/code";
import { button as buttonStyles } from "@nextui-org/theme";

import { siteConfig } from "@/config/site";
import { title, subtitle } from "@/components/primitives";
import { GithubIcon } from "@/components/icons";
import FadeIn from "@/components/animation/fade-in";

export default function Home() {
  return (
    <>
        <FadeIn>
              <section className="flex flex-col items-center justify-center gap-4 p-16 w-full bg-content2/80 rounded-2xl">
                <div className="inline-block max-w-5xl text-center justify-center">
                  <h1 className={title()}>Unleash your arrows.</h1>
                  <br />
                  <h1 className={title()}>
                    Find your focus. Become legendary.
                  </h1>
                  <h2 className={subtitle({ class: "mt-4" })}>
                    at the tips of your fingers
                  </h2>
                </div>

                <div className="flex gap-3">
                  <Link
                    className={buttonStyles({
                      color: "primary",
                      radius: "full",
                      variant: "shadow",
                      size: "lg"
                    })}
                  >
                    Join us now!
                  </Link>
                </div>
              </section>
        </FadeIn>
    </>
  );
}
