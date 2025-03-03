
import { motion } from "framer-motion";
import Container from "@/components/ui-elements/Container";
import { QrCode, Code, Shield, Zap, Sparkles, BarChart } from "lucide-react";

const Sobre = () => {
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
            <div className="flex justify-center mb-4">
              <div className="bg-primary/10 p-4 rounded-full">
                <QrCode className="h-12 w-12 text-primary" />
              </div>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold text-foreground">Sobre o Gerador de QR Code Free</h1>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Uma ferramenta avançada para criar QR codes personalizados para qualquer necessidade
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 mt-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="prose prose-lg dark:prose-invert max-w-none"
            >
              <h2>Nossa Missão</h2>
              <p>
                Gerador de QR Code Free nasceu da necessidade de criar QR codes personalizados e visualmente atrativos que vão além da funcionalidade básica.
                Nossa missão é proporcionar uma ferramenta que combine simplicidade de uso com opções avançadas de personalização.
              </p>
              <p>
                Acreditamos que os QR codes não precisam ser apenas funcionais, mas também podem ser parte integrante do design da sua marca,
                aumentando o engajamento e reconhecimento entre seus clientes e usuários.
              </p>
              <h2 className="mt-8">Tecnologia</h2>
              <p>
                Desenvolvemos o Gerador de QR Code Free utilizando tecnologias modernas como React, Tailwind CSS e bibliotecas especializadas para 
                garantir QR codes que são não apenas visualmente atraentes, mas também altamente compatíveis e funcionais em qualquer dispositivo.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <div className="grid gap-4 sm:grid-cols-2">
                {features.map((feature, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: 0.5 + (index * 0.1) }}
                    className="bg-card p-5 rounded-xl shadow-sm hover:shadow-md transition-all border border-border"
                  >
                    <div className="bg-primary/10 p-2 rounded-full w-fit mb-3">
                      <feature.icon className="h-5 w-5 text-primary" />
                    </div>
                    <h3 className="font-medium text-lg mb-2">{feature.title}</h3>
                    <p className="text-muted-foreground text-sm">{feature.description}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>

          <div className="bg-primary/5 rounded-2xl p-8 mt-12 border border-primary/20">
            <h2 className="text-2xl font-bold mb-6 text-center">Por Que Escolher o Gerador de QR Code Free?</h2>
            <div className="grid gap-6 md:grid-cols-3">
              <div className="text-center">
                <h3 className="font-semibold text-lg mb-2">Personalização</h3>
                <p className="text-muted-foreground">Opções avançadas de personalização para criar QR codes únicos e alinhados com sua marca</p>
              </div>
              <div className="text-center">
                <h3 className="font-semibold text-lg mb-2">Facilidade</h3>
                <p className="text-muted-foreground">Interface intuitiva que permite criar QR codes profissionais em poucos minutos</p>
              </div>
              <div className="text-center">
                <h3 className="font-semibold text-lg mb-2">Versatilidade</h3>
                <p className="text-muted-foreground">Suporte a diversos tipos de conteúdo para atender a qualquer necessidade</p>
              </div>
            </div>
          </div>
        </motion.div>
      </Container>
    </div>
  );
};

const features = [
  {
    icon: Sparkles,
    title: "Personalização",
    description: "Amplas opções para personalizar cores, formas e estilos dos seus QR codes."
  },
  {
    icon: Zap,
    title: "Rápido & Fácil",
    description: "Crie QR codes em segundos com nossa interface intuitiva e eficiente."
  },
  {
    icon: Shield,
    title: "Seguro",
    description: "Seus dados são processados localmente e nunca armazenados em nossos servidores."
  },
  {
    icon: Code,
    title: "Múltiplos Formatos",
    description: "Faça download em PNG, SVG, PDF ou EPS para qualquer uso necessário."
  },
  {
    icon: BarChart,
    title: "Rastreamento",
    description: "Opção para monitorar escaneamentos e coletar dados analíticos dos seus QR codes."
  },
  {
    icon: QrCode,
    title: "Compatibilidade",
    description: "QR codes testados para garantir leitura em qualquer dispositivo ou aplicativo."
  },
];

export default Sobre;
