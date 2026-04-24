import { notFound } from "next/navigation";
import { PARTNERS } from "@/data/partners";
import PartnerShowcase from "@/components/PartnerShowcase";

export interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return PARTNERS.map((partner) => ({
    slug: partner.slug,
  }));
}

export default async function PartnerPage({ params }: PageProps) {
  const { slug } = await params;
  const partner = PARTNERS.find((p) => p.slug === slug);

  if (!partner) {
    notFound();
  }

  return <PartnerShowcase partner={partner} />;
}
