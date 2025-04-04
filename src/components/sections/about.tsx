import Image from 'next/image';
import Link from 'next/link';
import profileImage from '../../../images/image.PNG';

import { shimmer, toBase64 } from '@/lib/utils';

import { Button } from '../ui/button';

const AboutSection: React.FC  = () => {
  return (
    <section id="about" className="pt-24 lg:pt-[9.375rem]">
      <div className="main-container main-grid">
        <div className="relative h-[21.625rem] w-full sm:col-start-1 sm:col-end-6 sm:row-start-1 sm:h-full lg:col-end-7">
          <Image
            src={profileImage}
            alt="Alex Spencer"
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 768px) 60vw, (max-width: 1200px) 50vw"
            placeholder={`data:image/svg+xml;base64,${toBase64(shimmer(540, 600))}`}
            className="object-cover object-center sm:object-right"
          />
        </div>
        <div className="my-8 space-y-6 border-y border-border pb-[3.25rem] pt-8 sm:col-start-7 sm:col-end-13 sm:row-start-1 sm:my-0 sm:pt-[3.25rem] lg:col-start-8 lg:col-end-12">
          <h2 className="heading-2">About me</h2>
          <p className="mt-1">
            I’m a mid-level Full-Stack Web Developer with a solid background in Computer Science and a passion for building innovative, scalable digital solutions.

With over 6 years of experience, I’ve developed full-stack applications using a wide range of technologies. On the frontend, I write clean, accessible HTML, modern CSS, and efficient JavaScript—frequently using frameworks like React and Next.js. On the backend, I’ve worked extensively with Node.js, Python, PHP, and Golang to build robust APIs and reliable server-side systems.

I’m adaptable, always eager to learn, and focused on delivering maintainable, high-quality code across the stack. I’d love for you to explore some of my recent work and see how I can add value to your team.
          </p>
          <Button variant="secondary" asChild>
            <Link href="/portfolio">Go to portfolio</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
