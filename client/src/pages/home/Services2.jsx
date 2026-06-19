import {
  ChevronsLeftRight,
  Database,
  Globe,
  Figma,
  CheckCircle2,
  Layers,
  Star,
} from "lucide-react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import Reveal from "@/components/motions/Reveal";


const CARD_BG = "rgba(15, 30, 40, 0.2)";
const CARD_BORDER = "1px solid rgba(94, 234, 212, 0.18)";
const ICON_BG = "rgba(52, 211, 153, 0.2)";
const TEAL = "#5eead4";
const TEAL_MID = "#2dd4bf";
// const SPINE = "rgba(94, 234, 212, 0.3)";
const SPINE = "rgb(52, 211, 153)";

const services = [
  {
    number: "01",
    icon: (
      <ChevronsLeftRight
        strokeWidth={1.8}
        className="w-5 h-5"
        style={{ color: TEAL }}
      />
    ),
    title: "Frontend Development",
    tagline: "Interfaces that look sharp and feel fast.",
    bullets: [
      "Responsive UIs with React, Tailwind CSS & shadcn/ui",
      "Figma-to-code — pixel-perfect fidelity, every time",
      "Component-driven architecture with reusable design systems",
      "Performance: lazy loading, code splitting & Core Web Vitals",
      "Smooth animations with Framer Motion & CSS transitions",
    ],
  },
  {
    number: "02",
    icon: (
      <Database strokeWidth={1.8} className="w-5 h-5" style={{ color: TEAL }} />
    ),
    title: "Backend Development",
    tagline: "Secure, scalable APIs built to last.",
    bullets: [
      "RESTful API design with Node.js & Express",
      "JWT auth, bcrypt hashing, role & permission systems",
      "MongoDB schema design, indexing & aggregation pipelines",
      "Input validation, structured error handling & logging",
      "Third-party integrations: payment, email, cloud storage",
    ],
  },
  {
    number: "03",
    icon: (
      <Globe strokeWidth={1.8} className="w-5 h-5" style={{ color: TEAL }} />
    ),
    title: "Full-Stack MERN Projects",
    tagline: "End-to-end ownership — from database to deploy.",
    bullets: [
      "Full-stack builds: React frontend + Express/MongoDB backend",
      "Auth flows: registration, login & protected route systems",
      "Admin dashboards & real-time data with live updates",
      "Deployment to Vercel, Render or Railway with CI/CD",
      "Clean handoff: documentation, Git history & code review",
    ],
  },
  {
    number: "04",
    icon: (
      <Figma strokeWidth={1.8} className="w-5 h-5" style={{ color: TEAL }} />
    ),
    title: "UI/UX & Figma-to-Code",
    tagline: "Design that bridges vision and implementation.",
    bullets: [
      "Wireframing & high-fidelity prototyping in Figma",
      "Design system creation: tokens, components & style guides",
      "Converting Figma designs to production-ready React code",
      "Accessibility audits (WCAG 2.1 AA) & keyboard navigation",
      "Cross-browser & cross-device QA testing",
    ],
  },
];

