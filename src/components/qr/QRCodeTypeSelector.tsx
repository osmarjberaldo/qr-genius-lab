
import { QRCodeType } from "@/types/qr-types";
import { motion } from "framer-motion";
import {
  Globe,
  User,
  CreditCard,
  Mail,
  MessageSquare,
  Wifi,
  Bitcoin,
  FileText,
  MapPin,
  Music,
  Phone,
  Smartphone,
  Image,
  Youtube,
  ShoppingBag,
  CalendarDays,
  Link2,
  MessageCircle,
} from "lucide-react";

interface QRCodeTypeSelectorProps {
  selectedType: QRCodeType;
  onTypeSelect: (type: QRCodeType) => void;
}

interface QRTypeOption {
  id: QRCodeType;
  name: string;
  icon: React.ReactNode;
  description: string;
}

const QRCodeTypeSelector = ({ selectedType, onTypeSelect }: QRCodeTypeSelectorProps) => {
  const qrTypes: QRTypeOption[] = [
    {
      id: "whatsapp",
      name: "WhatsApp",
      icon: <MessageCircle className="h-5 w-5" />,
      description: "Mensagem WhatsApp",
    },
    {
      id: "url",
      name: "URL",
      icon: <Globe className="h-5 w-5" />,
      description: "Link para página web",
    },
    {
      id: "vcard",
      name: "VCard",
      icon: <User className="h-5 w-5" />,
      description: "Contato digital",
    },
    {
      id: "pix",
      name: "PIX",
      icon: <CreditCard className="h-5 w-5" />,
      description: "Pagamento rápido",
    },
    {
      id: "email",
      name: "E-mail",
      icon: <Mail className="h-5 w-5" />,
      description: "Mensagem pré-definida",
    },
    {
      id: "sms",
      name: "SMS",
      icon: <MessageSquare className="h-5 w-5" />,
      description: "Mensagem de texto",
    },
    {
      id: "wifi",
      name: "Wi-Fi",
      icon: <Wifi className="h-5 w-5" />,
      description: "Conexão automática",
    },
    {
      id: "bitcoin",
      name: "Bitcoin",
      icon: <Bitcoin className="h-5 w-5" />,
      description: "Carteira criptomoeda",
    },
    {
      id: "pdf",
      name: "PDF/Arquivo",
      icon: <FileText className="h-5 w-5" />,
      description: "Link para documento",
    },
    {
      id: "location",
      name: "Localização",
      icon: <MapPin className="h-5 w-5" />,
      description: "Coordenadas no mapa",
    },
    {
      id: "music",
      name: "Música",
      icon: <Music className="h-5 w-5" />,
      description: "Link para streaming",
    },
    {
      id: "phone",
      name: "Telefone",
      icon: <Phone className="h-5 w-5" />,
      description: "Discagem direta",
    },
    {
      id: "app",
      name: "Aplicativo",
      icon: <Smartphone className="h-5 w-5" />,
      description: "Link para app store",
    },
    {
      id: "image",
      name: "Imagem",
      icon: <Image className="h-5 w-5" />,
      description: "Link para foto",
    },
    {
      id: "video",
      name: "Vídeo",
      icon: <Youtube className="h-5 w-5" />,
      description: "Link para vídeo",
    },
    {
      id: "store",
      name: "Loja",
      icon: <ShoppingBag className="h-5 w-5" />,
      description: "Link para e-commerce",
    },
    {
      id: "event",
      name: "Evento",
      icon: <CalendarDays className="h-5 w-5" />,
      description: "Detalhes de evento",
    },
    {
      id: "biolink",
      name: "Bio Link",
      icon: <Link2 className="h-5 w-5" />,
      description: "Cartão de visita digital",
    },
    {
      id: "text",
      name: "Texto",
      icon: <FileText className="h-5 w-5" />,
      description: "Texto simples",
    },
  ];

  // Animation variants for container
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
      },
    },
  };

  // Animation variants for items
  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.4 } },
  };

  return (
    <div className="px-2 sm:px-3 md:px-4 py-2 sm:py-3 md:py-4">
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-2 sm:gap-3"
      >
        {qrTypes.map((type) => (
          <motion.div
            key={type.id}
            variants={item}
            onClick={() => onTypeSelect(type.id)}
            className={`qr-option ${selectedType === type.id ? "active" : ""} p-2 h-auto cursor-pointer border rounded-lg ${selectedType === type.id ? "border-primary bg-primary/5" : "border-border hover:border-primary/50 hover:bg-secondary/20"}`}
          >
            <div className={`w-8 h-8 rounded-full flex items-center justify-center mb-1 mx-auto ${selectedType === type.id ? "text-primary" : "text-muted-foreground"}`}>
              {type.icon}
            </div>
            <div className="text-center space-y-0.5">
              <div className="font-medium text-xs sm:text-sm">{type.name}</div>
              <div className="text-[10px] text-muted-foreground leading-tight">{type.description}</div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default QRCodeTypeSelector;
