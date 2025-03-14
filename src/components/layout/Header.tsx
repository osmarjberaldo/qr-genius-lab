import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { QrCode, Menu, X } from "lucide-react";
import { ModeToggle } from "./ModeToggle";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  // Fechar o menu mobile quando a tela for redimensionada para desktop
  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
      if (window.innerWidth >= 768) {
        setMobileMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="py-4 px-6 backdrop-blur-md bg-background/80 border-b sticky top-0 z-50"
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <Link to="/" className="flex items-center gap-3 hover-scale">
          <QrCode className="h-6 w-6 text-primary drop-shadow-sm" />
          <span className="font-bold text-lg bg-gradient-to-r from-primary to-purple-500 bg-clip-text text-transparent">QR Code Free</span>
        </Link>
        
        <nav className="hidden md:flex items-center gap-8">
          <Link to="/" className="animated-link font-medium">Início</Link>
          <Link to="/exemplos" className="animated-link text-muted-foreground hover:text-foreground">Exemplos</Link>
          <Link to="/como-usar" className="animated-link text-muted-foreground hover:text-foreground">Como Usar</Link>
          <Link to="/sobre" className="animated-link text-muted-foreground hover:text-foreground">Sobre</Link>
        </nav>
        
        <div className="flex items-center gap-4">
          <ModeToggle />
          <Button 
            variant="ghost" 
            size="icon"
            className="md:hidden text-primary hover:text-primary/80"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Menu"
          >
            {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </Button>
        </div>
      </div>

      {/* Menu Mobile */}
      {mobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.3 }}
          className="md:hidden border-t bg-background mt-4"
        >
          <nav className="flex flex-col py-4 px-6 space-y-4">
            <Link 
              to="/" 
              className="py-2 px-3 font-medium rounded-md hover:bg-secondary" 
              onClick={() => setMobileMenuOpen(false)}
            >
              Início
            </Link>
            <Link 
              to="/exemplos" 
              className="py-2 px-3 text-muted-foreground hover:text-foreground rounded-md hover:bg-secondary" 
              onClick={() => setMobileMenuOpen(false)}
            >
              Exemplos
            </Link>
            <Link 
              to="/como-usar" 
              className="py-2 px-3 text-muted-foreground hover:text-foreground rounded-md hover:bg-secondary" 
              onClick={() => setMobileMenuOpen(false)}
            >
              Como Usar
            </Link>
            <Link 
              to="/sobre" 
              className="py-2 px-3 text-muted-foreground hover:text-foreground rounded-md hover:bg-secondary" 
              onClick={() => setMobileMenuOpen(false)}
            >
              Sobre
            </Link>
          </nav>
        </motion.div>
      )}
    </motion.header>
  );
};

export default Header;