const Services2 = () => {
  return (
    <section
      style={{
        background: "linear-gradient(to bottom right, #1f2937, #0f766e)",
      }}
      className="relative w-full px-5 py-20"
      name="Service"
    >
      {/* ── Section Header ── */}
      <div className="w-full max-w-6xl mx-auto flex flex-col gap-4 mb-6">
        <Reveal>
          <div
            className="py-1.5 px-3 rounded-full inline-flex items-center gap-2 w-fit"
            style={{
              border: "1px solid rgba(94,234,212,0.35)",
              background: "rgba(94,234,212,0.08)",
            }}
          >
            <Layers
              strokeWidth={2}
              className="w-4 h-4"
              style={{ color: TEAL }}
            />
            <span
              className="text-sm font-medium tracking-wide"
              style={{ color: TEAL }}
            >
              What I Do
            </span>
          </div>
        </Reveal>

        <Reveal>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-3">
            <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight tracking-tight">
              Services &amp; <br className="max-md:hidden" />
              Expertise
            </h2>
            <p
              className="text-[15px] leading-relaxed md:text-right max-w-sm"
              style={{ color: "rgba(204,251,241,0.65)" }}
            >
              Core capabilities focused entirely on the MERN stack and modern
              web development.
            </p>
          </div>
        </Reveal>

        <Reveal>
          <div
            className="w-full h-px mt-2"
            style={{ background: "rgba(94,234,212,0.15)" }}
          />
        </Reveal>
      </div>

      {/* ── Timeline ── */}
      <VerticalTimeline lineColor={SPINE}>
        {services.map((service, i) => (
          <VerticalTimelineElement
            key={i}
            contentStyle={{
              background: CARD_BG,
              border: CARD_BORDER,
              borderRadius: "1rem",
              boxShadow: "0 4px 24px rgba(0,0,0,0.25)",
              padding: "1.75rem",
              backdropFilter: "blur(12px)",
              WebkitBackdropFilter: "blur(12px)",
            }}
            contentArrowStyle={{
              borderRight: `7px solid rgba(94,234,212,0.18)`,
            }}
            date={
              <span
                style={{
                  color: TEAL,
                  fontFamily: "monospace",
                  fontSize: "0.8rem",
                  letterSpacing: "0.15em",
                  opacity: 0.85,
                }}
              >
                {service.number}
              </span>
            }
            iconStyle={{
              background: ICON_BG,
              border: `2px solid rgba(94,234,212,0.4)`,
              boxShadow: `0 0 0 3px rgba(94,234,212,0.1)`,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              backdropFilter: "blur(8px)",
            }}
            icon={service.icon}
          >
            {/* ── Card content ── */}
            <div className="flex flex-col gap-4 ">
              {/* Title + tagline */}
              <div className="flex flex-col gap-1">
                <h3 className="text-base font-semibold text-white tracking-wide m-0">
                  {service.title}
                </h3>
                <p className="text-sm font-light italic m-0 text-gray-300">
                  {service.tagline}
                </p>
              </div>

              <div className="w-full h-px bg-gray-200/50" />

              <ul className="flex flex-col gap-2.5 m-0 p-0">
                {service.bullets.map((item, j) => (
                  <li
                    key={j}
                    className="flex items-start text-teal-100/75 gap-2.5 text-sm leading-relaxed list-none"
                  >
                    <CheckCircle2
                      strokeWidth={1.5}
                      className="w-4 h-4 mt-0.5 shrink-0 text-teal-500"
                    />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </VerticalTimelineElement>
        ))}

        <VerticalTimelineElement
          iconStyle={{
            background: TEAL_MID,
            border: "none",
            boxShadow: `0 0 0 4px rgba(94,234,212,0.2), 0 0 24px rgba(94,234,212,0.35)`,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
          icon={
            <Star
              strokeWidth={2}
              className="w-4 h-4"
              style={{ color: "#0f2027" }}
            />
          }
        />
      </VerticalTimeline>

      {/* ── CTA Strip ── */}
      <div className="w-full max-w-6xl mx-auto mt-8">
        <Reveal>
          <div
            className="flex flex-col sm:flex-row items-center justify-between bg-slate-900/45 gap-5 p-6 rounded-2xl border-teal-300/50 border-[1px]
            backdrop-blur-sm"
          >
            <div className="flex flex-col gap-1 text-center sm:text-left">
              <h4 className="text-white font-semibold text-base">
                Have a project in mind?
              </h4>
              <p className="text-sm text-teal-200">
                Let's talk about what you're building and how I can help.
              </p>
            </div>
            <a
              href="#contact-button"
              className="shrink-0 inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold transition-colors duration-200
              bg-emerald-400 hover:bg-emerald-500 hover:cursor-pointer"
            >
              Get In Touch
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
};

export default Services2;
