import { Helmet } from "react-helmet";

const AboutDev = () => {
    return (
        <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-gray-100 via-blue-100 to-gray-100">
            <Helmet>
                <title>Discount Pro | About Me</title>
            </Helmet>

            <div className="max-w-md mx-auto bg-white p-6 rounded-lg shadow-xl">
                <div className="text-center">
                    {/* Author's photo */}
                    <img
                        src="https://i.ibb.co/d2R1Twp/Neutral-Pink-Modern-Circle-Shape-Linked-In-Profile-Picture-1.png" // Replace with your photo URL
                        alt="MD Fahad Mia"
                        className="w-32 h-32 mx-auto rounded-full shadow-md mb-4"
                    />

                    <h3 className="text-2xl font-bold text-blue-600 mb-4">About Me</h3>

                    <section className="mb-4">
                        <p className="text-gray-700">
                            I’m <strong>MD Fahad Mia</strong>, a passionate <strong>Web Developer</strong> and <strong>CSE student at Metropolitan University Bangladesh</strong>, eager to learn and build innovative solutions.
                        </p>
                    </section>

                    <section className="mb-4">
                        <h4 className="text-lg font-semibold text-blue-500">Skills</h4>
                        <p className="text-gray-700">
                            Proficient in <strong>HTML, CSS, JavaScript, React</strong>, and responsive design using <strong>Tailwind CSS</strong>.
                        </p>
                    </section>

                    <section className="mb-4">
                        <h4 className="text-lg font-semibold text-blue-500">Recent Projects</h4>
                        <ul className="list-disc list-inside text-gray-700">
                            <li><strong>Peddy</strong>: A pet adoption platform with dynamic features.</li>
                            <li><strong>BPL-DREAM 11</strong>: A React app for managing cricket teams.</li>
                            <li><strong>Gadget Heaven</strong>: Showcasing cutting-edge tech and innovation.</li>
                        </ul>
                    </section>

                    {/* Hobbies Section */}
                    <section className="mb-4">
                        <h4 className="text-lg font-semibold text-blue-500">Hobbies</h4>
                        <p className="text-gray-700">
                            When I'm not coding, I enjoy <strong>reading tech blogs</strong>, <strong>exploring new gadgets</strong>, and <strong>working out at the gym</strong> to stay fit and focused.
                        </p>
                    </section>

                    {/* Contact Section */}
                    <section>
                        <h4 className="text-lg font-semibold text-blue-500">Contact Me</h4>
                        <div className="flex justify-center space-x-4 mt-2">
                            <a
                                href="https://www.linkedin.com/in/itzfahad/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-blue-600 hover:text-blue-800"
                            >
                                <i className="fab fa-linkedin text-xl"></i>
                            </a>
                            <a
                                href="https://github.com/MFAAHAD"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-gray-800 hover:text-gray-900"
                            >
                                <i className="fab fa-github text-xl"></i>
                            </a>
                            <a
                                href="mailto:fahadmusyl.com"
                                className="text-red-600 hover:text-red-800"
                            >
                                <i className="fas fa-envelope text-xl"></i>
                            </a>
                        </div>
                    </section>
                </div>
            </div>
        </div>
    );
};

export default AboutDev;
