import { ContactForm } from "./components/ContactForm";

const ContactUs = () => {
  return (
    <div className="container mx-auto max-w-2xl px-4 py-4 min-h-screen">
      <div>
        <h1 className="text-4xl">Contact form</h1>
      </div>
      <div>
        <ContactForm />
      </div>
    </div>
  );
};

export default ContactUs;
