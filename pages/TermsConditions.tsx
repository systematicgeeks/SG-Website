import React from 'react';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { FadeIn } from '../components/ui/FadeIn';

export const TermsConditions: React.FC = () => {
    return (
        <>
            <Navbar />
            <main className="pt-32 pb-24 min-h-screen bg-[#050505]">
                <div className="max-w-4xl mx-auto px-6">
                    <FadeIn>
                        <h1 className="text-4xl md:text-5xl font-medium text-white tracking-tight mb-8">Terms and Conditions</h1>
                        <p className="text-neutral-500 mb-12">Last updated: February 09, 2025</p>

                        <div className="space-y-12 text-neutral-300 font-light leading-relaxed">
                            <section className="space-y-4">
                                <p>Please read these terms and conditions carefully before using Our Service.</p>
                            </section>

                            <section className="space-y-4">
                                <h2 className="text-2xl text-white font-medium">Interpretation and Definitions</h2>
                                <h3 className="text-xl text-white font-medium mt-4">Interpretation</h3>
                                <p>The words of which the initial letter is capitalized have meanings defined under the following conditions.</p>

                                <h3 className="text-xl text-white font-medium mt-6">Definitions</h3>
                                <ul className="list-disc pl-5 space-y-2 marker:text-mint">
                                    <li><strong className="text-white font-medium">Affiliate:</strong> An entity that controls, is controlled by, or is under common control with a party.</li>
                                    <li><strong className="text-white font-medium">Country:</strong> Victoria, Australia.</li>
                                    <li><strong className="text-white font-medium">Company:</strong> Systematic Geeks, 104 Oaktree Rise.</li>
                                    <li><strong className="text-white font-medium">Device:</strong> Any device that can access the Service (computer, cellphone, tablet).</li>
                                    <li><strong className="text-white font-medium">Service:</strong> Refers to our website, Systematic Geeks.</li>
                                </ul>
                            </section>

                            <section className="space-y-4">
                                <h2 className="text-2xl text-white font-medium">Acknowledgment</h2>
                                <p>These Terms and Conditions govern your use of our service and outline your rights and obligations.</p>
                                <p>By accessing or using the Service, You agree to be bound by these Terms.</p>
                            </section>

                            <section className="space-y-4">
                                <h2 className="text-2xl text-white font-medium">Age Requirement</h2>
                                <p>You must be over the age of 18 to use this service.</p>
                            </section>

                            <section className="space-y-4">
                                <h2 className="text-2xl text-white font-medium">Links to Other Websites</h2>
                                <p>Our Service may contain links to third-party websites that we do not control.</p>
                                <p>We recommend reviewing their terms before engaging with their services.</p>
                            </section>

                            <section className="space-y-4">
                                <h2 className="text-2xl text-white font-medium">Termination</h2>
                                <p>We may terminate or suspend your access immediately for any breach of these Terms.</p>
                            </section>

                            <section className="space-y-4">
                                <h2 className="text-2xl text-white font-medium">Limitation of Liability</h2>
                                <p>Our liability is limited to the amount you have paid for the service, or $100 USD if you haven't made a purchase.</p>
                            </section>

                            <section className="space-y-4">
                                <h2 className="text-2xl text-white font-medium">Governing Law</h2>
                                <p>These Terms shall be governed by the laws of Victoria, Australia.</p>
                            </section>

                            <section className="space-y-4">
                                <h2 className="text-2xl text-white font-medium">Changes to These Terms</h2>
                                <p>We reserve the right to modify these Terms. Continued use after changes means you accept them.</p>
                            </section>

                            <section className="space-y-4">
                                <h2 className="text-2xl text-white font-medium">Contact Us</h2>
                                <p>If you have any questions about these Terms and Conditions, you can contact us:</p>
                                <ul className="list-none space-y-2 text-neutral-400">
                                    <li>Email: <a href="mailto:accounts@systematicgeeks.com" className="text-mint hover:underline">accounts@systematicgeeks.com</a></li>
                                </ul>
                            </section>

                            <div className="pt-8 border-t border-white/5 text-sm text-neutral-500">
                                <p>© 2025 Systematic Geeks. All Rights Reserved.</p>
                            </div>
                        </div>
                    </FadeIn>
                </div>
            </main>
            <Footer />
        </>
    );
};
