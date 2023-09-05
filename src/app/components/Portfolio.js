import Image from 'next/image'

import Shape from '../assets/img/category/shape.svg';
import Background from '../assets/img/steps/bg.png';

import Affiche1 from '../assets/img/pictures/portfolio/affiche-001.png';
import Depliant1 from '../assets/img/pictures/portfolio/depliant001.jpg';
import CarteDeVisite1 from '../assets/img/pictures/portfolio/cartevisite001.png';

import Affiche2 from '../assets/img/pictures/portfolio/affiche-002.png';
import Invitation1 from '../assets/img/pictures/portfolio/invitation001.png';
import FairePart1 from '../assets/img/pictures/portfolio/faire-part001.png';

import Depliant3 from '../assets/img/pictures/portfolio/depliant003.png';
import CarteDeVisite3 from '../assets/img/pictures/portfolio/cartevisite003.png';
import Depliant2 from '../assets/img/pictures/portfolio/depliant002.png';

export default function Portfolio() {
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
                                <div className="carousel-item position-relative active">
                                    <div className="row">
                                        <div className="col-lg-4 col-sm-6 mb-6">
                                            <a href=""
                                               data-bs-toggle="modal"
                                               data-bs-target="#previewSurf">
                                                <div className="card position-relative shadow"
                                                     style={{ maxWidth: 370 }}>
                                                    <div className="position-absolute z-index--1 me-10 me-xxl-0"
                                                         style={{ right: -160, top: -210 }}>
                                                        <Image src={Background} alt={'ShapeBackground'} style={{ maxWidth: 550 }}/>
                                                    </div>
                                                    <div className="card-body p-3">
                                                        <Image className="mb-4 mt-2 rounded-2 w-100"
                                                               src={Affiche1}
                                                               alt={'booking'}
                                                               height={260}
                                                        />
                                                        <div>
                                                            <h5 className="fw-medium">Affiche surf compétiton</h5>
                                                            <p className="fs--1 mb-3 fw-medium">2023 | Design by
                                                                Solenne</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </a>
                                        </div>
                                        <div className="col-lg-4 col-sm-6 mb-6">
                                            <a href=""
                                               data-bs-toggle="modal"
                                               data-bs-target="#previewYoga">
                                                <div className="card position-relative shadow"
                                                     style={{ maxWidth: 370 }}>
                                                    <div className="position-absolute z-index--1 me-10 me-xxl-0"
                                                         style={{ right: -160, top: -210 }}>
                                                        <Image src={Background} alt={'ShapeBackground'} style={{ maxWidth: 550 }}/>
                                                    </div>
                                                    <div className="card-body p-3">
                                                        <Image className="mb-4 mt-2 rounded-2 w-100"
                                                               src={Depliant1}
                                                               alt={'booking'}
                                                               height={260}
                                                        />
                                                        <div>
                                                            <h5 className="fw-medium">Dépliant Yoga</h5>
                                                            <p className="fs--1 mb-3 fw-medium">2023 | Design by
                                                                Solenne</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </a>
                                        </div>
                                        <div className="col-lg-4 col-sm-6 mb-6">
                                            <a href=""
                                               data-bs-toggle="modal"
                                               data-bs-target="#previewCoiffure">
                                                <div className="card position-relative shadow"
                                                     style={{ maxWidth: 370 }}>
                                                    <div className="position-absolute z-index--1 me-10 me-xxl-0"
                                                         style={{ right: -160, top: -210 }}>
                                                        <Image src={Background} alt={'ShapeBackground'} style={{ maxWidth: 550 }} height={260}/>
                                                    </div>
                                                    <div className="card-body p-3">
                                                        <Image className="mb-4 mt-2 rounded-2 w-100"
                                                               src={CarteDeVisite1}
                                                               alt={'booking'}
                                                               height={260}
                                                        />
                                                        <div>
                                                            <h5 className="fw-medium">Carte de visite - Salon de
                                                                coiffure</h5>
                                                            <p className="fs--1 mb-3 fw-medium">2022 | Design by
                                                                Solenne</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <div className="carousel-item position-relative ">
                                    <div className="row">
                                        <div className="col-lg-4 col-sm-6 mb-6">
                                            <a href=""
                                               data-bs-toggle="modal"
                                               data-bs-target="#previewCoiffure">
                                                <div className="card position-relative shadow"
                                                     style={{ maxWidth: 370 }}>
                                                    <div className="position-absolute z-index--1 me-10 me-xxl-0"
                                                         style={{ right: -160, top: -210 }}>
                                                        <Image src={Background} alt={'ShapeBackground'} style={{ maxWidth: 550 }}/>
                                                    </div>
                                                    <div className="card-body p-3">
                                                        <Image className="mb-4 mt-2 rounded-2 w-100"
                                                               src={Affiche2}
                                                               alt={'booking'}
                                                               height={260}
                                                        />
                                                        <div>
                                                            <h5 className="fw-medium">Carte de visite - Salon de
                                                                coiffure</h5>
                                                            <p className="fs--1 mb-3 fw-medium">2022 | Design by
                                                                Solenne</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </a>
                                        </div>
                                        <div className="col-lg-4 col-sm-6 mb-6">
                                            <a href=""
                                               data-bs-toggle="modal"
                                               data-bs-target="#previewPetSitter">
                                                <div className="card position-relative shadow"
                                                     style={{ maxWidth: 370 }}>
                                                    <div className="position-absolute z-index--1 me-10 me-xxl-0"
                                                         style={{ right: -160, top: -210 }}>
                                                        <Image src={Background} alt={'ShapeBackground'} style={{ maxWidth: 550 }}/>
                                                    </div>
                                                    <div className="card-body p-3">
                                                        <Image className="mb-4 mt-2 rounded-2 w-100"
                                                               src={Depliant2}
                                                               alt={'booking'}
                                                               height={260}
                                                        />
                                                        <div>
                                                            <h5 className="fw-medium">Dépliant Pet-Sitter</h5>
                                                            <p className="fs--1 mb-3 fw-medium">2022 | Design by
                                                                Solenne</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </a>
                                        </div>
                                        <div className="col-lg-4 col-sm-6 mb-6">
                                            <a href=""
                                               data-bs-toggle="modal"
                                               data-bs-target="#previewWedding">
                                                <div className="card position-relative shadow"
                                                     style={{ maxWidth: 370 }}>
                                                    <div className="position-absolute z-index--1 me-10 me-xxl-0"
                                                         style={{ right: -160, top: -210 }}>
                                                        <Image src={Background} alt={'ShapeBackground'} style={{ maxWidth: 550 }}/>
                                                    </div>
                                                    <div className="card-body p-3">
                                                        <Image className="mb-4 mt-2 rounded-2 w-100"
                                                               src={FairePart1}
                                                               alt={'booking'}
                                                               height={260}
                                                        />
                                                        <div>
                                                            <h5 className="fw-medium">Faire-part mariage</h5>
                                                            <p className="fs--1 mb-3 fw-medium">2017 | Design by
                                                                Solenne</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <div className="carousel-item position-relative ">
                                    <div className="row">
                                        <div className="col-lg-4 col-sm-6 mb-6">
                                            <a href=""
                                               data-bs-toggle="modal"
                                               data-bs-target="#previewSkateboard">
                                                <div className="card position-relative shadow" style={{ maxWidth: 370 }}>
                                                    <div className="position-absolute z-index--1 me-10 me-xxl-0" style={{ right: -160, top: -210 }}>
                                                        <Image src={Background} alt={'ShapeBackground'} style={{ maxWidth: 550 }}/>
                                                    </div>
                                                    <div className="card-body p-3">
                                                        <Image className="mb-4 mt-2 rounded-2 w-100"
                                                               src={Invitation1}
                                                               alt={'booking'}
                                                               height={260}
                                                        />
                                                        <div>
                                                            <h5 className="fw-medium">Affiche Skateboard</h5>
                                                            <p className="fs--1 mb-3 fw-medium">2022 | Design by
                                                                Solenne</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </a>
                                            <a href=""
                                            data-bs-toggle="modal"
                                            data-bs-target="#previewWedding">
                                            <div className="card position-relative shadow"
                                                  style={{ maxWidth: 370 }}>
                                                <div className="position-absolute z-index--1 me-10 me-xxl-0"
                                                     style={{ right: -160, top: -210 }}>
                                                    <Image src={Background} alt={'ShapeBackground'} style={{ maxWidth: 550 }}/>
                                                </div>
                                                <div className="card-body p-3">
                                                    <Image className="mb-4 mt-2 rounded-2 w-100"
                                                           src={FairePart1}
                                                           alt={'booking'}
                                                           height={260}
                                                    />
                                                    <div>
                                                        <h5 className="fw-medium">Faire-part mariage</h5>
                                                        <p className="fs--1 mb-3 fw-medium">2017 | Design by
                                                            Solenne</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </a>
                                        </div>
                                        <div className="col-lg-4 col-sm-6 mb-6">
                                            <a href=""
                                               data-bs-toggle="modal"
                                               data-bs-target="#previewRestaurant">
                                                <div className="card position-relative shadow"
                                                     style={{ maxWidth: 370 }}>
                                                    <div className="position-absolute z-index--1 me-10 me-xxl-0"
                                                         style={{ right: -160, top: -210 }}>
                                                        <Image src={Background} alt={'ShapeBackground'} style={{ maxWidth: 550 }} height={260}/>

                                                    </div>
                                                    <div className="card-body p-3">
                                                        <Image className="mb-4 mt-2 rounded-2 w-100"
                                                               src={Depliant3}
                                                               alt={'booking'}
                                                               height={260}
                                                        />
                                                        <div>
                                                            <h5 className="fw-medium">Dépliant restaurant</h5>
                                                            <p className="fs--1 mb-3 fw-medium">2023 | Design by
                                                                Solenne</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </a>
                                        </div>
                                        <div className="col-lg-4 col-sm-6 mb-6">
                                            <a href=""
                                               data-bs-toggle="modal"
                                               data-bs-target="#preview">
                                                <div className="card position-relative shadow"
                                                     style={{ maxWidth: 370 }}>
                                                    <div className="position-absolute z-index--1 me-10 me-xxl-0"
                                                         style={{ right: -160, top: -210 }}>
                                                        <Image src={Background} alt={'ShapeBackground'} style={{ maxWidth: 550 }}/>
                                                    </div>
                                                    <div className="card-body p-3">
                                                        <Image className="mb-4 mt-2 rounded-2 w-100"
                                                               src={CarteDeVisite3}
                                                               alt={'booking'}
                                                               height={260}
                                                        />
                                                        <div>
                                                            <h5 className="fw-medium">Carte de visite -
                                                                Kinésithérapeute</h5>
                                                            <p className="fs--1 mb-3 fw-medium">2022 | Design by
                                                                Solenne</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div
                            className="carousel-navigation  d-flex flex-column flex-between-center text-center position-relative position-absolute top-50 start-50 translate-middle"
                            style={{ height: 60, width: 20, rotate: 90 }}>
                            <button className="carousel-control-prev position-static"
                                    type="button"
                                    data-bs-target="#testimonialIndicator1"
                                    data-bs-slide="prev">
                                <img src="public/assets/img/icons/up.svg" width="16" alt="icon"/>
                            </button>
                            <button className="carousel-control-next position-static"
                                    type="button"
                                    data-bs-target="#testimonialIndicator1"
                                    data-bs-slide="next">
                                <img src="public/assets/img/icons/down.svg" width="16" alt="icon"/>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}