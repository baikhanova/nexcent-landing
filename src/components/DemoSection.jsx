import React from "react";
import { ArrowRight } from "lucide-react";


export default function DemoSection() {
    return (
        <section className="bg-gray-100 py-10">
            <div className="flex flex-col items-center text-center max-w-xl mx-auto px-4">
                <h2 className="text-gray-800 text-4xl md:text-5xl font-semibold mb-6">
                    Pellentesque suscipit fringilla libero eu.
                </h2>
                <button
                    style={{ backgroundColor: '#4CAF4F' }}
                    className="flex items-center  gap-2 text-white rounded-md px-6 py-3 font-light hover:bg-green-600 transition"
                >
                    Get a Demo
                    <ArrowRight className="w-4 h-4" />
                </button>
            </div>
        </section>
    );
}