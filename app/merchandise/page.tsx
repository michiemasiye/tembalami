import Image from "next/image"
import { Header } from "@/components/header"

const merchandiseItems = [
    {
        id: 1,
        title: "Tembalami Signature Tee - Grey",
        price: 10,
        image: "/merchandise/t-shirt-1.png",
    },
    {
        id: 2,
        title: "Quit Talking Start Praying - Red",
        price: 10,
        image: "/merchandise/t-shirt-2.jpg",
    },
    {
        id: 3,
        title: "Never Give Up - Black",
        price: 10,
        image: "/merchandise/t-shirt-3.png",
    },
    {
        id: 4,
        title: "Quit Talking Start Praying - Black",
        price: 10,
        image: "/merchandise/t-shirt-4.png",
    },
    {
        id: 5,
        title: "Gore Rino Rangu - Navy",
        price: 10,
        image: "/merchandise/t-shirt-5.png",
    },
]

export default function MerchandisePage() {
    return (
        <main>
            <Header variant="light" />
            <div className="min-h-screen bg-background pt-24 pb-12">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-12">
                        <h1 className="text-4xl md:text-5xl font-bold mb-4">Merchandise</h1>
                        <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                            Support the ministry and look great doing it. All t-shirts are available for just $10.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {merchandiseItems.map((item) => (
                            <div
                                key={item.id}
                                className="group relative overflow-hidden rounded-lg border bg-card shadow-sm transition-all hover:shadow-md"
                            >
                                <div className="aspect-square relative overflow-hidden bg-muted">
                                    <Image
                                        src={item.image}
                                        alt={item.title}
                                        fill
                                        className="object-cover transition-transform duration-300 group-hover:scale-105"
                                    />
                                </div>
                                <div className="p-4">
                                    <h3 className="font-semibold text-lg mb-2 line-clamp-1">{item.title}</h3>
                                    <div className="flex items-center justify-between">
                                        <span className="text-xl font-bold text-primary">${item.price}</span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </main>
    )
}
