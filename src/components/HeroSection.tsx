import { ArrowRight, Sparkles } from "lucide-react";
import photo from "@/assets/rectangle-4.png";

const HeroSection = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center pt-28 pb-16 overflow-hidden"
    >
      {/* Soft background */}
      <div className="absolute inset-0 grid-pattern opacity-40 [mask-image:radial-gradient(ellipse_at_center,black,transparent_70%)]" />
      <div className="absolute top-20 -right-32 w-[480px] h-[480px] bg-blue-200/40 rounded-full blur-3xl" />
      <div className="absolute -bottom-32 -left-32 w-[420px] h-[420px] bg-indigo-200/40 rounded-full blur-3xl" />

      <div className="relative section-container !py-0">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 animate-fade-in">
            <span className="eyebrow mb-6">
              <Sparkles size={14} /> Disponible pour de nouveaux projets
            </span>

            <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-[1.05] tracking-tight mb-6">
              Je conçois des produits{" "}
              <span className="text-gradient">digitaux modernes</span> pour les
              entreprises ambitieuses.
            </h1>

            <p className="text-lg text-muted-foreground max-w-xl mb-8 leading-relaxed">
              Salut, moi c’est <strong className="text-foreground">Anthony Claran Randrianantoandro</strong>{" "}
              (alias Tikiz Randria). Fullstack Developer & UI/UX Designer, je
              crée des sites web et applications qui aident les entreprises à
              digitaliser leurs services.
            </p>

            <div className="flex flex-wrap gap-3">
              <a href="#projects" className="btn-primary group">
                Voir mes projets
                <ArrowRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />
              </a>
              <a href="#contact" className="btn-secondary">
                Me contacter
              </a>
            </div>

            <div className="mt-12 flex items-center gap-8 text-sm text-muted-foreground">
              <div>
                <div className="text-2xl font-bold text-foreground">15+</div>
                Projets livrés
              </div>
              <div className="w-px h-10 bg-border" />
              <div>
                <div className="text-2xl font-bold text-foreground">3+</div>
                Années d’expérience
              </div>
              <div className="w-px h-10 bg-border" />
              <div>
                <div className="text-2xl font-bold text-foreground">100%</div>
                Clients satisfaits
              </div>
            </div>
          </div>

          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-tr from-blue-500/30 to-indigo-500/20 rounded-3xl blur-2xl" />
              <div className="relative w-72 h-80 sm:w-80 sm:h-96 rounded-3xl overflow-hidden border border-border shadow-2xl bg-white">
                <img src={photo} alt="Anthony Claran" className="w-full h-full object-cover" />
              </div>
              <div className="absolute -bottom-5 -left-5 bg-white rounded-2xl shadow-xl border border-border p-4 flex items-center gap-3 animate-float">
                <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center">
                  <span className="text-primary font-bold">AC</span>
                </div>
                <div className="text-sm">
                  <div className="font-semibold text-foreground">Fullstack & UI/UX</div>
                  <div className="text-muted-foreground text-xs">Antananarivo · MG</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;