import ArrowDown from "@/assets/icons/arrow-down.svg";
import memojiImage from "@/assets/images/memoji-computer.png";
import Image from "next/image";

export const HeroSection = () => {
    return (
        <div className="py-32">
            <div className="container">
                <div className="flex flex-col items-center">
                    <Image
                        src={memojiImage}
                        className="size-[100px]"
                        alt="Person peeking from behind the laptop"
                    />
                    <div className="bg-gray-950 border border-gray-800 px-4 py-1.5 items-center gap-4 rounded-lg inline-flex">
                        <div className="bg-green-500 size-2.5 rounded-full"></div>
                        <div className="text-sm font-medium">
                            Available for new projects
                        </div>
                    </div>
                </div>
                <h1 className="font-serif text-3xl text-center mt-8 tracking-wide">
                    Building Exception User Experiences
                </h1>
                <p className="mt-4 text-center text-white/60">
                    I specialize in transforming designs into functional,
                    high-performing web applications. Let's discuss your next
                    project.
                </p>
                <div className="flex flex-col items-center">
                    <button className="inline-flex items-center gap-2 border border-white/15 px-6 h-12 rounded-xl">
                        <span>Explore My Work Here</span>
                        <ArrowDown className="size-4" />
                    </button>
                    <button>
                        <span>✌️</span>
                        <span>Let's Connect</span>
                    </button>
                </div>
            </div>
        </div>
    );
};
