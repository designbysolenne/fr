import Image from "next/image";
import Background from "@/app/assets/img/steps/bg.png";

export default function CardSlideItem(props) {
    const { image, alternativeText, title, date } = props;

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
        </div>
    )
}
