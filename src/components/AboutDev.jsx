import { Helmet } from "react-helmet";

const AboutDev = () => {
    return (
        <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-gray-100 via-blue-100 to-gray-100">
            <Helmet>
                <title>Gadget Heaven | About Me</title>
            </Helmet>

            {/* Card */}
            <div className="max-w-md mx-auto bg-white p-6 rounded-lg shadow-xl">
                <div className="text-center">
                    <h3 className="text-2xl font-bold text-blue-600 mb-4">About Me</h3>
                    
                    {/* Introduction */}
                    <section className="mb-4">
                        <p className="text-gray-700">
                            I’m **MD Fahad Mia**, a passionate **Web Developer** and **CSE student at Metropolitan University Bangladesh**, eager to learn and build innovative solutions.
                        </p>
                    </section>

                    {/* Skills */}
                    <section className="mb-4">
                        <h4 className="text-lg font-semibold text-blue-500">Skills</h4>
                        <p className="text-gray-700">
                            Proficient in **HTML, CSS, JavaScript, React**, and responsive design using **Tailwind CSS**.
                        </p>
                    </section>

                    {/* Projects */}
                    <section>
                        <h4 className="text-lg font-semibold text-blue-500">Recent Projects</h4>
                        <ul className="list-disc list-inside text-gray-700">
                            <li>**Peddy**: A pet adoption platform with dynamic features.</li>
                            <li>**BPL-DREAM 11**: A React app for managing cricket teams.</li>
                            <li>**Gadget Heaven**: Showcasing cutting-edge tech and innovation.</li>
                        </ul>
                    </section>
                </div>
            </div>
        </div>
    );
};

export default AboutDev;
