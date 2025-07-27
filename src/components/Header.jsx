import React from "react";

export default function Header() {
    return (
        <header className="bg-gray-100 w-full py-4">
            <div className="container mx-auto flex justify-between items-center px-6">
                <a href="#" className="flex items-center gap-2">
                    <img src="/assets/Icon.svg" alt="Nexcent logo" className="h-6" />
                    <span className="font-semibold text-lg">Nexcent</span>
                </a>

                <nav className="hidden md:flex gap-8 text-gray-900 text-sm">
                    <a href="#">Home</a>
                    <a href="#service">Service</a>
                    <a href="#feature">Feature</a>
                    <a href="#product">Product</a>
                    <a href="#testimonial">Testimonial</a>
                    <a href="#faq">FAQ</a>
                </nav>

                <div className="flex items-center gap-6">
                    <button className="text-green-600 text-sm">Login</button>
                    <button
                        style={{ backgroundColor: '#4CAF4F' }}
                        className="text-white font-light rounded-md px-4 py-2 text-sm"
                    >
                        Sign Up
                    </button>
                </div>
            </div>
        </header>
    );
}