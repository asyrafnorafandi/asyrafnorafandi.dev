import Image from "next/image";
import ArrowUpright from "@/components/svg/arrow-upright";

export default function ProjectCard({
  title,
  description,
  technologies = [],
  imageSrc,
  link,
}: Readonly<{
  title: string;
  description: string;
  technologies: string[];
  imageSrc: string;
  link: string;
}>) {
  return (
    <div className="group relative grid gap-4 pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
      <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg"></div>

      <div className="z-10 sm:order-2 sm:col-span-6">
        <h3>
          <a
            className="inline-flex items-baseline font-medium leading-tight text-slate-200 hover:text-sky-300 focus-visible:text-sky-300  group/link text-base"
            href={link}
            target="_blank"
            rel="noreferrer noopener"
            aria-label={title}
          >
            <span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block"></span>
            <span>
              {title}
              <span className="inline-block">
                <ArrowUpright />
              </span>
            </span>
          </a>
        </h3>
        <p className="mt-2 text-sm leading-normal">{description}</p>
        <ul className="mt-2 flex flex-wrap" aria-label="Technologies used:">
          {technologies.map((tech) => {
            return (
              <li className="mr-1.5 mt-2" key={tech}>
                <div className="flex items-center rounded-full bg-sky-400/10 px-3 py-1 text-xs font-medium leading-5 text-sky-300 ">
                  {tech}
                </div>
              </li>
            );
          })}
        </ul>
      </div>
      <Image
        src={imageSrc}
        width={200}
        height={48}
        loading="lazy"
        className="rounded border-2 border-slate-200/10 transition group-hover:border-slate-200/30 sm:order-1 sm:col-span-2 sm:translate-y-1"
        alt={title}
      />
    </div>
  );
}
