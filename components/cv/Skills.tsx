export default function Skills() {
  return (
    <section className="mb-16 break-after-avoid">
      <h2 className="mb-8 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
        Skills &amp; Proficiencies
      </h2>

      <div className="flex mb-4">
        <div className="w-5/12">
          <h5 className="mb-2 tracking-wide uppercase font-700">Languages</h5>
          <ul>
            <li>
              PHP <small className="uppercase">(5.x, 7.x, 8.x)</small> - 10+ years
            </li>
            <li>
              Javascript - <small className="uppercase">(ES5, ES6)</small> - 7 years
            </li>
            <li>
              CSS <small className="uppercase">(SASS, PostCSS)</small> - 10+ years
            </li>
            <li>HTML - 10+ years</li>
            <li>
              SQL <small className="uppercase">(MySQL, SQLite)</small> - 10+ years
            </li>
            <li>
              APIs <small className="uppercase">(REST, SOAP)</small> - 10+ years
            </li>
            <li>Docker - 5+ years</li>
            <li>OAuth2 - 5+ years</li>
            <li>SEO / SEM - 10+ years</li>
            <li>A/B testing - 4 years</li>
          </ul>
        </div>
        <div className="w-5/12 ml-6">
          <h5 className="mb-2 tracking-wide uppercase font-700">Frameworks</h5>
          <ul>
            <li>
              Laravel <small className="uppercase">(4.x - 12.x)</small> - 10+ years
            </li>
            <li>
              TailwindCSS <small className="uppercase">(1.x - 4.x)</small> - 4 years
            </li>
            <li>
              BootstrapCSS <small className="uppercase">(2.x - 5.x)</small> - 10+ years
            </li>
            <li>
              React <small className="uppercase">(16.x - 19.x)</small> - 3 years
            </li>
            <li>
              Vue <small className="uppercase">(2.x, 3.x)</small> - 4 years
            </li>
            <li>Inertia.js <small className="uppercase">(1.x, 2.x)</small> - 5 years</li>
            <li>
              AngularJS <small className="uppercase">(1.x)</small> - 5 years
            </li>
            <li>
              Statamic <small className="uppercase">(3.x, 5.x)</small> - 2 years
            </li>
            <li>Laravel Vapor - 4 years</li>
            <li>Yii2 Framework <small className="uppercase">(1.x, 2.x)</small> - 5+ years</li>
          </ul>
        </div>
      </div>

      <div className="flex mb-4">
        <div className="w-5/12">
          <h5 className="mb-2 tracking-wide uppercase font-700">Design</h5>
          <ul>
            <li>Web / UI Design</li>
            <li>Identity / Logo Design</li>
            <li>Poster / Brochure Design</li>
          </ul>

          <h5 className="mt-4 mb-2 tracking-wide uppercase font-700">DevOps</h5>
          <ul>
            <li>Server management</li>
            <li>AWS autoscaling &amp; redundancy</li>
            <li>12 factor applications</li>
          </ul>
        </div>
        <div className="w-5/12 ml-6">
          <h5 className="mb-2 tracking-wide uppercase font-700">Professional</h5>
          <ul>
            <li>Stakeholder Management</li>
            <li>Leadership</li>
            <li>Project Management</li>
            <li>Business Analysis</li>
            <li>Project Management</li>
            <li>Quality Assurance</li>
            <li>Performance Optimization</li>
            <li>Solution Design &amp; Architecture</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
