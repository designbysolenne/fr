import Image from 'next/image';

import Shape from '@/app/assets/img/cover/shape-cross.svg';

import LogoPia from "../assets/img/pia-logo.jpg";
import PiaPackaging from "../assets/img/pia-packaging2.jpg";
import SanMarcoCarte from "../assets/img/san-marco-carte.jpg";
import GardeOToitLogo from "../assets/img//gardeotoit-logo.jpg";
import GardeOToitPackaging from "../assets/img/gardeotoit-packaging2.jpg";
import GardeOToitAffiche from "../assets/img/gardeotoit-affiche.jpg";
import MoutainTrailLogo from "../assets/img/moutaintrail-logo.jpg";
import MoutainTrailFeedInstagram from "../assets/img/moutaintrail-feedinsta.jpg";
import SpaarpleCarte from "../assets/img/spaarple-carte.jpg";

export default function Portfolio() {

    return (
        <div id="realisation" className="container">
            <div className="position-absolute z-index--1 end-0 d-none d-lg-block">
                <Image src={Shape} alt={'service'} style={{maxWidth: 200}}/>
            </div>
            <div className="mb-7 text-center">
                <h3 className="fw-bold font-cursive text-capitalize">Mon Portfolio</h3>
            </div>

            <div className="container text-center">
                <div className="row gx-5">
                    <div className="col-12 mb-5">
                        <button id="identite-visuelle" className="mx-1 p-2 border rounded-1 btn-primary">Tous les
                            projets
                        </button>
                        <button id="identite-visuelle" className="mx-1 p-2 border rounded-1 btn-primary">Identité
                            visuelle
                        </button>
                        <button className="mx-1 p-2 border rounded-1 btn-primary">Packaging</button>
                        <button className="mx-1 p-2 border rounded-1 btn-primary">Templates Instagram</button>
                    </div>
                </div>
            </div>

            <div className="d-flex justify-content-center">
                <div className="row">
                    <div className="col-lg-4 col-sm-6 mb-6 d-flex justify-content-center">
                        <div className="card rounded-1">
                            <a href={LogoPia} data-bs-target="#logoPiaModal" data-bs-toggle="modal">
                                <Image className="identite-visuelle" src={LogoPia} alt="Réseaux Sociaux"
                                       height={300} width={300}
                                />
                            </a>
                        </div>
                    </div>
                    <div className="col-lg-4 col-sm-6 mb-6 d-flex justify-content-center">
                        <div className="card rounded-1">
                            <a href={SanMarcoCarte} data-bs-target="#SanMarcoCarte" data-bs-toggle="modal">
                                <Image src={SanMarcoCarte} className="" alt="Réseaux Sociaux"
                                       height={300} width={300}/>
                            </a>
                        </div>
                    </div>
                    <div className="col-lg-4 col-sm-6 mb-6 d-flex justify-content-center">
                        <div className="card rounded-1">
                            <a href={GardeOToitLogo} data-bs-target="#GardeOToitLogo" data-bs-toggle="modal">
                                <Image src={GardeOToitLogo} className="" alt="Réseaux Sociaux"
                                       height={300} width={300}/>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="d-flex justify-content-center">
                <div className="row">
                    <div className="col-lg-4 col-sm-6 mb-6 d-flex justify-content-center">
                        <div className="card rounded-1">
                            <a href={GardeOToitAffiche} data-bs-target="#GardeOToitAffiche" data-bs-toggle="modal">
                                <Image className="identite-visuelle" src={GardeOToitAffiche} alt="Réseaux Sociaux"
                                       height={300} width={300}
                                />
                            </a>
                        </div>
                    </div>
                    <div className="col-lg-4 col-sm-6 mb-6 d-flex justify-content-center">
                        <div className="card rounded-1">
                            <a href={PiaPackaging} data-bs-target="#PiaPackaging" data-bs-toggle="modal">
                                <Image src={PiaPackaging} className="" alt="Réseaux Sociaux"
                                       height={300} width={300}/>
                                </a>
                        </div>
                    </div>
                    <div className="col-lg-4 col-sm-6 mb-6 d-flex justify-content-center">
                        <div className="card rounded-1">
                            <a href={MoutainTrailFeedInstagram} data-bs-target="#MoutainTrailFeedInstagram" data-bs-toggle="modal">
                                <Image src={MoutainTrailFeedInstagram} className="" alt="Réseaux Sociaux"
                                       height={300} width={300}/>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="d-flex justify-content-center">
                <div className="row">
                    <div className="col-lg-4 col-sm-6 mb-6 d-flex justify-content-center">
                        <div className="card rounded-1">
                            <a href={SpaarpleCarte} data-bs-target="#SpaarpleCarte" data-bs-toggle="modal">
                                <Image className="identite-visuelle" src={SpaarpleCarte} alt="Réseaux Sociaux"
                                       height={300} width={300}
                                />
                            </a>
                        </div>
                    </div>
                    <div className="col-lg-4 col-sm-6 mb-6 d-flex justify-content-center">
                        <div className="card rounded-1">
                            <a href={GardeOToitPackaging} data-bs-target="#GardeOToitPackaging" data-bs-toggle="modal">
                                <Image src={GardeOToitPackaging} className="" alt="Réseaux Sociaux"
                                       height={300} width={300}/>
                            </a>
                        </div>
                    </div>
                    <div className="col-lg-4 col-sm-6 mb-6 d-flex justify-content-center">
                        <div className="card rounded-1">
                            <a href={MoutainTrailLogo} data-bs-target="#MoutainTrailLogo" data-bs-toggle="modal">
                                <Image src={MoutainTrailLogo} className="" alt="Réseaux Sociaux"
                                       height={300} width={300}/>
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            {/* Fist Row */}
            <div className="modal fade rounded-top show" id="logoPiaModal" aria-hidden="true"
                 aria-labelledby="" tabIndex="-1">
                <div className="modal-dialog modal-dialog-centered modal-xl">
                    <div className="modal-content bg-transparent border-0 text-center">
                        <div className="modal-body container-fluid overflow-auto p-0">
                            <Image className="identite-visuelle img-fluid"
                                   src={LogoPia} alt="Réseaux Sociaux"
                                   height={800} width={800}
                            />
                        </div>
                    </div>
                </div>
            </div>
            <div className="modal fade rounded-top show" id="SanMarcoCarte" aria-hidden="true"
                 aria-labelledby="" tabIndex="-1">
                <div className="modal-dialog modal-dialog-centered modal-xl">
                    <div className="modal-content bg-transparent border-0 text-center">
                        <div className="modal-body container-fluid overflow-auto p-0">
                            <Image className="identite-visuelle img-fluid"
                                   src={SanMarcoCarte} alt="Réseaux Sociaux"
                                   height={800} width={800}
                            />
                        </div>
                    </div>
                </div>
            </div>
            <div className="modal fade rounded-top show" id="GardeOToitLogo" aria-hidden="true"
                 aria-labelledby="" tabIndex="-1">
                <div className="modal-dialog modal-dialog-centered modal-xl">
                    <div className="modal-content bg-transparent border-0 text-center">
                        <div className="modal-body container-fluid overflow-auto p-0">
                            <Image className="identite-visuelle img-fluid"
                                   src={GardeOToitLogo} alt="Réseaux Sociaux"
                                   height={800} width={800}
                            />
                        </div>
                    </div>
                </div>
            </div>
            {/* End First Row */}

            {/* Second Row */}
            <div className="modal fade rounded-top show" id="GardeOToitAffiche" aria-hidden="true"
                 aria-labelledby="" tabIndex="-1">
                <div className="modal-dialog modal-dialog-centered modal-xl">
                    <div className="modal-content bg-transparent border-0 text-center">
                        <div className="modal-body container-fluid overflow-auto p-0">
                            <Image className="identite-visuelle img-fluid"
                                   src={GardeOToitAffiche} alt="Réseaux Sociaux"
                                   height={800} width={800}
                            />
                        </div>
                    </div>
                </div>
            </div>
            <div className="modal fade rounded-top show" id="PiaPackaging" aria-hidden="true"
                 aria-labelledby="" tabIndex="-1">
                <div className="modal-dialog modal-dialog-centered modal-xl">
                    <div className="modal-content bg-transparent border-0 text-center">
                        <div className="modal-body container-fluid overflow-auto p-0">
                            <Image className="identite-visuelle img-fluid"
                                   src={PiaPackaging} alt="Réseaux Sociaux"
                                   height={800} width={800}
                            />
                        </div>
                    </div>
                </div>
            </div>
            <div className="modal fade rounded-top show" id="MoutainTrailFeedInstagram" aria-hidden="true"
                 aria-labelledby="" tabIndex="-1">
                <div className="modal-dialog modal-dialog-centered modal-xl">
                    <div className="modal-content bg-transparent border-0 text-center">
                        <div className="modal-body container-fluid overflow-auto p-0">
                            <Image className="identite-visuelle img-fluid"
                                   src={MoutainTrailFeedInstagram} alt="Réseaux Sociaux"
                                   height={800} width={800}
                            />
                        </div>
                    </div>
                </div>
            </div>
            {/* End Second Row */}

            {/* Three Row */}
            <div className="modal fade rounded-top show" id="SpaarpleCarte" aria-hidden="true"
                 aria-labelledby="" tabIndex="-1">
                <div className="modal-dialog modal-dialog-centered modal-xl">
                    <div className="modal-content bg-transparent border-0 text-center">
                        <div className="modal-body container-fluid overflow-auto p-0">
                            <Image className="identite-visuelle img-fluid"
                                   src={SpaarpleCarte} alt="Réseaux Sociaux"
                                   height={800} width={800}
                            />
                        </div>
                    </div>
                </div>
            </div>
            <div className="modal fade rounded-top show" id="GardeOToitPackaging" aria-hidden="true"
                 aria-labelledby="" tabIndex="-1">
                <div className="modal-dialog modal-dialog-centered modal-xl">
                    <div className="modal-content bg-transparent border-0 text-center">
                        <div className="modal-body container-fluid overflow-auto p-0">
                            <Image className="identite-visuelle img-fluid"
                                   src={GardeOToitPackaging} alt="Réseaux Sociaux"
                                   height={800} width={800}
                            />
                        </div>
                    </div>
                </div>
            </div>
            <div className="modal fade rounded-top show" id="MoutainTrailLogo" aria-hidden="true"
                 aria-labelledby="" tabIndex="-1">
                <div className="modal-dialog modal-dialog-centered modal-xl">
                    <div className="modal-content bg-transparent border-0 text-center">
                        <div className="modal-body container-fluid overflow-auto p-0">
                            <Image className="identite-visuelle img-fluid"
                                   src={MoutainTrailLogo} alt="Réseaux Sociaux"
                                   height={800} width={800}
                            />
                        </div>
                    </div>
                </div>
            </div>
            {/* End Three Row */}


        </div>
    )
}