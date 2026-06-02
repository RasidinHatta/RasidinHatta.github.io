import React from "react";
import { SiNextdotjs, SiReact } from "react-icons/si";

const Description = () => {
  return (
    <>
      Designing practical systems with{" "}
      <span className="inline-flex items-center gap-1 font-semibold text-foreground">
        <SiReact className="h-4 w-4 text-sky-500" />
        React
      </span>{" "}
      and{" "}
      <span className="inline-flex items-center gap-1 font-semibold text-foreground">
        <SiNextdotjs className="h-4 w-4 text-foreground" />
        Next.js
      </span>
      , with strong focus on SQL workflows, secure integration, reporting, and
      responsive user experience.
    </>
  );
};

export default Description;
