import React from "react";
import { ArrowRight } from "lucide-react";

const clientLogos = [
    { src: "/assets/client-logo-1.svg", alt: "Client 1" },
    { src: "/assets/client-logo-2.svg", alt: "Client 2" },
    { src: "/assets/client-logo-3.svg", alt: "Client 3" },
    { src: "/assets/client-logo-4.svg", alt: "Client 4" },
    { src: "/assets/client-logo-5.svg", alt: "Client 5" },
    { src: "/assets/client-logo-6.svg", alt: "Client 6" },
];

export default function CitationSection() {
    return (
        <section id="testimonial" className="bg-gray-100 py-10">
            <div className="container mx-auto flex flex-col md:flex-row items-center md:items-start gap-10 px-4 sm:px-6">
                <div className="w-full md:w-1/3 flex justify-center md:justify-start">
                    <img
                        src="/assets/tesla.svg"
                        alt="Citation"
                        className="max-w-full h-auto"
                    />
                </div>

                <div className="w-full md:w-2/3">
                    <p className="text-gray-600 text-sm font-light mb-4 leading-relaxed">
                        Maecenas dignissim justo eget nulla rutrum molestie. Maecenas lobortis sem dui, vel rutrum risus tincidunt ullamcorper. Proin eu enim metus. Vivamus sed libero ornare, tristique quam in, gravida enim. Nullam ut molestie arcu, at hendrerit elit. Morbi laoreet elit at ligula molestie, nec molestie mi blandit. Suspendisse cursus tellus sed augue ultrices, quis tristique nulla sodales. Suspendisse eget lorem eu turpis vestibulum pretium. Suspendisse potenti. Quisque malesuada enim sapien, vitae placerat ante feugiat eget. Quisque vulputate odio neque, eget efficitur libero condimentum id. Curabitur id nibh id sem dignissim finibus ac sit amet magna.
                    </p>
                    <p className="text-green-600 text-md font-medium mb-2">Tim Smith</p>
                    <p className="text-gray-400 text-sm font-light mb-6">British Dragon Boat Racing Association</p>

                    <div className="flex flex-wrap items-center gap-6">
                        {clientLogos.map((logo, index) => (
                            <img
                                key={index}
                                src={logo.src}
                                alt={logo.alt}
                                className="h-9 rounded-lg cursor-pointer transition duration-300 hover:shadow-[0_0_10px_3px_rgba(59,130,246,0.7)]"
                                draggable="false"
                            />
                        ))}

                        <a href="#" className="flex items-center gap-2 text-green-600 font-medium mt-4 md:mt-0">
                            <span>Meet all customers</span>
                            <ArrowRight className="w-4 h-4" />
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}