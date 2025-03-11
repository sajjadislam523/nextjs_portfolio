import grainImage from "@/assets/images/grain.jpg";
import ContactFrom from "@/components/ContactFrom";

export const ContactSection = () => {
    return (
        <div className="py-16 pt-12 lg:py-24 lg:pt-20">
            <div className="container">
                <div className="bg-gradient-to-r from-emerald-300 to-sky-400 text-gray-900 py-8 px-10 rounded-3xl text-center relative overflow-hidden z-0 md:text-left">
                    <div
                        className="absolute inset-0 opacity-5 -z-10"
                        style={{
                            backgroundImage: `url(${grainImage.src})`,
                        }}
                    ></div>
                    <div className="flex flex-col gap-8 md:gap-16 items-center">
                        <div className="">
                            <h2 className="font-serif text-2xl md:text-3xl">
                                Let&apos;s create something amazing together
                            </h2>
                            <p className="text-sm md:text-base mt-2">
                                Ready to bring your next project to life?
                                Let&apos;s connect and discuss how I can achieve
                                your goals.
                            </p>
                        </div>
                        <div className="w-full md:px-10">
                            <ContactFrom />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
