import {
  ChevronsLeftRight,
  CodeXml,
  Database,
  Focus,
  Globe,
  Loader,
  Sparkles,
} from "lucide-react";
import Reveal from "@/components/motions/Reveal";
import CountUp from "../../components/motions/CountUp";
import BlurText from "../../components/motions/BlurText";
import { useState } from "react";
import { MdOutlineDownloading } from "react-icons/md";

const stats = [
  { value: "10", label: "Happy Clients" },
  { value: "1.5", label: "Code Commits" },
  { value: "100", label: "GitHub Stars" },
];

const About = () => {
  const [isLoading, setIsLoading] = useState(false);
  return (
    <section className="relative w-full bg-emerald-600 px-5 py-20" name="About">
      <div className="w-full max-w-6xl mx-auto">
        <div className="w-full flex max-md:flex-col justify-center items-center gap-12">
          {/*  Left Column  */}
          <div className="flex flex-col flex-1 gap-6 justify-between">
            {/* Badge */}
            <Reveal>
              <div className="py-1.5 px-3 rounded-full inline-flex items-center border border-emerald-500/80 bg-emerald-500/10 gap-2 w-fit">
                <CodeXml strokeWidth={2.5} className="text-amber-50 w-4 h-4" />
                <span className="text-amber-50 text-sm font-medium tracking-wide">
                  Full-Stack Developer
                </span>
                <Sparkles strokeWidth={2} className="text-amber-50 w-4 h-4" />
              </div>
            </Reveal>

            {/* Heading */}
            <Reveal>
              <BlurText
                text="Crafting Digital Experiences That Matter"
                delay={200}
                animateBy="words"
                direction="top"
                className="text-5xl font-semibold leading-tight tracking-tight text-white"
              />
            </Reveal>

            {/* Bio paragraphs */}
            <Reveal>
              <div className="w-full max-sm:h-96 flex flex-col gap-4 max-sm:my-5">
                <p className="text-[15px] text-amber-50 leading-relaxed">
                  I'm a dedicated{" "}
                  <span className="text-white font-medium">
                    Full-Stack MERN Developer
                  </span>{" "}
                  with strong experience building modern, scalable, and
                  user-focused web applications. I deliver complete end-to-end
                  solutions from clean responsive interfaces to secure API
                  architectures.
                </p>
                <p className="text-[15px] text-amber-50 leading-relaxed">
                  My stack includes{" "}
                  <span className="text-white font-semibold">
                    React, Tailwind CSS, Node.js, Express, and MongoDB
                  </span>
                  . I follow clean coding practices, reusable component design,
                  and performance-driven development.
                </p>
                <p className="text-[15px] text-amber-50 leading-relaxed">
                  I also work with{" "}
                  <span className="text-white font-semibold">
                    Figma, Illustrator, and Photoshop
                  </span>
                  , blending strong visual design with technical execution to
                  create seamless, intuitive user experiences.
                </p>
              </div>
            </Reveal>

            {/* Stats — left-border divider style */}
            <Reveal>
              <div className="w-full h-20 flex justify-between items-center gap-0 my-3 overflow-hidden">
                {stats.map((stat, i) => (
                  <div
                    key={i}
                    className="flex flex-col gap-1 pl-4 pr-8 border-l-2 border-emerald-500"
                  >
                    <span className="text-3xl font-bold text-white">
                      <CountUp
                        from={0}
                        to={stat.value}
                        separator=","
                        direction="up"
                        duration={1}
                        className="text-3xl font-bold text-white"
                      />
                      +
                    </span>
                    <span className="text-sm text-amber-50 font-light">
                      {stat.label}
                    </span>
                  </div>
                ))}
              </div>
            </Reveal>
            <div>
              <button
                className="w-50 place-content-center px-3 py-2 font-semibold bg-white hover:shadow-emerald-800 hover:shadow-md
                   flex justify-center items-center gap-2 rounded-sm cursor-pointer"
                onClick={() => {
                  setIsLoading(true);

                  window.location.href =
                    "https://drive.google.com/uc?export=download&id=1m6Fs1FJ5XRMrncbwvtY5z5eOgroKoCgO";

                  setTimeout(() => setIsLoading(false), 1000);
                }}
              >
                {isLoading ? (
                  <p className="text-[18px] font-semibold text-emerald-600 flex items-center gap-2">
                    <Loader className="animate-spin" />
                    Downloading..
                  </p>
                ) : (
                  <p className="text-[18px] font-semibold text-emerald-600 flex items-center gap-2">
                    <MdOutlineDownloading size={20} />
                    Download CV
                  </p>
                )}
              </button>
            </div>
          </div>

          {/* ── Right Column ── */}
          <div className="flex flex-1 flex-col gap-3">
            {/* Card 1 — full width */}
            <Reveal>
              <div className="w-full h-full flex items-center gap-5 p-6 rounded-2xl bg-emerald-900/45 border border-white/5 hover:border-emerald-500/30 transition-colors duration-300">
                <div className="shrink-0 bg-emerald-500/15 p-3 rounded-xl">
                  <CodeXml
                    strokeWidth={2}
                    className="text-emerald-400 w-5 h-5"
                  />
                </div>
                <div className="flex flex-col gap-1.5">
                  <h3 className="text-base font-semibold text-white tracking-wide">
                    Expertise
                  </h3>
                  <p className="text-sm text-amber-50 font-light leading-relaxed">
                    Specialized in building scalable web applications with
                    modern technologies and best practices.
                  </p>
                </div>
              </div>
            </Reveal>

            {/* Cards 2 & 3 — half width side by side */}
            <Reveal>
              <div className="flex gap-3">
                <div className="flex flex-col gap-4 p-6 rounded-2xl bg-emerald-900/45 border border-white/5 hover:border-emerald-500/30 transition-colors duration-300 flex-1">
                  <div className="bg-emerald-500/15 p-3 rounded-xl w-fit">
                    <ChevronsLeftRight
                      strokeWidth={2}
                      className="text-emerald-400 w-5 h-5"
                    />
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <h3 className="text-base font-semibold text-white tracking-wide">
                      Clean Code
                    </h3>
                    <p className="text-sm text-amber-50 font-light leading-relaxed">
                      Writing maintainable, well-documented code that scales.
                    </p>
                  </div>
                </div>

                <div className="flex flex-col gap-4 p-6 rounded-2xl bg-emerald-900/50 border border-white/5 hover:border-emerald-500/30 transition-colors duration-300 flex-1">
                  <div className="bg-emerald-500/15 p-3 rounded-xl w-fit">
                    <Focus
                      strokeWidth={2}
                      className="text-emerald-400 w-5 h-5"
                    />
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <h3 className="text-base font-semibold text-white tracking-wide">
                      Performance
                    </h3>
                    <p className="text-sm text-amber-50 font-light leading-relaxed">
                      Optimizing for speed and efficiency in every project.
                    </p>
                  </div>
                </div>
              </div>
            </Reveal>

            {/* Card 4 — stats full width */}
            <Reveal>
              <div className="flex justify-evenly items-center p-6 rounded-2xl bg-emerald-900/45 border border-white/5">
                <div className="flex flex-col text-center gap-1">
                  <span className="text-2xl font-bold text-emerald-400">
                    <CountUp
                      from={0}
                      to={100}
                      separator=","
                      direction="up"
                      duration={1}
                    />
                    %
                  </span>
                  <span className="text-sm text-amber-50 font-light">
                    Client Satisfaction
                  </span>
                </div>
                <div className="w-px h-10 bg-white/10" />
                <div className="flex flex-col text-center gap-1">
                  <span className="text-2xl font-bold text-emerald-400">
                    <CountUp
                      from={0}
                      to={24}
                      separator=","
                      direction="up"
                      duration={1}
                    />
                    /
                    <CountUp
                      from={0}
                      to={7}
                      separator=","
                      direction="up"
                      duration={1}
                    />
                  </span>
                  <span className="text-sm text-amber-50 font-light">
                    Support Available
                  </span>
                </div>
                <div className="w-px h-10 bg-white/10" />
                <div className="flex flex-col text-center gap-1">
                  <span className="text-2xl font-bold text-emerald-400">
                    Fast
                  </span>
                  <span className="text-sm text-amber-50 font-light">
                    Delivery Time
                  </span>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
