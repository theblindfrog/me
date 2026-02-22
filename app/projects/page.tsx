import Image from "next/image";
import { IBM_Plex_Serif } from "next/font/google";

const ibmPlexSerif = IBM_Plex_Serif({
  subsets: ["latin"],
  weight: ["400", "500"],
});

const OpenIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="inline-block h-4 fill-current -mt-0.5 ml-1"
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

const PROJECTS = [
  {
    name: "Pay By QR",
    description:
      "Let customers pay by card at your unmannded farm gate or roadside stall. Users print a QR sign, customers scan and pay - no EFTPOS terminal, no customer app.",
    href: "https://paybyqr.com.au",
    hrefText: "paybyqr.com.au",
    logo: "/img/projects/paybyqr-logo.svg",
    tags: ["SaaS", "FinTech", "Payments", "B2B"],
    techStack: ["Laravel", "Livewire", "Alpine.js", "MySQL", "Stripe", "Tailwind CSS"],
  },
  {
    name: "Recipe Margin",
    description:
      "RecipeMargin helps you calculate precise ingredient costs and profit margins for your food business. It's a simple, yet powerful tool that can help you track recipes' margins and costs over time, ensuring you remain profitable.",
    href: "https://recipemargin.com",
    hrefText: "recipemargin.com",
    logo: "/img/projects/recipemargin-logo.svg",
    tags: ["SaaS", "B2B", "AI", "FoodTech"],
    techStack: ["Laravel", "Inertia.js", "React", "TypeScript", "PostgreSQL", "Paddle", "Tailwind CSS"],
  },
];

export default function Projects() {
  return (
    <article className="mt-8">
      <h2 className={`${ibmPlexSerif.className} mb-2 text-3xl font-medium tracking-tight text-gray-900 md:text-4xl`}>
        <span className="text-4xl mr-2">&#128104;&#8205;&#128187;</span> Projects
      </h2>
      <p className="text-lg md:text-xl leading-relaxed font-light  mb-8">
        I&apos;m also a part-time entrepreneur, with a few side hussles on the go. All are fully-bootstrapped, self-funded, and profitable!
      </p>
      <div className="flex flex-col space-y-16 my-16">
        {PROJECTS.map((project) => (
          <div className="flex flex-col space-y-4" key={project.name}>
            <div className="flex flex-col md:flex-row items-start md:items-end justify-between mb-2 gap-4 md:gap-0">
              <a
                href={project.href}
                target="_blank"
                rel="noreferrer"
              >
                <Image
                  src={project.logo}
                  alt={`${project.name} logo`}
                  width={200}
                  height={40}
                  className="h-10 w-auto object-contain"
                />
              </a>


              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2 py-1 text-xs font-medium text-blue-700 bg-blue-100 rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>


            </div>

            <p className="text-gray-700 leading-relaxed">
              {project.description}
            </p>
            <div className="flex flex-wrap items-baseline gap-2">
              {project.techStack.map((tech) => (
                <span
                  key={tech}
                  className="px-2 py-1 text-xs font-medium text-gray-700 bg-gray-100 rounded-full"
                >
                  {tech}
                </span>
              ))}
            </div>


            <p className=" leading-relaxed">
              <a href={project.href} target="_blank" className="text-blue-600 hover:text-blue-800 hover:underline inline-flex items-center">
                {project.hrefText} <OpenIcon />
              </a>
            </p>



          </div>
        ))}
      </div>
    </article>
  );
}
