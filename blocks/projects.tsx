import ProjectCard from "@/components/project-card";

const projects = [
  {
    title: "Ansible Role Astar Network",
    description:
      "An open source Ansible Role available on Ansible Galaxy Repository that installs an Astar full / archive / collator Node on Linux",
    imageSrc: "/imgs/astar.png",
    link: "https://github.com/asyrafnorafandi/ansible-role-astar",
    technologies: [
      "Ansible",
      "Jinja",
      "Github Actions",
      "Open Source",
      "Astar",
    ],
  },
  {
    title: "Defichain Metachain Blockscout | EVM Explorer",
    description:
      "Deployed a Blockscout explorer for Defichain's Metachain EVM layer",
    imageSrc: "/imgs/defichain.png",
    link: "https://blockscout.mainnet.ocean.jellyfishsdk.com/",
    technologies: [
      "Blockscout",
      "Kubernetes",
      "Kustomize",
      "FluxCD",
      "PostgreSQL",
      "EVM",
      "AWS",
    ],
  },
  {
    title: "Sanddollar | Digital Bahamian Dollar",
    description:
      "The world's first retail central bank digital currency (CBDC). Help setup on-prem servers, one for the main site and another for disastar recovery. Connected the two via Site-to-Site VPN using Pfsense OpenVPN Protocol",
    imageSrc: "/imgs/sanddollar.png",
    link: "https://www.sanddollar.bs/",
    technologies: [
      "On-Prem",
      "VMWare Vsphere & Vcenter",
      "CircleCI",
      "Docker Swarm",
      "PFSense Firewall",
      "Blockchain",
      "OpenVPN",
    ],
  },
  {
    title: "Kelab Santai Antara Sahabat (KSAS)",
    description:
      "Helped my local Table Tennis Sports Club to develop and host a website to increase online presence. Registered Google Business to help users to find and locate the Clubs location.",
    imageSrc: "/imgs/ksas.png",
    link: "https://ksas.com.my",
    technologies: [
      "NextJS",
      "Typescript",
      "SEO",
      "Google Business",
      "TailwindCSS",
      "Cloudinary",
    ],
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
      aria-label="Selected projects"
    >
      <div className="sticky top-0 z-20 -mx-6 mb-4 w-[50/vw] bg-slate-900/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 ">
        <h2 className="text-sm font-bold uppercase text-slate-200 ">
          Projects
        </h2>
      </div>
      <div>
        <ul className="group/list">
          {projects.map(
            ({ title, description, imageSrc, link, technologies }) => {
              return (
                <li className="mb-12" key={title}>
                  <ProjectCard
                    title={title}
                    description={description}
                    imageSrc={imageSrc}
                    link={link}
                    technologies={technologies}
                  />
                </li>
              );
            }
          )}
        </ul>
      </div>
    </section>
  );
}
