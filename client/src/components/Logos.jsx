import LogoLoop from "@/components/motions/LogoLoop";
import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
} from "react-icons/si";

const techLogos = [
  { node: <SiReact />, title: "React", href: "https://react.dev" },
  { node: <SiNextdotjs />, title: "Next.js", href: "https://nextjs.org" },
  {
    node: <SiTypescript />,
    title: "TypeScript",
    href: "https://www.typescriptlang.org",
  },
  {
    node: <SiTailwindcss />,
    title: "Tailwind CSS",
    href: "https://tailwindcss.com",
  },
];

// Alternative with image sources
// const imageLogos = [
//   {
//     src: "/logos/company1.png",
//     alt: "Company 1",
//     href: "https://company1.com",
//   },
//   {
//     src: "/logos/company2.png",
//     alt: "Company 2",
//     href: "https://company2.com",
//   },
//   {
//     src: "/logos/company3.png",
//     alt: "Company 3",
//     href: "https://company3.com",
//   },
// ];

function Logos() {
  return (
    <div className="relative overflow-hidden">
      {/* Basic horizontal loop */}
      <LogoLoop
        logos={techLogos}
        speed={60}
        direction="left"
        logoHeight={60}
        gap={60}
        hoverSpeed={0}
        scaleOnHover
        fadeOut
        fadeOutColor="#059669"
        ariaLabel="Technology partners"
        className="text-emerald-800"
      />

      {/* Vertical loop with deceleration on hover */}
      <LogoLoop
        logos={techLogos}
        useCustomRender={false}
        className="text-emerald-950"
      />
    </div>
  );
}


export default Logos;