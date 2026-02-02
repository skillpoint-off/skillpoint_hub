

const ToolsAndTechniques = ({ tools = [], techniques = [] }) => {
    return (
        <div className="h-full flex flex-col justify-center px-6 md:px-10 py-8 md:py-10">

            {/* TOOLS */}
            <h3 className="text-lg font-medium mb-6 text-white/80">
                Tools
            </h3>

            <div className="flex flex-wrap gap-4 md:gap-6 mb-12">
                {tools.map((tool, index) => (
                    <img
                        key={`tool-${index}`}
                        src={tool}
                        alt=""
                        loading="lazy"
                        className="max-h-8 md:max-h-10 transition-opacity duration-300"
                    />
                ))}
            </div>

            {/* TECHNIQUES */}
            <h3 className="text-lg font-medium mb-6 text-white/80">
                Techniques
            </h3>

            <div className="flex flex-wrap gap-8 md:gap-12">
                {techniques.map((technique, index) => (
                    <div
                        key={`technique-${index}`}
                        className="flex flex-col gap-2 max-w-[9rem] transition-opacity duration-300"
                    >
                        <div>
                            <img
                                src={technique.icon}
                                alt=""
                                loading="lazy"
                                className="w-5 h-5"
                            />
                        </div>

                        <p className="text-sm text-white/90 leading-snug">
                            {technique.text}
                        </p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ToolsAndTechniques;
