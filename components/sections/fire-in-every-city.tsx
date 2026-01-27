import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export function FireInEveryCity() {
    return (
        <section className="py-20 bg-background">
            <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                    <h2 className="text-sm font-mono uppercase tracking-wider text-primary mb-4">Upcoming Events</h2>
                    <h3 className="text-3xl md:text-5xl font-bold font-heading uppercase">Fire In Every City</h3>
                </div>

                <div className="grid lg:grid-cols-2 gap-12 items-start">
                    {/* UK Event */}
                    <div className="flex flex-col items-center">
                        <h4 className="text-2xl font-bold mb-6 font-heading text-center">United Kingdom</h4>
                        <div className="relative w-full aspect-[3/4] max-w-md mb-8 shadow-2xl">
                            <Image
                                src="/images/fire-in-every-city-uk.jpg"
                                alt="Fire In Every City - UK Tour"
                                fill
                                className="object-cover rounded-lg"
                            />
                        </div>
                        <div className="space-y-4 text-center">
                            <div className="bg-secondary/5 p-6 rounded-lg border border-secondary/10 w-full max-w-md">
                                <p className="font-bold text-lg mb-2">APRIL 18 - BEDFORD</p>
                                <p className="font-mono text-muted-foreground">King's House, 245 Ampthill Rd, MK42 9AZ</p>
                            </div>
                            <div className="bg-secondary/5 p-6 rounded-lg border border-secondary/10 w-full max-w-md">
                                <p className="font-bold text-lg mb-2">APRIL 26 - MIDDLESBROUGH</p>
                                <p className="font-mono text-muted-foreground">Victory House, 20 Brentnall Street, TS1 5AP</p>
                            </div>

                            <div className="pt-4">
                                <Button
                                    asChild
                                    size="lg"
                                    className="bg-black text-white hover:bg-gray-800 px-8 py-6 text-lg rounded-lg"
                                >
                                    <a
                                        href="https://tickets.tembalami.com"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        Buy Tickets
                                    </a>
                                </Button>
                            </div>
                        </div>
                    </div>

                    {/* Bulawayo Event */}
                    <div className="flex flex-col items-center">
                        <h4 className="text-2xl font-bold mb-6 font-heading text-center">Zimbabwe - Bulawayo</h4>
                        <div className="relative w-full aspect-[4/5] max-w-md mb-8 shadow-2xl">
                            <Image
                                src="/images/fire-in-every-city-byo.jpg"
                                alt="Fire In Every City - Bulawayo"
                                fill
                                className="object-cover rounded-lg"
                            />
                        </div>
                        <div className="space-y-4 text-center w-full max-w-md">
                            <div className="bg-secondary/5 p-6 rounded-lg border border-secondary/10">
                                <h5 className="font-bold text-lg mb-4 text-primary">TICKETS AVAILABLE AT:</h5>
                                <ul className="space-y-3 font-mono text-sm">
                                    <li className="flex items-center justify-center gap-2">
                                        <span className="font-bold">KINGS PHARMACY</span>
                                        <span className="text-muted-foreground">- All Branches</span>
                                    </li>
                                    <li className="flex items-center justify-center gap-2">
                                        <span className="font-bold">SLICE PIZZERIA</span>
                                        <span className="text-muted-foreground">- All Branches</span>
                                    </li>
                                </ul>
                            </div>

                            <div className="grid grid-cols-2 gap-4">
                                <div className="bg-primary/10 p-4 rounded-lg border border-primary/20">
                                    <p className="text-xs uppercase tracking-wider mb-1">General</p>
                                    <p className="text-3xl font-bold text-primary">$5</p>
                                </div>
                                <div className="bg-primary/10 p-4 rounded-lg border border-primary/20">
                                    <p className="text-xs uppercase tracking-wider mb-1">V.I.P</p>
                                    <p className="text-3xl font-bold text-primary">$20</p>
                                </div>
                            </div>

                            <div className="bg-secondary text-white p-4 rounded-lg">
                                <p className="text-sm font-mono mb-1">FOR MORE INFO CALL / APP</p>
                                <p className="text-xl font-bold">+263 783 350 654</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
