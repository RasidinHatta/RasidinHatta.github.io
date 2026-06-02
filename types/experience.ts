import { StaticImport } from "next/dist/shared/lib/get-img-props";
import { ReactNode } from "react";

// Define proper types for our data
export interface Experience {
  image: string | StaticImport;
  longDescription: ReactNode;
  team: ReactNode;
  features: any;
  githubUrl: string;
  liveUrl: string;
  id: number;
  title: string;
  company: string;
  location: string;
  period: string;
  type: 'work' | 'education' | 'project';
  description: string;
  achievements: string[];
  tech?: string[]; // Optional property that only exists for projects
}