import { cn } from "@/lib/utils";
import { CircleCheckBig, Ellipsis, Send } from "lucide-react";
import { useRef, useState } from "react";
import { toast } from "react-toastify";
import emailjs from '@emailjs/browser';

export const ContactForm = () => {

    const formRef = useRef<HTMLFormElement>(null);
    const [status, setStatus] = useState('');

    // had to use VITE_ prefix infront of env variables or it was returning undefined. 

    // Reason: You’re using Vite, and Vite will NOT expose env vars unless they start with VITE_.

    const EmailJsConfig = {
        serviceId: import.meta.env.VITE_EMAILJS_SERVICE_ID,
        templateID: import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
    }

    const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setStatus('Sending Email...')

        if (!formRef.current) {
            console.error('Form ref is null');
            return;
        }

        emailjs.sendForm(
            EmailJsConfig.serviceId,
            EmailJsConfig.templateID,
            formRef.current,
            EmailJsConfig.publicKey
        ).then(() => {
            setStatus('Message Sent...');
            formRef.current?.reset();
            toast("Message Sent Successfully...")
        }).catch((error: any) => {
            setStatus('Failed to send Message');
            console.log('EmailJs error: ', error);
            toast("Could not sent the Message...")
        })
    }

    return (
        <div 
            className="bg-card p-8 rounded-lg shadow-xs"
        >
            <h3 className="text-2xl font-semibold mb-6">Send a Message</h3>
            <form ref={formRef} className="space-y-6" onSubmit={sendEmail}>
                {/* Name  */}
                <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-2 text-left">
                    Your Name
                    </label>
                    <input 
                        type="text"
                        id="name"
                        name="name"
                        required
                        className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary"
                        placeholder="john Doe"
                    />
                </div>

                {/* Email  */}

                <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-2 text-left">
                        Your Email
                    </label>
                    <input 
                        type="email"
                        id="email"
                        name="email"
                        required
                        className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary"
                        placeholder="john@gmail.com"
                    />
                </div>

                {/* Message  */}

                <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-2 text-left">
                        Your Message
                    </label>
                    <textarea 
                        id="message"
                        name="message"
                        required
                        className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary"
                        placeholder="Hello, I'd like to talk about..."
                    />
                </div>

                {/* button  */}

                <button
                    type="submit"
                    className={cn(
                        "cosmic-button w-full items-center flex justify-center gap-2"
                    )}
                >   
                    { status === 'Sending Email...' ? "Sending" : status === "Message Sent..." ? 'Message Sent' : "Send Message" }
                        { status === "Message Sent..." 
                            ? <CircleCheckBig size = {16}/> 
                            : status === "Sending Email..."
                            ? <span className="self-end">
                                <Ellipsis size={16}/>
                              </span>
                            : <Send size={16}/>  
                        }
                </button>

                {status === "Message Sent..." && <p>Thank you for contacting me. I’ll get back to you as soon as possible.</p>}
            </form>
        </div>
    )
}