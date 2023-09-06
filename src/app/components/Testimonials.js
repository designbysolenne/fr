export default function Testimonials() {
    return (
        <section id="testimonial">
            <div className="container mt-7">
                <div className="row">
                    <div className="col-lg-5">
                        <div className="mb-8 text-start">
                            <h3 className="fw-bold font-cursive text-capitalize">Experiences partagees</h3>
                            <h5 className="text-secondary">Des clients satisfaits témoignent de mon expertise.</h5>
                        </div>
                    </div>
                    <div className="col-lg-1"></div>
                    <div className="col-lg-6">
                        <div className="pe-7 ps-5 ps-lg-0">
                            <div className="carousel slide carousel-fade position-static" id="testimonialIndicator"
                                 data-bs-ride="carousel">
                                <div className="carousel-indicators">
                                    <button className="active" type="button" data-bs-target="#testimonialIndicator"
                                            data-bs-slide-to="0" aria-current="true"
                                            aria-label="Testimonial 0"></button>
                                    <button className="false" type="button" data-bs-target="#testimonialIndicator"
                                            data-bs-slide-to="1" aria-current="true"
                                            aria-label="Testimonial 1"></button>
                                    <button className="false" type="button" data-bs-target="#testimonialIndicator"
                                            data-bs-slide-to="2" aria-current="true"
                                            aria-label="Testimonial 2"></button>
                                </div>
                                <div className="carousel-inner">
                                    <div className="carousel-item position-relative active">
                                        <div className="card shadow" style={{ borderRadius: 10 }}>
                                            <div className="card-body p-4">
                                                <p className="fw-medium mb-4">&quot;Solenne a fait des affiches
                                                    magnifiques pour mon mariage et dans le thème. Très réactive pour
                                                    les modifications et d&apos;une extrême gentillesse&quot;</p>
                                                <h5 className="dbs-text-blue">Elodie.L</h5>
                                                <p className="fw-medium fs--1 mb-0">Vendée</p>
                                            </div>
                                        </div>
                                        <div
                                            className="card shadow-sm position-absolute top-0 z-index--1 mb-3 w-100 h-100"
                                            style={{ borderRadius: 10, transform:'translate(25px, 25px)' }}></div>
                                    </div>
                                    <div className="carousel-item position-relative ">
                                        <div className="card shadow" style={{ borderRadius: 10 }}>
                                            <div className="card-body p-4">
                                                <p className="fw-medium mb-4">&quot;Très satisfait du travail, efficace
                                                    et sympathique, je la recommande pour tous vos projets&quot;</p>
                                                <h5 className="text-secondary">Anonyme</h5>
                                                <p className="fw-medium fs--1 mb-0">Rennes</p>
                                            </div>
                                        </div>
                                        <div
                                            className="card shadow-sm position-absolute top-0 z-index--1 mb-3 w-100 h-100"
                                            style={{ borderRadius: 10, transform:'translate(25px, 25px)' }}></div>
                                    </div>
                                    <div className="carousel-item position-relative ">
                                        <div className="card shadow"  style={{ borderRadius: 10 }}>
                                            <div className="card-body p-4">
                                                <p className="fw-medium mb-4">&quot;Cerne très bien les attentes des
                                                    clients. S&apos;adapte aux demandes. Très rapide, professionnel et
                                                    efficace. Je recommande.&quot;</p>
                                                <h5 className="dbs-text-blue">Mélissa.G</h5>
                                                <p className="fw-medium fs--1 mb-0">Vosges</p>
                                            </div>
                                        </div>
                                        <div
                                            className="card shadow-sm position-absolute top-0 z-index--1 mb-3 w-100 h-100"
                                            style={{ borderRadius: 10, transform:'translate(25px, 25px)' }}
                                        ></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}