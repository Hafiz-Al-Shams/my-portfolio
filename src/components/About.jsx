


const About = () => {
    return (
        <div>
            <div className="pt-16 md:pt-20 pb-16 md:pb-20 bg-gray-900 text-white text-lg sm:text-xl">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                    <div className="w-full sm:w-3/4 md:w-2/3 lg:w-2/3">
                        <h2 className="text-3xl sm:text-4xl lg:text-4xl font-bold text-blue-400 mb-6 sm:mb-8 md:mb-10">About Me</h2>

                        {/* 1st block */}
                        <p className="text-base sm:text-lg text-gray-300 leading-normal sm:leading-relaxed"> {/* Adjusted text size & line height */}
                            👋 Hey, I’m <span className="text-blue-400 font-semibold">Hafiz</span>! I’m a passionate <strong>Junior Frontend Developer</strong> dedicated to crafting beautiful and efficient digital experiences.
                            My journey into coding started in 2022 when I realized how powerful the web can be in connecting people and ideas.
                            Since then, I’ve been improving my skills in <strong>HTML, CSS, JavaScript, React, Node.js, and MongoDB</strong>, striving to build interactive and performance-driven web applications.
                        </p>
                        <br />

                        {/* 2nd block */}
                        <p className="text-base sm:text-lg text-gray-300 leading-normal sm:leading-relaxed"> {/* Adjusted text size & line height */}
                            💡 I love working on <strong>responsive and user-friendly interfaces</strong>. The challenge of problem-solving and debugging excites me—it feels like solving a puzzle.
                            I also have a strong interest in <strong>backend development</strong>, ensuring that applications are both functional and scalable.
                        </p>
                        <br />

                        {/* 3rd block */}
                        <p className="text-base sm:text-lg text-gray-300 leading-normal sm:leading-relaxed"> {/* Adjusted text size & line height */}
                            🏀 When I’m not coding, you’ll find me <strong>reading self-improvement books, working out, or exploring new tech trends</strong>.
                            I’m a huge fan of <span className="text-blue-400 font-semibold">Cristiano Ronaldo</span>, and I believe in never giving up mentality.
                        </p>
                        <br />

                        {/* 4th block */}
                        <p className="text-base sm:text-lg text-gray-300 leading-normal sm:leading-relaxed"> {/* Adjusted text size & line height */}
                            🚀 My goal is to <strong>become a top-tier developer</strong>, continuously learning and refining my craft.
                            My ultimate dream is to contribute to cutting-edge projects that impact millions worldwide.
                        </p>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default About;