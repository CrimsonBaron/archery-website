import FadeIn from "@/components/animation/fade-in";

export default function PricingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <FadeIn>
        <section className="flex flex-col items-center justify-center gap-4 pb-8 md:pb-10 pt-3">
          {children}
        </section>
    </FadeIn>
  );
}
