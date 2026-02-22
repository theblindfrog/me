import type { Metadata } from "next";
import Image from "next/image";
import { IBM_Plex_Serif } from "next/font/google";

const ibmPlexSerif = IBM_Plex_Serif({
  subsets: ["latin"],
  weight: ["400", "500"],
});

export const metadata: Metadata = {
  title: "About Me",
  description:
    "Learn more about Alex Powell — dad, DIY enthusiast, and full stack developer with 15+ years of experience leading technical teams in the energy sector.",
  openGraph: {
    title: "About Me | Alexander Powell",
    url: "/about",
    description:
      "Learn more about Alex Powell — dad, DIY enthusiast, and full stack developer with 15+ years of experience leading technical teams in the energy sector.",
  },
};

export default function About() {
  const yearsExperience = new Date().getFullYear() - 2011;

  const tallyStart = new Date(2021, 3, 1); // April 1, 2021
  const now = new Date();
  const diffMs = now.getTime() - tallyStart.getTime();
  const diffYears = Math.floor(diffMs / (1000 * 60 * 60 * 24 * 365.25));
  const diffMonths = Math.floor(diffMs / (1000 * 60 * 60 * 24 * 30.44));
  const tallyDuration =
    diffYears >= 2 ? `${diffYears} years` : `${diffMonths} months`;

  return (
    <article className="mt-8">
      <h2 className={`${ibmPlexSerif.className} mb-8 text-3xl font-medium tracking-tight text-gray-900 sm:text-4xl`}>
        <span className="text-4xl mr-2">&#128075;</span> Hi there
      </h2>
      <div className="prose prose-lg text-gray-700 max-w-none">
        <p>
          I&apos;m Alex, an accomplished, passionate &amp; curious digital
          all-rounder with {yearsExperience} years of professional experience,
          capable of working across the full end-to-end breadth of a product;
          from an idea or business case, design &amp; analysis - through to
          development, testing, devops, and deployment.
        </p>
        <p>
          For the last {tallyDuration}, I&apos;ve been a technical lead at{" "}
          <a
            className="text-blue-700 hover:underline"
            href="https://tally.co"
            target="_blank"
            rel="noopener noreferrer"
          >
            Tally Group
          </a>
          , working in the customer acquisition solutions space, supporting 7+
          energy retailers in the Australian{" "}
          <a
            className="text-blue-700 hover:underline"
            href="https://aemo.com.au/en/energy-systems/electricity/national-electricity-market-nem"
            target="_blank"
            rel="noopener noreferrer"
          >
            National Electricity Market
          </a>
          . My team builds and supports a best-in-market sales system that
          processes tens-of-thousands of energy sales per month, and a suite of
          tools that support retailers and their partners, sales agents, and
          end-consumers.
        </p>
        <p>
          Previously I was the digital manager at{" "}
          <a
            className="text-blue-700 hover:underline"
            href="https://web.archive.org/web/20201112024044/http://www.clickenergy.com.au/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Click Energy
          </a>{" "}
          and{" "}
          <a
            className="text-blue-700 hover:underline"
            href="https://web.archive.org/web/20200628023001/https://www.onthemove.com.au/"
            target="_blank"
            rel="noopener noreferrer"
          >
            On The Move
          </a>{" "}
          - an energy retailer with 215,000+ customers, and a utilities
          connection business with 800+ real estate agencies, moving over 70,000
          customers annually - both of which were acquired by{" "}
          <a
            className="text-blue-700 hover:underline"
            href="https://www.agl.com.au/about-agl/media-centre/asx-and-media-releases/2020/august/agl-enters-binding-agreement-to-acquire-click-energy-group"
            target="_blank"
            rel="noopener noreferrer"
          >
            AGL
          </a>
          .
        </p>

        <p>
          During that time, I&apos;ve been responsible for growing the business
          digitally, through our own online sales funnel, generating leads via
          our best-in-class quoting tool, and digitally transforming the On The
          Move business with our real estate partner portal, a suite of
          integrations with real estate CRMs, and our embeddable utilities
          application form product.
        </p>

        <p>
          In my spare time, I&apos;m a dad to two boys, a DIY enthusiast, an
          aspiring woodworker, a running addict, and a reformed coffee addict.
        </p>

        <p>
          <Image
            src="/img/diy.jpg"
            alt="Photo of me 'DIY-ing'"
            width={800}
            height={600}
            className="w-full rounded-3xl shadow-lg ring-2 ring-white"
          />
        </p>
      </div>
    </article>
  );
}
