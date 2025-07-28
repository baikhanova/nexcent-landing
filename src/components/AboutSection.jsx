import React from "react";

export default function AboutSection() {
    return (
        <section id="feature" className="bg-white py-12">
            <div className="container mx-auto flex flex-col md:flex-row items-center gap-10 px-4 sm:px-6 lg:px-8">
                <div className="flex-1">
                    <img
                        src="/assets/about-image.svg"
                        alt="About"
                        className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg mx-auto"
                    />
                </div>

                <div className="flex-1 text-center md:text-left">
                    <h2 className="text-gray-600 text-3xl sm:text-4xl md:text-5xl font-semibold mb-6 leading-snug">
                        The unseen of spending <br className="hidden md:block" /> three years at Pixelgrade
                    </h2>
                    <p className="text-gray-500 text-sm sm:text-base font-light mb-6 leading-relaxed">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet justo ipsum. Sed accumsan quam vitae est varius fringilla. Pellentesque placerat vestibulum lorem sed porta. Nullam mattis tristique iaculis. Nullam pulvinar sit amet risus pretium auctor. Etiam quis massa pulvinar, aliquam quam vitae, tempus sem. Donec elementum pulvinar odio.
                    </p>
                    <button
                        style={{ backgroundColor: '#4CAF4F' }}
                        className="text-white rounded-md px-6 py-3 text-sm sm:text-base font-light hover:bg-green-600 transition"
                    >
                        Learn More
                    </button>
                </div>
            </div>
        </section>
    );
}