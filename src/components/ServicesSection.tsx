import { Globe, Smartphone, Palette, Sparkles, Check } from "lucide-react";

const services = [
  {
    icon: Globe,
    title: "Création de sites web",
    desc: "Sites vitrines, landing pages et plateformes sur-mesure, rapides et SEO-friendly.",
    items: ["Landing pages", "Sites vitrine", "E-commerce"],
  },
  {
    icon: Smartphone,
    title: "Applications mobiles",
    desc: "Apps cross-platform performantes avec Flutter et React Native.",
    items: ["iOS & Android", "API REST", "Maintenance"],
  },
  {
    icon: Palette,
    title: "UI/UX Design",
    desc: "Interfaces intuitives, prototypes interactifs et design systems sur Figma.",
    items: ["Wireframes", "Prototypage", "Design system"],
  },
  {
    icon: Sparkles,
    title: "Branding & identité",
    desc: "Logos, chartes graphiques et supports visuels qui racontent votre marque.",
    items: ["Logo", "Charte graphique", "Supports print"],
  },
];

const ServicesSection = () => {
  return (
    <section id="services" className="bg-muted/30 relative">
      <div className="section-container">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="eyebrow mb-4">Services</span>
          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">
            Ce que je peux faire pour vous
          </h2>
          <p className="text-muted-foreground">
            De la première idée au produit livré : un accompagnement complet,
            design et technique.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
          {services.map(({ icon: Icon, title, desc, items }) => (
            <div key={title} className="surface-card p-6 flex flex-col">
              <div className="w-12 h-12 rounded-xl bg-blue-50 text-primary flex items-center justify-center mb-5">
                <Icon size={22} />
              </div>
              <h3 className="font-heading font-semibold text-lg mb-2">{title}</h3>
              <p className="text-sm text-muted-foreground mb-5">{desc}</p>
              <ul className="space-y-2 mt-auto">
                {items.map((i) => (
                  <li key={i} className="flex items-center gap-2 text-sm text-foreground">
                    <Check size={14} className="text-primary" /> {i}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;