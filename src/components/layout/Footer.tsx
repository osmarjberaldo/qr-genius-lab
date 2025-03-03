import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-background/50 border-t border-border py-6 mt-auto">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-sm text-muted-foreground text-center md:text-left">
            © {new Date().getFullYear()} Gerador de QR Code Free. Todos os direitos reservados.
          </div>
          <div className="text-sm text-muted-foreground text-center md:text-right">
            Desenvolvido por{" "}
            <a
              href="https://devosmar.com.br"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:text-primary/80 transition-colors font-medium"
            >
              Osmar
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;