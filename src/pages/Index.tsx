
import QRCodeGenerator from "@/components/qr/QRCodeGenerator";
import { AnimatePresence } from "framer-motion";

const Index = () => {
  return (
    <AnimatePresence mode="wait">
      <QRCodeGenerator />
    </AnimatePresence>
  );
};

export default Index;
