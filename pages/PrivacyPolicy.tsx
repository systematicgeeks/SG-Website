import React from 'react';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { FadeIn } from '../components/ui/FadeIn';

export const PrivacyPolicy: React.FC = () => {
    return (
        <>
            <Navbar />
            <main className="pt-32 pb-24 min-h-screen bg-[#050505]">
                <div className="max-w-4xl mx-auto px-6">
                    <FadeIn>
                        <h1 className="text-4xl md:text-5xl font-medium text-white tracking-tight mb-8">Privacy Policy</h1>
                        <p className="text-neutral-500 mb-12">Last updated: February 09, 2025</p>

                        <div className="space-y-12 text-neutral-300 font-light leading-relaxed">
                            <section className="space-y-4">
                                <p>This Privacy Policy describes our policies and procedures on the collection, use, and disclosure of your information when you use our service.</p>
                            </section>

                            <section className="space-y-4">
                                <h2 className="text-2xl text-white font-medium">Interpretation and Definitions</h2>
                                <h3 className="text-xl text-white font-medium mt-4">Interpretation</h3>
                                <p>The words of which the initial letter is capitalized have meanings defined under the following conditions.</p>

                                <h3 className="text-xl text-white font-medium mt-6">Definitions</h3>
                                <ul className="list-disc pl-5 space-y-2 marker:text-mint">
                                    <li><strong className="text-white font-medium">Account:</strong> A unique account created for You to access our Service.</li>
                                    <li><strong className="text-white font-medium">Company:</strong> Systematic Geeks, 104 Oaktree Rise.</li>
                                    <li><strong className="text-white font-medium">Cookies:</strong> Small files stored on your device that track your browsing history.</li>
                                    <li><strong className="text-white font-medium">Personal Data:</strong> Any information that identifies an individual.</li>
                                    <li><strong className="text-white font-medium">Service:</strong> Refers to our website, Systematic Geeks.</li>
                                </ul>
                            </section>

                            <section className="space-y-4">
                                <h2 className="text-2xl text-white font-medium">Collecting and Using Your Personal Data</h2>
                                <h3 className="text-xl text-white font-medium mt-4">Types of Data Collected</h3>
                                <p>We may collect the following personal data:</p>
                                <ul className="list-disc pl-5 space-y-2 marker:text-mint">
                                    <li>Email address</li>
                                    <li>Full Name</li>
                                    <li>Phone number</li>
                                    <li>Usage Data</li>
                                </ul>

                                <h3 className="text-xl text-white font-medium mt-6">Tracking Technologies & Cookies</h3>
                                <p>We use Cookies and similar tracking technologies to track the activity on Our Service and store certain information.</p>
                            </section>

                            <section className="space-y-4">
                                <h2 className="text-2xl text-white font-medium">Your Privacy Rights</h2>
                                <p>You have the right to:</p>
                                <ul className="list-disc pl-5 space-y-2 marker:text-mint">
                                    <li>Request access to your personal data</li>
                                    <li>Request corrections or deletion of data</li>
                                    <li>Opt out of marketing communications</li>
                                </ul>
                            </section>

                            <section className="space-y-4">
                                <h2 className="text-2xl text-white font-medium">Security of Your Data</h2>
                                <p>The security of Your Personal Data is important to Us, but no method of transmission over the Internet is 100% secure.</p>

                                <h3 className="text-xl text-white font-medium mt-6">How We Protect Your Data</h3>
                                <ul className="list-disc pl-5 space-y-2 marker:text-mint">
                                    <li>Encryption of sensitive information</li>
                                    <li>Restricted access to personal data</li>
                                    <li>Regular security audits</li>
                                </ul>
                            </section>

                            <section className="space-y-4">
                                <h2 className="text-2xl text-white font-medium">Contact Us</h2>
                                <p>If you have any questions about this Privacy Policy, you can contact us:</p>
                                <ul className="list-none space-y-2 text-neutral-400">
                                    <li>Email: <a href="mailto:accounts@systematicgeeks.com" className="text-mint hover:underline">accounts@systematicgeeks.com</a></li>
                                    <li>Phone: 0466604685</li>
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
