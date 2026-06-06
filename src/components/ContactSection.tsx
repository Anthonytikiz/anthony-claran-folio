import { Mail, MessageCircle, MapPin, Send } from "lucide-react";
import { useState } from "react";
import { z } from "zod";

const schema = z.object({
  name: z.string().trim().min(1, "Nom requis").max(100),
  email: z.string().trim().email("Email invalide").max(255),
  message: z.string().trim().min(1, "Message requis").max(1000),
});

const WHATSAPP = "261341252051";
const EMAIL = "anthonyrandrianandro@yahoo.com";

const ContactSection = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [error, setError] = useState<string | null>(null);

  const onChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));
  };

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const parsed = schema.safeParse(form);
    if (!parsed.success) {
      setError(parsed.error.errors[0].message);
      return;
    }
    setError(null);
    const body = encodeURIComponent(
      `Bonjour Anthony,\n\n${parsed.data.message}\n\n— ${parsed.data.name} (${parsed.data.email})`
    );
    window.location.href = `mailto:${EMAIL}?subject=${encodeURIComponent("Nouveau projet")}&body=${body}`;
  };

  return (
    <section id="contact" className="bg-muted/30">
      <div className="section-container">
        <div className="grid lg:grid-cols-5 gap-10">
          <div className="lg:col-span-2">
            <span className="eyebrow mb-4">Contact</span>
            <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4 leading-tight">
              Discutons de votre prochain projet.
            </h2>
            <p className="text-muted-foreground mb-8">
              Une idée, un besoin, un projet ? Écrivez-moi, je réponds sous 24h.
            </p>

            <div className="space-y-4">
              <a href={`mailto:${EMAIL}`} className="surface-card p-4 flex items-center gap-3 hover:border-primary">
                <div className="w-11 h-11 rounded-xl bg-blue-50 text-primary flex items-center justify-center">
                  <Mail size={18} />
                </div>
                <div>
                  <div className="text-xs text-muted-foreground">Email</div>
                  <div className="text-sm font-medium">{EMAIL}</div>
                </div>
              </a>

              <a
                href={`https://wa.me/${WHATSAPP}`}
                target="_blank"
                rel="noreferrer"
                className="surface-card p-4 flex items-center gap-3 hover:border-primary"
              >
                <div className="w-11 h-11 rounded-xl bg-green-50 text-green-600 flex items-center justify-center">
                  <MessageCircle size={18} />
                </div>
                <div>
                  <div className="text-xs text-muted-foreground">WhatsApp</div>
                  <div className="text-sm font-medium">+261 34 12 520 51</div>
                </div>
              </a>

              <div className="surface-card p-4 flex items-center gap-3">
                <div className="w-11 h-11 rounded-xl bg-blue-50 text-primary flex items-center justify-center">
                  <MapPin size={18} />
                </div>
                <div>
                  <div className="text-xs text-muted-foreground">Localisation</div>
                  <div className="text-sm font-medium">Andoharanofotsy, Antananarivo</div>
                </div>
              </div>
            </div>
          </div>

          <form onSubmit={onSubmit} className="lg:col-span-3 surface-card p-6 sm:p-8 space-y-5">
            <div>
              <label htmlFor="name" className="block text-sm font-medium mb-2">Nom</label>
              <input
                id="name" name="name" value={form.name} onChange={onChange}
                maxLength={100} required
                className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition"
                placeholder="Votre nom"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium mb-2">Email</label>
              <input
                id="email" name="email" type="email" value={form.email} onChange={onChange}
                maxLength={255} required
                className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition"
                placeholder="vous@email.com"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium mb-2">Message</label>
              <textarea
                id="message" name="message" value={form.message} onChange={onChange}
                rows={5} maxLength={1000} required
                className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition resize-none"
                placeholder="Parlez-moi de votre projet…"
              />
            </div>
            {error && <p className="text-sm text-destructive">{error}</p>}
            <button type="submit" className="btn-primary w-full sm:w-auto">
              <Send size={16} className="mr-2" /> Envoyer le message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;