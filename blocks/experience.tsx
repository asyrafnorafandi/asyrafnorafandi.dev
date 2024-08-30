import ExperienceCard from "@/components/experience-card";

const experiences = [
  {
    timeline: "Jan 2021 — Present",
    title: "Senior DevOps Engineer",
    company: "Cake Group / Defichain",
    link: "https://bake.io",
    description: `Cake Group
    - Help setup physical office in Singapore (Networking + AV Equipment)
    - Deploy and maintain https://cake.group website
    - Setup MDM for employees using Jumpcloud
    - Configure Physical network switches and firewall using Ubiquiti and PFSense

    Bake.io
    - Setup and maintain Cloud infrastructure in AWS using Terraform, Terragrunt & Atlantis
    - Deploy application services in Kubernetes using FluxCD for GitOps
    - Use Rancher as the Kubernetes management and monitoring tool for devs
    - Implement Incident management, APM, Database and Log monitoring with Datadog
    - Maintain and monitor AWS Aurora Postgres Database to maximize performance while reducing cost
    - Setup Cloudflare Zero Trust to protect internal application and services
    - Involved in the process of getting Bake ISO27001 certified
    - Setup Github action pipelines for SAST, code linting and unit testing using scanning tools such as Terrascan, Semgrep, Trufflehog, and Checkov.
    - Involved in Backend/Frontend debugging of ReactJS and NodeJS frameworks

    Web3
    - Manage 100+ Ethereum / Dash / Defichain Masternode servers using Ansible as the configuration management tool
    - Setup monitoring for Blockchain nodes using Prometheus and Grafana
    - Use Terraform to setup multiple nodes in different regions in AWS/Linode
    - Setup Blockscout explorer for Defichain's EVM layer https://blockscout.mainnet.ocean.jellyfishsdk.com
    - Deploy and maintain Defichain's Ocean API + Indexer for DFI Jellyfish Lightwallet
    `,
    technologies: [
      "Terraform",
      "Terragrunt",
      "AWS",
      "GCP",
      "Linode",
      "Ansible",
      "Web3",
      "Cloudflare",
      "ArgoCD",
      "FluxCD",
      "Kubernetes",
      "Rancher",
      "Docker",
      "Datadog",
      "Prometheus",
      "Grafana",
      "Blockscout",
      "Hashicorp Vault",
      "Github Actions",
      "CircleCI",
      "PostgreSQL",
      "Redis",
      "Zero Trust / VPN",
    ],
  },
  {
    timeline: "May 2019 — Jan 2021",
    title: "Senior DevOps Engineer",
    company: "Zynesis",
    link: "https://zynesis.com/",
    description: `Bahamas Sand Dollar (Central Bank Digital Currency)
    - Greatly involved in the Sand Dollar project in Bahamas. https://www.sanddollar.bs
    - Setup on-premise servers, switches and firewall in Central Bank of Bahamas Internet Data Center
    - Setup on-premise data-recovery servers in Cable Bahamas Maxil Facility
    - Establish site-to-site Vpn connection between main site and data recovery site
    - Used Vmware's Vsphere and Vcenter software to create VMs to host necessary services
    - Setup multiple API/Web/Database/Email services using Docker swarm as the orchestration tool
    - Configured Pfsense firewall
    - Used Portainer as the docker swarm management tool
    - Setup CI/CD pipeline using CircleCI to test/build docker images and deploy to a private docker repository 
    - Used Prometheus and Grafana as the monitoring services and infrastructure monitoring tool
    `,
    technologies: [
      "Terraform",
      "Vmware Vsphere / Vcenter",
      "On-Prem",
      "Docker Swarm",
      "Portainer",
      "Pfsense",
      "Github Actions",
      "CircleCI",
      "OpenVPN",
      "AWS",
      "Prometheus",
      "Grafana",
    ],
  },
  {
    timeline: "July 2017 — May 2019",
    title: "Senior Software Engineer Research Development",
    company: "Inter Enterprise Solutions Sdn Bhd",
    link: "https://www.iesync.com.my/",
    description: `- Become the lead tech solutions architect for modern web/mobile applications.
    - Build CI/CD for continuous deployment of applications to the cloud in staging and production environment.
    - Containerize existing applications using Docker for performance and scalability.
    - Develop new frontend (Angular) and backend (NodeJS) in-house framework.

    In-House Coldfusion Framework 
    - Research and Development on penetration testing.
    - Did Enhancement on In-house Coldfusion Framework
    Involved projects for Honda Malaysia
    - Involved in development of MyHonda Customer Portal
    - Involved in development of Honda Appointment and Workshop System
    Involved projects for Perodua
    - Work order enhancement function
    - BIRT report design and application
    `,
    technologies: [
      "Coldfusion",
      "Firebird",
      "Ionic",
      "Angular",
      "Jquery",
      "Javascript",
      "NodeJS",
    ],
  },
];

export default function Experience() {
  return (
    <section
      id="experience"
      className="mb-8 scroll-mt-16 md:mb-12 lg:mb-16 lg:scroll-mt-24"
      aria-label="Work experience"
    >
      <div className="sticky top-0 z-20 -mx-6 mb-4 w-[50/vw] bg-slate-900/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 ">
        <h2 className="text-sm font-bold uppercase text-slate-200 ">
          Experience
        </h2>
      </div>
      <div>
        <ol className="group/list">
          {experiences.map(
            ({ timeline, title, company, link, description, technologies }) => {
              return (
                <li className="mb-12" key={company}>
                  <ExperienceCard
                    timeline={timeline}
                    title={title}
                    company={company}
                    link={link}
                    description={description}
                    technologies={technologies}
                  />
                </li>
              );
            }
          )}
        </ol>
        <div className="mt-12">
          <a
            className="inline-flex items-baseline font-medium leading-tight text-slate-200 hover:text-teal-300 focus-visible:text-teal-300 font-semibold text-slate-200 group/link text-base"
            href="/asyraf-resume.pdf"
            target="_blank"
            rel="noreferrer noopener"
            aria-label="View Full Résumé (opens in a new tab)"
          >
            <span>
              View Full{" "}
              <span className="inline-block">
                Résumé
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none ml-1 translate-y-px"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </span>
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}
