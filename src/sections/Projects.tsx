import ArrowUpRightIcon from "@/assets/icons/arrow-up-right.svg";
import CheckIcon from "@/assets/icons/check-circle.svg";
import crowdCube from "@/assets/images/crowd_cube.png";
import newsSphere from "@/assets/images/news_sphere.png";
import traceBack from "@/assets/images/traceback.png";
import { Card } from "@/components/Card";
import { SectionHeader } from "@/components/SectionHeader";
import Image from "next/image";

const portfolioProjects = [
    {
        id: 1,
        image: newsSphere,
        title: "NewsSphere - News Aggregation Platform",
        description:
            "NewsSphere is a dynamic platform that aggregates trending news and in-depth articles across various categories. The platform offers both free and premium experiences, complete with real-time data updates, secure subscription management, and a responsive design for an optimal user experience on any device.",
        liveURL: "https://news-sphere-1eb5e.web.app/",
        features: [
            {
                title: "Tailored user experience with Normal and Premium user roles",
            },
            {
                title: "Diverse news categories including Technology, Business, Health, Science, Sports, and Politics",
            },
            {
                title: "Robust article management for admins to create, update, and delete content",
            },
        ],
        technologies: [
            "React.js",
            "React Router",
            "TailwindCSS",
            "TanStack Query",
            "Stripe",
            "Firebase",
            "JWT",
            "Node.js",
            "Express.js",
            "MongoDB Atlas",
            "ImgBB API",
            "SweetAlert2",
            "GSAP",
        ],
        githubFrontend: "https://github.com/sajjadislam523/news-sphere_client",
        githubBackend: "https://github.com/sajjadislam523/news-sphere_server",
    },

    {
        id: 2,
        image: traceBack,
        title: "TraceBack - Lost and Found Website",
        description:
            "A web application designed to connect people who have lost items with those who have found them. It enables users to post details about lost and found items, fostering a community-driven approach to recovering lost possessions.",
        liveURL: "https://traceback-d327e.web.app/",
        features: [
            {
                title: "Secure login and registration with Firebase Authentication",
            },
            { title: "Post Lost & Found Items with detailed information" },
            { title: "Real-time updates for marking items as 'Recovered'" },
        ],
        technologies: [
            "React",
            "React Router",
            "Firebase",
            "Tailwind CSS",
            "DaisyUI",
            "Framer Motion",
            "React Datepicker",
            "Sweetalert2",
            "Express.js",
            "MongoDB",
            "JWT",
            "Cookie-Parser",
            "CORS",
            "dotenv",
        ],
        githubFrontend: "https://github.com/sajjadislam523/traceback-client",
        githubBackend: "https://github.com/sajjadislam523/traceback-server",
    },
    {
        id: 3,
        image: crowdCube,
        title: "CrowdCube",
        description:
            "A web application designed to connect individuals who want to raise money for personal needs, creative ideas, or startups with potential contributors. It enables users to create and manage fundraising campaigns, make donations, and track project progress.",
        liveURL: "https://crowdcube-1f1e0.web.app/",
        features: [
            { title: "Secure sign-up, login, and profile management" },
            { title: "Create, view, update, and delete fundraising campaigns" },
            { title: "Contribute to campaigns and view donation history" },
        ],
        technologies: [
            "React.js",
            "Tailwind CSS",
            "DaisyUI",
            "Node.js",
            "Express.js",
            "MongoDB",
            "Firebase",
            "Node.js",
            "Express.js",
            "MongoDB",
            "dotenv",
            "CORS",
        ],
        githubFrontend: "https://github.com/sajjadislam523/crowdcube-client",
        githubBackend: "https://github.com/sajjadislam523/crowdcube-server",
    },
];

export const ProjectsSection = () => {
    return (
        <section className="pb-16 lg:py-24">
            <div className="container">
                <SectionHeader
                    eyebrow="Real-World Results"
                    title="Featured Projects"
                    description="See how I transformed concepts into engaging digital
                    experiences."
                />
                <div className="flex flex-col gap-20 mt-10 md:mt-20">
                    {portfolioProjects.map((project, projectIndex) => (
                        <Card
                            key={project.title}
                            className=" px-8 pt-8 pb-0 md:pt-12 md:px-10 lg:pt-16 lg:px-20 sticky"
                            style={{
                                top: `calc(64px + ${projectIndex * 40}px)`,
                            }}
                        >
                            <div className="lg:grid lg:grid-cols-2 lg:gap-16">
                                <div className="lg:pb-16">
                                    {/* <div className="bg-gradient-to-r from-emerald-300 to-sky-400 inline-flex font-bold uppercase tracking-widest text-sm gap-2 text-transparent bg-clip-text">
                                        <span>{project.company}</span>
                                        <span>&bull;</span>
                                        <span>{project.year}</span>
                                    </div> */}

                                    <h3 className="font-serif text-2xl mt-2 md:text-4xl md:mt-5">
                                        {project.title}
                                    </h3>
                                    <hr className="border-t-2 border-white/5 mt-4 md:mt-5" />
                                    <ul className="flex flex-col gap-4 mt-4 md:mt-5">
                                        {project.features.map((result, idx) => (
                                            <li
                                                key={idx}
                                                className="flex items-center gap-2 text-sm md:text-base text-white/50"
                                            >
                                                <CheckIcon className="size-5 md:size-6" />
                                                <span>{result.title}</span>
                                            </li>
                                        ))}
                                    </ul>
                                    <a href={project.liveURL} target="_blank">
                                        <button className="bg-white text-gray-950 h-12 w-full md:w-auto px-6 rounded-xl font-semibold inline-flex items-center justify-center gap-2 mt-8">
                                            <span>Visit Live Site</span>
                                            <ArrowUpRightIcon className="size-4" />
                                        </button>
                                    </a>
                                </div>
                                <div className="relative">
                                    <Image
                                        src={project.image}
                                        alt={project.title}
                                        className="mt-8 -mb-4 md:-mb-0 lg:mt-0 lg:absolute lg:h-full lg:w-auto lg:max-w-none"
                                    />
                                </div>
                            </div>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    );
};
