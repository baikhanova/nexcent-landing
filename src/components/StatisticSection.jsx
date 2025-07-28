import React from "react";

export default function StatisticSection() {
    return (
        <section className="bg-gray-100 py-16">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 px-6 max-w-screen-xl mx-auto items-center">
                <div className="text-center md:text-left">
                    <h2 className="text-gray-700 text-3xl sm:text-4xl font-medium mb-4">
                        Helping a local <br />
                        <span className="text-green-500">business reinvent itself</span>
                    </h2>
                    <p className="text-gray-600 mb-6 text-sm leading-relaxed">
                        We reached here with our hard work and dedication.
                    </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-gray-700 w-full">
                    <div className="flex items-center gap-4">
                        <img src="/assets/membersIcon.svg" alt="Members" className="h-12" />
                        <div>
                            <h3 className="font-semibold text-2xl sm:text-3xl mb-1">2,245,341</h3>
                            <p className="font-light text-gray-600 text-sm">Members</p>
                        </div>
                    </div>
                    <div className="flex items-center gap-4">
                        <img src="/assets/handIcon.png" alt="Clubs" className="h-12" />
                        <div>
                            <h3 className="font-semibold text-2xl sm:text-3xl mb-1">46,328</h3>
                            <p className="font-light text-gray-600 text-sm">Clubs</p>
                        </div>
                    </div>
                    <div className="flex items-center gap-4">
                        <img src="/assets/touchIcon.svg" alt="Event Bookings" className="h-12" />
                        <div>
                            <h3 className="font-semibold text-2xl sm:text-3xl mb-1">828,867</h3>
                            <p className="font-light text-gray-600 text-sm">Event Bookings</p>
                        </div>
                    </div>
                    <div className="flex items-center gap-4">
                        <img src="/assets/paymentsIcon.svg" alt="Payments" className="h-12" />
                        <div>
                            <h3 className="font-semibold text-2xl sm:text-3xl mb-1">1,926,436</h3>
                            <p className="font-light text-gray-600 text-sm">Payments</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}