import { useEffect, useRef, useState } from "react";
import Reveal from "@/components/motions/Reveal";
import RevealX from "@/components/motions/RevealX";
import { Sparkles, Paintbrush2, Image as ImageIcon, Globe } from "lucide-react";
import {
  SiHtml5,
  SiJavascript,
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiFigma,
  SiGit,
  SiGithub,
  SiVercel,
} from "react-icons/si";
import Tilt from "react-parallax-tilt";
import BlurText from "../../components/motions/BlurText";
import Logos from "../../components/Logos";

const frontend = [
  {
    icon: SiHtml5,
    color: "#e34f26",
    name: "HTML & CSS",
    years: "3+",
    level: "Expert",
    pct: 93,
  },
  {
    icon: SiJavascript,
    color: "#f7df1e",
    name: "JavaScript",
    years: "3+",
    level: "Advanced",
    pct: 85,
  },
  {
    icon: SiReact,
    color: "#61dafb",
    name: "React",
    years: "3+",
    level: "Expert",
    pct: 90,
  },
  {
    icon: SiNextdotjs,
    color: "#ffffff",
    name: "Next.js",
    years: "1+",
    level: "Intermediate",
    pct: 65,
  },
  {
    icon: SiTailwindcss,
    color: "#38bdf8",
    name: "Tailwind CSS",
    years: "3+",
    level: "Expert",
    pct: 95,
  },
];

const backend = [
  {
    icon: SiNodedotjs,
    color: "#6cc24a",
    name: "Node.js",
    years: "2+",
    level: "Intermediate",
    pct: 72,
  },
  {
    icon: SiExpress,
    color: "#ffffff",
    name: "Express",
    years: "2+",
    level: "Intermediate",
    pct: 70,
  },
  {
    icon: SiMongodb,
    color: "#47a248",
    name: "MongoDB",
    years: "2+",
    level: "Intermediate",
    pct: 70,
  },
  {
    icon: Globe,
    color: "#a7f3d0",
    name: "REST APIs",
    years: "3+",
    level: "Advanced",
    pct: 82,
    isLucide: true,
  },
];

const tools = [
  {
    icon: SiGit,
    color: "#f05032",
    name: "Git & GitHub",
    years: "3+",
    level: "Advanced",
    pct: 80,
  },
  {
    icon: SiFigma,
    color: "#f24e1e",
    name: "Figma",
    years: "3+",
    level: "Expert",
    pct: 88,
  },
  {
    icon: ImageIcon,
    color: "#31a8ff",
    name: "Photoshop",
    years: "4+",
    level: "Expert",
    pct: 85,
    isLucide: true,
  },
  {
    icon: Paintbrush2,
    color: "#ff9a00",
    name: "Illustrator",
    years: "4+",
    level: "Expert",
    pct: 83,
    isLucide: true,
  },
  {
    icon: SiVercel,
    color: "#ffffff",
    name: "Vercel & Render",
    years: "3+",
    level: "Advanced",
    pct: 78,
  },
];

const levelStyle = {
  Expert: {
    bg: "rgba(6,78,59,0.75)",
    border: "rgba(52,211,153,0.5)",
    text: "#6ee7b7",
  },
  Advanced: {
    bg: "rgba(4,120,87,0.6)",
    border: "rgba(52,211,153,0.35)",
    text: "#a7f3d0",
  },
  Intermediate: {
    bg: "rgba(17,94,89,0.6)",
    border: "rgba(94,234,212,0.35)",
    text: "#99f6e4",
  },
};

const SkillBar = ({ pct, triggered }) => (
  <div className="w-full h-[3px] rounded-full mt-3 bg-white/10">
    <div
      className="h-full rounded-full bg-gradient-to-r from-emerald-600 to-emerald-300"
      style={{
        width: triggered ? `${pct}%` : "0%",
        transition: "width 1.2s cubic-bezier(0.4,0,0.2,1)",
      }}
    />
  </div>
);

