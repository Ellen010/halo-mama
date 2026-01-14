import React from 'react'
import emailjs from '@emailjs/browser';
import { useRef, useState } from 'react';
import useAlert from '../hooks/useAlert.jsx'
import Alert from '../components/Alert.jsx'
import TripleLogo from '/public/images/big-logo.png'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap';
import { animateWithGsap } from '../assets/constants/animations.js';

const Contact = () => {
    useGSAP(() => {
        gsap.from('#contact', {
            scrollTrigger: {
                trigger: '#contact',
                start: '20% bottom'
            },
            opacity: 0,
            scale: 2,
            duration: 2,
            ease: 'power2.inOut'
        })

        animateWithGsap('.g_fadeIn', {
            opacity: 1,
            y: 0,
            duration: 1,
            ease: 'power2.inOut'
        })
    }, []);
    const formRef = useRef();

    const { alert, showAlert, hideAlert } = useAlert();
    const [loading, setLoading] = useState(false);

    const [form, setForm] = useState({ name: '', email: '', message: '' });

    const handleChange = ({ target: { name, value } }) => {
        setForm({ ...form, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setLoading(true);

        emailjs.send(
            import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
            import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
            {
                from_name: form.name,
                from_email: form.email,
                message: form.message,
            },
            import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY,
        )
            .then(
                () => {
                    setLoading(false);
                    showAlert({
                        show: true,
                        text: 'Your message has been sent successfully. We will reply as soon as possible.',
                        type: 'success',
                    });

                    setTimeout(() => {
                        hideAlert(false);
                        setForm({
                            name: '',
                            email: '',
                            message: '',
                        });
                    }, [6000]);
                },
                (error) => {
                    setLoading(false);
                    console.error(error);

                    showAlert({
                        show: true,
                        text: "Error occurred and the message hasn't been sent",
                        type: 'danger',
                    });
                },
            );
    };

    return (
        <section id="contact">

            <h1 className="title g_fadeIn momo-signature-regular text-5xl font-extrabold">Contact</h1>
            <div className="container mx-auto flex flex-col lg:flex-row items-center justify-between">
                <div className="photo-left g_fadeIn">
                    <img src={TripleLogo} alt="Halo-mama triple logo" className="rounded-br mt-20 " />
                </div>


                <div className="w-full text-xl lg:w-1/2 ms-5 ml-30 text-justify lg:text-left leading-relaxed">
                    <p className="mini-title g_fadeIn">Contact us today</p>
                    <div className="contact-container">

                        {alert.show && <Alert {...alert} />}
                        <form ref={formRef} onSubmit={handleSubmit} className="mt-12 flex flex-col space-y-7">
                            <label className="space-y-3">
                                <span className="field-label">Votre nom</span>
                                <input
                                    type="text"
                                    name="name"
                                    value={form.name}
                                    onChange={handleChange}
                                    required
                                    className="field-input"
                                    placeholder="ex., John Doe"
                                />
                            </label>

                            <label className="space-y-3">
                                <span className="field-label">Adresse email</span>
                                <input
                                    type="email"
                                    name="email"
                                    value={form.email}
                                    onChange={handleChange}
                                    required
                                    className="field-input"
                                    placeholder="ex., johndoe@gmail.com"
                                />
                            </label>

                            <label className="space-y-3">
                                <span className="field-label">Your message</span>
                                <textarea
                                    name="message"
                                    value={form.message}
                                    onChange={handleChange}
                                    required
                                    rows={5}
                                    className="field-input"
                                    placeholder="Partagez vos réflexions ou vos questions..."
                                />
                            </label>

                            <button type="submit" disabled={loading}>
                                {loading ? "Envoi en cours..." : "Contactez-nous"}
                            </button>
                        </form>

                    </div>
                </div>

            </div>

        </section>
    )
}
export default Contact
