import teacherIcon from "../../../assets/images/teacher-2.svg";
import clockIcon from "../../../assets/images/clock.svg";
import bookIcon from "../../../assets/images/book.svg";
import awardIcon from "../../../assets/images/award-3.svg";

import desktopBg from "../../../assets/images/Frame-3-scaled.webp";
import mobileBg from "../../../assets/images/CB-Banner-mobile.webp";
import { ArrowRight } from "lucide-react";

const cards = [
    {
        icon: teacherIcon,
        title: "Global B-school rigour",
        desc: "Core concepts rebuilt for India’s startup ecosystem",
    },
    {
        icon: clockIcon,
        title: "Startup Finance & Eco",
        desc: "Venture math, unit economics & P&L thinking",
    },
    {
        icon: bookIcon,
        title: "Modern Marketing & Growth",
        desc: "Digital-first, D2C, SaaS & growth experiments",
    },
    {
        icon: awardIcon,
        title: "Ops, Supply Chain & Analytics",
        desc: "Design lean processes and supply chains",
    },
];

const NewAgeAcademics = () => {
    return (
        <section className="mx-5 md:mx-10 lg:mx-15 mb-9">
            <div className="relative rounded-3xl overflow-hidden">

                {/* ✅ DESKTOP BACKGROUND */}
                <div
                    className="hidden lg:block absolute inset-0 bg-cover bg-center"
                    style={{ backgroundImage: `url(${desktopBg})` }}
                />

                {/* ✅ MOBILE BACKGROUND */}
                <div
                    className="block lg:hidden absolute inset-0 bg-cover bg-top"
                    style={{ backgroundImage: `url(${mobileBg})` }}
                />

                {/* CONTENT */}
                <div className="relative z-10 py-12 lg:py-16">
                    <div className="lg:pl-[30%] lg:pr-12">

                        {/* HEADER */}
                        <div className="border-l border-[#81A093] pl-4 mb-8 max-w-lg">
                            <p className="text-sm text-white/80 mb-3">
                                New age Academics
                            </p>
                            <h2 className="text-xl lg:text-2xl text-white font-light leading-snug">
                                <span className="font-medium">
                                    Business Fundamentals,
                                </span>{" "}
                                Rebuilt for Startups
                            </h2>
                        </div>

                        {/* CARDS – MOBILE SCROLL */}
                        <div
                            className="
                flex flex-nowrap gap-4 overflow-x-auto px-5 pb-4
                snap-x snap-mandatory scroll-smooth no-scrollbar

                lg:grid lg:grid-cols-4 lg:gap-4 lg:overflow-visible
              "
                        >
                            {cards.map((card, i) => (
                                <div
                                    key={i}
                                    className="
                    bg-[rgba(35,89,63,0.85)]
                    backdrop-blur-[17px]
                    rounded-[20px]
                    p-4
                    flex flex-col gap-2

                    w-[78vw]
                    flex-shrink-0
                    snap-start

                    lg:w-auto
                  "
                                >
                                    <img
                                        src={card.icon}
                                        alt={card.title}
                                        className="w-6 h-6"
                                        loading="lazy"
                                    />

                                    <div className="text-[#6ED190] text-sm font-bold capitalize">
                                        {card.title}
                                    </div>

                                    <p className="text-white/80 text-sm leading-[1.4]">
                                        {card.desc}
                                    </p>
                                </div>
                            ))}
                        </div>

                        {/* CTA */}
                        <div className="px-5 mt-4">
                            <a
                                href="#"
                                className="
                  w-full lg:w-fit flex  gap-2.5 items-center justify-between bg-[#d9e38a] text-[#0b1818]  hover:bg-[#436b56] hover:text-white
                  transition
                  px-8 py-4
                  rounded-2xl
                  text-sm uppercase font-medium
                "
                            >
                                <span>Know More</span>
                                <ArrowRight size={20} />
                            </a>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
};

export default NewAgeAcademics;
