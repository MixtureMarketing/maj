import { LucideIcon } from "lucide-react";

export interface Collection {
  name: string;
  description: string;
  image?: string;
  features?: string[];
}

export interface Brochure {
  name: string;
  filename: string;
  description?: string;
}

export interface ConstructionLayer {
  name: string;
  description: string;
}

export interface ApplicationSection {
  title: string;
  items: string[];
}

export interface InstallationStep {
  title: string;
  description: string;
}

export interface Partner {
  slug: string;
  name: string;
  logo?: string;
  heroImage: string;
  description: string;
  brandColors?: {
    primary: string;
    accent: string;
  };
  collections: Collection[];
  highlights?: string[];
  brochures: Brochure[];
  websiteUrl: string;
  // Extended fields
  construction?: {
    title: string;
    description: string;
    layers: ConstructionLayer[];
  };
  applications?: {
    title: string;
    sections: ApplicationSection[];
  };
  installation?: {
    title: string;
    steps: InstallationStep[];
  };
}
