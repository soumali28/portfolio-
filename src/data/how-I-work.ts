// howIWorkData.ts
import { Brain, Blocks, Rocket } from "lucide-react";
import one from "../assets/images/howIWork/1.png";
import two from "../assets/images/howIWork/2.png";
import three from "../assets/images/howIWork/3.png";

export const howIWorkSteps = [
  {
    id: "think",
    title: "Think First",
    description:
      "I deeply understand the problem, user needs, and constraints before writing code. AI helps explore edge cases and validate ideas faster.",
    icon: Brain,
    floatingPosition: "top-3/4 left-20",
    image: one,
  },
  {
    id: "build",
    title: "Build With Purpose",
    description:
      "I design and build scalable systems with clean architecture and thoughtful UX. AI speeds up prototyping and reduces boilerplate.",
    icon: Blocks,
    floatingPosition: "right-[45%] bottom-[38%]",
    image: two,
  },
  {
    id: "ship",
    title: "Ship and Iterate",
    description:
      "I ship early, learn from real users, and iterate continuously. AI helps analyze feedback and automate workflows.",
    icon: Rocket,
    floatingPosition: "top-[2%] right-[10%]",
    image: three,
  },
];
