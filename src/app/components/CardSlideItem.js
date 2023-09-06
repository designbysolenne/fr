import Image from "next/image";
import Background from "@/app/assets/img/steps/bg.png";

export default function CardSlideItem(props) {
    const { image, alternativeText, title, date, id } = props;

    return (
        <div className="card position-relative shadow" style={{ maxWidth: 370 }}>
            <div className="position-absolute z-index--1 me-10 me-xxl-0" style={{ right: -160, top: -210 }}>
                <Image src={Background} alt={'ShapeBackground'} style={{ maxWidth: 550 }}/>
            </div>
            <div className="card-body p-3">
                <Image className="mb-4 mt-2 rounded-2 w-100"
                       src={image}
                       alt={alternativeText}
                       height={260}
                       width={260}
                />
                <div>
                    <h5 className="fw-medium">{title}</h5>
                    <p className="fs--1 mb-3 fw-medium">{date} | Design by Solenne</p>
                </div>
            </div>

            <div className="modal fade"
                 id={id}
                 data-bs-backdrop="static"
                 tabIndex="-1"
                 aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered ">
                    <div className="modal-content">
                        <div className="modal-body">
                            <button type="button" className="btn-close float-end" data-bs-dismiss="modal"
                                    aria-label="Close"></button>
                            <Image className="img-fluid mb-4 mt-2 rounded-2 w-100"
                                   src={image}
                                   alt={alternativeText}
                                   height={260}
                                   width={260}
                            />
                            <button type="button"
                                    className="btn btn-primary me-md-4 mb-3 mb-md-0 border-0 primary-btn-shadow float-end"
                                    data-bs-dismiss="modal">Fermer
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
