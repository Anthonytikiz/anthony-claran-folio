
import { Mail, Phone, MapPin, Send, Facebook, Instagram, Github } from "lucide-react";
import { useState } from "react";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Here you would typically send the data to your backend or email service
    alert("Message envoyé avec succès!");
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  return (
    <section id="contact" className="py-20 relative">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-purple-600/5 rounded-full filter blur-3xl"></div>
      <div className="absolute bottom-40 left-20 w-72 h-72 bg-indigo-600/5 rounded-full filter blur-3xl"></div>
      
      <div className="section-container relative z-10">
        <div className="mb-12 text-center">
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">
            <span className="gold-gradient">Me Contacter</span>
          </h2>
          <div className="luxury-divider w-24 mx-auto my-4"></div>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Vous avez un projet en tête? N'hésitez pas à me contacter pour discuter de votre vision.
          </p>
        </div>
        
        <div className="grid md:grid-cols-5 gap-8 mt-12">
          {/* Contact Info */}
          <div className="md:col-span-2">
            <div className="glass-card p-8 h-full">
              <h3 className="text-2xl font-bold mb-6 text-gray-200">Informations de contact</h3>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-purple-900/20 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                    <Mail className="text-purple-400" size={24} />
                  </div>
                  <div>
                    <h4 className="text-lg font-medium text-gray-300 mb-1">Email</h4>
                    <a href="mailto:anthonyrandrianandro@yahoo.com" className="text-purple-400 hover:text-purple-300 transition-colors">
                      anthonyrandrianandro@yahoo.com
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-purple-900/20 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                    <Phone className="text-purple-400" size={24} />
                  </div>
                  <div>
                    <h4 className="text-lg font-medium text-gray-300 mb-1">Téléphone</h4>
                    <a href="tel:+261341252051" className="text-purple-400 hover:text-purple-300 transition-colors">
                      +261 34 12 520 51
                    </a>
                    <br />
                    <a href="tel:+261383021114" className="text-purple-400 hover:text-purple-300 transition-colors">
                      +261 38 30 211 14
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-purple-900/20 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                    <MapPin className="text-purple-400" size={24} />
                  </div>
                  <div>
                    <h4 className="text-lg font-medium text-gray-300 mb-1">Localisation</h4>
                    <p className="text-gray-400">
                      Andoharanofotsy, Antananarivo<br />
                      Madagascar
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="mt-8 pt-8 border-t border-gray-800">
                <h4 className="text-lg font-medium text-gray-300 mb-4">Retrouvez-moi sur</h4>
                <div className="flex space-x-4">
                  <a href="https://github.com/Anthonytikiz/" className="w-10 h-10 rounded-full bg-gray-800 hover:bg-purple-900 flex items-center justify-center transition-colors duration-300">
                    <Github  size={18} className="mr-2" />
                    {/* <svg className="w-5 h-5 text-gray-300" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd"></path>
                    </svg> */}
                  </a>
                  <a href="https://www.instagram.com/tikizrandria?igsh=NXd2bmQ0cHdwZTJv" className="w-10 h-10 rounded-full bg-gray-800 hover:bg-purple-900 flex items-center justify-center transition-colors duration-300">
                    <Instagram  size={18} className="mr-2" />
                    {/* <svg className="w-5 h-5 text-gray-300" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd"></path>
                    </svg> */}
                  </a>
                  <a href="https://www.facebook.com/share/16B3GeiDSi/" className="w-10 h-10 rounded-full bg-gray-800 hover:bg-purple-900 flex items-center justify-center transition-colors duration-300">
                    <Facebook  size={18} className="mr-2" />
                    {/* <svg className="w-5 h-5 text-gray-300" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"></path>
                    </svg> */}
                  </a>
                </div>
              </div>
            </div>
          </div>
          
          {/* Contact Form */}
          <div className="md:col-span-3">
            <div className="glass-card p-8">
              <h3 className="text-2xl font-bold mb-6 text-gray-200">Envoyez-moi un message</h3>
              
              <form onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label htmlFor="name" className="block text-gray-300 mb-2">Nom complet</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 text-gray-200 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-colors"
                      placeholder="Votre nom"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-gray-300 mb-2">Adresse email</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 text-gray-200 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-colors"
                      placeholder="votre@email.com"
                    />
                  </div>
                </div>
                
                <div className="mb-6">
                  <label htmlFor="subject" className="block text-gray-300 mb-2">Sujet</label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 text-gray-200 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-colors"
                    placeholder="Sujet de votre message"
                  />
                </div>
                
                <div className="mb-6">
                  <label htmlFor="message" className="block text-gray-300 mb-2">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 text-gray-200 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-colors resize-none"
                    placeholder="Votre message..."
                  ></textarea>
                </div>
                
                <button 
                  type="submit"
                  className="btn-primary w-full md:w-auto flex items-center justify-center"
                >
                  <Send size={18} className="mr-2" />
                  Envoyer le message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
