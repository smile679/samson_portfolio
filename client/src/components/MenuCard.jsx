import { FaGithub } from "react-icons/fa6";
import { MdOutlineLiveTv } from "react-icons/md";
import { FaPhoenixFramework } from "react-icons/fa6";
import { SiGithub } from "react-icons/si";

const MenuCard = ({ item }) => {
  return (
    <div className="relative w-full h-full md:max-w-md bg-emerald-900/45 border-emerald-500/30 border-[1px] backdrop-blur-md rounded-2xl overflow-hidden ">
      <a href={item.link} target="_blank">
        <img
          src={item.image}
          className="w-full max-h-70 object-cover transition-all duration-200"
        />
      </a>
      <div className="flex flex-col justify-between gap-3 px-5 pt-4 pb-5">
        <div className="flex items-start justify-between gap-3">
          <h3 className="text-base font-semibold text-white leading-snug">
            {item.title}
          </h3>

          <div className="flex items-center gap-2 shrink-0">
            <a
              href={item.link}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-1.5 px-3 py-1 rounded-lg text-xs font-medium transition-all duration-200
              bg-emerald-400/12 border border-emerald-400/30 text-emerald-300 hover:bg-white/10 hover:text-white"
            >
              <MdOutlineLiveTv size={13} />
              Live
            </a>
            <a
              href={item.github}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-1.5 px-3 py-1 rounded-lg text-xs font-medium transition-all duration-200
              bg-white/[0.06] border border-white/[0.12] text-emerald-100/80 hover:bg-white/10 hover:text-emerald-400"
            >
              <SiGithub size={12} />
              Code
            </a>
          </div>
        </div>

        {/* Description */}
        <p className="text-sm leading-relaxed line-clamp-2 text-emerald-200/65">
          {item.shortDescription}
        </p>

        {/* Tech stack tags */}
        {item.tags && item.tags.length > 0 && (
          <div className="flex flex-wrap gap-1.5 pt-1">
            {item.tags.map((tag, i) => (
              <span
                key={i}
                className="text-[10px] font-mono px-2 py-0.5 rounded-md bg-emerald-900/60 border border-emerald-400/20 text-emerald-200/70"
              >
                {tag}
              </span>
            ))}
          </div>
        )}
      </div>
      <div
        className="absolute top-3 left-3 py-0.5 px-3 rounded-full inline-flex items-center gap-1.5
        bg-emerald-900/85 border border-emerald-400/45 backdrop-blur-md"
      >
        <span className="w-1.5 h-1.5 bg-emerald-400 rounded-full shrink-0" />
        <p className="text-emerald-200 text-xs font-medium tracking-wide">
          {item.category}
        </p>
      </div>
    </div>
  );
};

export default MenuCard;
