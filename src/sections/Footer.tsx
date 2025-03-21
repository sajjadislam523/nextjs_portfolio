import ArrowUpRightIcon from "@/assets/icons/arrow-up-right.svg";
import Link from "next/link";

const footerLinks = [
    {
        title: "Linkedin",
        href: "https://www.linkedin.com/in/sajjadislam523",
    },
    {
        title: "Github",
        href: "https://github.com/sajjadislam523",
    },
    {
        title: "Instagram",
        href: "https://www.instagram.com/__kabila_0.0.0.1__",
    },
];

export const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="relative overflow-x-clip">
            <div className="absolute h-[400px] w-[1600px] bottom-0 left-1/2 -translate-x-1/2 bg-emerald-300/30 [mask-image:radial-gradient(50%_50%_at_bottom_center,black,transparent)] -z-10 pointer-events-none"></div>
            <div className="container">
                <div className="border-t border-white/15 py-6 text-sm flex flex-col items-center gap-8 md:flex-row md:justify-between">
                    <div className="text-white/40">
                        &copy; {currentYear}. All rights reserved.
                    </div>

                    <nav className="flex flex-col md:flex-row items-center gap-8">
                        {footerLinks.map((link) => (
                            <Link
                                key={link.title}
                                href={link.href}
                                className="inline-flex items-center gap-2 group transition-all duration-300 ease-in-out hover:text-emerald-300"
                                target="_blank"
                            >
                                <span className="font-semibold relative">
                                    {link.title}
                                    <span className="absolute left-0 -bottom-1 h-[1px] w-0 bg-emerald-300 transition-all duration-300 ease-out group-hover:w-full"></span>
                                </span>
                                <ArrowUpRightIcon className="size-4 transition-all duration-300 ease-out group-hover:scale-125 group-hover:text-emerald-300" />
                            </Link>
                        ))}
                    </nav>
                </div>
            </div>
        </footer>
    );
};
