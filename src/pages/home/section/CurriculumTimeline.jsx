import { useState } from "react";

/* ===================== DATA ===================== */

const TERMS = ["Term 1", "Term 2", "Term 3", "Term 4", "Term 5", "Term 6"];

const tracks = [
    {
        key: "inclass",
        label: "In-class program",
        labelBg: "from-[#0E3A2A] to-[#081B16]",
        items: [
            {
                title: "Foundations: Core MBA 101",
                start: 1,
                span: 3,
                row: 1,
                color: "from-[#7F4F47] to-[#6F1E10]",
            },
            {
                title: "Foundations: Electives",
                start: 4,
                span: 3,
                row: 2,
                color: "from-[#2A3666] to-[#546CCC]",
            },
            {
                title: "Career Minors / Specialization",
                start: 2,
                span: 4,
                row: 3,
                color: "from-[#18666D] to-[#2EC4D3]",
            },
            {
                title: "Startup Essential 101",
                start: 1,
                span: 3,
                row: 4,
                color: "from-[#1A6644] to-[#20A76A]",
            },
        ],
    },
    {
        key: "onclass",
        label: "Onclass program",
        labelBg: "from-[#3A1A14] to-[#1A0B08]",
        items: [
            {
                title: "BYOB (OOC Sales)",
                start: 1,
                span: 1,
                row: 1,
                color: "from-[#7F4F47] to-[#6F1E10]",
            },
            {
                title: "BYOB – Learn AI by Building",
                start: 1,
                span: 2,
                row: 2,
                color: "from-[#2A3666] to-[#546CCC]",
            },
            {
                title: "Capstone BSL – Business Strategy Lab",
                start: 2,
                span: 3,
                row: 3,
                color: "from-[#18666D] to-[#2EC4D3]",
            },
            {
                title: "MSL – Mesa Startup Lab – Building Startup",
                start: 2,
                span: 5,
                row: 4,
                color: "from-[#1A6644] to-[#20A76A]",
            },
        ],
    },
    {
        key: "career",
        label: "Career readiness",
        labelBg: "from-[#0E3A3A] to-[#071A1A]",
        items: [
            {
                title: "Career up-skilling workshops",
                start: 2,
                span: 4,
                row: 1,
                color: "from-[#7F4F47] to-[#6F1E10]",
            },
            {
                title: "Full Time Internship",
                start: 4,
                span: 3,
                row: 2,
                color: "from-[#2A3666] to-[#546CCC]",
            },
            {
                title: "1:1 Mentorship / Resume / Interview Prep / Case Studies",
                start: 3,
                span: 3,
                row: 3,
                color: "from-[#18666D] to-[#2EC4D3]",
            },
            {
                title: "Full Time Job Interviews",
                start: 4,
                span: 3,
                row: 4,
                color: "from-[#1A6644] to-[#20A76A]",
            },
        ],
    },
    {
        key: "life",
        label: "Student life",
        labelBg: "from-[#062C2C] to-[#041818]",
        items: [
            {
                title: "Student Cultural Activities",
                start: 1,
                span: 4,
                row: 1,
                color: "from-[#7F4F47] to-[#6F1E10]",
            },
        ],
    },
];

/* ===================== COMPONENT ===================== */

export default function CurriculumTimeline() {
    const [activeTerm, setActiveTerm] = useState(0);
    const [openTrack, setOpenTrack] = useState({});

    const toggleTrack = (key) =>
        setOpenTrack((p) => ({ ...p, [key]: !p[key] }));

    return (
        <section className="text-white py-10 lg:py-20 lg:mx-16 md:mx-10 mx-5">

            {/* ================= DESKTOP VIEW ================= */}
            <div className="hidden lg:block rounded-3xl p-4 overflow-x-auto border border-white/20
        bg-[radial-gradient(120%_120%_at_50%_-20%,rgba(110,209,144,0.18),rgba(7,20,20,0.95))]">

                <div className="min-w-[1100px]">

                    {/* Term Headers */}
                    <div className="grid grid-cols-[220px_repeat(6,1fr)] gap-2 mb-4">
                        <div />
                        {TERMS.map((term) => (
                            <div
                                key={term}
                                className="rounded-xl text-center text-sm py-2
                bg-gradient-to-r from-[#1C3D32] to-[#0E2A22]
                border border-white/10 shadow-inner"
                            >
                                {term}
                            </div>
                        ))}
                    </div>

                    {/* Tracks */}
                    {tracks.map((track) => (
                        <div
                            key={track.key}
                            className="grid grid-cols-[220px_repeat(6,1fr)] gap-2 mb-3"
                        >
                            {/* Track Label */}
                            <div
                                className={`rounded-xl flex items-center justify-center text-sm
                bg-gradient-to-br ${track.labelBg}
                border border-white/10 shadow-inner`}
                            >
                                {track.label}
                            </div>

                            {/* Bars */}
                            <div className="relative col-span-6 grid grid-cols-6 gap-2">
                                {track.items.map((c, i) => (
                                    <div
                                        key={i}
                                        style={{
                                            gridColumn: `${c.start} / span ${c.span}`,
                                            gridRow: c.row,
                                        }}
                                        className={`rounded-xl px-4 py-2 text-xs text-center
                    bg-gradient-to-r ${c.color}
                    border border-white/20
                    shadow-[0_0_0_1px_rgba(255,255,255,0.05)]`}
                                    >
                                        {c.title}
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* ================= MOBILE VIEW ================= */}
            <div className="lg:hidden mt-6 rounded-3xl border border-white/20 p-5
        bg-gradient-to-b from-[#0E2A22] to-[#071414]">

                {/* Term Tabs */}
                <div className="flex gap-2 overflow-x-auto mb-4">
                    {TERMS.map((t, i) => (
                        <button
                            key={t}
                            onClick={() => setActiveTerm(i)}
                            className={`px-3 py-2 rounded-xl text-sm whitespace-nowrap
              ${activeTerm === i
                                    ? "bg-[#11603B] text-[#D9E38A]"
                                    : "bg-white/10"
                                }`}
                        >
                            {t}
                        </button>
                    ))}
                </div>

                {/* Accordion */}
                <div className="space-y-2">
                    {tracks.map((track) => (
                        <div
                            key={track.key}
                            className="rounded-xl border border-white/10 overflow-hidden"
                        >
                            <button
                                onClick={() => toggleTrack(track.key)}
                                className={`w-full flex justify-between items-center px-4 py-3
                bg-gradient-to-r ${track.labelBg}`}
                            >
                                <span>{track.label}</span>
                                <span
                                    className={`transition-transform ${openTrack[track.key] ? "rotate-180" : ""
                                        }`}
                                >
                                    ▼
                                </span>
                            </button>

                            {openTrack[track.key] && (
                                <div className="p-3 space-y-2 bg-black/40">
                                    {track.items.map((i, idx) => (
                                        <div key={idx} className="text-sm text-white/80">
                                            • {i.title}
                                        </div>
                                    ))}
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>

        </section>
    );
}
