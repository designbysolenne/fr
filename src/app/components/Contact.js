import Image from "next/image";

import { sendEmail } from '../utils/email.js';

import styles from './contact.module.css'

import CTASend from '../assets/img/cta/send.png';
import shapeOne from '../assets/img/cta/shape-bg1.png';
import shapeTwo from '../assets/img/cta/shape-bg2.png';
import dynamic from "next/dynamic";

const ContactForm = dynamic(
    () => import('./ContactForm'), { ssr: false }
);

export default function Contact({ to, from, subject, message }) {

    const handleSubmit = async (formData) => {
        // Pass formData to sendEmail function
        try {
            await sendEmail({ ...formData, to, from, subject, message });
            console.log('Email sent successfully!');
        } catch (error) {
            console.error('Error sending email:', error);
        }
    };


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
                    <ContactForm onSubmit={handleSubmit} />
                </div>
            </div>
        </section>
    )
}
