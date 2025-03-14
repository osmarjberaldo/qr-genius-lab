import QRCodeGenerator from "@/components/qr/QRCodeGenerator";
import { AnimatePresence } from "framer-motion";
import { motion } from "framer-motion";
import Container from "@/components/ui-elements/Container";
import { Helmet } from "react-helmet";

const Index = () => {
  return (
    <>
      <Helmet>
        <title>Gerador de QR Code PIX Grátis | Crie QR Codes Personalizados - QR Code Free</title>
        <meta name="description" content="Crie QR codes PIX grátis e personalizados online. Gerador de QR code free para PIX, URL, redes sociais, contatos, WiFi e mais. Ferramenta completa e gratuita sem marca d'água." />
        <link rel="canonical" href="https://devosmar.com.br/qrcodefree/" />
      </Helmet>
      
      <article className="min-h-screen bg-gradient-to-br from-background to-accent/20 py-8">
        <Container maxWidth="full">
          <AnimatePresence mode="wait">
            <motion.section
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="py-12 px-4"
            >
              <QRCodeGenerator />
              
              <div className="mt-16 p-6 bg-background/80 rounded-lg shadow-sm">
                <h2 className="text-2xl md:text-3xl font-bold mb-4">Como usar o Gerador de QR Code PIX Free</h2>
                <p className="mb-4">É muito fácil gerar um QR Code personalizado utilizando nossa ferramenta gratuita:</p>
                <ol className="list-decimal pl-5 space-y-2 mb-6">
                  <li>Selecione o tipo de QR Code que deseja gerar (URL, PIX, WiFi, etc.)</li>
                  <li>Preencha os dados necessários no formulário</li>
                  <li>Personalize as cores e adicione um logo (opcional)</li>
                  <li>Baixe ou compartilhe seu QR Code pronto</li>
                </ol>
                <p>O QR Code Free é uma ferramenta completamente gratuita e sem marcas d'água.</p>
              </div>
              
              <div className="mt-10 p-6 bg-accent/10 rounded-lg">
                <h2 className="text-2xl font-bold mb-4">Por que usar o QR Code Free?</h2>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                  <li className="flex items-start">
                    <span className="text-primary font-bold mr-2">✓</span>
                    <span>Totalmente gratuito, sem custos escondidos</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary font-bold mr-2">✓</span>
                    <span>Sem marcas d'água ou limitações</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary font-bold mr-2">✓</span>
                    <span>QR Codes de alta qualidade para uso comercial</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary font-bold mr-2">✓</span>
                    <span>Suporte a vários tipos de conteúdo</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary font-bold mr-2">✓</span>
                    <span>Personalização de cores e logo</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary font-bold mr-2">✓</span>
                    <span>Interface intuitiva e fácil de usar</span>
                  </li>
                </ul>
              </div>
            </motion.section>
          </AnimatePresence>
        </Container>
        
        <section className="py-10 bg-background/60 mt-10">
          <Container maxWidth="full">
            <h2 className="text-2xl md:text-3xl font-bold text-center mb-6">QR Code Free - Ferramenta completa para gerar QR Codes personalizados</h2>
            <p className="text-center max-w-3xl mx-auto">
              Nossa ferramenta gratuita permite que você crie QR codes PIX e outros tipos de QR codes personalizados 
              em segundos. Ideal para empresas, empreendedores e qualquer pessoa que precise de QR codes de alta qualidade.
            </p>
          </Container>
        </section>
      </article>
    </>
  );
};

export default Index;
