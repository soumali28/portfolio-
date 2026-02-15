import { ChevronRightIcon } from "lucide-react";
import React, { useRef, useState } from "react";

interface CompanyWorkCardProps {
  logo?: string;
  company: string;
  role: string;
  duration: string;
  description?: string;
}

const CompanyWorkCard = ({
  logo,
  company = "Pipeline AI (Techstack Inc)",
  role = "Frontend Developer Lead",
  duration = "June 2024 - Present",
  description = "Leading frontend development...",
}: CompanyWorkCardProps) => {
  const [expanded, setExpanded] = useState(false);
  const [hovering, setHovering] = useState(false);
  const cursorRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    if (cursorRef.current) {
      cursorRef.current.style.transform = `translate(${x}px, ${y}px)`;
    }
  };

  return (
    <div
      onClick={() => setExpanded(!expanded)}
      onMouseEnter={() => setHovering(true)}
      onMouseLeave={() => setHovering(false)}
      onMouseMove={handleMouseMove}
      className="group relative hover:shadow-sm p-5 border border-zinc-200 rounded-xl w-full max-w-2xl transition-all duration-300 cursor-none"
    >
      {/* Cursor Follow Bubble */}
      {hovering && (
        <div
          ref={cursorRef}
          className="z-50 absolute transition-transform -translate-x-1/2 -translate-y-1/2 duration-75 pointer-events-none"
        >
          <div className="bg-black px-3 py-1 rounded-full font-medium text-white text-xs whitespace-nowrap">
            {expanded ? "Hide" : "See More"}
          </div>
        </div>
      )}

      <div className="flex gap-4">
        {/* Logo */}
        <div className="flex justify-center items-center bg-zinc-100 rounded-full w-12 h-12 shrink-0">
          {logo ? (
            <img
              src={logo}
              alt="company logo"
              className="w-7 h-7 object-contain"
            />
          ) : (
            <span className="font-semibold text-zinc-600 text-sm">
              PA
            </span>
          )}
        </div>

        {/* Content */}
        <div className="flex flex-col flex-1">
          {/* Header */}
          <div className="flex justify-between items-center">
            <h2 className="flex items-center gap-1 font-semibold text-zinc-900">
              {company}

              <span
                className={`text-secondary transition-all duration-300
                opacity-0 translate-x-[-4px]
                group-hover:opacity-100 group-hover:translate-x-0
                ${expanded ? "rotate-90" : ""}`}
              >
                <ChevronRightIcon size={12} />
              </span>
            </h2>

            <span className="text-secondary text-xs">
              {duration}
            </span>
          </div>

          {/* Role */}
          <p className="mt-[2px] text-zinc-600 text-sm">
            {role}
          </p>

          {/* Description */}
          {expanded && description && (
            <p className="mt-3 text-zinc-700 text-sm leading-relaxed animate-fadeIn">
              {description}
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default CompanyWorkCard;
