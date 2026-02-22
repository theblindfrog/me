import type { Metadata } from "next";
import Education from "@/components/cv/Education";
import Skills from "@/components/cv/Skills";
import { IBM_Plex_Serif } from "next/font/google";

const ibmPlexSerif = IBM_Plex_Serif({
  subsets: ["latin"],
  weight: ["400", "500"],
});

export const metadata: Metadata = {
  title: "CV & Resume",
  description:
    "CV and work history for Alexander Powell — full stack developer and technical lead with experience in React, PHP, DevOps, and end-to-end product delivery.",
  openGraph: {
    title: "CV & Resume | Alexander Powell",
    url: "/cv",
    description:
      "CV and work history for Alexander Powell — full stack developer and technical lead with experience in React, PHP, DevOps, and end-to-end product delivery.",
  },
};

const BriefcaseIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="inline-block h-5 mr-1 fill-current -mt-05 sm:-ml-7"
    viewBox="0 0 512 512"
  >
    <title>Briefcase</title>
    <rect
      x="32"
      y="128"
      width="448"
      height="320"
      rx="48"
      ry="48"
      fill="none"
      stroke="currentColor"
      strokeLinejoin="round"
      strokeWidth="32"
    />
    <path
      d="M144 128V96a32 32 0 0132-32h160a32 32 0 0132 32v32M480 240H32M320 240v24a8 8 0 01-8 8H200a8 8 0 01-8-8v-24"
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="32"
    />
  </svg>
);

const CheckmarkCircleIcon = ({ className = "inline-block h-5 mr-1 fill-current -mt-05 sm:-ml-6" }: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    viewBox="0 0 512 512"
  >
    <title>Checkmark Circle</title>
    <path
      d="M448 256c0-106-86-192-192-192S64 150 64 256s86 192 192 192 192-86 192-192z"
      fill="none"
      stroke="currentColor"
      strokeMiterlimit="10"
      strokeWidth="32"
    />
    <path
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="32"
      d="M352 176L217.6 336 160 272"
    />
  </svg>
);

const RibbonIcon = ({ className = "inline-block h-5 fill-current mr-05 -mt-05 sm:-ml-6" }: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    viewBox="0 0 512 512"
  >
    <title>Ribbon</title>
    <circle
      cx="256"
      cy="160"
      r="128"
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="32"
    />
    <path
      d="M143.65 227.82L48 400l86.86-.42a16 16 0 0113.82 7.8L192 480l88.33-194.32"
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="32"
    />
    <path
      d="M366.54 224L464 400l-86.86-.42a16 16 0 00-13.82 7.8L320 480l-64-140.8"
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="32"
    />
    <circle
      cx="256"
      cy="160"
      r="64"
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="32"
    />
  </svg>
);

const OpenIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="inline-block h-4 fill-current -mt-05"
    viewBox="0 0 512 512"
  >
    <title>Open</title>
    <path
      d="M384 224v184a40 40 0 01-40 40H104a40 40 0 01-40-40V168a40 40 0 0140-40h167.48M336 64h112v112M224 288L440 72"
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="32"
    />
  </svg>
);

