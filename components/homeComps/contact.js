import { useState } from "react";

const Contact = () => {
    const [contactData, setContactData] = useState({
        email: '',
        subject: '',
        message: '',
    });

    const {email, subject, message} = contactData;

    const hanldeChange = (e) => setContactData({ ...contactData, [e.target.name]: e.target.value });

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await fetch(`${dev ? DEV_URL : PROD_URL}/api/contact`, {
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(contactData),
            });
            console.log(res)
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <div className='mt-20'>
            <h1 className='text-3xl font-bold'>Contact</h1>
            <form 
                className="p-3 shadow-2xl dark:shadow-white/10 rounded-lg mt-10"
                onSubmit={handleSubmit}
            >
                <div className="mt-5">
                    <input 
                        className="border rounded-md dark:border-white border-gray-900 bg-transparent p-[6px] w-full focus:border-sky-600 dark:focus:border-sky-500 outline-none" 
                        type="email" 
                        placeholder="Your Email"
                        value={email}
                        onChange={hanldeChange}
                        name="email"
                    />
                </div>
                <div className="mt-5">
                    <input 
                        className="border rounded-md dark:border-white border-gray-900 bg-transparent p-[6px] w-full focus:border-sky-600 dark:focus:border-sky-500 outline-none" 
                        type="text" 
                        placeholder="Subject"
                        value={subject}
                        onChange={hanldeChange}
                        name="subject"
                    />
                </div>
                <div className="mt-5">
                    <textarea 
                        className="border rounded-md dark:border-white border-gray-900 bg-transparent p-[6px] w-full focus:border-sky-600 dark:focus:border-sky-500 outline-none h-32 resize-none" 
                        type="email" 
                        placeholder="Message"
                        value={message}
                        onChange={hanldeChange}
                        name="message"
                    />
                </div>
                <div className="mt-5">
                    <button className="py-2 rounded-md w-full border border-gray-900 bg-gray-900 text-white hover:text-gray-900 hover:bg-transparent font-bold dark:hover:border-sky-600 dark:hover:text-sky-600 dark:border-white">
                        Submit
                    </button>
                </div>
            </form>
        </div>
    );
};

export default Contact;