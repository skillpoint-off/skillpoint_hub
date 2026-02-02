import calendarIcon from "../../../assets/images/calendar.png";
import calendarIconMobile from "../../../assets/images/calendar-1.svg";
import securityTimeIcon from "../../../assets/images/security-time.png";
import securityTimeIconMobile from "../../../assets/images/security-time.svg";
import calendarTickIcon from "../../../assets/images/calendar-tick.png";
import calendarTickIconMobile from "../../../assets/images/calendar-tick.svg";

import desktopBg from "../../../assets/images/learning-banner.svg";
import mobileBg from "../../../assets/images/outcome-mobile.png";
import Union from "../../../assets/images/Union.png";

// ------------------------------------
// DATA
// ------------------------------------
const pills = [
    {
        label: "Real projects",
        desktopIcon: calendarIcon,
        mobileIcon: calendarIconMobile,
    },
    {
        label: "Design-first",
        desktopIcon: securityTimeIcon,
        mobileIcon: securityTimeIconMobile,
    },
    {
        label: "Outcome-backward",
        desktopIcon: calendarTickIcon,
        mobileIcon: calendarTickIconMobile,
    },
];

const cards = [
    {
        id: 1,
        title: (
            <>
                Strong Engineering {" "}
                <span className="text-[#6ED190] font-bold"> Foundations</span>
            </>
        ),
        desc:
            "Both programs start by building core engineering fundamentals that apply across AI and software systems.",
    },
    {
        id: 2,
        title: (
            <>
                Build-First {" "}
                <span className="text-[#6ED190] font-bold">Learning</span>
            </>
        ),
        desc:
            "At SkillPoint, learning happens through continuous building, not passive instruction.",
    },
    {
        id: 3,
        title: (
            <>
                AI-Native & System-Oriented {" "}
                <span className="text-[#6ED190] font-bold">
                    Thinking
                </span>
            </>
        ),
        desc:
            "Think in terms of automation, efficiency, and scale. This is how COIREI applies AI in real- world software and product development.",
    },
    {
        id: 4,
        title: (
            <>
                Real-World {" "}
                <span className="text-[#6ED190] font-bold">
                    Problem Solving
                </span>
            </>
        ),
        desc:
            "Both courses emphasize industry-style problem statements, not pre-defined textbook exercises.",
    },
    {
        id: 5,
        title: (
            <>
                Builder Mindset {" "}
                <span className="text-[#6ED190] font-bold">Curriculum</span>
            </>
        ),
        desc:
            "SkillPoint trains students to operate with Ownership over their work, Accountability for outcomes, Comfort with responsibility and feedback.",
    },
    {
        id: 6,
        title: (
            <>
                Industry Readiness {" "}
                <span className="text-[#6ED190] font-bold">&amp; Career Alignment</span>
            </>
        ),
        desc:
            "The final outcome of both programs is industry readiness, not just completion.SkillPoint works because it is built on COIREI’s real execution experience, not assumptions.",
    },
];

// ------------------------------------
// COMPONENT
// ------------------------------------
const ProgramJourney = () => {
    return (
        <section id="outcomes" className="lg:mx-15 md:mx-10 mx-5 py-10 text-white">
            {/* ================= BANNER ================= */}
            <div className="rounded-3xl overflow-hidden relative">
                {/* Desktop */}
                <div
                    className="hidden lg:block bg-cover bg-top "
                    style={{ backgroundImage: `url(${desktopBg})` }}
                >
                    <div className="px-12 py-16">
                        <div className="max-w-xl">
                            <p className="text-white/80 text-sm mb-3">
                                The 3-month journey
                            </p>

                            <h2 className="text-2xl mb-6">
                                How do these{" "}
                                <span className="font-medium">3 months unfold?</span>
                            </h2>

                            <div className="flex gap-3 flex-wrap">
                                {pills.map((pill, i) => (
                                    <div
                                        key={i}
                                        className="flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/40
                    bg-gradient-to-r from-[#112121cc] to-[#6ED190cc]"
                                    >
                                        <span className="bg-[#6ED190] p-1 rounded-full">
                                            <img
                                                src={pill.desktopIcon}
                                                alt={pill.label}
                                                className="w-4 h-4"
                                            />
                                        </span>
                                        <span className="text-sm font-bold">
                                            {pill.label}
                                        </span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                {/* Mobile */}
                <div
                    className="lg:hidden h-[450px] bg-cover bg-bottom flex flex-col justify-end"
                    style={{ backgroundImage: `url(${mobileBg})` }}
                >
                    <div className="px-5 pb-6">
                        <p className="text-white/80 text-sm mb-2">
                            The 12-month journey
                        </p>

                        <h2 className="text-xl mb-4">
                            How do these{" "}
                            <span className="font-medium">12 months unfold?</span>
                        </h2>

                        <div className="flex gap-2 flex-wrap">
                            {pills.map((pill, i) => (
                                <div
                                    key={i}
                                    className="flex items-center gap-2 px-3 py-1 rounded-full border border-white/40
                  bg-gradient-to-r from-[#112121cc] to-[#6ED190cc]"
                                >
                                    <img
                                        src={pill.mobileIcon}
                                        alt={pill.label}
                                        className="w-4 h-4"
                                    />
                                    <span className="text-sm font-light">
                                        {pill.label}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* ================= CARDS ================= */}
            <div
                className="mt-6 grid gap-4 lg:grid-cols-3
        max-lg:grid-flow-col max-lg:auto-cols-[75vw]
        max-lg:overflow-x-auto max-lg:pb-4"
            >
                {cards.map((card) => (
                    <div
                        key={card.id}
                        className="bg-[#1F4E39] rounded-3xl p-8 relative"
                    >
                        {/* Number badge */}
                        <div className="absolute top-4 right-4 w-12 h-12 flex items-center justify-center">
                            <img
                                src={Union}
                                alt=""
                                className="absolute inset-0 w-full h-full object-contain opacity-80"
                            />
                            <span className="relative z-10 text-[#23894F] font-bold text-4xl">
                                {card.id}
                            </span>
                        </div>

                        <h3 className="text-lg mb-2 pr-12">
                            {card.title}
                        </h3>

                        <p className="text-white/80 text-sm leading-relaxed">
                            {card.desc}
                        </p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default ProgramJourney;
