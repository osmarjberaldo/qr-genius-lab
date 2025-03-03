import { motion } from "framer-motion";
import Container from "@/components/ui-elements/Container";
import { QRCodeCanvas } from "qrcode.react";
import { Globe, User, CreditCard, Wifi, MapPin, CalendarDays } from "lucide-react";

interface ExampleQRCode {
  title: string;
  description: string;
  icon: React.ElementType;
  qrValue: string;
  bgColor: string;
  fgColor: string;
}

const Exemplos = () => {
  const examples: ExampleQRCode[] = [
    {
      title: "Cartão de Visita Digital",
      description: "QR code para compartilhar informações de contato profissional instantaneamente.",
      icon: User,
      qrValue: `BEGIN:VCARD\nVERSION:3.0\nN:Silva;João\nFN:João Silva\nORG:Gerador de QR Code Free\nTITLE:Desenvolvedor\nTEL:+5511987654321\nEMAIL:joao@exemplo.com\nURL:https://exemplo.com\nEND:VCARD`,
      bgColor: "#ffffff",
      fgColor: "#4f46e5"
    },
    {
      title: "Site Empresarial",
      description: "Direcione clientes para seu website de forma rápida e eficiente.",
      icon: Globe,
      qrValue: "https://www.exemplo.com.br",
      bgColor: "#ffffff",
      fgColor: "#0ea5e9"
    },
    {
      title: "Pagamento PIX",
      description: "Facilite pagamentos gerando QR codes PIX para sua empresa.",
      icon: CreditCard,
      qrValue: "00020126330014BR.GOV.BCB.PIX0111example@pix5204000053039865802BR5913Loja Exemplo6008BRASILIA62070503***63044297",
      bgColor: "#ffffff",
      fgColor: "#22c55e"
    },
    {
      title: "Rede Wi-Fi",
      description: "Permita que visitantes conectem-se à sua rede Wi-Fi sem digitar senha.",
      icon: Wifi,
      qrValue: "WIFI:S:Rede Exemplo;T:WPA;P:senha123;;",
      bgColor: "#ffffff",
      fgColor: "#f59e0b"
    },
    {
      title: "Localização",
      description: "Compartilhe a localização do seu estabelecimento facilmente.",
      icon: MapPin,
      qrValue: "geo:-23.5505,-46.6333?q=Av+Paulista,São+Paulo",
      bgColor: "#ffffff",
      fgColor: "#ec4899"
    },
    {
      title: "Evento",
      description: "Compartilhe detalhes de eventos e adicione-os diretamente ao calendário.",
      icon: CalendarDays,
      qrValue: `BEGIN:VEVENT\nSUMMARY:Workshop QR Code\nLOCATION:Centro de Eventos\nDESCRIPTION:Workshop sobre criação de QR Codes\nDTSTART:20240301T100000\nDTEND:20240301T170000\nEND:VEVENT`,
      bgColor: "#ffffff",
      fgColor: "#8b5cf6"
    }
  ];

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
            <h1 className="text-3xl md:text-4xl font-bold text-foreground">Exemplos de QR Codes</h1>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Explore diferentes tipos de QR codes e suas aplicações práticas no dia a dia
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 mt-8">
            {examples.map((example, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-card p-6 rounded-2xl shadow-md hover:shadow-lg transition-all border border-border"
              >
                <div className="flex items-center mb-6">
                  <div className="bg-primary/10 p-3 rounded-full mr-4">
                    <example.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold">{example.title}</h3>
                </div>
                
                <div className="flex justify-center mb-6">
                  <div className="p-4 bg-white rounded-xl shadow-sm">
                    <QRCodeCanvas
                      value={example.qrValue}
                      size={150}
                      bgColor={example.bgColor}
                      fgColor={example.fgColor}
                      level="M"
                      includeMargin={true}
                    />
                  </div>
                </div>

                <p className="text-muted-foreground text-sm">{example.description}</p>
              </motion.div>
            ))}
          </div>

          <div className="bg-accent/30 rounded-2xl p-8 mt-12">
            <h2 className="text-2xl font-bold mb-4">Por que usar QR Codes?</h2>
            <ul className="space-y-3 list-disc pl-5">
              <li>Facilite o acesso a informações digitais no mundo físico</li>
              <li>Reduza erros de digitação e melhore a experiência do usuário</li>
              <li>Economize espaço em materiais impressos</li>
              <li>Rastreie engajamento e interações com seu conteúdo</li>
              <li>Modernize sua marca com soluções tecnológicas</li>
            </ul>
          </div>
        </motion.div>
      </Container>
    </div>
  );
};

export default Exemplos;