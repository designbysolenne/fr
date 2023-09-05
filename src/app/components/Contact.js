import Image from "next/image";

import styles from './contact.module.css'

import CTASend from '../assets/img/cta/send.png';
import shapeOne from '../assets/img/cta/shape-bg1.png';
import shapeTwo from '../assets/img/cta/shape-bg2.png';

export default function Contact() {
    return (
        <section id="contact" className="pt-6">
            <div className="container">
                <div id={styles.divCustomBg} className="py-8 px-5 position-relative text-center">
                    <div className="position-absolute start-100 top-0 translate-middle ms-md-n3 ms-n4 mt-3">
                        <Image
                            className={styles.send}
                            src={CTASend}
                            alt="Logo"
                        />
                    </div>
                    <div className="position-absolute end-0 top-0 z-index--1">
                        <Image
                            src={shapeTwo}
                            alt="Logo"
                            height={264}
                        />
                    </div>
                    <div className="position-absolute start-0 bottom-0 ms-3 z-index--1 d-none d-sm-block">
                        <Image
                            className={styles.shapeTwoClass}
                            src={shapeOne}
                            alt="Logo"
                        />
                    </div>
                    <div className="row justify-content-center">
                        <div className="col-lg-10 col-md-10">
                            <h2 className="text-secondary lh-1-7 mb-7">Contactez-moi</h2>
                            <div className="row">
                                <div className="col-6 p-2">
                                    <div className="input-group-icon">
                                        <input className="form-control form-little-squirrel-control" type="text"
                                               placeholder="Saisir votre prénom " aria-label="firstname"/>
                                    </div>
                                </div>
                                <div className="col-6 p-2">
                                    <div className="input-group-icon">
                                        <input className="form-control form-little-squirrel-control" type="text"
                                               placeholder="Saisir votre nom" aria-label="lastname"/>
                                    </div>
                                </div>
                                <div className="col-6 p-2">
                                    <div className="input-group-icon">
                                        <input className="form-control form-little-squirrel-control" type="email"
                                               placeholder="Saisir l'email " aria-label="email"/>
                                    </div>
                                </div>
                                <div className="col-6 p-2">
                                    <div className="input-group-icon">
                                        <input className="form-control form-little-squirrel-control" type="text"
                                               placeholder="Saisir la société" aria-label="company"/>
                                    </div>
                                </div>
                                <div className="col-12 p-2">
                                    <div className="input-group-icon">
                                        <textarea className="form-control form-little-squirrel-control" type="text"
                                                  placeholder="Votre message" aria-label="message"></textarea>
                                    </div>
                                </div>
                                <div className="col-12">
                                    <button
                                        className="btn btn-primary btn-lg fs-1 me-md-4 mb-3 mb-md-0 border-0 primary-btn-shadow">Commencez
                                        l’aventure avec moi !
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
