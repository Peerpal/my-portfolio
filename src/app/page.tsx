import AboutSection from "@/components/sections/about";
import CallToActionSection from "@/components/sections/call-to-action";
import { ButtonIcon, Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  return (
    <main className="py-8 sm:py-16">
      <section>
        <div className="z-10 flex flex-col items-center gap-8 bg-background sm:col-start-1 sm:col-end-10 sm:row-start-1 sm:gap-12 sm:self-end sm:pr-14 sm:pt-14 lg:col-end-6 lg:gap-[3.25rem]">
          <h1 className="text-5xl font-bold text-center min-w-[15.25rem] max-w-[30ch]">Hey, I am Emeka Mamah and I love building stuffs that work. </h1>

          <div>
            <Button asChild variant="primary">
              <Link href="#about">
                <ButtonIcon name="downArrows" className="text-primary" />
                About me
              </Link>
            </Button>
          </div>
        </div>
      </section>
      <section>
        <AboutSection />
      </section>
      <section>
        <CallToActionSection />
      </section>
    </main>
  );
}
