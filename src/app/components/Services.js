import Image from 'next/image';

import Shape from "@/app/assets/img/cover/shape-cross.svg";
import Logo from "../assets/img/pictures/logo2.png";
import SupportPrint from "../assets/img/pictures/depliant001.jpg";
import Packaging from "../assets/img/pictures/packaging02.png";
import Social from "../assets/img/pictures/reseaux-sociaux.png";

export default function Services() {
    return (
        <section className="mt-0 p-0" id="service">
            <div className="container">
                <div className="position-absolute z-index--1 end-0 d-none d-lg-block">
                    <Image
                        src={Shape}
                        alt="Services"
                        style={{maxWidth: 200}}
                    />
                </div>
                <div className="mb-7 text-center">
                    <h3 className="fw-bold font-cursive text-capitalize">Mes Services</h3>
                    <h5 className="text-secondary">Ensemble, réalisons vos supports de communication à la hauteur de vos
                        ambitions !</h5>
                </div>
                <div className="row">
                    <div className="col-lg-3 col-sm-6 mb-6">
                        <div className="card service-card shadow-hover rounded-3 shadow">
                            <Image src={Logo} className="card-img-top"
                                   alt="Réseaux Sociaux"
                                   height={250}/>
                            <div>
                                <div className="position-relative top-0 start-50 translate-middle text-center align-items-center">
                                    <button className="btn btn-primary fw-bold p-3">
                                        Identité visuelle
                                    </button>
                                </div>
                            </div>
                            <div className="card-body">
                                <ul>
                                    <li>Création de logo</li>
                                    <li>Charte graphique</li>
                                    <li>Carte de visite</li>
                                    <li>Mockup</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-3 col-sm-6 mb-6">
                        <div className="card service-card shadow-hover rounded-3 shadow">
                            <Image src={SupportPrint} className="card-img-top"
                                   alt="Réseaux Sociaux"
                                   height={250}/>
                            <div>
                                <div
                                    className="position-relative top-0 start-50 translate-middle text-center align-items-center">
                                    <button className="btn btn-primary fw-bold p-3">
                                        Support Print
                                    </button>
                                </div>
                            </div>
                            <div className="card-body">
                                <ul>
                                    <li>Affiche</li>
                                    <li>Flyer / Plaquette</li>
                                    <li>Menu</li>
                                    <li>Carte / Invitation / Faire part</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-3 col-sm-6 mb-6">
                        <div className="card service-card shadow-hover rounded-3 shadow">
                            <Image src={Packaging} className="card-img-top"
                                   alt="Réseaux Sociaux"
                                   height={250}/>
                            <div>
                                <div
                                    className="position-relative top-0 start-50 translate-middle text-center align-items-center">
                                    <button className="btn btn-primary fw-bold p-3">
                                        Packaging
                                    </button>
                                </div>
                            </div>
                            <div className="card-body">
                                <ul>
                                    <li>Conception visuelle</li>
                                    <li>Emballage</li>
                                    <li>Étiquetage</li>
                                    <li>Mockup</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-3 col-sm-6 mb-6">
                        <div className="card service-card shadow-hover rounded-3 shadow">
                            <Image src={Social} className="card-img-top"
                                   alt="Réseaux Sociaux"
                                   height={250}
                            />
                            <div>
                                <div
                                    className="position-relative top-0 start-50 translate-middle text-center align-items-center">
                                    <button className="btn btn-primary fw-bold p-3">
                                        Réseaux Sociaux
                                    </button>
                                </div>
                            </div>
                            <div className="card-body">
                                <ul>
                                    <li>Feed Instagram</li>
                                    <li>Visuel</li>
                                    <li>Bannière</li>
                                    <li>Template Story</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    )
}