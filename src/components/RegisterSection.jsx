import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const slides = [
    {
        title: "Lessons and insights",
        highlight: "from 8 years",
        text: "Where to grow your business as a photographer: site or social media?",
    },
    {
        title: "Learn from us",
        highlight: "with real cases",
        text: "Success stories and mistakes that shaped top photographers",
    },
    {
        title: "Master your business",
        highlight: "step by step",
        text: "Guides, tools, and community support for growing online",
    },
];

export default function RegisterSection() {
    const [current, setCurrent] = useState(0);

    const nextSlide = () => setCurrent((current + 1) % slides.length);
    const prevSlide = () => setCurrent((current - 1 + slides.length) % slides.length);
    const goToSlide = (index) => setCurrent(index);

    useEffect(() => {
        const interval = setInterval(nextSlide, 5000);
        return () => clearInterval(interval);
    }, [current]);

    const slide = slides[current];

    return (
        <section className="bg-gray-100 pt-16 pb-10">
            <div className="container mx-auto flex flex-col-reverse md:flex-row items-center gap-10 px-4 sm:px-6 lg:px-8 relative">
                {/* Текстовая часть */}
                <div className="flex-1 text-center md:text-left">
                    <h1 className="text-gray-600 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold leading-snug mb-6">
                        {slide.title} <br />
                        <span className="text-green-500">{slide.highlight}</span>
                    </h1>
                    <p className="text-gray-500 text-sm sm:text-base mb-8">{slide.text}</p>
                    <button
                        style={{ backgroundColor: "#4CAF4F" }}
                        className="text-white rounded-md px-6 py-3 text-sm sm:text-base font-light hover:bg-green-600 transition"
                    >
                        Register
                    </button>
                </div>

                <div className="flex-1 relative">
                    <img
                        src="/assets/hero-image.svg"
                        alt="Hero illustration"
                        className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg mx-auto"
                    />

                    <button
                        onClick={prevSlide}
                        className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-white border rounded-full p-2 shadow hover:bg-gray-200 transition md:-left-6"
                    >
                        <ChevronLeft className="w-5 h-5 text-gray-700" />
                    </button>

                    <button
                        onClick={nextSlide}
                        className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-white border rounded-full p-2 shadow hover:bg-gray-200 transition md:-right-6"
                    >
                        <ChevronRight className="w-5 h-5 text-gray-700" />
                    </button>
                </div>
            </div>

            <div className="flex justify-center mt-8 space-x-2">
                {slides.map((_, index) => (
                    <button
                        key={index}
                        className={`w-3 h-3 rounded-full transition ${
                            current === index ? "bg-green-500 scale-110" : "bg-gray-300"
                        }`}
                        onClick={() => goToSlide(index)}
                    />
                ))}
            </div>
        </section>
    );
}