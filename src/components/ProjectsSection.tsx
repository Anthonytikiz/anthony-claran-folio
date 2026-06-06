import { ArrowUpRight } from "lucide-react";
import profilyAsset from "@/assets/project-profily.png.asset.json";
import palmierAsset from "@/assets/project-palmier.png.asset.json";
import stellarAsset from "@/assets/project-stellar.png.asset.json";

const projects = [
  {
    title: "Palmier Madagascar",
    problem: "Une marque locale sans identité visuelle forte.",
    solution: "Création d’un logo et d’une stratégie marketing inspirée des traditions malgaches.",
    result: "+40% de reconnaissance de marque sur les réseaux sociaux.",
    image: assets2,
    tags: ["Branding", "Marketing", "Visuel"],
    link: null,
  },
  {
    title: "Profily",
    problem: "Les recruteurs peinent à trouver les bons profils localement.",
    solution: "Une plateforme type LinkedIn pour faciliter la mise en relation candidats / employeurs.",
    result: "Prototype Figma complet, prêt pour le développement.",
    image: assets1,
    tags: ["UI/UX", "Figma", "Product Design"],
    link: "https://www.figma.com/design/jobDb7ToSg4nF5yb21h3WM/Untitled?node-id=80-787&t=4U9nne8h0HpOntTE-1",
  },
  {
    title: "Stellar",
    problem: "Une entreprise de bicyclette sans présence digitale.",
    solution: "Identité visuelle complète + site web et ERP Dolibarr intégré.",
    result: "Plateforme e-commerce fonctionnelle et image de marque cohérente.",
    image: assets3,
    tags: ["Vue.js", "Figma", "Dolibarr"],
    link: "https://www.figma.com/design/3Vi8jIrFKsfROPYjoui1xR/Stellar?node-id=0-1&t=COpJx22GbLblxs9g-1",
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="bg-background">
      <div className="section-container">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
          <div>
            <span className="eyebrow mb-4">Projets</span>
            <h2 className="font-heading text-3xl md:text-4xl font-bold tracking-tight">
              Sélection de réalisations récentes
            </h2>
          </div>
          <p className="text-muted-foreground max-w-md">
            Une vision claire du problème, une exécution soignée et des
            résultats mesurables.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p) => (
            <article key={p.title} className="surface-card overflow-hidden group">
              <div className="aspect-[4/3] overflow-hidden bg-muted">
                <img
                  src={p.image}
                  alt={p.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <div className="flex items-start justify-between mb-3">
                  <h3 className="font-heading text-lg font-semibold">{p.title}</h3>
                  {p.link && (
                    <a
                      href={p.link}
                      target="_blank"
                      rel="noreferrer"
                      className="w-9 h-9 rounded-full bg-muted hover:bg-primary hover:text-primary-foreground flex items-center justify-center transition-colors"
                      aria-label={`Voir ${p.title}`}
                    >
                      <ArrowUpRight size={16} />
                    </a>
                  )}
                </div>

                <ul className="text-sm text-muted-foreground space-y-1.5 mb-4">
                  <li><strong className="text-foreground">Problème :</strong> {p.problem}</li>
                  <li><strong className="text-foreground">Solution :</strong> {p.solution}</li>
                  <li><strong className="text-foreground">Résultat :</strong> {p.result}</li>
                </ul>

                <div className="flex flex-wrap gap-1.5">
                  {p.tags.map((t) => (
                    <span key={t} className="text-xs px-2.5 py-1 bg-blue-50 text-blue-700 rounded-md font-medium">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;