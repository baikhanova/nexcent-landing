import React from "react";

const clientLogos = [
    { src: "/assets/client-logo-1.svg", alt: "Client 1" },
    { src: "/assets/client-logo-2.svg", alt: "Client 2" },
    { src: "/assets/client-logo-3.svg", alt: "Client 3" },
    { src: "/assets/client-logo-4.svg", alt: "Client 4" },
    { src: "/assets/client-logo-5.svg", alt: "Client 5" },
    { src: "/assets/client-logo-6.svg", alt: "Client 6" },
    { src: "/assets/client-logo-3.svg", alt: "Client 6 (duplicate)" },
];

export default function ClientsSection() {
    return (
        <section id="service" className="py-10 bg-white">
            <div className="container mx-auto px-6 text-center">
                <h2 className="text-gray-700 text-4xl font-medium mb-4">Our Clients</h2>
                <p className="text-gray-500 max-w-xl mx-auto mb-10 text-sm font-light">
                    We have been working with some Fortune 500+ clients
                </p>

                <div className="flex flex-wrap justify-center items-center gap-32">
                    {clientLogos.map((logo, index) => (
                        <img
                            key={index}
                            src={logo.src}
                            alt={logo.alt}
                            className="h-11"
                            draggable="false"
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}