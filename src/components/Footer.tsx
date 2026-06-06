import { Github, Instagram, Facebook } from "lucide-react";

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-border bg-background">
      <div className="max-w-6xl mx-auto px-6 sm:px-8 py-10 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="text-sm text-muted-foreground">
          © {year} <span className="text-foreground font-semibold">Anthony Claran</span>. Tous droits réservés.
        </div>
        <div className="flex items-center gap-2">
          {[
            { Icon: Github, href: "https://github.com/Anthonytikiz/" },
            { Icon: Instagram, href: "https://www.instagram.com/tikizrandria" },
            { Icon: Facebook, href: "https://www.facebook.com/share/16B3GeiDSi/" },
          ].map(({ Icon, href }, i) => (
            <a
              key={i}
              href={href}
              target="_blank"
              rel="noreferrer"
              className="w-9 h-9 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary transition-colors"
            >
              <Icon size={16} />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;