import Image from 'next/image';
import Link from "next/link";

import ImageLogo from '../assets/img/pictures/dbs-footer.png';
import IconInstagram from '../assets/img/icons/instagram.svg';
import IconFacebook from '../assets/img/icons/facebook-f.svg';

export default function Footer() {
    return (
        <footer>
            <section className="pb-0 pb-lg-4">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4 col-md-7 col-12 mb-4 mb-md-6 mb-lg-0 order-0">
                            <Image
                                src={ImageLogo}
                                alt="jadoo"
                                width={250}
                            />
                            <p className="fs--1 text-secondary mb-0 fw-medium">Transformez vos idées en images
                                percutantes avec une graphiste freelance passionnée !</p>
                        </div>

                        <div className="col-lg-4 col-md-4 mb-4 mb-lg-0 order-lg-1 order-md-2">
                            <h4 className="footer-heading-color fw-bold font-sans-serif mb-3 mb-lg-4">Me contacter</h4>
                            <ul className="list-unstyled mb-0">
                                <li className="mb-2">
                                    <a className="link-900 fs-1 fw-medium text-decoration-none" href="tel:0777676341">07
                                        77 67 63 41</a>
                                </li>
                                <li className="mb-2">
                                    <a className="link-900 fs-1 fw-medium text-decoration-none"
                                       href="mailto:designbysolenne@gmail.com">designbysolenne@gmail.com</a>
                                </li>
                                <li className="mb-2">
                                    <a className="link-900 fs-1 fw-medium text-decoration-none" href="#">Région
                                        Nantes(44)</a>
                                </li>
                            </ul>
                        </div>

                        <div className="col-lg-4 col-md-4 mb-4 mb-lg-0 order-lg-3 order-md-4">
                            <h4 className="footer-heading-color fw-bold font-sans-serif mb-3 mb-lg-4">Liens</h4>
                            <ul className="list-unstyled mb-0">
                                <li className="mb-2">
                                    <a className="link-900 fs-1 fw-medium text-decoration-none" href="#service">Mes
                                        services</a>
                                </li>
                                <li className="mb-2">
                                    <a className="link-900 fs-1 fw-medium text-decoration-none" href="#realisation">Mon
                                        Portfolio</a>
                                </li>
                                <li className="mb-2">
                                    <a className="link-900 fs-1 fw-medium text-decoration-none"
                                       href="#contact">Contact</a>
                                </li>
                            </ul>
                        </div>

                        <div className="mt-5 col-lg-3 col-md-5 col-12 mb-4 mb-md-6 mb-lg-0 order-lg-4 order-md-1">
                            <div className="icon-group mb-4">
                                <a className="text-decoration-none icon-item shadow-social" id="facebook" 
                                   target="_blank" href="https://www.facebook.com/people/Design-By-Solenne/61550969013302/">
                                    <Image src={IconFacebook} alt={'icon'} width={10}/>
                                </a>
                                <a className="text-decoration-none icon-item shadow-social" id="instagram"
                                   target="_blank" href="https://www.instagram.com/designbysolenne_/">
                                    <Image src={IconInstagram} alt={'icon'} width={16}/>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <div className="py-5 text-center">
                <p className="mb-0 text-secondary fs--1 fw-medium">
                    Tous droits réservé, 2023 Design By Solenne -
                    <Link className="footer-link cgv-link" href="/conditions-generales-de-vente">CGV</Link> -
                    <Link className="footer-link ml-link" href="/mentions-legales">Mentions Légales</Link>
                </p>
            </div>
        </footer>
    )
}
