import FounderDesktop from "../../../assets/images/ctaImgNew.png";
import FounderBg from "../../../assets/images/ctaMobileNew.png";

import { ArrowRight } from "lucide-react";

const CTASection = () => {
    return (
        <section className="lg:mx-15 md:mx-10 ">
            <div
                className="
          relative overflow-hidden
          lg:rounded-[30px]
          text-white/80
          flex flex-col lg:flex-row
          min-h-[500px]
          bg-cover bg-no-repeat bg-right
        "
                style={{
                    backgroundImage: `url(${FounderDesktop})`,
                }}
            >
                {/* Mobile background */}
                <div
                    className="absolute inset-0 lg:hidden bg-cover bg-right"
                    style={{ backgroundImage: `url(${FounderBg})` }}
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-r from-[#183856] via-[#183856]/20 to-transparent " />

                {/* CONTENT */}
                <div className="relative z-10 lg:px-16 lg:py-18 p-5 max-w-[800px] 2xl:max-w-[55%] self-start">
                    <div className="flex flex-col gap-6">
                        <div className=" ">

                            <svg
                                className="w-[24px] lg:w-[38px]"
                                viewBox="0 0 38 36"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M37.2766 1.75236L36.4357 8.26864C34.3804 8.12851 32.7922 8.50221 31.6711 9.38973C30.5501 10.2773 29.8027 11.5151 29.429 13.1033C29.0553 14.6915 28.9852 16.4899 29.2188 18.4985H37.2766V35.3848H21.7916V17.0972C21.7916 11.5852 23.0996 7.42783 25.7154 4.62513C28.378 1.77572 32.2317 0.81813 37.2766 1.75236ZM15.6957 1.75236L14.8549 8.26864C12.7996 8.12851 11.2114 8.50221 10.0903 9.38973C8.96926 10.2773 8.22187 11.5151 7.84818 13.1033C7.47448 14.6915 7.40441 16.4899 7.63797 18.4985H15.6957V35.3848H0.210811V17.0972C0.210811 11.5852 1.51874 7.42783 4.13459 4.62513C6.79716 1.77572 10.6509 0.81813 15.6957 1.75236Z"
                                    fill="white"
                                    fillOpacity="0.3"
                                />
                            </svg>


                        </div>
                        {/* Text */}
                        <p className="lg:text-2xl text-sm leading-relaxed text-white/80 md:max-w-full max-w-[200px]">
                            <span className="font-medium">
                                Most colleges are built for exams, not careers.
                                In an industry-driven world, the most valuable skill is the ability to build, adapt, and execute.
                               
                            </span>{" "}
                            SkillPoint exists to train people who want to move from learning concepts to delivering real systems.If learning doesn’t lead to execution, it’s broken.
                        </p>

                        {/* Author */}
                        <div className="text-sm lg:text-base font-bold">
                            <span>- Harish Gunasekar</span>
                            <span className="font-light">| Founder, Skillpoint</span>
                        </div>

                  

                        {/* CTA */}
                        <a
                            href="/program-brochure.pdf"
                            download
                            className="  mt-8
                inline-flex items-center justify-between gap-3
                bg-[#d9e38a] text-[#0b1818]
                px-8 py-4 rounded-2xl
                text-sm font-semibold uppercase
                hover:bg-[#436b56] hover:text-white transition
                w-full lg:w-fit
              "
                        >
                            Learn More  <span><ArrowRight size={20} /></span>
                        </a>

                    </div>
                </div>
            </div>
        </section>
    );
};

export default CTASection;
