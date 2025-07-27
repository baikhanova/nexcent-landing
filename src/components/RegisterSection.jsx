import React, {useState} from "react";

const slides = [
    {
        title: "Lessons and insights",
        highlight: "from 8 years",
        text: "Where to grow your business as a photographer: site or social media?"
    },
    {
        title: "Learn from us",
        highlight: "with real cases",
        text: "Success stories and mistakes that shaped top photographers"
    },
    {
        title: "Master your business",
        highlight: "step by step",
        text: "Guides, tools, and community support for growing online"
    },
];

export default function RegisterSection() {

    const [current, setCurrent] = useState(0);

    const nextSlide = () => setCurrent((current + 1) % slides.length);
    const prevSlide = () => setCurrent((current - 1 + slides.length) % slides.length);
    const goToSlide = (index) => setCurrent(index);

    const slide = slides[current];

    return (
        <section className="bg-gray-100 pt-20 pb-10">
            <div className="container mx-auto flex flex-col md:flex-row items-center gap-10 px-6">
                <div className="flex-1 text-center md:text-left">
                    <h1 className="text-gray-600 text-6xl font-semibold leading-tight mb-6">
                        {slide.title} <br />
                        <span className="text-green-500">{slide.highlight}</span>
                    </h1>
                    <p className="text-gray-500 mb-8">{slide.text}</p>
                    <button
                        style={{ backgroundColor: '#4CAF4F' }}
                        className="text-white rounded-md px-6 py-3 font-light hover:bg-green-600 transition"
                    >
                        Register
                    </button>
                </div>
                <div className="flex-1">
                    <img src="/assets/hero-image.svg" alt="Hero illustration" className="w-full max-w-md mx-auto" />
                </div>
            </div>

            <div className="flex justify-center mt-8 space-x-2">
                {slides.map((_, index) => (
                    <button
                        key={index}
                        className={`w-3 h-3 rounded-full ${
                            current === index ? "bg-green-500" : "bg-gray-300"
                        }`}
                        onClick={() => goToSlide(index)}
                    />
                ))}
            </div>
        </section>
    );
}
