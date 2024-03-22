import Image from 'next/image';

import Me from '../assets/img/pictures/photo_profil_solenne.png';
import bgWave from '../assets/img/cover/hero-bg.svg';

export default function Jumbotron() {
    return (
        <section style={{ paddingTop: '7rem' }}>
            <div className="bg-holder" style={{ backgroundImage: `url(${bgWave.src})` }}></div>

            <div className="container">
                <div className="row align-items-center">
                    <div className="col-md-5 col-lg-6 order-0 order-md-1 text-end">
                        <Image
                            className="pt-7 pt-md-0 hero-img img-fluid"
                            src={Me}
                            alt="Logo"
                            height={90}
                        />
                    </div>
                    <div className="col-md-7 col-lg-6 text-md-start text-center py-6">
                        <h1 className="hero-title">Graphiste Freelance</h1>
                        <p className="mb-4 fw-medium">
                            Je crée votre identité visuelle et vos supports de communication en puisant dans
                            l’inspiration de l’océan. Ensemble, embarquons vers le succès de votre projet !
                        </p>
                        <h4 className="fw-bold text-danger mb-3">Alors, prêt à démarrer votre projet avec moi ?</h4>
                        <div className="text-center text-md-start">
                            <a className="btn btn-primary btn-lg primary-btn-shadow"
                               href="mailto:designbysolenne@gmail.com" role="button">C&apos;est parti
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}