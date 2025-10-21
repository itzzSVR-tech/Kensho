import { PricingTable } from '@clerk/nextjs'

export default function Pricing() {
    return (
        <section className="py-32 relative">
            {/* Background gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-[hsl(270,30%,97%)] to-[hsl(220,40%,98%)]"></div>

            {/* Gradient shadows in background */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-indigo-200/20 to-purple-200/20 rounded-full blur-3xl"></div>
                <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-r from-blue-200/20 to-cyan-200/20 rounded-full blur-3xl"></div>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-purple-200/10 to-pink-200/10 rounded-full blur-3xl"></div>
            </div>

            <div className="relative z-10 container px-4 mx-auto max-w-7xl">
                <div className="text-center mb-20 space-y-6">
                    <h2 className="font-display text-5xl md:text-6xl font-bold text-slate-900">
                        Simple, transparent
                        <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent"> Pricing</span>
                    </h2>
                    <p className="text-xl text-slate-600 max-w-2xl mx-auto">
                        Choose a plan that grows with you. No hidden fees, cancel anytime.
                    </p>
                </div>

                {/* Clerk Pricing Table */}
                <div className="relative bg-white/60 backdrop-blur supports-[backdrop-filter]:bg-white/60 rounded-3xl p-6 shadow-sm shadow-indigo-100">
                    <PricingTable />
                </div>
            </div>
        </section>
    )
}