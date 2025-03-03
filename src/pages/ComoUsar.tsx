
import { motion } from "framer-motion";
import Container from "@/components/ui-elements/Container";
import { HelpCircle, FileText, Smartphone, Share2, Download, Settings } from "lucide-react";

const ComoUsar = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-accent/20 py-8">
      <Container maxWidth="full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="space-y-8"
        >
          <div className="text-center space-y-3">
            <h1 className="text-3xl md:text-4xl font-bold text-foreground">Como Usar o Gerador de QR Code Free</h1>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Siga este guia simples para criar QR codes personalizados em poucos passos
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 mt-8">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-card p-6 rounded-2xl shadow-md hover:shadow-lg transition-all border border-border"
              >
                <div className="flex items-center mb-4">
                  <div className="bg-primary/10 p-3 rounded-full mr-4">
                    <step.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold">Passo {index + 1}</h3>
                </div>
                <h4 className="text-lg font-medium mb-2">{step.title}</h4>
                <p className="text-muted-foreground">{step.description}</p>
              </motion.div>
            ))}
          </div>

          <div className="bg-accent/30 rounded-2xl p-8 mt-12">
            <h2 className="text-2xl font-bold mb-4">Dicas Adicionais</h2>
            <ul className="space-y-3 list-disc pl-5">
              <li>Para melhor leitura, mantenha um bom contraste entre as cores do QR code</li>
              <li>Ao adicionar um logo, certifique-se de que ele não ocupa mais de 30% do QR code</li>
              <li>Teste seu QR code em diferentes dispositivos antes de imprimir ou distribuir</li>
              <li>Quanto mais informações no QR code, mais denso ele será - mantenha simples quando possível</li>
              <li>Para uso comercial, considere adicionar sua marca ao design do QR code</li>
            </ul>
          </div>
        </motion.div>
      </Container>
    </div>
  );
};

const steps = [
  {
    icon: FileText,
    title: "Escolha o Tipo de QR Code",
    description: "Selecione entre várias opções como URL, contato, Wi-Fi, e-mail ou outros tipos disponíveis."
  },
  {
    icon: Settings,
    title: "Preencha as Informações",
    description: "Insira os dados necessários para o tipo de QR code selecionado, como URL, informações de contato, etc."
  },
  {
    icon: Smartphone,
    title: "Personalize Seu QR Code",
    description: "Altere cores, adicione um logo, ajuste os cantos ou aplique outros estilos para personalizar seu QR code."
  },
  {
    icon: HelpCircle,
    title: "Visualize em Tempo Real",
    description: "Veja as mudanças em tempo real enquanto personaliza seu QR code."
  },
  {
    icon: Download,
    title: "Baixe ou Compartilhe",
    description: "Faça o download do seu QR code em vários formatos ou compartilhe diretamente com outros."
  },
  {
    icon: Share2,
    title: "Utilize Seu QR Code",
    description: "Imprima, adicione em materiais de marketing, sites, produtos ou onde desejar usar seu QR code."
  },
];

export default ComoUsar;
