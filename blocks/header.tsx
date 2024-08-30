"use client";
import Image from "next/image";
import { Link } from "react-scroll";

import AsyrafCyber from "@/public/imgs/asyraf-cyber.png";
import GithubSVG from "@/components/svg/github";
import LinkedInSVG from "@/components/svg/linkedin";

export default function Header() {
  return (
    <div className="lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-1/2 lg:flex-col lg:justify-between lg:py-24">
      <div>
        <div className="flex items-center gap-x-6">
          {/* <img alt="" src={person.imageUrl} className="h-16 w-16 rounded-full" /> */}
          <Image
            src={AsyrafCyber.src}
            alt="Asyraf"
            width={80}
            height={80}
            className="h-24 w-24 rounded-full border-4 border-sky-300 border-double"
          />
          <div>
            <h3 className="text-xl  leading-7 tracking-tight text-slate-200">
              Muhammad Asyraf Norafandi
            </h3>
            <p className="text-lg leading-2 text-sky-300">
              Senior DevOps Engineer
            </p>
          </div>
        </div>
        <h1 className="mt-10 font-display text-4xl/tight font-light text-white">
          Code, Deploy, Thrive
          <div className="text-sky-300">
            Bridging Code to Cloud with DevOps Excellence
          </div>
        </h1>
        <nav className="nav hidden lg:block" aria-label="In-page jump links">
          <ul className="mt-16 w-max">
            {["about", "experience", "projects"].map((link) => {
              return (
                <li key={link}>
                  <Link
                    activeClass="active"
                    to={link}
                    spy={true}
                    smooth={true}
                    duration={500}
                    className="group flex items-center py-3 cursor-pointer"
                  >
                    <span className="nav-indicator mr-4 h-px w-8 bg-slate-600 transition-all group-hover:w-16 group-hover:bg-slate-200 group-focus-visible:w-16 group-focus-visible:bg-slate-200 motion-reduce:transition-none"></span>
                    <span className="nav-text text-xs font-bold uppercase tracking-widest text-slate-500 group-hover:text-slate-200 group-focus-visible:text-slate-200 ">
                      {link}
                    </span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>

      <ul className="ml-1 mt-8 flex items-center" aria-label="Social media">
        <li className="mr-5 text-xs shrink-0">
          <a
            className="block hover:text-sky-300"
            href="https://github.com/asyrafnorafandi"
            target="_blank"
            rel="noreferrer noopener"
            aria-label="GitHub (opens in a new tab)"
            title="GitHub"
          >
            <span className="sr-only">GitHub</span>
            <GithubSVG />
          </a>
        </li>
        <li className="mr-5 text-xs shrink-0">
          <a
            className="block hover:text-sky-300"
            href="https://www.linkedin.com/in/asyraf-norafandi/"
            target="_blank"
            rel="noreferrer noopener"
            aria-label="LinkedIn (opens in a new tab)"
            title="LinkedIn"
          >
            <span className="sr-only">LinkedIn</span>
            <LinkedInSVG />
          </a>
        </li>
      </ul>
    </div>
  );
}
