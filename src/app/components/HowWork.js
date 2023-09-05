import Image from 'next/image'

import Arrow from '../assets/img/pictures/fleche.png';

export default function HowWork() {
    return (
        <div>
            <div className="text-center my-0">
            <a href="#" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
                <Image src={Arrow} alt={"fleche"} height={400}/>
            </a>
        </div>

        <div className="modal fade"
             id="staticBackdrop"
             data-bs-backdrop="static"
             data-bs-keyboard="false"
             tabIndex="-1"
             aria-labelledby="staticBackdropLabel"
             aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered ">
                <div className="modal-content">
                    <div className="modal-header">
                        <h1 className="modal-title fs-10" id="staticBackdropLabel">Comment je fonctionne ?</h1>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                        <h4 className="dbs-text-pink">1ère Étape / Prise de contact</h4>
                        <p>Après avoir discuté ensemble de votre projet, j&apos;établis un devis répondant à vos besoins. Si vous
                            faites le choix de travailler avec moi, je vous enverrai ensuite une facture d’acompte de 50% à
                            régler avant le début du travail.
                        </p>
                        <h4 className="dbs-text-pink">2ème Étape / Proposition</h4>
                        <p>Après paiement de l’acompte, je me mets au travail et je vous présente mes propositions. Nous
                            discutons sur les éventuelles modifications à faire pour que cela corresponde au mieux à vos
                            attentes.
                        </p>
                        <h4 className="dbs-text-pink">3ème Étape / Finalisation</h4>
                        <p>Je vous présente ma conception visuelle finale et nous la validons ensemble ! Puis je vous transmet
                            votre facture.
                        </p>
                    </div>
                    <div className="modal-footer text-center">
                        <button type="button"
                                className="btn btn-primary btn-lg me-md-4 mb-3 mb-md-0 border-0 primary-btn-shadow"
                                data-bs-dismiss="modal">C&apos;est compris !
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
}
