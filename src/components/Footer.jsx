import Insta from "../assets/images/Instagram.png"
import Youtube from "../assets/images/youtube.png"
import Linkedin from "../assets/images/Linkedin.png"
import Logo from "../assets/images/skillpoint.svg"


const Footer = () => {
    return (
        <footer className="bg-[#06261b] text-white">
            {/* Top Section */}
            <div className="max-w-7xl mx-auto px-6 py-14">
                <div className="flex flex-col lg:flex-row justify-between gap-12">

                    {/* Left : Address */}
                    <div className="max-w-sm text-sm leading-relaxed hidden md:block">
                        <img
                            src={Logo}
                            alt="Skillpoint"
                            className="w-[90px] mb-4"
                        />

                        {/* <p>
                            Wework, Salarpuria Symbiosis Road,<br />
                            Bannerghatta Road, Begur Hobli,<br />   
                            Bengaluru Urban,<br />
                            Karnataka, 560076.
                        </p> */}

                        <p className="mt-4">
                            <a href="tel:+919789710659" className="hover:underline">
                                Ph No: +91 97897 10659
                            </a>
                            <br />
                            {/* <span>CIN: U80904KA2022PTC168903</span> */}
                        </p>
                    </div>

                    {/* Center : Contact */}
                    <div className="text-center lg:text-left">
                        <h3 className="text-2xl font-serif mb-4">
                            Contact Us
                        </h3>

                        <a
                            href="mailto:info@skillpoint.com"
                            className="block mb-6 hover:underline"
                        >
                            info@skillpoint.com
                        </a>

                        <div className="flex justify-center lg:justify-start gap-4">
                            <a href="https://www.instagram.com/skillpoint.in" target="_blank">
                                <img
                                    src={Insta}
                                    className="w-9"
                                    alt="Instagram"
                                />
                            </a>
                            <a href="https://www.youtube.com/" target="_blank">
                                <img
                                    src={Youtube}
                                    className="w-9"
                                    alt="YouTube"
                                />
                            </a>
                            <a
                                href="https://www.linkedin.com/company/skillpoint-learning/"
                                target="_blank"
                            >
                                <img
                                    src={Linkedin}
                                    className="w-9"
                                    alt="LinkedIn"
                                />
                            </a>
                        </div>
                    </div>

                    {/* Right : Quick Links */}
                    <div>
                        <h3 className="text-xl italic mb-4">
                            Quick Links
                        </h3>
                        <ul className="space-y-2 text-sm">
                            <li>
                                <a href="/" className="hover:text-[#6ED190]">
                                    Home
                                </a>
                            </li>
                            <li>
                                <a href="#" className="hover:text-[#6ED190]">
                                    Learning
                                </a>
                            </li>
                           
                            <li>
                                <a href="/outcomes/" className="hover:text-[#6ED190]">
                                    Outcomes
                                </a>
                            </li>
                            <li>
                                <a href="#" className="hover:text-[#6ED190]">
                                   Contact us
                                </a>
                            </li>
                        </ul>
                    </div>

                </div>
            </div>

            {/* Bottom Bar */}
            <div className="border-t border-[#858585]">
                <div className="max-w-7xl mx-auto px-6 py-4 flex flex-col lg:flex-row justify-between gap-4 text-sm">
                    <p>© 2025 Skillpoint Advanced Learning hub</p>

                    <div className="flex gap-6">
                        <a
                            href="/terms-of-use"
                            className="text-[#6ED190] hover:underline"
                        >
                            Terms of use
                        </a>
                        <a
                            href="/privacy-policy"
                            className="text-[#6ED190] hover:underline"
                        >
                            Privacy policy
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
