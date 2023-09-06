import bgWave from '../assets/img/cover/hero-bg.svg';

export default function Legacy() {
    return (
        <section style={{ paddingTop: '7rem' }}>
            <div className="bg-holder" style={{ backgroundImage: `url(${bgWave.src})` }}></div>
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-md-12 col-lg-12 text-md-start text-center py-6">
                        <h1 className="hero-title">Mentions - Legales</h1>
                        <h4 className="dbs-text-pink">Édition du site Internet</h4>
                        <p className="mb-2 fw-medium">Le site Design By Solenne (ci-après "le Site"), accessible à l’adresse
                            <a href="https://designbysolenne.com">https://designbysolenne.com</a> est édité par Solenne Loury (ci-après "l'Editeur")
                        </p>
                        <ul>
                            <li>Microentreprise ont le siège social est situé à Nantes.</li>
                            <li>Numéro de SIRET: 978 516 839 00013</li>
                        </ul>

                        <h4 className="dbs-text-pink">Rédaction du site Internet</h4>
                        <ul>
                            <li>Solenne Loury</li>
                            <li>Contact : 07.77.67.63.41</li>
                            <li>designbysolenne@gmail.com</li>
                        </ul>

                        <h4 className="dbs-text-pink">Hébergeur du site Internet</h4>
                        <ul>
                            <li>GitHub Page</li>
                        </ul>

                        <h4 className="dbs-text-pink">Droit d’auteur</h4>
                        <p className="mb-4 fw-medium">L’ensemble de ce site relève des législations françaises et
                            internationales sur le droit d’auteur et la propriété intellectuelle. Tous les droits de
                            reproduction sont réservés, y compris pour les documents iconographiques et photographiques. La
                            majorité des visuels utilisés pour mes créations sont gratuits et libres de droits.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}