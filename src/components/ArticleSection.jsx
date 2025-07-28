import React from "react";

export default function ArticleSection() {
    return (
        <section id="product" className="bg-white py-20">
            <div className="container mx-auto flex flex-col md:flex-row items-center gap-10 px-6">
                <div className="flex-1">
                    <img src="/assets/articleImage.png" alt="Article illustration" className="max-w-sm mx-auto" />
                </div>

                <div className="flex-1 text-center md:text-left">
                    <h2 className="text-gray-700 text-4xl font-medium mb-4 md:mr-10">
                        How to design your site footer like we did
                    </h2>
                    <p className="text-gray-500 text-sm font-light mb-6 leading-relaxed md:mr-10">
                        Donec a eros justo. Fusce egestas tristique ultrices. Nam tempor, augue nec tincidunt molestie, massa nunc varius arcu, at scelerisque elit erat a magna. Donec quis erat at libero ultrices mollis. In hac habitasse platea dictumst. Vivamus vehicula leo dui, at porta nisi facilisis finibus.
                    </p>
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