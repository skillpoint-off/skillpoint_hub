import { useState } from "react";
import { ArrowRight } from "lucide-react";
import Insta from "../../assets/images/Instagram.png"
import Youtube from "../../assets/images/youtube.png"
import Linkedin from "../../assets/images/Linkedin.png"



const ContactUs = () => {
    const [form, setForm] = useState({
        name: "",
        email: "",
        phone: "",
        message: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;

        // Allow only numbers for phone
        if (name === "phone") {
            if (!/^\d*$/.test(value)) return;
        }

        setForm({ ...form, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(form);
    };

    return (
        <section className=" py-30 bg-[#0b1514] text-white flex items-center justify-center px-6">
            <div className="w-full max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-12">

                {/* LEFT CONTENT */}
                <div>
                    <h1 className="text-4xl md:text-5xl font-semibold leading-tight mt-0 md:mt-20">
                        Let’s <span className="text-[#6ED190]">talk</span>
                    </h1>

                    <p className="mt-4 text-gray-400 max-w-md mb-5 md:mb-30">
                        Have questions about our programs, curriculum, or admissions?
                        Drop us a message our team will get back to you.
                    </p>

                    <div className="text-center lg:text-left space-y-2">

                        <h3 className="text-2xl font-serif mb-4">
                            Contact Us
                        </h3>
                        <div className="">
                            <a href="tel:+919789710659" className="hover:underline">
                                Ph No: +91 97897 10659
                            </a>
                        </div>
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
                </div>

                {/* FORM */}
                <div className="relative">
                    <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[#6ED190]/30 to-[#1fd1c1]/20 "></div>

                    <form
                        onSubmit={handleSubmit}
                        className="relative bg-[#0f1d1b]/80 backdrop-blur-xl border border-white/10 rounded-2xl p-8 space-y-6"
                    >
                        <div>
                            <label className="text-sm text-gray-400">Your Name</label>
                            <input
                                type="text"
                                name="name"
                                value={form.name}
                                onChange={handleChange}
                                placeholder="Fullname"
                                className="mt-2 w-full bg-transparent border border-white/15 rounded-lg px-4 py-3 outline-none focus:border-[#6ED190]"
                            />
                        </div>

                        <div>
                            <label className="text-sm text-gray-400">Email Address</label>
                            <input
                                type="email"
                                name="email"
                                value={form.email}
                                onChange={handleChange}
                                placeholder="Email"
                                className="mt-2 w-full bg-transparent border border-white/15 rounded-lg px-4 py-3 outline-none focus:border-[#6ED190]"
                            />
                        </div>
                        <div>
                            <label className="text-sm text-gray-400">Mobile Number</label>
                            <input
                                type="tel"
                                name="phone"
                                value={form.phone}
                                onChange={handleChange}
                                maxLength={10}
                                placeholder="Mobile number"
                                className="mt-2 w-full bg-transparent border border-white/15 rounded-lg px-4 py-3 outline-none focus:border-[#6ED190]"
                            />
                        </div>

                        <div>
                            <label className="text-sm text-gray-400">Message</label>
                            <textarea
                                name="message"
                                rows="4"
                                value={form.message}
                                onChange={handleChange}
                                placeholder="Tell us what you’re looking for..."
                                className="mt-2 w-full bg-transparent border border-white/15 rounded-lg px-4 py-3 outline-none focus:border-[#6ED190] required"
                            ></textarea>
                        </div>

                        <button
                            type="submit"
                            className=" mt-8 inline-flex items-center justify-center gap-3 bg-[#d9e38a] text-[#0b1818] px-8 py-4 rounded-2xl text-sm font-semibold uppercase hover:bg-[#436b56] hover:text-white transition w-full lg:w-full cursor-pointer"
                        >
                            Send Message
                        </button>


                    </form>
                </div>
            </div>
        </section>
    );
};

export default ContactUs;
