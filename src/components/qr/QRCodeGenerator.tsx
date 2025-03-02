
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
      <Container maxWidth="2xl" className="py-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col gap-8"
        >
          <div className="flex flex-col items-center text-center mb-6">
            <motion.span 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.4 }}
              className="text-sm font-medium text-primary/70 mb-2"
            >
              GERADOR QR CODE
            </motion.span>
            <motion.h1 
              className="text-4xl md:text-5xl font-bold tracking-tight mb-3"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.5 }}
            >
              QR Genius Lab
            </motion.h1>
            <motion.p 
              className="text-muted-foreground max-w-lg mx-auto"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.5 }}
            >
              Crie QR codes personalizados para qualquer tipo de conteúdo com facilidade.
              Customize cores, formas e adicione seu logotipo.
            </motion.p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
            <div className="lg:col-span-2 order-2 lg:order-1">
              <Tabs defaultValue="type" className="w-full">
                <TabsList className="grid w-full grid-cols-3 mb-6">
                  <TabsTrigger value="type">Tipo</TabsTrigger>
                  <TabsTrigger value="content">Conteúdo</TabsTrigger>
                  <TabsTrigger value="style">Estilo</TabsTrigger>
                </TabsList>
                <TabsContent value="type" className="animate-slide-in-up space-y-4">
                  <QRCodeTypeSelector selectedType={qrType} onTypeSelect={handleTypeChange} />
                </TabsContent>
                <TabsContent value="content" className="animate-slide-in-up space-y-4">
                  <QRCodeFormContent type={qrType} data={qrData} onChange={handleDataChange} />
                </TabsContent>
                <TabsContent value="style" className="animate-slide-in-up space-y-4">
                  <QRCodeCustomization options={customization} onChange={handleCustomizationChange} />
                </TabsContent>
              </Tabs>
            </div>
            
            <div className="glass-panel lg:col-span-3 order-1 lg:order-2 p-6 flex flex-col items-center justify-center">
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
