"use client";
import CssIcon from "@/assets/icons/css3.svg";
import FirebaseIcon from "@/assets/icons/firebase.svg";
import GithubIcon from "@/assets/icons/github.svg";
import HTMLIcons from "@/assets/icons/html5.svg";
import MongdbIcon from "@/assets/icons/mongodb.svg";
import NodejsIcon from "@/assets/icons/nodejs.svg";
import ReactIcon from "@/assets/icons/react.svg";
import JavascriptIcon from "@/assets/icons/square-js.svg";
import TailwindIcon from "@/assets/icons/tailwind.svg";
import VercelIcon from "@/assets/icons/vercel.svg";
import BookImage from "@/assets/images/book-cover.png";
import MapImage from "@/assets/images/map.png";
import smileMemoji from "@/assets/images/memoji-smile.png";
import { Card } from "@/components/Card";
import { CardHeader } from "@/components/CardHeader";
import { SectionHeader } from "@/components/SectionHeader";
import { ToolboxItems } from "@/components/ToolboxItems";
import { motion } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";

const toolboxItems = [
    {
        title: "JavaScript",
        iconType: JavascriptIcon,
    },
    {
        title: "HTML5",
        iconType: HTMLIcons,
    },
    {
        title: "CSS3",
        iconType: CssIcon,
    },
    {
        title: "React",
        iconType: ReactIcon,
    },
    {
        title: "Github",
        iconType: GithubIcon,
    },
    {
        title: "Firebase",
        iconType: FirebaseIcon,
    },
    {
        title: "Tailwind",
        iconType: TailwindIcon,
    },
    {
        title: "Nodejs",
        iconType: NodejsIcon,
    },
    {
        title: "MongoDB",
        iconType: MongdbIcon,
    },
    {
        title: "Vercel",
        iconType: VercelIcon,
    },
];

const hobbies = [
    {
        title: "Painting",
        emoji: "🎨",
        left: "5%",
        top: "5%",
    },
    {
        title: "Photography",
        emoji: "📷",
        left: "50%",
        top: "5%",
    },
    {
        title: "Hiking",
        emoji: "🥾",
        left: "35%",
        top: "40%",
    },
    {
        title: "Gaming",
        emoji: "🎮",
        left: "10%",
        top: "35%",
    },
    {
        title: "Music",
        emoji: "🎵",
        left: "70%",
        top: "45%",
    },
    {
        title: "Fitness",
        emoji: "🏋️‍♂️",
        left: "5%",
        top: "65%",
    },
    {
        title: "Reading",
        emoji: "📚",
        left: "45%",
        top: "70%",
    },
];

export const AboutSection = () => {
    const constraintRef = useRef(null);

    return (
        <div className="py-16 lg:py-28">
            <div className="container">
                <SectionHeader
                    eyebrow="About Me"
                    title="A Glimpse Into My World"
                    description="Learn more about who I am, what I do, and what inspires me."
                />
                <div className="mt-16 flex flex-col gap-8">
                    <div className="grid grid-cols-1 md:grid-cols-5 gap-8 lg:grid-cols-3">
                        <Card className="h-[320px] md:col-span-2 lg:col-span-1">
                            <CardHeader
                                title="My Reads"
                                description="Explore the books shaping my perspectives."
                            />
                            <div className="w-40 mx-auto mt-2 md:mt-0">
                                <Image src={BookImage} alt="Book Cover" />
                            </div>
                        </Card>
                        <Card className="h-[320px] md:col-span-3 lg:col-span-2">
                            <CardHeader
                                className=""
                                title="My Toolbox"
                                description="Explore the technologies and tools I use to
                                craft exceptional digital experiences."
                            />
                            <ToolboxItems
                                items={toolboxItems}
                                className=""
                                itemsWrapperClassName="animate-move-left [animation-duration:30s]"
                            />
                            <ToolboxItems
                                items={toolboxItems}
                                className="mt-6 "
                                itemsWrapperClassName="-translate-x-1/2 animate-move-right [animation-duration:15s]"
                            />
                        </Card>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-5 gap-8 lg:grid-cols-3">
                        <Card className="h-[320px] p-0 flex flex-col md:col-span-3 lg:col-span-2">
                            <CardHeader
                                title="Beyond The Code"
                                description="Explore my interests and hobbies beyond the
                                digital realm."
                                className="px-6 py-6"
                            />
                            <div
                                className="relative flex-1"
                                ref={constraintRef}
                            >
                                {hobbies.map((hobby) => (
                                    <motion.div
                                        key={hobby.title}
                                        className="inline-flex gap-2 px-6 bg-gradient-to-r from-emerald-300 to-sky-400 rounded-full py-1.5 items-center absolute"
                                        style={{
                                            left: hobby.left,
                                            top: hobby.top,
                                        }}
                                        drag
                                        dragConstraints={constraintRef}
                                    >
                                        <span className="font-medium text-gray-950">
                                            {hobby.title}
                                        </span>
                                        <span>{hobby.emoji}</span>
                                    </motion.div>
                                ))}
                            </div>
                        </Card>
                        <Card className="h-[320px] p-0 relative md:col-span-2 lg:col-span-1">
                            <Image
                                src={MapImage}
                                alt="Map"
                                className="h-full w-full object-cover"
                            />
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 size-20 rounded-full after:content-[''] after:absolute after:inset-0 after:outline after:outline-2 after:-outline-offset-2 after:rounded-full after:outline-gray-950/30">
                                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-emerald-300 to-sky-400 -z-20 animate-ping [animation-duration:2s]"></div>
                                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-emerald-300 to-sky-400 -z-10"></div>
                                <Image
                                    src={smileMemoji}
                                    alt="smile emoji"
                                    className="size-20"
                                />
                            </div>
                        </Card>
                    </div>
                </div>
            </div>
        </div>
    );
};