//Skill row
const SkillRow = ({ item, triggered }) => {
  const ls = levelStyle[item.level] ?? levelStyle["Intermediate"];
  const IconComp = item.icon;

  return (
    <div className="w-full flex flex-col">
      <div className="flex items-center justify-between gap-3">
        <div className="flex items-center gap-3 min-w-0">
          <div className="w-9 h-9 shrink-0 flex items-center justify-center rounded-lg  border-white/50 border-[1px]">
            {item.isLucide ? (
              <IconComp
                size={18}
                strokeWidth={1.8}
                style={{ color: item.color }}
              />
            ) : (
              <IconComp size={20} style={{ color: item.color }} />
            )}
          </div>
          <div className="flex flex-col leading-tight min-w-0">
            <span className="text-md font-semibold text-white truncate">
              {item.name}
            </span>
            <span className="text-[11px] text-emerald-200">
              {item.years} years
            </span>
          </div>
        </div>
        {/* Level badge */}
        {item.level && (
          <span
            className="shrink-0 text-[10px] font-semibold px-2.5 py-0.5 rounded-full whitespace-nowrap"
            style={{
              background: ls.bg,
              border: `1px solid ${ls.border}`,
              color: ls.text,
              letterSpacing: "0.04em",
            }}
          >
            {item.level}
          </span>
        )}
      </div>
      <SkillBar pct={item.pct ?? 75} triggered={triggered} />
    </div>
  );
};

//Column card
const SkillCard = ({ title, items }) => {
  const [triggered, setTriggered] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setTriggered(true);
      },
      { threshold: 1 },
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <Tilt className="cursor-pointer" perspective={500}>
      <div
        ref={ref}
        className="w-full flex flex-col gap-5 p-6 rounded-2xl flex-1 bg-emerald-900/45 border-emerald-500/30 border-[1px] backdrop-blur-md"
      >
        <div className="flex items-center gap-3 pb-4">
          <div className="w-[3px] h-5 rounded-full shrink-0 bg-emerald-400" />
          <h3 className="text-md font-semibold text-white tracking-wide">
            {title}
          </h3>
        </div>

        {/* Rows */}
        <div className="w-full flex flex-col gap-5">
          {items.map((item, i) => (
            <SkillRow key={i} item={item} triggered={triggered} />
          ))}
        </div>
      </div>
    </Tilt>
  );
};

const Skills = () => (
  <section
    className="relative w-full bg-emerald-600 px-5 py-20 overflow-hidden"
    name="Skills"
  >
    <div className="w-full max-w-6xl mx-auto flex flex-col gap-12">
      {/* Header */}
      <Reveal>
        <div className="flex flex-col items-center gap-4 text-center">
          <div className="py-1.5 px-3 rounded-full inline-flex items-center border border-emerald-500/80 bg-emerald-500/10 gap-2 w-fit">
            <Sparkles
              strokeWidth={2}
              size={14}
              className="text-amber-50 w-4 h-4"
            />
            <span className="text-amber-50 text-sm font-medium tracking-wide">
              My Expertise
            </span>
          </div>
          <BlurText
            text="Skills & Technologies"
            delay={200}
            animateBy="words"
            direction="top"
            className="text-5xl md:text-6xl font-semibold leading-tight tracking-tight text-white"
          />
          <p className="text-[15px] max-w-md leading-relaxed text-emerald-200/65">
            A comprehensive overview of my technical skills and proficiency
            levels.
          </p>
        </div>
      </Reveal>

      {/* 3-column grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full">
        <RevealX>
          <SkillCard title="Frontend Development" items={frontend} />
        </RevealX>
        <Reveal>
          {" "}
          <SkillCard title="Backend & APIs" items={backend} />
        </Reveal>
        <RevealX>
          <SkillCard title="Tools & Others" items={tools} />
        </RevealX>
      </div>
    </div>
    <div className="mt-30">
      <Logos />
    </div>
  </section>
);

export default Skills;