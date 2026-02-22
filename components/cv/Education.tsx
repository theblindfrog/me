export default function Education() {
  return (
    <section className="mb-16 break-after-avoid">
      <h2 className="mb-8 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
        Education
      </h2>

      <ol>
        <li className="mb-6">
          <p className="flex items-baseline justify-between">
            <span className="text-lg text-gray-800 font-500">
              Bachelor of Design <small className="uppercase">(Multimedia Design)</small>
            </span>
            <small className="text-sm text-right text-gray-600 uppercase tracking-copperplate">
              2011
            </small>
          </p>
          <h5 className="text-sm text-gray-600 uppercase tracking-copperplate">
            Swinburne University of Technology
          </h5>
        </li>
        <li className="mb-6">
          <p className="flex items-baseline justify-between">
            <span className="text-lg text-gray-800 font-500">
              Advanced Diploma of Multimedia
            </span>
            <small className="text-sm text-right text-gray-600 uppercase tracking-copperplate">
              2009 &mdash; 2010
            </small>
          </p>
          <h5 className="text-sm text-gray-600 uppercase tracking-copperplate">
            Swinburne TAFE
          </h5>
        </li>
        <li className="mb-6">
          <p className="flex items-baseline justify-between">
            <span className="text-lg text-gray-800 font-500">
              Certificate{" "}
              <abbr title="Four" className="cursor-pointer">
                IV
              </abbr>{" "}
              of Multimedia
            </span>
            <small className="text-sm text-right text-gray-600 uppercase tracking-copperplate">
              2008
            </small>
          </p>
          <h5 className="text-sm text-gray-600 uppercase tracking-copperplate">
            Swinburne TAFE
          </h5>
        </li>
      </ol>
    </section>
  );
}
