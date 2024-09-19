
import Link from "next/link";
import { Button } from "../components/ui/button";
import { FiDownload } from "react-icons/fi";

// components
import Social from "../components/Social";
import Photo from "../components/Photo";
import Stats from "../components/Stats";

const Home = () => {
  return (
    <section>
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-1 xl:pb-20">
          
          {/* text */}
          <div className="text-center xl:text-left order-2 xl:order-none">
            <h1 className="h1 mb-5">
              Hello! I&apos;m <br />{" "}
              <span className="text-accent">Arnob Mahmud</span>
            </h1>
            <span className="text-xl text-justify">Web/Mobile App Developer, UI/UX Designer, Tester (QA)</span>
            <p className="max-w-[600px] mt-2 mb-9 text-white/80 text-justify">
              4+ years of combined professional experience in Mobile App Development, UI/UX
              Design, Web Development, and Test Automation, I excel at crafting elegant digital experiences and I am
              proficient in multiple programming language and technological tools.
            </p>

            {/* button and socials */}
            <div className="flex flex-col xl:flex-row items-center gap-8">
            <Link href="https://drive.google.com/file/d/17_FmciWvvVOJN3K-Q4PbQS_kaT1ct3Zf/view?usp=drive_link" target="_blank">
              <Button
                variant="outline"
                size="lg"
                className="uppercase flex items-center gap-2"
              >
                <span>Download Resume </span>
                <FiDownload />
              </Button>
            </Link>
              <div className="mb:8 xl:mb-0 ">
                <Social
                  containerStyles="flex gap-6"
                  iconStyles="w-9 h-9 border border-accent rounded-full flex justify-center items-center text-accent text-base hover:bg-accent hover:text-primary hover:transition-all duration-500"
                />
              </div>
            </div>
          </div>

          {/* photo */}
          <div className="order-1 xl:order-none mb-8 xl:mb-0">
            <Photo />
          </div>
        </div>
      </div>
      <Stats />
    </section>
  );
};

export default Home;
