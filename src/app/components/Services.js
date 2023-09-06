import Image from 'next/image'

import Shape from "@/app/assets/img/cover/shape-cross.svg";
import Affiche from "../assets/img/pictures/affiche-flyers.png";
import Invitation from "../assets/img/pictures/faire-part-invitation.png";
import Catalogue from "../assets/img/pictures/carte-de-visite.png";
import Social from "../assets/img/pictures/social-media.png";

export default function Services() {
    return (
        <section className="mt-0 p-0" id="service">
            <div className="container">
                <div className="position-absolute z-index--1 end-0 d-none d-lg-block">
                    <Image
                        src={Shape}
                        alt="Services"
                        style={{ maxWidth: 200 }}
                    />
                </div>
                <div className="mb-7 text-center">
                    <h3 className="fw-bold font-cursive text-capitalize">Mes Services</h3>
                    <h5 className="text-secondary">Ensemble, réalisons vos supports de communication à la hauteur de vos
                        ambitions !</h5>
                </div>
                <div className="row">
                    <div className="col-lg-3 col-sm-6 mb-6">
                        <div className="card service-card shadow-hover rounded-3 text-center align-items-center">
                            <div className="card-body p-xxl-5 p-4">
                                <Image
                                    src={Affiche}
                                    alt="Affiche, Menu et Flyers"
                                    width={150}
                                />
                                <h4 className="mb-3">Affiche, Flyer & Menu</h4>
                                <p className="mb-0 fw-medium">Des designs attractifs qui captent l’attention et
                                    communiquent votre message
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-sm-6 mb-6">
                        <div className="card service-card shadow-hover rounded-3 text-center align-items-center">
                            <div className="card-body p-xxl-5 p-4">
                                <Image
                                    src={Invitation}
                                    alt="Faire Part et invitation"
                                    width={150}
                                />
                                <h4 className="mb-3">Faire-part & Invitation</h4>
                                <p className="mb-0 fw-medium">Des créations uniques pour marquer les événements qui vous
                                    tiennent à coeur</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-sm-6 mb-6">
                        <div className="card service-card shadow-hover rounded-3 text-center align-items-center">
                            <div className="card-body p-xxl-5 p-4">
                                <Image
                                    src={Catalogue}
                                    alt="Carte de visite"
                                    width={150}
                                />
                                <h4 className="mb-3">Carte de visite, brochure & catalogue</h4>
                                <p className="mb-0 fw-medium">Des cartes de visite, brochures et catalogues
                                    professionnelles qui laissent une impression mémorable.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-sm-6 mb-6">
                        <div className="card service-card shadow-hover rounded-3 text-center align-items-center">
                            <div className="card-body p-xxl-5 p-4">
                                <Image
                                    src={Social}
                                    alt="Réseaux Sociaux"
                                    width={150}
                                />
                                <h4 className="mb-3">Réseaux <br/>sociaux</h4>
                                <p className="mb-0 fw-medium">Des créations de contenus visuels attrayants pour
                                    renforcer votre présence en ligne.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}