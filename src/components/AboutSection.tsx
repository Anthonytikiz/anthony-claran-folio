import { Code2, Palette, Smartphone, Database } from "lucide-react";

const stacks = [
  "Vue.js", "React", "Flutter", "Java", "PHP", "Laravel",
  "TypeScript", "Tailwind CSS", "Figma", "Adobe Suite",
];

const pillars = [
  { icon: Code2, title: "Développement Web", desc: "Vue.js, React, PHP, Laravel" },
  { icon: Smartphone, title: "Applications Mobile", desc: "Flutter, React Native" },
  { icon: Palette, title: "UI/UX & Design", desc: "Figma, identité visuelle" },
  { icon: Database, title: "Backend & API", desc: "Java, Node.js, bases de données" },
];

const AboutSection = () => {
  return (
    <section id="about" className="bg-muted/30">
      <div className="section-container">
        <div className="grid lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-5">
            <span className="eyebrow mb-5">À propos</span>
            <h2 className="font-heading text-3xl md:text-4xl font-bold mb-6 leading-tight">
              Un développeur designer au service de votre vision.
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Étudiant à <strong className="text-foreground">IT Andoharanofotsy</strong>, je conçois et
              développe des produits numériques complets — du wireframe au
              déploiement.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-8">
              Mon objectif : aider les entreprises à se digitaliser avec des
              interfaces claires, performantes et orientées résultats.
            </p>

            <div className="flex flex-wrap gap-2">
              {stacks.map((s) => (
                <span
                  key={s}
                  className="px-3 py-1.5 rounded-full bg-white border border-border text-sm text-foreground hover:border-primary hover:text-primary transition-colors"
                >
                  {s}
                </span>
              ))}
            </div>
          </div>

          <div className="lg:col-span-7 grid sm:grid-cols-2 gap-4">
            {pillars.map(({ icon: Icon, title, desc }) => (
              <div key={title} className="surface-card p-6">
                <div className="w-11 h-11 rounded-xl bg-blue-50 text-primary flex items-center justify-center mb-4">
                  <Icon size={22} />
                </div>
                <h3 className="font-heading font-semibold text-lg mb-1">{title}</h3>
                <p className="text-sm text-muted-foreground">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;