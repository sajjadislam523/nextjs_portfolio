import type { Metadata } from "next";
import { Calistoga, Inter } from "next/font/google";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { twMerge } from "tailwind-merge";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });
const calistoga = Calistoga({
    subsets: ["latin"],
    variable: "--font-serif",
    weight: ["400"],
});

export const metadata: Metadata = {
    title: "Sajjad | Portfolio",
    description:
        "Explore my professional portfolio, showcasing innovative web design and high-performing digital applications. Discover creative solutions and technical expertise in crafting exceptional user experiences.",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body
                className={twMerge(
                    inter.variable,
                    calistoga.variable,
                    "bg-gray-900 text-white antialiased font-sans"
                )}
            >
                {children}
                <ToastContainer
                    position="top-right"
                    autoClose={5000}
                    hideProgressBar={false}
                    newestOnTop={false}
                    closeOnClick
                    pauseOnFocusLoss
                    draggable
                    pauseOnHover
                />
            </body>
        </html>
    );
}
