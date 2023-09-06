import Image from 'next/image';

import Shape from '../assets/img/category/shape.svg';

import Skateboard from '../assets/img/pictures/portfolio/affiche-002.png';
import PetSitter from '../assets/img/pictures/portfolio/depliant002.png';
import Mariage from '../assets/img/pictures/portfolio/faire-part001.png';

import AfterWork from '../assets/img/pictures/portfolio/invitation001.png';
import Restaurant from '../assets/img/pictures/portfolio/depliant003.png';
import CarteBenoit from '../assets/img/pictures/portfolio/cartevisite003.png';

import Surfer from '../assets/img/pictures/portfolio/affiche-001.png';
import Yoga from '../assets/img/pictures/portfolio/depliant001.jpg';
import SalonCoiffure from '../assets/img/pictures/portfolio/cartevisite001.png';

import IconLeftArrow from '../assets/img/icons/up.svg';
import IconRightArrow from '../assets/img/icons/down.svg';
import SlideItem from "@/app/components/SlideItem";

export default function Portfolio() {
    const dataTargetsPrefixes = ["slide_one", "slide_two", "slide_three"]; // Préfixes d'ID uniques

    const cardDataSlideOne = [
        {
            image: Skateboard,
            alternativeText: "Affiche Skateboard",
            title: "Affiche Skateboard",
            date: "2022",
        },
        {
            image: PetSitter,
            alternativeText: "Dépliant Pet-Sitter",
            title: "Dépliant Pet-Sitter",
            date: "2022"
        },
        {
            image: Mariage,
            alternativeText: "Faire-part mariage",
            title: "Faire-part mariage",
            date: "2017",
        }
    ];

    const cardDataSlideTwo = [
        {
            image: AfterWork,
            alternativeText: "Invitation After-work",
            title: "Invitation After-work",
            date: "2023"
        },
        {
            image: Restaurant,
            alternativeText: "Dépliant restaurant",
            title: "Dépliant restaurant",
            date: "2023"
        },
        {
            image: CarteBenoit,
            alternativeText: "Carte de visite - Kinésithérapeute",
            title: "Carte de visite - Kinésithérapeute",
            date: "2022"
        }
    ];

    const cardDataSlideThree = [
        {
            image: Surfer,
            alternativeText: "Affiche surf compétition",
            title: "Affiche surf compétition",
            date: "2023"
        },
        {
            image: Yoga,
            alternativeText: "Dépliant Yoga",
            title: "Dépliant Yoga",
            date: "2023"
        },
        {
            image: SalonCoiffure,
            alternativeText: "Carte de visite - Salon de coiffure",
            title: "Carte de visite - Salon de coiffure",
            date: "2022"
        }
    ];


    return (
        <div id="realisation" className="container">
            <div className="position-absolute z-index--1 end-0 d-none d-lg-block">
                <Image src={Shape} alt={'service'} style={{ maxWidth: 200 }}/>
            </div>
            <div className="mb-7 text-center">
                <h3 className="fw-bold font-cursive text-capitalize">Mon Portfolio</h3>
            </div>
            <div className="row">
                <div className="col-12">
                    <div className="">
                        <div className="carousel slide  position-static" id="testimonialIndicator1"
                             data-bs-ride="carousel">
                            <div className="carousel-inner">
                                <SlideItem isActive={'active'} dataTargetsPrefix={dataTargetsPrefixes[0]} cards={cardDataSlideOne} />
                                <SlideItem isActive={''} dataTargetsPrefix={dataTargetsPrefixes[1]} cards={cardDataSlideTwo} />
                                <SlideItem isActive={''} dataTargetsPrefix={dataTargetsPrefixes[2]} cards={cardDataSlideThree} />
                            </div>
                        </div>
                        <div
                            className="carousel-navigation  d-flex flex-column flex-between-center text-center position-relative position-absolute top-50 start-50 translate-middle"
                            style={{ height: 60, width: 20, rotate: '90deg' }}>
                            <button className="carousel-control-prev position-static"
                                    type="button"
                                    data-bs-target="#testimonialIndicator1"
                                    data-bs-slide="prev">
                                <Image src={IconLeftArrow} alt={'icon'} width={16}/>
                            </button>
                            <button className="carousel-control-next position-static"
                                    type="button"
                                    data-bs-target="#testimonialIndicator1"
                                    data-bs-slide="next">
                                <Image src={IconRightArrow} alt={'icon'} width={16}/>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}