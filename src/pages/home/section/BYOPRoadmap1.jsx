import { useEffect, useState } from "react";
import {
    LocationTick,
    Box,
    Global,
    TrendUp,
} from "iconsax-react";

const steps = [
    {
        title: "Identify a Product",
        desc: "Find a real customer problem and choose a product category.",
        icon: LocationTick,
    },
    {
        title: "Source & Manage Inventory",
        desc: "Work with suppliers, negotiate margins, and handle stock.",
        icon: Box,
    },
    {
        title: "Build an Online Presence",
        desc: "Create your website, social media, and marketplace profiles.",
        icon: Global,
    },
    {
        title: "Sell & Hit Revenue Targets",
        desc: "Sell online and at flea markets; earn 5L in revenue.",
        icon: TrendUp,
    },
];

const SalesTimeline1 = () => {
    const [activeStep, setActiveStep] = useState(0);

    // 🔥 Smooth + slow sequence
    useEffect(() => {
        if (activeStep < steps.length) {
            const timer = setTimeout(() => {
                setActiveStep((prev) => prev + 1);
            }, 1800); // slower & smooth
            return () => clearTimeout(timer);
        }
    }, [activeStep]);

    return (
        <section className="mx-5 md:mx-10 lg:mx-15 my-14">
            <div className="bg-[#0E2E2E] border border-white/20 rounded-3xl p-6 lg:p-10">

                {/* TITLE */}
                <h2 className="text-white text-xl lg:text-2xl font-light mb-14">
                    Build Your Own Business:{" "}
                    <span className="font-medium">
                        Learn Sales by Doing Sales
                    </span>
                </h2>

                {/* ================= DESKTOP ================= */}
                <div className="hidden lg:block relative">

                    {/* BASE LINE */}
                    <div className="absolute top-[38px] left-0 w-full h-[4px] bg-[#6ED190]/30 rounded-full" />

                    {/* FILL LINE */}
                    <div
                        className="absolute top-[38px] left-0 h-[4px] bg-[#D9E38A] rounded-full transition-all ease-in-out"
                        style={{
                            width: `${(activeStep / (steps.length - 1)) * 100}%`,
                            transitionDuration: "1600ms",
                        }}
                    />

                    {/* STEPS */}
                    <div className="grid grid-cols-4 gap-12 relative mt-20">
                        {steps.map((step, i) => {
                            const Icon = step.icon;
                            const isActive = i <= activeStep;

                            return (
                                <div key={i} className="relative">

                                    {/* MARKER */}
                                    <div
                                        className={`
                      w-16 h-16 rounded-full
                      flex items-center justify-center
                      transition-all duration-700
                      ${isActive
                                                ? "bg-[#D9E38A] scale-100"
                                                : "bg-white scale-90"}
                    `}
                                    >
                                        <Icon
                                            size="26"
                                            variant="Bold"
                                            color={isActive ? "#0E2E2E" : "#999"}
                                        />
                                    </div>

                                    {/* TEXT */}
                                    <div
                                        className={`
                      mt-6 transition-all duration-700 ease-out
                      ${isActive
                                                ? "opacity-100 translate-y-0"
                                                : "opacity-0 translate-y-6"}
                    `}
                                    >
                                        <h3 className="text-white text-lg mb-2">
                                            {step.title}
                                        </h3>
                                        <p className="text-white/80 text-sm leading-relaxed">
                                            {step.desc}
                                        </p>
                                    </div>

                                </div>
                            );
                        })}
                    </div>
                </div>

                {/* ================= MOBILE ================= */}
                <div className="lg:hidden flex flex-col gap-8">

                    {steps.map((step, i) => {
                        const Icon = step.icon;
                        const isActive = i <= activeStep;

                        return (
                            <div
                                key={i}
                                className={`
                  flex gap-4 items-start
                  transition-all duration-700
                  ${isActive ? "opacity-100" : "opacity-40"}
                `}
                            >
                                <div
                                    className={`
                    w-12 h-12 rounded-full
                    flex items-center justify-center
                    ${isActive ? "bg-[#D9E38A]" : "bg-white"}
                  `}
                                >
                                    <Icon
                                        size="22"
                                        variant="Bold"
                                        color="#0E2E2E"
                                    />
                                </div>

                                <div>
                                    <h3 className="text-white text-base mb-1">
                                        {step.title}
                                    </h3>
                                    <p className="text-white/80 text-sm">
                                        {step.desc}
                                    </p>
                                </div>
                            </div>
                        );
                    })}

                </div>

            </div>
        </section>
    );
};

export default SalesTimeline1;