export default function CV() {
  return (
    <>
      <section className="mt-8 mb-16">
        <h2 className={`${ibmPlexSerif.className} mb-8 text-3xl font-medium tracking-tight text-gray-900 sm:text-4xl`}>
          Experience
        </h2>

        <ol>
          {/* Tally Group */}
          <li className="mb-12 md:mb-24">
            <h3 className="flex items-baseline justify-between mb-6 leading-none">
              <span className="text-2xl font-bold tracking-tight text-gray-900">
                Tally Group
              </span>
              <small className="text-sm text-right text-gray-600 uppercase tracking-copperplate">
                2021 &mdash; Present
              </small>
            </h3>
            <h4 className="mb-4 tracking-wide text-lg text-gray-700 uppercase font-700">
              Technical Lead
            </h4>
            <p className="mb-6">
              Technology leader for Tally Acquire (Uconx) sales platform - a
              best-in-market sales system that processes tens-of-thousands of
              energy sales per month, and a suite of tools that support
              retailers and their partners, sales agents, and end-consumers.
            </p>

            <h4 className="mb-4 tracking-wide text-gray-700 uppercase font-700">
              <BriefcaseIcon />
              Key Responsibilities
            </h4>
            <ul className="mb-8 ml-4 space-y-1 list-disc">
              <li>
                PHP (Yii2, Laravel) application development, ensuring robust and
                scalable backend solutions.
              </li>
              <li>
                Providing mentorship and support to junior developers,
                contributing to the overall growth and knowledge sharing within
              </li>
              <li>
                React web application development, including frontend design,
                implementation, and optimization.
              </li>
              <li>
                Actively participating in grooming sessions and contributing to
                the technical roadmap for new features.
              </li>
              <li>
                Conducting regular client and stakeholder meetings, proactively
                gathering requirements, and providing timely project updates.
              </li>
              <li>
                Designing and implementing APIs for both 1st and 3rd parties,
                ensuring seamless integration with a CRM.
              </li>
              <li>
                Taking ownership of service uptime and reliability, implementing
                monitoring and proactive measures to minimize downtime.
              </li>
              <li>
                Managing DevOps processes and overseeing the infrastructure to
                ensure smooth and efficient deployment and operation.
              </li>
              <li>
                Continuous improvement of CI/CD processes, identifying
                bottlenecks, and implementing optimizations for faster and more
                reliable releases.
              </li>
              <li>
                Dedication to reducing technical debt through refactoring and
                implementing best coding practices.
              </li>
              <li>
                Managing and maintaining legacy systems, ensuring they remain
                secure and functional.
              </li>
              <li>
                Actively pursuing application performance improvements, profiling
                and optimizing code for enhanced speed and efficiency.
              </li>
              <li>
                Handling AEMO MSATS integrations, ensuring compliance and
                seamless communication with the energy market systems.
              </li>
              <li>
                Collaborating with cross-functional teams for successful project
                delivery, fostering a culture of teamwork and innovation.
              </li>
              <li>
                Staying updated on industry best practices, emerging
                technologies, and incorporating relevant advancements into the
                development processes of the team.
              </li>
            </ul>

            <h4 className="mb-4 tracking-wide text-gray-700 uppercase font-700">
              <CheckmarkCircleIcon />
              Key Accomplishments
            </h4>
            <ol className="mb-8">
              <li className="mb-6">
                <h3 className="flex items-baseline justify-between mb-2">
                  <span className="text-lg text-gray-800 font-500">
                    <a
                      className="hover:text-primary-500"
                      href="https://www.tally.co/acquire/features"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Zappy
                      <OpenIcon />
                    </a>
                  </span>
                  <small className="text-sm text-right text-gray-600 uppercase tracking-copperplate">
                    2021
                  </small>
                </h3>
                <p className="leading-snug">
                  Launched a turnkey, white-labelled React sales funnel for
                  Australian energy retailers in the NEM. In 12 months, over 16
                  instances were deployed for 7 distinct retail businesses, with
                  each instance customized for the unique features, themes, and
                  integrations for each retail entity.
                </p>
              </li>
              <li className="mb-6">
                <h3 className="flex items-baseline justify-between mb-2">
                  <span className="text-lg text-gray-800 font-500">
                    Global Quality &amp; Static Analysis Platform
                  </span>
                  <small className="text-sm text-right text-gray-600 uppercase tracking-copperplate">
                    2023
                  </small>
                </h3>
                <p className="leading-snug">
                  Advocating for, piloting, and leading the roll out of a new
                  code quality &amp; static analysis platform for the global
                  business across projects spanning 5 international markets, and
                  8 internal business groups
                </p>
              </li>
            </ol>

            <h4 className="mt-8 mb-4 tracking-wide text-gray-700 uppercase font-700">
              <RibbonIcon />
              Awards
            </h4>
            <dl className="mb-8">
              <dt className="flex items-baseline justify-between mb-2 text-lg">
                <span>Values Award &ndash; Ownership &amp; Collaboration</span>
                <small className="text-sm text-right text-gray-600 uppercase tracking-copperplate">
                  Q1&mdash;2022
                </small>
              </dt>
            </dl>
          </li>

          {/* Click Energy & On The Move */}
          <li className="mb-12 md:mb-24">
            <h3 className="flex items-baseline justify-between mb-6 leading-none">
              <span className="text-2xl font-bold tracking-tight text-gray-900">
                Click Energy &amp; On The Move
              </span>
              <small className="text-sm text-right text-gray-600 uppercase tracking-copperplate">
                2013 &mdash; 2021
              </small>
            </h3>

            <h4 className="mb-4 tracking-wide text-lg text-gray-700 uppercase font-700">
              Digital Manager
            </h4>
            <p className="mb-6">
              Responsible for growing the business digitally, through
              Click&apos;s own online sales funnel, generating leads via our
              best-in-class quoting tool, and digitally transforming the On The
              Move business with our real estate partner portal, a suite of
              integrations with real estate CRMs, and our embeddable utilities
              application form product.
            </p>

            <h4 className="mb-4 tracking-wide text-gray-700 uppercase font-700">
              <BriefcaseIcon />
              Key Responsibilities
            </h4>
            <ul className="mb-8 ml-4 space-y-1 list-disc">
              <li>
                Creation and ownership of the vast majority of digital assets
                &amp; processes for both Click and On The Move
              </li>
              <li>Online sales funnels &amp; quoting tools</li>
              <li>Automation &amp; integration of internal and external systems</li>
              <li>API design and development for internal and external (public) use</li>
              <li>AEMO MSATS integrations</li>
              <li>Australian Government DVS integration for identify verification</li>
              <li>Service uptime and reliability</li>
              <li>Devops environment creation</li>
              <li>CI/CD processes</li>
              <li>Autoscaling &amp; 12 factor applications</li>
              <li>Growth &amp; performance of online sales channels</li>
              <li>Lead generation performance</li>
              <li>Sales conversion performance</li>
              <li>Integration adoption from 3rd parties and platform evangelism.</li>
              <li>A/B testing, conversion optimization, and session recording</li>
              <li>Stakeholder management internally and externally</li>
              <li>Technical leadership and mentorship</li>
              <li>Solution design and process mapping</li>
              <li>Site reliability and fault tolerance</li>
              <li>Serverless PDF generation &amp; design</li>
            </ul>

            <h4 className="mb-4 tracking-wide text-gray-700 uppercase font-700">
              <CheckmarkCircleIcon />
              Key Accomplishments
            </h4>
            <ol className="mb-8">
              <li className="mb-6">
                <h3 className="flex items-baseline justify-between mb-2">
                  <span className="text-lg text-gray-800 font-500">
                    <a
                      className="hover:text-primary-500"
                      href="https://www.onthemove.com.au/unilodge"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      On The Move Embedded Utilities Application Form
                      <OpenIcon />
                    </a>
                  </span>
                  <small className="text-sm text-right text-gray-600 uppercase tracking-copperplate">
                    2020
                  </small>
                </h3>
                <p className="leading-snug">
                  A new way for Real Estate Agencies to embedded a utility
                  connection form within their website, where a new tenant or
                  purchaser can connect all their utilities completely within the
                  agency&apos;s site; with no offsite redirection.
                </p>
              </li>
              <li className="mb-6">
                <h3 className="flex items-baseline justify-between mb-2">
                  <span className="text-lg text-gray-800 font-500">
                    <a
                      className="hover:text-primary-500"
                      href="https://rebels.clickenergy.com.au"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Melbourne Rebels Partner Site
                      <OpenIcon />
                    </a>
                  </span>
                  <small className="text-sm text-right text-gray-600 uppercase tracking-copperplate">
                    2019
                  </small>
                </h3>
                <p className="leading-snug">
                  A showcase of Click Energy&apos;s commitment to partner with the
                  Melbourne Rebels and Rugby Union. A co-branded website
                  specifically for the Rebels. We are your energy!
                </p>
              </li>
              <li className="mb-6">
                <h3 className="flex items-baseline justify-between mb-2">
                  <span className="text-lg text-gray-800 font-500">
                    <a
                      className="hover:text-primary-500"
                      href="https://rewards.onthemove.com.au"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      On The Move Partner Portal
                      <OpenIcon />
                    </a>
                  </span>
                  <small className="text-sm text-right text-gray-600 uppercase tracking-copperplate">
                    2018
                  </small>
                </h3>
                <p className="leading-snug">
                  A portal for{" "}
                  <a
                    href="https://onthemove.com.au"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    On The Move
                  </a>
                  &apos;s Real Estate Agent and Property Manager partners to
                  submit leads and integration with our rewards redemption
                  platform. It also functions as a clearing house for external
                  integrations with real estate software and CRMs.
                </p>
              </li>
              <li className="mb-6">
                <h3 className="flex items-baseline justify-between mb-2">
                  <span className="text-lg text-gray-800 font-500">
                    <a
                      className="hover:text-primary-500"
                      href="https://www.amaysim.com.au/energy"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      amaysim Energy launch
                      <OpenIcon />
                    </a>
                  </span>
                  <small className="text-sm text-right text-gray-600 uppercase tracking-copperplate">
                    2017
                  </small>
                </h3>
                <p className="leading-snug">
                  Technical delivery leader to launch the customer facing
                  amaysim energy brand. From sales funnels, quoting tool, in
                  addition to BAU functions - like paying a bill, or adding a
                  concession to your account. White labelling and integrating
                  Click&apos;s existing assets with amaysim&apos;s brand systems -
                  resulting in tens of thousands of sales from a ~5 month
                  project.
                </p>
              </li>
              <li className="mb-6">
                <h3 className="flex items-baseline justify-between mb-2">
                  <span className="text-lg text-gray-800 font-500">
                    <a
                      className="hover:text-primary-500"
                      href="https://www.clickenergy.com.au"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Click Energy website redesign
                      <OpenIcon />
                    </a>
                  </span>
                  <small className="text-sm text-right text-gray-600 uppercase tracking-copperplate">
                    2015
                  </small>
                </h3>
                <p className="leading-snug">
                  A complete end-to-end process to redesign and implement a
                  fresh new look for Click Energy main website - from initial
                  design and static mockups to front-end development and
                  deployment.
                </p>
              </li>
              <li className="mb-6">
                <h3 className="flex items-baseline justify-between mb-2">
                  <span className="text-lg text-gray-800 font-500">
                    <a
                      className="hover:text-primary-500"
                      href="https://www.clickenergy.com.au/quick-quote-calculator"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Click Energy Quick Quote Calculator
                      <OpenIcon />
                    </a>
                  </span>
                  <small className="text-sm text-right text-gray-600 uppercase tracking-copperplate">
                    2014
                  </small>
                </h3>
                <p className="leading-snug">
                  An industry leading energy quoting tool, allowing customers to
                  compare their current bill in a like-for-like comparison with
                  Click Energy over the same period.
                </p>
              </li>
            </ol>

            <h4 className="mt-8 mb-4 tracking-wide text-gray-700 uppercase font-700">
              <RibbonIcon />
              Awards
            </h4>
            <dl className="mb-8">
              <dt className="flex items-baseline justify-between mb-2 text-lg">
                <span>Quarterly Values Award &ndash; Reliability</span>
                <small className="text-sm text-right text-gray-600 uppercase tracking-copperplate">
                  Q2&mdash;2020
                </small>
              </dt>
              <dd className="mb-4 italic text-gray-700 lg:w-3/4">
                Quarterly winners are nominated by peers, who represent
                reliability. We build reliable products full of fail safes and
                back-ups. Reliability is also about being committed to the
                amaysim way and being responsible and authentic in our behavior.
              </dd>

              <dt className="flex items-baseline justify-between mb-2 text-lg">
                <span>Quarterly Values Award &ndash; Agility</span>
                <small className="text-sm text-right text-gray-600 uppercase tracking-copperplate">
                  Q1&mdash;2020
                </small>
              </dt>
              <dd className="mb-4 italic text-gray-700 lg:w-3/4">
                Quarterly winners are nominated by peers, who represent agility.
                Agility is about reacting quickly, applying mental flexibility
                when a problem needs to be solved and always holding on to the
                entrepreneurial spirit.
              </dd>

              <dt className="flex items-baseline justify-between mb-2 text-lg">
                <span>Outside the Box Thinker Award</span>
                <small className="text-sm text-right text-gray-600 uppercase tracking-copperplate">
                  2018
                </small>
              </dt>
              <dd className="mb-4 italic text-gray-700 lg:w-3/4">
                Awarded to an individual who finds creative and divergent ways of
                solving problems across the business.
              </dd>

              <dt className="flex items-baseline justify-between mb-2 text-lg">
                <span>Above and Beyond Award</span>
                <small className="text-sm text-right text-gray-600 uppercase tracking-copperplate">
                  2017
                </small>
              </dt>
              <dd className="mb-4 italic text-gray-700 lg:w-3/4">
                Awarded to someone who goes beyond of what&apos;s required of them
                and delivers exceptional value to the business.
              </dd>

              <dt className="flex items-baseline justify-between mb-2 text-lg">
                <span>Manager Directors&apos; Award</span>
                <small className="text-sm text-right text-gray-600 uppercase tracking-copperplate">
                  2016
                </small>
              </dt>
              <dd className="mb-4 italic text-gray-700 lg:w-3/4">
                The &quot;MVP&quot; of the year, awarded at the discretion of the
                Managing Director{" "}
                <small>(or CEO in other years)</small> to the individual who has
                made the most impact to the business for the year.
              </dd>
            </dl>
          </li>

          {/* Natvia */}
          <li className="mb-12 md:mb-24">
            <h3 className="flex items-baseline justify-between mb-6 leading-none">
              <span className="text-2xl font-bold tracking-tight text-gray-900">
                Natvia
              </span>
              <small className="text-sm text-right text-gray-600 uppercase tracking-copperplate">
                2012 &mdash; 2013
              </small>
            </h3>

            <h4 className="mb-4 tracking-wide text-gray-700 uppercase font-700">
              <BriefcaseIcon />
              Key Responsibilities
            </h4>
            <ul className="mb-8 ml-4 space-y-1 list-disc">
              <li>Responsive Web Design</li>
              <li>WordPress Theme Development</li>
              <li>SEO &amp; SEM</li>
              <li>eCommerce</li>
              <li>i18n &amp; l10n implementation</li>
              <li>Server Management</li>
              <li>Video Production &amp; Motion Graphics</li>
              <li>Digital Marketing</li>
              <li>Social Media (competitions, management)</li>
            </ul>

            <h4 className="mb-4 tracking-wide text-gray-700 uppercase font-700">
              <CheckmarkCircleIcon />
              Key Accomplishments
            </h4>
            <ol className="mb-8">
              <li className="mb-6">
                <h3 className="flex items-baseline justify-between mb-2">
                  <span className="text-lg text-gray-800 font-500">Natvia</span>
                  <small className="text-sm text-right text-gray-600 uppercase tracking-copperplate">
                    2012
                  </small>
                </h3>
                <p className="leading-snug">
                  The brand website for Natvia. WordPress backed for easy
                  updating by other teams, and translated into 6 different
                  languages.
                </p>
              </li>
              <li className="mb-6">
                <h3 className="flex items-baseline justify-between mb-2">
                  <span className="text-lg text-gray-800 font-500">
                    Sweeter Life Club
                  </span>
                  <small className="text-sm text-right text-gray-600 uppercase tracking-copperplate">
                    2012
                  </small>
                </h3>
                <p className="leading-snug">
                  A recipe website to promote and provide creative ways of using
                  Natvia in food. WordPress backed with custom taxonomies to
                  facilitate different requirements.
                </p>
              </li>
            </ol>
          </li>
        </ol>
      </section>

      <Education />
      <Skills />
    </>
  );
}
