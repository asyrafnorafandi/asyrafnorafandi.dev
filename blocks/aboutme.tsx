export default function AboutMe() {
  return (
    <section
      id="about"
      className="mb-8 scroll-mt-16 md:mb-12 lg:mb-16 lg:scroll-mt-24"
      aria-label="About me"
    >
      <div className="sticky top-0 z-20 -mx-6 mb-4 w-[50/vw] bg-slate-900/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12">
        <h2 className="text-sm font-bold uppercase tracking-widest text-slate-200">
          About
        </h2>
      </div>
      <div>
        <p className="mb-4">
          Passionate{" "}
          <span className="font-medium text-slate-200 hover:text-sky-300 focus-visible:text-sky-300">
            DevOps Engineer
          </span>{" "}
          with a knack for seamlessly integrating development and operations to
          optimize efficiency and drive innovation. A{" "}
          <span className="font-medium text-slate-200 hover:text-sky-300 focus-visible:text-sky-300">
            problem solver
          </span>{" "}
          by nature, I thrive on automating processes, ensuring scalability, and
          enhancing deployment pipelines. With a solid foundation in cloud
          technologies and a commitment to continuous improvement, I bring a
          dynamic blend of technical expertise and collaborative spirit to every
          project.{" "}
          <span className="font-medium text-slate-200 hover:text-sky-300 focus-visible:text-sky-300">
            Let's build, deploy, and innovate together!{" "}
          </span>{" "}
          🚀
        </p>
      </div>
    </section>
  );
}
