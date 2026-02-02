import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function RoadmapV3() {
    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: ".roadmap-v3-wrapper",
                start: "top 80%",
                toggleActions: "play none none none",
            },
        });

        tl.to(".roadmap-path", {
            strokeDashoffset: 0,
            duration: 3,
            ease: "power2.out",
        })
            .to(".roadmap-dot-start", { opacity: 1, scale: 1, duration: 0.4 }, 0.2)
            .to(".card-1", { opacity: 1, x: 0, scale: 1, duration: 0.6 }, 0.6)
            .to(".arrow-1", { opacity: 1, scale: 1, duration: 0.3 }, 0.9)
            .to(".card-2", { opacity: 1, x: 0, scale: 1, duration: 0.6 }, 1.1)
            .to(".arrow-2", { opacity: 1, scale: 1, duration: 0.3 }, 1.5)
            .to(".card-3", { opacity: 1, x: 0, scale: 1, duration: 0.6 }, 1.9)
            .to(".arrow-3", { opacity: 1, scale: 1, duration: 0.3 }, 2.3)
            .to(".card-4", { opacity: 1, x: 0, scale: 1, duration: 0.6 }, 2.5)
            .to(".arrow-4", { opacity: 1, scale: 1, duration: 0.3 }, 2.9)
            .to(".card-5", { opacity: 1, x: 0, scale: 1, duration: 0.6 }, 3.1)
            .to(".roadmap-dot-end", { opacity: 1, scale: 1, duration: 0.4 }, 3.4);
    }, []);

    return (
        <div className="roadmap-v3-wrapper p-8 rounded-3xl bg-[#1B595933] border border-white/20 py-10 lg:py-15 lg:mx-15 md:mx-10 mb-20 hidden md:block">
            <div className="roadmap-wrap grid grid-cols-12 grid-rows-5 relative max-lg:flex max-lg:overflow-x-auto max-lg:gap-8">

                {/* SVG ZIGZAG LINE */}
                <svg
                    className="roadmap-svg absolute top-0 left-0 w-full h-full pointer-events-none  max-lg:hidden"
                    viewBox="-3 -3 1220 186"
                >
                    <path
                        className="roadmap-path"
                        d="M 0 0 L 1184 0 Q 1214 0, 1214 30 L 1214 150 Q 1214 180, 1184 180 L 0 180"
                        fill="none"
                        stroke="#8BC59F66"
                        strokeWidth="3"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        style={{
                            strokeDasharray: 2600,
                            strokeDashoffset: 2600,
                        }}
                    />
                </svg>

                {/* START DOT */}
                <div className=" roadmap-dot-start col-start-1 row-start-2 w-4 h-4 rounded-full bg-[#6ED190] relative -top-2 z-20 opacity-0 scale-0" />

                {/* CARD 1 */}
                <div className="card-1 roadmap-card col-start-4 col-end-6 row-start-1 row-end-3 px-5 py-4 rounded-3xl border border-white/20 text-[0.8rem] bg-[linear-gradient(107.79deg,_rgb(24,102,109)_17.47%,_rgb(46,196,211)_95.1%)] opacity-0 scale-90 -translate-x-5">
                    <div className="font-medium mb-2">Pitch your top three problem statements</div>
                    Shortlist the problems you want to work on.
                </div>

                {/* ARROW 1 */}
                <div className="arrow-1 roadmap-arrow col-start-3 row-start-2 opacity-0 scale-50">
                    ▶
                </div>

                {/* CARD 2 */}
                <div className="card-2 roadmap-card col-start-8 col-end-10 row-start-1 row-end-3 px-5 py-4 rounded-3xl border border-white/20 text-[0.8rem] bg-[linear-gradient(114.47deg,_rgb(42,54,102)_19.79%,_rgb(84,108,204)_90.11%)] opacity-0 scale-90 -translate-x-5">
                    <div className="font-medium mb-2">Team–problem matching</div>
                    Get assigned to a team and a live brief.
                </div>

                {/* ARROW 2 */}
                <div className="arrow-2 roadmap-arrow col-start-7 row-start-2 opacity-0 scale-50">
                    ▶
                </div>

                {/* CARD 3 */}
                <div className="card-3 roadmap-card col-start-2 col-end-4 row-start-4 row-end-6 px-5 py-4 rounded-3xl border border-white/20 text-[0.8rem] bg-[linear-gradient(121.03deg,_rgb(102,51,42)_31.22%,_rgb(204,101,84)_92.25%)] opacity-0 scale-90 translate-x-5">
                    <div className="font-medium mb-2">Iterative problem solving</div>
                    Research, test & refine with mentor check-ins.
                </div>

                {/* ARROW 3 */}
                <div className="arrow-3 roadmap-arrow col-start-5 row-start-5 rotate-180 opacity-0 scale-50">
                    ▶
                </div>

                {/* CARD 4 */}
                <div className="card-4 roadmap-card col-start-6 col-end-8 row-start-4 row-end-6 px-5 py-4 rounded-3xl border border-white/20 text-[0.8rem] bg-[linear-gradient(114.47deg,_rgb(42,54,102)_19.79%,_rgb(84,108,204)_90.11%)] opacity-0 scale-90 translate-x-5">
                    <div className="font-medium mb-2">Submit presentation & prep</div>
                    Finalize the deck and rehearse.
                </div>

                {/* ARROW 4 */}
                <div className="arrow-4 roadmap-arrow col-start-9 row-start-5 rotate-180 opacity-0 scale-50">
                    ▶
                </div>

                {/* CARD 5 */}
                <div className="card-5 roadmap-card col-start-10 col-end-12 row-start-4 row-end-6 px-5 py-4 rounded-3xl border border-white/20 text-[0.8rem] bg-[linear-gradient(107.79deg,_rgb(24,102,109)_17.47%,_rgb(46,196,211)_95.1%)] opacity-0 scale-90 translate-x-5">
                    <div className="font-medium mb-2">Present to startup leaders</div>
                    Share recommendations and next steps.
                </div>

                {/* END DOT */}
                <div className="roadmap-dot-end col-start-1 row-start-4 w-4 h-4 rounded-full bg-[#6ED190] relative top-2 z-20 opacity-0 scale-0" />
            </div>
        </div>
    );
}
