import React from "react";

export default function AboutSection() {
    return (
        <section id="feature" className="bg-white py-5">
            <div className="container mx-auto flex flex-col md:flex-row items-center gap-6 px-6">
                <div className="flex-1">
                    <img src="/assets/about-image.svg" alt="About" className="w-full max-w-md mx-auto" />
                </div>

                <div className="flex-1 text-center md:text-left">
                    <h2 className="text-gray-600 text-4xl font-semibold mb-6 mr-10">
                        The unseen of spending three years at Pixelgrade
                    </h2>
                    <p className="text-gray-500 text-sm font-light mb-6 leading-relaxed mr-10">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet justo ipsum. Sed accumsan quam vitae est varius fringilla. Pellentesque placerat vestibulum lorem sed porta. Nullam mattis tristique iaculis. Nullam pulvinar sit amet risus pretium auctor. Etiam quis massa pulvinar, aliquam quam vitae, tempus sem. Donec elementum pulvinar odio.                    </p>
                    <button
                        style={{ backgroundColor: '#4CAF4F' }}
                        className="text-white rounded-md px-6 py-3 font-light hover:bg-green-600 transition"
                    >
                        Learn More
                    </button>
                </div>
            </div>
        </section>
    );
}