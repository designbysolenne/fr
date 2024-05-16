'use client'

import { useState } from 'react'

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
    const [filter, setFilter] = useState('all');

    const projects = [
        { id: 1, name: 'Identité visuelle Pia', type: 'identite-visuelle', image: LogoPia, modalId: 'logoPiaModal' },
        { id: 2, name: 'Packaging compléments alimentaires', type: 'packaging', image: PiaPackaging, modalId: 'PiaPackaging' },
        { id: 9, name: 'Carte de visite pour agence Web', type: 'support-communication', image: SpaarpleCarte, modalId: 'SpaarpleCarte' },
        { id: 3, name: 'Carte de visite restaurant Sicilien', type: 'support-communication', image: SanMarcoCarte, modalId: 'SanMarcoCarte' },
        { id: 4, name: 'Identité visuelle GardeOToit', type: 'identite-visuelle', image: GardeOToitLogo, modalId: 'GardeOToitLogo' },
        { id: 5, name: 'Boite de conserve pâté animal', type: 'packaging', image: GardeOToitPackaging, modalId: 'GardeOToitPackaging' },
        { id: 6, name: 'Flyer de présentation', type: 'support-communication', image: GardeOToitAffiche, modalId: 'GardeOToitAffiche' },
        { id: 7, name: 'Identité visuelle MontainTrail', type: 'identite-visuelle', image: MoutainTrailLogo, modalId: 'MoutainTrailLogo' },
        { id: 8, name: 'Feed instagram marque de randonnée', type: 'support-communication', image: MoutainTrailFeedInstagram, modalId: 'MoutainTrailFeedInstagram' },
    ];

    const filteredProjects = projects.filter(project => filter === 'all' || project.type === filter);

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
                        <button onClick={() => setFilter('all')}
                                className="mx-1 p-2 border rounded-1 btn-primary">Tous les projets
                        </button>
                        <button onClick={() => setFilter('identite-visuelle')}
                                className="mx-1 p-2 border rounded-1 btn-primary">Identité visuelle
                        </button>
                        <button onClick={() => setFilter('packaging')}
                                className="mx-1 p-2 border rounded-1 btn-primary">Packaging
                        </button>
                        <button onClick={() => setFilter('support-communication')}
                                className="mx-1 p-2 border rounded-1 btn-primary">Supports de communication
                        </button>
                    </div>
                </div>
            </div>

            <div className="container">
                <div className="row">
                    {filteredProjects.map((project, index) => (
                        <div className="col-lg-4 col-sm-6 mb-6 d-flex justify-content-center" key={project.id}>
                            <div className="card rounded-1">
                                    <Image className={project.type} src={project.image} alt={project.name}
                                           height={300} width={300}
                                    />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}