import Link from "next/link";
import Image from 'next/image';

import ImageLogo from '../assets/img/pictures/design-by-solenne.png'

export default function Header() {
    return (
            <nav className="navbar navbar-expand-lg bg-white fixed-top d-block">
                <div className="container">
                    <a className="navbar-brand" href="/">
                        <Image
                            id="img-header"
                            src={ImageLogo}
                            alt="Logo"
                            height={90}
                        />
                    </a>
                    <button className="bg-danger rounded navbar-toggler" type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#navbarSupportedContent"
                            aria-controls="navbarSupportedContent"
                            aria-expanded="false"
                            aria-label="Toggle navigation">
              <span className="navbar-toggler-icon py-1">
                <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512">
                   <path
                       d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z"/>
                </svg>
              </span>
                    </button>
                    <div className="collapse navbar-collapse border-top border-lg-0 mt-4 mt-lg-0"
                         id="navbarSupportedContent">
                        <ul className="navbar-nav ms-auto pt-2 pt-lg-0 font-base align-items-lg-center align-items-start">
                            <li className="nav-item px-3 px-xl-4">
                                <Link href="/" id="home-page" className="nav-link fw-medium" aria-current="page">Accueil</Link>
                            </li>
                            <li className="nav-item px-3 px-xl-4">
                                <Link href="#service" id="service-link" className="nav-link fw-medium" aria-current="page">Services</Link>
                            </li>
                            <li className="nav-item px-3 px-xl-4">
                                <Link href="#realisation" id="portfolio-link" className="nav-link fw-medium" aria-current="page">Portfolio</Link>
                            </li>
                            <li className="nav-item px-3 px-xl-4">
                                <Link href="#testimonial" id="temoignages-link" className="nav-link fw-medium" aria-current="page">Témoignages</Link>
                            </li>
                            <li className="nav-item px-3 px-xl-4">
                                <Link href="#contact" id="contact-link" className="nav-link fw-medium" aria-current="page">Contact</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
    )
}
