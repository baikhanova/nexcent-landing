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
        <section id="testimonial" className="bg-gray-100 py-14">
            <div className="container mx-auto flex flex-col-reverse md:flex-row items-center gap-10 px-6">

                <div className="flex-1 text-center md:text-left">
                    <p className="text-gray-600 text-sm font-light mb-4 leading-relaxed max-w-prose mx-auto md:mx-0">
                        Maecenas dignissim justo eget nulla rutrum molestie. Maecenas lobortis sem dui, vel rutrum risus tincidunt ullamcorper. Proin eu enim metus. Vivamus sed libero ornare, tristique quam in, gravida enim. Nullam ut molestie arcu, at hendrerit elit. Morbi laoreet elit at ligula molestie, nec molestie mi blandit. Suspendisse cursus tellus sed augue ultrices, quis tristique nulla sodales. Suspendisse eget lorem eu turpis vestibulum pretium. Suspendisse potenti. Quisque malesuada enim sapien, vitae placerat ante feugiat eget. Quisque vulputate odio neque, eget efficitur libero condimentum id. Curabitur id nibh id sem dignissim finibus ac sit amet magna.
                    </p>
                    <p className="text-green-600 text-md font-medium mb-1">Tim Smith</p>
                    <p className="text-gray-400 text-sm font-light mb-6">
                        British Dragon Boat Racing Association
                    </p>

                    <div className="mt-6 flex justify-center md:justify-start">
                        <a href="#" className="flex items-center gap-2 text-green-600 font-medium hover:underline">
                            <span>Meet all customers</span>
                            <ArrowRight className="w-4 h-4" />
                        </a>
                    </div>
                </div>

                <div className="mb-6 md:mb-0 max-w-[240px] mx-auto">
                    <img src="/assets/tesla.svg" alt="Citation" className="w-full" />
                </div>
            </div>
        </section>
    );
}