import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Alexander Powell",
  description:
    "Personal site of Alexander Powell — a full stack developer and technical lead based in the UK, with 15+ years of experience building products end-to-end.",
  openGraph: {
    title: "Alexander Powell",
    url: "/",
    description:
      "Personal site of Alexander Powell — a full stack developer and technical lead based in the UK, with 15+ years of experience building products end-to-end.",
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Alexander Powell',
  url: 'https://www.alexanderpowell.me',
  jobTitle: 'Full Stack Developer',
  sameAs: [
    'https://twitter.com/theblindfrog',
    'https://github.com/alexpowell',
  ],
};

export default function Home() {
  const yearsExperience = new Date().getFullYear() - 2011;

  return (
    <article className="mt-8 prose prose-lg text-gray-700 max-w-none">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <p className="text-xl sm:text-2xl leading-relaxed font-light text-balance">
        An accomplished, passionate &amp; curious digital all-rounder with{" "}
        {yearsExperience} years of professional experience, capable of working
        across the full end-to-end breadth of a product; from an idea or
        business case, design &amp; analysis - through to development, testing,
        devops, and deployment.
      </p>
    </article>
  );
}
