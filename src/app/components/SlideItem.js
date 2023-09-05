
import CardSlideItem from "@/app/components/CardSlideItem";
import Link from "next/link";

export default function SlideItem({ isActive, dataTarget, cards }) {
    return (
        <div className={`carousel-item position-relative ${isActive}`}>
            <div className="row">
                {cards.map((card, index) => (
                    <div className="col-lg-4 col-sm-6 mb-6" key={index}>
                        <Link href="" data-bs-toggle="modal" data-bs-target={dataTarget}>
                            <CardSlideItem
                                image={card.image}
                                alternativeText={card.alternativeText}
                                title={card.title}
                                date={card.date}
                            />
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    )
}
