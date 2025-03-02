
import QRCodeGenerator from "@/components/qr/QRCodeGenerator";
import { AnimatePresence } from "framer-motion";
import { motion } from "framer-motion";
import Header from "@/components/layout/Header";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-accent/20">
      <Header />
      <AnimatePresence mode="wait">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          <QRCodeGenerator />
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default Index;
