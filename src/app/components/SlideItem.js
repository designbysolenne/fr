import CardSlideItem from "@/app/components/CardSlideItem";
import Link from "next/link";

export default function SlideItem({ isActive, dataTargetsPrefix, cards }) {
    return (
        <div className={`carousel-item position-relative ${isActive}`}>
            <div className="row">
                {cards.map((card, index) => {
                    const uniqueId = `${dataTargetsPrefix}_${index}`; // Générez un ID unique avec le préfixe
                    return (
                        <div className="col-lg-4 col-sm-6 mb-6" key={index}>
                            <Link href="" data-bs-toggle="modal" data-bs-target={`#${uniqueId}`}>
                                <CardSlideItem
                                    image={card.image}
                                    alternativeText={card.alternativeText}
                                    title={card.title}
                                    date={card.date}
                                    id={uniqueId} // Passez l'ID unique au composant CardSlideItem
                                />
                            </Link>
                        </div>
                    );
                })}
            </div>
        </div>
    )
}