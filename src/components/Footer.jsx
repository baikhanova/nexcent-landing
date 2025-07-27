import React from "react";
import {Send} from 'lucide-react';

export default function Footer() {
    return (
        <footer
            style={{backgroundColor: '#263238'}}
            className="py-10 text-sm text-white"
        >
            <div className="container mx-auto px-4 grid md:grid-cols-4 gap-8">
                <div>
                    <div className="flex items-center gap-2 mb-4 py-2">
                        <img src="/assets/Icon2.svg" alt="Nexcent Icon" className="h-6"/>
                        <span className="font-semibold text-3xl">Nexcent</span>
                    </div>
                    <span className="font-extralight">
                        <p>Copyright © 2020 Nexcent ltd.</p>
                        <p>All rights reserved</p>
                    </span>
                    <div className="flex gap-3 mt-4 pt-3">
                        <img src="/assets/instagramIcon.svg" alt="Instagram"/>
                        <img src="/assets/dribbleIcon.svg" alt="Dribble"/>
                        <img src="/assets/twitterIcon.svg" alt="Twitter"/>
                        <img src="/assets/youtubeIcon.svg" alt="Youtube"/>
                    </div>
                </div>

                <div>
                    <h3 className="font-semibold text-lg my-3">Company</h3>
                    <ul className="space-y-1 font-extralight">
                        <li><a href="#">About us</a></li>
                        <li><a href="#">Blog</a></li>
                        <li><a href="#">Contact us</a></li>
                        <li><a href="#">Pricing</a></li>
                        <li><a href="#">Testimonials</a></li>
                    </ul>
                </div>

                <div>
                    <h3 className="font-semibold text-lg my-3">Support</h3>
                    <ul className="space-y-1 font-extralight">
                        <li><a href="#">Help center</a></li>
                        <li><a href="#">Terms of service</a></li>
                        <li><a href="#">Legal</a></li>
                        <li><a href="#">Privacy policy</a></li>
                        <li><a href="#">Status</a></li>
                    </ul>
                </div>

                <div>
                    <h3 className="font-semibold text-lg my-3">Stay up to date</h3>
                    <form className="flex items-center bg-gray-600 w-56 rounded-md px-4 py-2">
                        <input
                            type="email"
                            placeholder="Your email address"
                            className="bg-transparent text-white placeholder-gray-300 outline-none w-full font-extralight"
                        />
                        <button type="submit" className="ml-2">
                            <Send className="text-white w-5 h-5"/>
                        </button>
                    </form>
                </div>
            </div>
        </footer>
    );
}