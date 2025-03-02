
import QRCodeGenerator from "@/components/qr/QRCodeGenerator";
import { AnimatePresence } from "framer-motion";
import { motion } from "framer-motion";
import Container from "@/components/ui-elements/Container";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-accent/20 py-8">
      <Container>
        <AnimatePresence mode="wait">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="py-12 px-4"
          >
            <QRCodeGenerator />
          </motion.div>
        </AnimatePresence>
      </Container>
    </div>
  );
};

export default Index;
