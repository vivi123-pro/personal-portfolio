
import { useState } from 'react';
import contact from "../assets/contact.jfif"

const Contact = ({darkMode}) => {
    const [status, setStatus] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        const form = e.target;
        const formData = new FormData(form);
        
        setStatus('sending');

        try {
            // Replace 'YOUR_FORMSPREE_ENDPOINT' with your actual Formspree endpoint
            // Get your endpoint from https://formspree.io/forms/YOUR_FORM_ID
            const response = await fetch('https://formspree.io/f/xkovrzzj', {
                method: 'POST',
                body: formData,
                headers: {
                    'Accept': 'application/json'
                }
            });

            if (response.ok) {
                setStatus('success');
                form.reset();
            } else {
                setStatus('error');
            }
        } catch (error) {
            setStatus('error');
        }
    };

    return (
          <section
          id="contact"
          style={{
            backgroundColor: darkMode ? "#111827" : "#f9fafb"
          }}
          className="py-12 sm:py-16 md:py-20 lg:py-24 overflow-hidden">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-8 sm:mb-10 md:mb-12"
                data-aos="fade-up">
                    <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-2 sm:mb-3"
                    style={{
                        color: darkMode ? "white" : "#1f2937"
                    }}> Get In <span 
                    style={{
                        background: "linear-gradient(to right, #f97316, #f59e0b)",
                        WebkitBackgroundClip: "text",
                        backgroundClip: "text",
                        color:"transparent"

                    }}>Touch</span>

                    </h2>
                    <p
                    className="text-base sm:text-lg md:text-xl"
                    style={{
                        color: darkMode ? "#d1d5db" : "#6b7280"
                    }}>Let's discuss your project</p>

                </div>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 md:gap-10 items-center">
                    <div className="flex justify-center order-2 lg:order-1"
                    data-aos="fade-right">
                        <img src={contact}
                        alt="Contact" 
                        className="w-full max-w-xs sm:max-w-sm lg:max-w-md h-auto object-contain opacity-90 mix-blend-multiply rounded-lg"
                        style={{ filter: darkMode ? 'brightness(0.9)' : 'none' }}
                        />

                    </div>
                    <form onSubmit={handleSubmit}
                    style={{
                        backgroundColor : darkMode ? "linear-gradient(to right, #1f2937, #111827)" 
                        : "linear-gradient(to right, #ffffff, #f9fafb)",
                        borderColor : darkMode ? "#374151" : "#e5e7eb"
                    }}
                    className="rounded-xl p-4 sm:p-5 md:p-6 lg:p-8 border-shadow-lg
                    "
                    data-aos="fade-left">
                        <div
                        className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4
                        mb-3 sm:mb-4">
                            <input
                            type="text"
                            name="firstName"
                            placeholder="First Name"
                            style={{
                                backgroundColor : darkMode ? "#374151" : "#faefd3",
                                borderColor: darkMode ? "#4b5563" : "#d1d5db",
                                color: darkMode ? "white" : "#1f2937"
                            }}
                            className="w-full px-3 sm:px-4 py-2 sm:py-3 rounded-lg text-sm
                            sm:text-base focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20
                            transition-all"  required/>
                        
                            <input
                            type="text"
                            name="lastName"
                            placeholder="Last Name"
                            style={{
                                backgroundColor : darkMode ? "#374151" : "#faefd3",
                                borderColor: darkMode ? "#4b5563" : "#d1d5db",
                                color: darkMode ? "white" : "#1f2937"
                            }}
                            className="w-full px-3 sm:px-4 py-2 sm:py-3 rounded-lg text-sm
                            sm:text-base focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20
                            transition-all"  required/>
                      
                            <input
                            type="email"
                            name="email"
                            placeholder="Email address"
                            style={{
                                backgroundColor : darkMode ? "#374151" : "#faefd3",
                                borderColor: darkMode ? "#4b5563" : "d1d5db",
                                color: darkMode ? "white" : "#1f2937"
                            }}
                            className="w-full px-3 sm:px-4 py-2 sm:py-3 rounded-lg text-sm
                            sm:text-base focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20
                            transition-all"  required/>
                       
                            <input
                            type="tel"
                            name="phone"
                            placeholder="Phone Number:"
                            style={{
                                backgroundColor : darkMode ? "#374151" : "#faefd3",
                                borderColor: darkMode ? "#4b5563" : "#d1d5db",
                                color: darkMode ? "white" : "#1f2937"
                            }}
                            className="w-full px-3 sm:px-4 py-2 sm:py-3 rounded-lg text-sm
                            sm:text-base focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20
                            transition-all"/>

                            <textarea
                            rows="4"
                            name="message"
                            placeholder="Your Message"
                            style={{
                                backgroundColor : darkMode ? "#374151" : "#faefd3",
                                borderColor: darkMode ? "#4b5563" : "#d1d5db",
                                color: darkMode ? "white" : "#1f2937"
                            }}
                            className="col-span-2 w-full px-3 sm:px-4 py-2 sm:py-3 rounded-lg text-sm
                            sm:text-base focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20
                            transition-all mb-4 sm:mb-6 resize-none"  required/>

                           
                                                </div>
                                                 <button
                            type="submit"
                            disabled={status === 'sending'}
                            style={{
                                background: "linear-gradient(to right, #f97316, #f59e0b)"
                            }}
                            className="w-full py-3 text-white font-semibold rounded-lg text-base 
                            hover:shadow-lg hover:shadow-orange-500/25 hover:scale-[1.02] transition-all
                            disabled:opacity-50 disabled:cursor-not-allowed">
                                {status === 'sending' ? 'Sending...' : 'Send Message'}
                            </button>
                            
                            {status === 'success' && (
                                <p className="mt-3 text-center text-green-500 font-medium">
                                    Message sent successfully!
                                </p>
                            )}
                            {status === 'error' && (
                                <p className="mt-3 text-center text-red-500 font-medium">
                                    Failed to send message. Please try again.
                                </p>
                            )}


                    </form>

                </div>

            </div>
            
          </section>
    )
}

export default Contact;