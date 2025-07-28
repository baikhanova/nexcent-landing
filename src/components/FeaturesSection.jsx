import React from "react";

export default function FeaturesSection() {
    return (
        <section className="py-12 bg-gray-50">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <h2 className="text-gray-600 text-3xl sm:text-4xl font-medium leading-snug mb-4">
                    Manage your entire community <br className="hidden sm:block" /> in a single system
                </h2>
                <p className="text-gray-500 max-w-xl mx-auto mb-12 text-sm sm:text-base">
                    Who is Nexcent suitable for?
                </p>

                <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 place-items-center">
                    {[
                        {
                            image: "/assets/membership.svg",
                            title: "Membership Organisations",
                            text: "Our membership management software provides full automation of membership renewals and payments",
                        },
                        {
                            image: "/assets/national.svg",
                            title: "National Associations",
                            text: "Our membership management software provides full automation of membership renewals and payments",
                        },
                        {
                            image: "/assets/clubs_and_groups.svg",
                            title: "Clubs And Groups",
                            text: "Our membership management software provides full automation of membership renewals and payments",
                        },
                    ].map((item, index) => (
                        <div
                            key={index}
                            className="bg-white w-full max-w-sm rounded-xl p-6 shadow hover:shadow-lg transition"
                        >
                            <div className="flex justify-center mb-4">
                                <img src={item.image} alt={item.title} className="h-12" />
                            </div>
                            <h3 className="text-gray-700 font-semibold text-lg sm:text-xl mb-2">
                                {item.title}
                            </h3>
                            <p className="text-gray-500 text-sm font-light">{item.text}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}