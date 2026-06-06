import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Hery R.",
    role: "Fondateur, Palmier Madagascar",
    text: "Anthony a su capturer l’âme de notre marque. Le résultat dépasse nos attentes — moderne et fidèle à nos traditions.",
  },
  {
    name: "Sarah M.",
    role: "Product Manager",
    text: "Travail très propre, livré dans les délais. La communication a été fluide du début à la fin du projet.",
  },
  {
    name: "Jean L.",
    role: "CEO, Stellar Bikes",
    text: "De l’identité visuelle au site web, tout est cohérent. On a enfin une présence digitale à la hauteur de notre ambition.",
  },
];

const TestimonialsSection = () => {
  return (
    <section id="testimonials" className="bg-background">
      <div className="section-container">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="eyebrow mb-4">Témoignages</span>
          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">
            Ce que disent mes clients
          </h2>
          <p className="text-muted-foreground">
            Des collaborations basées sur la confiance et l’écoute.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <figure key={t.name} className="surface-card p-7">
              <div className="flex gap-0.5 mb-4 text-primary">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} size={16} fill="currentColor" />
                ))}
              </div>
              <blockquote className="text-foreground leading-relaxed mb-5">
                “{t.text}”
              </blockquote>
              <figcaption className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-blue-50 text-primary flex items-center justify-center font-semibold">
                  {t.name[0]}
                </div>
                <div>
                  <div className="font-semibold text-sm">{t.name}</div>
                  <div className="text-xs text-muted-foreground">{t.role}</div>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;