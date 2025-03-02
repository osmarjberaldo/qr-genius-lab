
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { QrCode } from "lucide-react";
import { ModeToggle } from "./ModeToggle";

const Header = () => {
  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="py-4 px-6 backdrop-blur-md bg-background/80 border-b sticky top-0 z-50"
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <Link to="/" className="flex items-center gap-3 hover-scale">
          <QrCode className="h-6 w-6" />
          <span className="font-semibold text-lg">QR Genius Lab</span>
        </Link>
        
        <nav className="hidden md:flex items-center gap-8">
          <Link to="/" className="animated-link font-medium">Início</Link>
          <Link to="/exemplos" className="animated-link text-muted-foreground hover:text-foreground">Exemplos</Link>
          <Link to="/como-usar" className="animated-link text-muted-foreground hover:text-foreground">Como Usar</Link>
          <Link to="/sobre" className="animated-link text-muted-foreground hover:text-foreground">Sobre</Link>
        </nav>
        
        <div className="flex items-center gap-4">
          <ModeToggle />
        </div>
      </div>
    </motion.header>
  );
};

export default Header;
