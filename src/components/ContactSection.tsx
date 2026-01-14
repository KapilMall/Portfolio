import { Linkedin, Mail, MapPin, Phone } from "lucide-react"
import { ContactForm } from "./ContactForm"

export const ContactSection = () => {

    return (
        <section id="contact" className="py-24 px-4 relative bg-secondary/30">
            <div className="container mx-auto max-w-7xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
                    Get In <span className="text-primary"> Touch</span>
                </h2>

                {/* subheading  */}
                <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
                    Have a project in mind or want to collaborate? Feel free to reach out.
                    I'm always open to discussing new opportunities.
                </p>

                {/* contact information  */}

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    <div className="space-y-8 flex justify-center">
                        {/* inner div for background  */}
                        <div className="bg-card py-8 px-12 rounded-lg shadow-xs flex flex-col justify-between flex-1 max-w-fit ">
                            <h3 className="text-2xl font-semibold mb-6 text-center">Contact Information</h3>

                            <div className="space-y-6 flex flex-col justify-center items-center">

                                {/* Mail section  */}

                                <div className="grid grid-cols-[auto_1fr] gap-x-4 gap-y-6">
                                    <div className="p-3 rounded-full bg-primary/10">
                                        <Mail className="h-6 w-6 text-primary" />
                                    </div>
                                    <div>
                                        <h4 className="font-medium">Email</h4>
                                        <a
                                            href="mailto:mallkapil22@gmail.com"
                                            className="text-muted-foreground hover:text-primary transition-colors"
                                        >
                                            mallkapil22@gmail.com
                                        </a>
                                    </div>

                                {/* Mobile Section  */}

                                    <div className="p-3 rounded-full bg-primary/10">
                                        <Phone className="h-6 w-6 text-primary" />
                                    </div>
                                    <div>
                                        <h4 className="font-medium">Phone</h4>
                                        <a
                                            href="tel:+916397773880"
                                            className="text-muted-foreground hover:text-primary transition-colors"
                                        >
                                            +91 9220508851
                                        </a>
                                    </div>

                                {/* Location section  */}

                                    <div className="p-3 rounded-full bg-primary/10">
                                        <MapPin className="h-6 w-6 text-primary" />
                                    </div>
                                    <div>
                                        <h4 className="font-medium">Location</h4>
                                        <a
                                            className="text-muted-foreground hover:text-primary transition-colors"
                                        >
                                            New Delhi, India
                                        </a>
                                    </div>
                                </div>
                            </div>

                            {/* Social media links  */}

                            <div className="pt-8">
                                <h4 className="font-medium mb-4">Connect With Me</h4>
                                <div className="flex space-x-4 justify-center">
                                    <a href="#" target="_blank">
                                        <Linkedin />
                                    </a>
                                    <a 
                                        href="https://github.com/KapilMall"
                                        target="_blank"
                                        className="text-foreground/80 hover:text-primary transition-colors duration-300">
                                        <img 
                                            src="/projects/github-white.png"
                                            className="w-5 h-5"
                                        />
                                    </a>
                                </div>
                            </div>
                        </div>


                    </div>

                    {/* Contact Form  */}
                    
                    <ContactForm />

                </div>

            </div>
        </section>
    )
}