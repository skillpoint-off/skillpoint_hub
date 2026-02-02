import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function BYOPRoadmap() {
    const wrapRef = useRef(null);
    const pathRef = useRef(null);

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

        const wrap = wrapRef.current;
        const path = pathRef.current;

        if (!wrap) return;

        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: wrap,
                start: "top 80%",
                once: true, // ✅ SAME RULE
            },
        });

        /* ================= SVG PATH DRAW ================= */
        if (path) {
            const len = path.getTotalLength();
            gsap.set(path, {
                strokeDasharray: len,
                strokeDashoffset: len,
            });

            tl.to(path, {
                strokeDashoffset: 0,
                duration: 4,
                ease: "power2.out",
            });
        }

        /* ================= DOTS + CARDS ================= */
        tl.to(
            ".roadmap-dot-start",
            { opacity: 1, scale: 1, duration: 0.4 },
            0.2
        )
            .to(
                ".roadmap-card",
                {
                    opacity: 1,
                    scale: 1,
                    x: 0,
                    stagger: 0.25,
                    duration: 0.6,
                    ease: "power2.out",
                },
                0.6
            )
            .to(
                ".roadmap-arrow",
                {
                    opacity: 1,
                    scale: 1,
                    stagger: 0.15,
                },
                0.8
            )
            .to(
                ".roadmap-dot-end",
                { opacity: 1, scale: 1, duration: 0.4 },
                "-=0.2"
            );

        return () => {
            ScrollTrigger.killAll(); // 🧹 cleanup
        };
    }, []);

    return (
        <div className="py-10 lg:py-15 lg:mx-15 md:mx-10 hidden md:block">
            <div
                ref={wrapRef}
                className="p-8 rounded-3xl bg-[#0F2E2E] border border-white/20"
            >
                <h2 className="text-white text-2xl font-light mb-2">
                    The <span className="font-medium">SkillPoint Learning Roadmap</span>
                </h2>
                <p className="text-white/80 mb-12 max-w-3xl">
                    A 3-month execution journey, powered by COIREI.SkillPoint’s roadmap
                    reflects how teams actually build AI and software systems.
                </p>

                <div className="roadmap-wrap grid grid-cols-12 grid-rows-8 relative">

                    {/* ================= SVG PATH ================= */}
                    <svg
                        className="absolute inset-0 w-full h-full pointer-events-none -top-3"
                        viewBox="0 0 1200 300"
                    >
                        <path
                            ref={pathRef}
                            d="M0 40 H1160 Q1200 40 1200 80 V140 Q1200 180 1160 180 H40 Q0 180 0 220 V280 H1200"
                            fill="none"
                            stroke="#6ED19066"
                            strokeWidth="3"
                            strokeLinecap="round"
                        />
                    </svg>

                    {/* START DOT */}
                    <div className="roadmap-dot-start col-start-1 row-start-2 w-4 h-4 bg-[#6ED190] rounded-full opacity-0 scale-0 z-20" />

                    {/* CARD 1 */}
                    <Card className="col-start-4 col-end-6 row-start-1 row-end-3"
                        title="Phase 01"
                        bg="linear-gradient(135deg,#8B3A2E,#C75C4A)">
                        Problem Understanding & Direction
                    </Card>
                    <Arrow className="col-start-3 row-start-2" />

                    {/* CARD 2 */}
                    <Card className="col-start-8 col-end-10 row-start-1 row-end-3"
                        title="Phase 02"
                        bg="linear-gradient(135deg,#1E7F86,#34C6D3)">
                        System Design & Technical Thinking
                    </Card>
                    <Arrow className="col-start-7 row-start-2" />

                    {/* CARD 3 */}
                    <Card className="col-start-10 col-end-12 row-start-4 row-end-6"
                        title="Phase 03"
                        bg="linear-gradient(135deg,#8B3A2E,#C75C4A)">
                        Build & Integrate Core Systems
                    </Card>
                    <Arrow className="col-start-9 row-start-5 rotate-180" />

                    {/* CARD 4 */}
                    <Card className="col-start-6 col-end-8 row-start-4 row-end-6"
                        title="Phase 04"
                        bg="linear-gradient(135deg,#3C4C8A,#5E6FD6)">
                        Iteration, Feedback & Improvement
                    </Card>
                    <Arrow className="col-start-5 row-start-5 rotate-180" />

                    {/* CARD 5 */}
                    <Card className="col-start-2 col-end-4 row-start-4 row-end-6"
                        title="Phase 05"
                        bg="linear-gradient(135deg,#1E7F86,#34C6D3)">
                        AI, Automation & Optimization
                    </Card>

                    {/* CARD 6 */}
                    <Card className="col-start-4 col-end-6 row-start-7 row-end-9"
                        title="Phase 06"
                        bg="linear-gradient(135deg,#3C4C8A,#5E6FD6)">
                        Delivery, Proof & Industry Readiness
                    </Card>

                    {/* CARD 7 */}
                    <Card className="col-start-8 col-end-10 row-start-7 row-end-9"
                        title="Phase 07"
                        bg="linear-gradient(135deg,#8B3A2E,#C75C4A)">
                        Mentorship & Professional Standards
                    </Card>

                    {/* END DOT */}
                    <div className="roadmap-dot-end col-start-12 row-start-7 w-4 h-4 bg-[#6ED190] rounded-full opacity-0 scale-0 z-20" />
                </div>
            </div>
        </div>
    );
}

/* ================= REUSABLE COMPONENTS ================= */

function Card({ title, bg, children, className }) {
    return (
        <div
            className={`roadmap-card opacity-0 scale-90 z-20 p-5 rounded-3xl text-xs border border-white/20 ${className}`}
            style={{ background: bg }}
        >
            <div className="font-medium mb-2">{title}</div>
            {children}
        </div>
    );
}

function Arrow({ className }) {
    return (
        <div className={`roadmap-arrow opacity-0 scale-75 z-20 ${className}`}>
            <svg width="16" height="16" viewBox="0 0 16 16" fill="#6ED190">
                <path d="M14 8L2 14V2L14 8Z" />
            </svg>
        </div>
    );
}
