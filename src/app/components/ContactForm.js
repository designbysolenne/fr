'use client';

import React, { useState } from 'react';

export default function ContactForm({ onSubmit }) {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [company, setCompany] = useState('');
    const [userMessage, setUserMessage] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();

        if (!firstName || !lastName || !email || !userMessage) {
            alert('Veuillez remplir tous les champs obligatoires.');
            return;
        }

        const formData = {
            firstName,
            lastName,
            email,
            company,
            userMessage,
        };

        onSubmit(formData);
    };

    return (
        <form onSubmit={handleSubmit}>
            <div className="row justify-content-center">
                <div className="col-lg-10 col-md-10">
                    <h2 className="text-secondary lh-1-7 mb-7">Contactez-moi</h2>
                    <div className="row">
                        <div className="col-6 p-2">
                            <div className="input-group-icon">
                                <input
                                    className="form-control form-little-squirrel-control"
                                    type="text"
                                    placeholder="Saisir votre prénom"
                                    aria-label="firstname"
                                    value={firstName}
                                    onChange={(e) => setFirstName(e.target.value)}
                                />
                            </div>
                        </div>
                        <div className="col-6 p-2">
                            <div className="input-group-icon">
                                <input
                                    className="form-control form-little-squirrel-control"
                                    type="text"
                                    placeholder="Saisir votre nom"
                                    aria-label="lastname"
                                    value={lastName}
                                    onChange={(e) => setLastName(e.target.value)}
                                />
                            </div>
                        </div>
                        <div className="col-6 p-2">
                            <div className="input-group-icon">
                                <input
                                    className="form-control form-little-squirrel-control"
                                    type="email"
                                    placeholder="Saisir l'email"
                                    aria-label="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                            </div>
                        </div>
                        <div className="col-6 p-2">
                            <div className="input-group-icon">
                                <input
                                    className="form-control form-little-squirrel-control"
                                    type="text"
                                    placeholder="Saisir la société"
                                    aria-label="company"
                                    value={company}
                                    onChange={(e) => setCompany(e.target.value)}
                                />
                            </div>
                        </div>
                        <div className="col-12 p-2">
                            <div className="input-group-icon">
                                <textarea
                                    name="message"
                                    className="form-control form-little-squirrel-control"
                                    type="text"
                                    placeholder="Votre message"
                                    aria-label="message"
                                    value={userMessage}
                                    onChange={(e) => setUserMessage(e.target.value)}
                                />
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
        </form>
    );
}
