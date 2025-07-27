import React from "react";
import { ArrowRight } from "lucide-react";

const blogPosts = [
    {
        title: "Creating Streamlined Safeguarding Processes with OneRen",
        image: "/assets/blog-1.svg",
    },
    {
        title: "What are your safeguarding responsibilities and how can you manage them?",
        image: "/assets/blog-2.svg",
    },
    {
        title: "Revamping the Membership Model with Triathlon Australia",
        image: "/assets/blog-3.svg",
    },
];

export default function MarketingSection() {
    return (
        <section id="faq" className="bg-white pt-14 pb-40">
            <div className="container mx-auto text-center px-4">
                <h2 className="text-gray-700 text-4xl font-medium mb-4">
                    Caring is the new marketing
                </h2>
                <p className="text-gray-500 max-w-xl mx-auto mb-10 text-sm font-light">
                    The Nexcent blog is the best place to read about the latest membership
                    insights, trends and more. See who's joining the community, read about
                    how our community are increasing their membership income and lot's more.
                </p>

                <div className="grid md:grid-cols-3 gap-10">
                    {blogPosts.map((post, index) => (
                        <div key={index} className="relative group">
                            <img
                                src={post.image}
                                alt="Blog preview"
                                className="w-full h-auto rounded-xl object-cover"
                            />
                            <div className="bg-gray-50 absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-[75%] p-6 rounded-xl shadow-lg">
                                <p className="text-gray-800 font-medium text-base mb-3">
                                    {post.title}
                                </p>
                                <a href="#" className="text-green-600 text-sm font-semibold inline-flex items-center gap-1">
                                    Readmore
                                    <ArrowRight className="w-4 h-4" />
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}