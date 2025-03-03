
import { useState } from "react";
import QRCodePreview from "./QRCodePreview";
import QRCodeTypeSelector from "./QRCodeTypeSelector";
import QRCodeFormContent from "./QRCodeFormContent";
import QRCodeCustomization from "./QRCodeCustomization";
import Container from "../ui-elements/Container";
import { motion } from "framer-motion";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { QRCodeType, QRCodeData, QRCodeCustomizationOptions } from "@/types/qr-types";

const QRCodeGenerator = () => {
  const [qrType, setQrType] = useState<QRCodeType>("url");
  const [qrData, setQrData] = useState<QRCodeData>({ url: "" });
  const [customization, setCustomization] = useState<QRCodeCustomizationOptions>({
    fgColor: "#000000",
    bgColor: "#FFFFFF",
    includeMargin: true,
    size: 200,
    level: "M",
    imageSource: "",
    cornerType: "square",
    cornerColor: "#000000",
    isGradient: false,
    gradientColors: ["#000000", "#000000"],
  });

  const handleTypeChange = (type: QRCodeType) => {
    setQrType(type);
    setQrData({} as QRCodeData);
  };

  const handleDataChange = (data: Partial<QRCodeData>) => {
    setQrData((prev) => ({ ...prev, ...data }));
  };

  const handleCustomizationChange = (options: Partial<QRCodeCustomizationOptions>) => {
    setCustomization((prev) => ({ ...prev, ...options }));
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Container maxWidth="full" className="py-12 px-6 sm:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col gap-12"
        >
          <div className="flex flex-col items-center text-center mb-8">
            <motion.span 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.4 }}
              className="text-lg font-medium text-primary/70 mb-4"
            >
              GERADOR QR CODE PIX
            </motion.span>
            <motion.h1 
              className="text-5xl md:text-6xl font-bold tracking-tight mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.5 }}
            >
              Gerador de QR Code Free
            </motion.h1>
            <motion.p 
              className="text-muted-foreground text-lg max-w-2xl mx-auto"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.5 }}
            >
              Crie QR codes PIX personalizados para qualquer tipo de pagamento com facilidade.
              Gere QR codes PIX grátis, customize cores, formas e adicione seu logotipo.
            </motion.p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-16 lg:gap-20 min-h-[800px]">
            <div className="w-full">
              <Tabs defaultValue="type" className="w-full">
                <TabsList className="grid w-full grid-cols-3 mb-8">
                  <TabsTrigger value="type">Tipo</TabsTrigger>
                  <TabsTrigger value="content">Conteúdo</TabsTrigger>
                  <TabsTrigger value="style">Estilo</TabsTrigger>
                </TabsList>
                <TabsContent value="type" className="animate-slide-in-up space-y-8">
                  <QRCodeTypeSelector selectedType={qrType} onTypeSelect={handleTypeChange} />
                </TabsContent>
                <TabsContent value="content" className="animate-slide-in-up space-y-8">
                  <QRCodeFormContent type={qrType} data={qrData} onChange={handleDataChange} />
                </TabsContent>
                <TabsContent value="style" className="animate-slide-in-up space-y-8">
                  <QRCodeCustomization options={customization} onChange={handleCustomizationChange} />
                </TabsContent>
              </Tabs>
            </div>
            
            <div className="glass-panel p-6 sm:p-8 md:p-12 lg:p-16 flex flex-col items-center justify-center min-h-[500px] w-full max-w-3xl mx-auto rounded-3xl shadow-xl">
              <QRCodePreview 
                data={qrData} 
                type={qrType} 
                options={customization}
              />
            </div>
          </div>
        </motion.div>
      </Container>
    </div>
  );
};

export default QRCodeGenerator;
