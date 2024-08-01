import FadeIn from "@/components/animation/fade-in";

export default function PricingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <FadeIn>
      <section className="flex flex-col items-center justify-center gap-4 px-2 pb-8 sm:px-4 md:p-0">
        {children}
      </section>
    </FadeIn>
  );
}
