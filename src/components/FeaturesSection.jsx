import React from "react";

export default function FeaturesSection() {
    return (
        <section className="py-12">
            <div className="container mx-auto px-6 text-center">
                <h2 className="text-gray-600 text-4xl font-medium mb-4">
                    Manage your entire community <br /> in a single system
                </h2>
                <p className="text-gray-500 max-w-xl mx-auto mb-12 text-sm">
                    Who is Nexcent suitable for?
                </p>

                <div className="grid place-items-center grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="bg-white w-72 h-64 rounded-xl p-6 shadow hover:shadow-lg transition">
                        <div className="flex justify-center mb-4">
                            <img src="/assets/membership.svg" alt="Membership" className="h-12" />
                        </div>
                        <h3 className="text-gray-700 font-semibold text-xl mb-2">Membership Organisations</h3>
                        <p className="text-gray-500 text-sm font-light">
                            Our membership management software provides full automation of membership renewals and payments
                        </p>
                    </div>

                    <div className="bg-white w-72 h-64 rounded-xl p-8 shadow hover:shadow-lg transition">
                        <div className="flex justify-center mb-4">
                            <img src="/assets/national.svg" alt="National" className="h-12" />
                        </div>
                        <h3 className="text-gray-700 font-semibold text-xl mb-2">National Associations</h3>
                        <p className="text-gray-500 text-sm font-light">
                            Our membership management software provides full automation of membership renewals and payments
                        </p>
                    </div>

                    <div className="bg-white w-72 h-64 rounded-xl p-8 shadow hover:shadow-lg transition">
                        <div className="flex justify-center mb-4">
                            <img src="/assets/clubs_and_groups.svg" alt="Clubs" className="h-12" />
                        </div>
                        <h3 className="text-gray-700 font-semibold text-xl mb-2">Clubs And Groups</h3>
                        <p className="text-gray-500 text-sm font-light">
                            Our membership management software provides full automation of membership renewals and payments
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}