import { Helmet } from "react-helmet";
import Container from "@/components/ui-elements/Container";
import { motion } from "framer-motion";
import { QrCode, Code, Shield, Zap, Sparkles, BarChart } from "lucide-react";

const Sobre = () => {
  return (
    <>
      <Helmet>
        <title>Sobre o QR Code Free | Gerador de QR Code PIX Gratuito</title>
        <meta name="description" content="Conheça o QR Code Free, um gerador de QR codes gratuito e sem limitações. Crie QR codes PIX, URL, redes sociais, WiFi e muito mais, sem custos ou marcas d'água." />
        <link rel="canonical" href="https://devosmar.com.br/qrcodefree/sobre" />
      </Helmet>
      
      <div className="py-12 bg-gradient-to-br from-background to-accent/10">
        <Container maxWidth="xl" className="px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-center">Sobre o QR Code Free</h1>
            <p className="text-xl text-muted-foreground text-center mb-12">
              A ferramenta gratuita e completa para gerar QR codes personalizados
            </p>
            
            <div className="mb-12 bg-white/80 dark:bg-gray-900/80 p-8 rounded-2xl shadow-sm">
              <h2 className="text-2xl font-bold mb-4">Nossa Missão</h2>
              <p className="mb-6">
                O QR Code Free foi criado com uma missão clara: disponibilizar uma ferramenta de alta qualidade para geração de QR codes 
                que seja totalmente gratuita e sem limitações. Acreditamos que todos deveriam ter acesso a ferramentas de tecnologia sem barreiras financeiras.
              </p>
              <p>
                Diferentemente de outras ferramentas do mercado, o QR Code Free não cobra por recursos premium, não limita o número de QR codes gerados
                e não adiciona marcas d'água indesejadas. Nosso compromisso é oferecer uma experiência completa e sem restrições.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              <div className="bg-white/80 dark:bg-gray-900/80 p-6 rounded-xl shadow-sm">
                <h2 className="text-xl font-bold mb-3">Recursos Completos</h2>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <span className="text-primary mr-2">✓</span> QR Code para PIX
                  </li>
                  <li className="flex items-center">
                    <span className="text-primary mr-2">✓</span> QR Code para URLs
                  </li>
                  <li className="flex items-center">
                    <span className="text-primary mr-2">✓</span> QR Code para redes sociais
                  </li>
                  <li className="flex items-center">
                    <span className="text-primary mr-2">✓</span> QR Code para contatos (vCard)
                  </li>
                  <li className="flex items-center">
                    <span className="text-primary mr-2">✓</span> QR Code para WiFi
                  </li>
                  <li className="flex items-center">
                    <span className="text-primary mr-2">✓</span> E muito mais!
                  </li>
                </ul>
              </div>
              
              <div className="bg-white/80 dark:bg-gray-900/80 p-6 rounded-xl shadow-sm">
                <h2 className="text-xl font-bold mb-3">Vantagens do QR Code Free</h2>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <span className="text-primary mr-2">✓</span> 100% gratuito e sem restrições
                  </li>
                  <li className="flex items-center">
                    <span className="text-primary mr-2">✓</span> Sem marcas d'água
                  </li>
                  <li className="flex items-center">
                    <span className="text-primary mr-2">✓</span> Interface intuitiva e responsiva
                  </li>
                  <li className="flex items-center">
                    <span className="text-primary mr-2">✓</span> Personalização avançada
                  </li>
                  <li className="flex items-center">
                    <span className="text-primary mr-2">✓</span> Alta qualidade de imagem
                  </li>
                  <li className="flex items-center">
                    <span className="text-primary mr-2">✓</span> Suporte a vários dispositivos
                  </li>
                </ul>
              </div>
            </div>
            
            <div className="mb-12">
              <h2 className="text-2xl font-bold mb-6">Perguntas Frequentes (FAQ)</h2>
              
              <div className="space-y-4">
                <div className="bg-white/80 dark:bg-gray-900/80 p-6 rounded-xl shadow-sm">
                  <h3 className="text-lg font-bold mb-2">O QR Code Free é realmente gratuito?</h3>
                  <p>Sim, nossa ferramenta é 100% gratuita. Não cobramos nenhum valor para utilizar quaisquer recursos, não temos planos pagos nem limitações no número de QR codes que você pode gerar.</p>
                </div>
                
                <div className="bg-white/80 dark:bg-gray-900/80 p-6 rounded-xl shadow-sm">
                  <h3 className="text-lg font-bold mb-2">Os QR codes gerados têm marca d'água?</h3>
                  <p>Não! Nossos QR codes são gerados sem qualquer marca d'água. Você pode usar livremente para fins pessoais ou comerciais.</p>
                </div>
                
                <div className="bg-white/80 dark:bg-gray-900/80 p-6 rounded-xl shadow-sm">
                  <h3 className="text-lg font-bold mb-2">Posso adicionar o logo da minha empresa no QR code?</h3>
                  <p>Sim, nossa ferramenta permite adicionar logos e imagens personalizadas no centro do QR code, mantendo-o funcional e esteticamente alinhado com sua marca.</p>
                </div>
                
                <div className="bg-white/80 dark:bg-gray-900/80 p-6 rounded-xl shadow-sm">
                  <h3 className="text-lg font-bold mb-2">O QR Code PIX é seguro?</h3>
                  <p>Sim, os QR codes PIX gerados seguem o padrão oficial do Banco Central do Brasil, garantindo segurança nas transações. Nossa ferramenta não armazena suas informações financeiras.</p>
                </div>
                
                <div className="bg-white/80 dark:bg-gray-900/80 p-6 rounded-xl shadow-sm">
                  <h3 className="text-lg font-bold mb-2">Preciso criar uma conta para usar a ferramenta?</h3>
                  <p>Não é necessário criar conta ou fazer login. Basta acessar nosso site e começar a usar imediatamente.</p>
                </div>
                
                <div className="bg-white/80 dark:bg-gray-900/80 p-6 rounded-xl shadow-sm">
                  <h3 className="text-lg font-bold mb-2">Em quais formatos posso baixar os QR codes?</h3>
                  <p>Os QR codes podem ser baixados em formato PNG de alta qualidade, ideal para impressão e uso digital.</p>
                </div>
              </div>
            </div>
            
            <div className="text-center">
              <a 
                href="https://devosmar.com.br/qrcodefree/" 
                className="inline-block bg-primary text-white font-bold px-8 py-3 rounded-full hover:bg-primary/90 transition-colors"
              >
                Comece a criar QR codes gratuitamente
              </a>
            </div>
          </motion.div>
        </Container>
      </div>
    </>
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
