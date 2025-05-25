import "./Styles/Contact.css"
import { useRef, useState } from 'react'
import emailjs from 'emailjs-com'
import { Mail, Phone, MapPin, Send } from "lucide-react"

export function Contact() {
    const form = useRef()
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [submitStatus, setSubmitStatus] = useState('')

    const sendEmail = (e) => {
        e.preventDefault()
        setIsSubmitting(true)
        setSubmitStatus('')

        emailjs.sendForm('service_8peruyi', 'template_o71465q', form.current, '7uqEu84nLKKRlrmaX')
          .then((result) => {
              console.log(result.text)
              setSubmitStatus('success')
              form.current.reset()
              setIsSubmitting(false)
          }, (error) => {
              console.log(error.text)
              setSubmitStatus('error')
              setIsSubmitting(false)
          })
    }

    const contactInfo = [
        {
            icon: <Mail className="contactIcon" />,
            title: "Email",
            value: "luisg31209@gmail.com",
            link: "mailto:luisg31209@gmail.com"
        },
        {
            icon: <Phone className="contactIcon" />,
            title: "Phone",
            value: "+1 (915) 227-2188",
            link: "tel:+19152272188"
        },
        {
            icon: <MapPin className="contactIcon" />,
            title: "Location",
            value: "El Paso, Texas, US",
            link: null
        }
    ]

    return (
        <section id="contact" className="contactSection">
            <div className="backgroundOverlay"></div>

            <div className="container">
                <div className="header">
                    <h2 className="title">Get In Touch</h2>
                    <p className="subtitle">
                        Have a project in mind or want to collaborate? I'd love to hear from you. 
                        Send me a message and I'll get back to you as soon as possible.
                    </p>
                </div>

                <div className="contactContent">
                    <div className="contactForm">
                        <h3 className="formTitle">Send Message</h3>
                        <form ref={form} onSubmit={sendEmail} className="form">
                            <div className="inputGroup">
                                <label className="label">Name</label>
                                <input 
                                    type="text" 
                                    name="user_name" 
                                    className="input"
                                    required 
                                />
                            </div>
                            
                            <div className="inputGroup">
                                <label className="label">Email</label>
                                <input 
                                    type="email" 
                                    name="user_email" 
                                    className="input"
                                    required 
                                />
                            </div>
                            
                            <div className="inputGroup">
                                <label className="label">Message</label>
                                <textarea 
                                    name="message" 
                                    className="textarea"
                                    rows="5"
                                    required
                                ></textarea>
                            </div>

                            <button
                                type="submit"
                                className={`submitButton ${isSubmitting ? 'submitting' : ''}`}
                                disabled={isSubmitting}
                            >
                                <Send className="buttonIcon" />
                                {isSubmitting ? 'Sending...' : 'Send Message'}
                            </button>

                            {submitStatus === 'success' && (
                                <div className="statusMessage success">
                                    Message sent successfully! I'll get back to you soon.
                                </div>
                            )}

                            {submitStatus === 'error' && (
                                <div className="statusMessage error">
                                    Failed to send message. Please try again.
                                </div>
                            )}
                        </form>
                    </div>

                    <div className="contactInfo">
                        <h3 className="infoTitle">Contact Information</h3>
                        <p className="infoSubtitle">
                            Feel free to reach out through any of these channels.
                        </p>

                        <div className="infoList">
                            {contactInfo.map((info, index) => (
                                <div key={index} className="infoItem">
                                    <div className="iconContainer">
                                        {info.icon}
                                    </div>
                                    <div className="infoContent">
                                        <h4 className="infoLabel">{info.title}</h4>
                                        {info.link ? (
                                            <a href={info.link} className="infoValue link">
                                                {info.value}
                                            </a>
                                        ) : (
                                            <p className="infoValue">{info.value}</p>
                                        )}
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className="additionalInfo">
                            <h4 className="additionalTitle">Let's Connect</h4>
                            <p className="additionalText">
                                I'm always interested in discussing new opportunities, 
                                innovative projects, and potential collaborations. 
                                Don't hesitate to reach out!
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Contact