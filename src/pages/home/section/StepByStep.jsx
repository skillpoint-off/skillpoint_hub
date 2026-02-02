import tenets1 from "../../../assets/images/tenets1.png";
import tenets2 from "../../../assets/images/tenets2.png";
import tenets3 from "../../../assets/images/tenets3.png";
import tenets4 from "../../../assets/images/tenets4.png";
import tenets5 from "../../../assets/images/tenets5.png";
import tenets6 from "../../../assets/images/tenets6.png";

const tenetsData = [
    {
        id: "01",
        image: tenets1,
        title: <>Learn Engineering, <span className="text-[#6ED190]"> the Industry Way</span></>,
        desc: "Build systems the way real teams do.Work on real problem statements, real constraints, and real expectations",
    },
    {
        id: "02",
        image: tenets2,
        title: <>Learn by Building, <span className="text-[#6ED190]"> Not Memorizing</span></>,
        desc: "From frontends to backend systems and software architectures, learning happens through continuous building.",
    },
    {
        id: "03",
        image: tenets3,
        title: <>Work Backwards <span className="text-[#6ED190]">from Career Outcomes</span></>,
        desc: "SkillPoint programs are designed by starting with industry roles, then reverse-engineering the skills required.",
    },
    {
        id: "04",
        image: tenets4,
        title: <>Design-First <span className="text-[#6ED190]">Thinking</span></>,
        desc: "AI is embedded into workflows, not treated as an add-on.",
    },
    {
        id: "05",
        image: tenets5,
        title: <>Builder <span className="text-[#6ED190]">Mindset</span></>,
        desc: "SkillPoint trains you to think like a builder, operator, and decision-maker.",
    },
    {
        id: "06",
        image: tenets6,
        title: <>Real <span className="text-[#6ED190]">Execution</span></>,
        desc: "Less theory, more shipping real work.",
    },
];
const StepByStep = () => {
    return (
        <section className="text-white py-14">
            <div className="lg:mx-15 md:mx-10 mx-5">

                {/* Title */}
                <h2 className="text-xl lg:text-2xl font-light mb-10">
                    <span>Tenets of Skillpoint Pedagogy: </span>
                    <span className="font-medium">
                        Industry-first. Build-driven. Outcome-oriented.
                    </span>
                </h2>

                {/* ================= ROW 1 ================= */}
                <div className="
          grid gap-6
          lg:grid-cols-3
          max-lg:grid-flow-col
          max-lg:auto-cols-[76vw]
          max-lg:overflow-x-auto
          max-lg:px-5
          max-lg:-mx-5
        ">
                    {tenetsData.slice(0, 3).map((item) => (
                        <TenetCard key={item.id} item={item} />
                    ))}
                </div>

                {/* ================= TEXT AFTER ROW 1 ================= */}
                <h2 className="text-xl lg:text-2xl font-light mt-16 mb-10">
                    <span>Post-Skillpoint Outcomes: </span>
                    <span className="font-medium">
                        The Careers Skillpoint Unlocks
                    </span>
                </h2>

                {/* ================= ROW 2 ================= */}
                <div className="
          grid gap-6
          lg:grid-cols-3
          max-lg:grid-flow-col
          max-lg:auto-cols-[76vw]
          max-lg:overflow-x-auto
          max-lg:px-5
          max-lg:-mx-5
        ">
                    {tenetsData.slice(3, 6).map((item) => (
                        <TenetCard key={item.id} item={item} />
                    ))}
                </div>

            </div>
        </section>
    );
};

export default StepByStep;
const TenetCard = ({ item }) => (
    <div className="h-full">
        <div className="rounded-3xl overflow-hidden bg-[#116A5766] h-full flex flex-col">

            <img
                src={item.image}
                alt=""
                className="w-full aspect-[3/2] object-cover"
            />

            <div className="flex gap-5 px-5 py-6 flex-1">
                <div className="w-[12%]">
                    <div className="text-[#6ED1904D] font-bold text-3xl">
                        {item.id}
                    </div>
                </div>

                <div>
                    <div className="font-medium mb-2">
                        {item.title}
                    </div>
                    <p className="text-sm text-white/80">
                        {item.desc}
                    </p>
                </div>
            </div>

        </div>
    </div>
);
