
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
      id: "url",
      name: "URL",
      icon: <Globe className="h-6 w-6" />,
      description: "Link para página web",
    },
    {
      id: "vcard",
      name: "VCard",
      icon: <User className="h-6 w-6" />,
      description: "Contato digital",
    },
    {
      id: "pix",
      name: "PIX",
      icon: <CreditCard className="h-6 w-6" />,
      description: "Pagamento rápido",
    },
    {
      id: "email",
      name: "E-mail",
      icon: <Mail className="h-6 w-6" />,
      description: "Mensagem pré-definida",
    },
    {
      id: "sms",
      name: "SMS",
      icon: <MessageSquare className="h-6 w-6" />,
      description: "Mensagem de texto",
    },
    {
      id: "wifi",
      name: "Wi-Fi",
      icon: <Wifi className="h-6 w-6" />,
      description: "Conexão automática",
    },
    {
      id: "bitcoin",
      name: "Bitcoin",
      icon: <Bitcoin className="h-6 w-6" />,
      description: "Carteira criptomoeda",
    },
    {
      id: "pdf",
      name: "PDF/Arquivo",
      icon: <FileText className="h-6 w-6" />,
      description: "Link para documento",
    },
    {
      id: "location",
      name: "Localização",
      icon: <MapPin className="h-6 w-6" />,
      description: "Coordenadas no mapa",
    },
    {
      id: "music",
      name: "Música",
      icon: <Music className="h-6 w-6" />,
      description: "Link para streaming",
    },
    {
      id: "phone",
      name: "Telefone",
      icon: <Phone className="h-6 w-6" />,
      description: "Discagem direta",
    },
    {
      id: "app",
      name: "Aplicativo",
      icon: <Smartphone className="h-6 w-6" />,
      description: "Link para app store",
    },
    {
      id: "image",
      name: "Imagem",
      icon: <Image className="h-6 w-6" />,
      description: "Link para foto",
    },
    {
      id: "video",
      name: "Vídeo",
      icon: <Youtube className="h-6 w-6" />,
      description: "Link para vídeo",
    },
    {
      id: "store",
      name: "Loja",
      icon: <ShoppingBag className="h-6 w-6" />,
      description: "Link para e-commerce",
    },
    {
      id: "event",
      name: "Evento",
      icon: <CalendarDays className="h-6 w-6" />,
      description: "Detalhes de evento",
    },
    {
      id: "biolink",
      name: "Bio Link",
      icon: <Link2 className="h-6 w-6" />,
      description: "Cartão de visita digital",
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
    <div className="px-2 py-4">
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8"
      >
        {qrTypes.map((type) => (
          <motion.div
            key={type.id}
            variants={item}
            onClick={() => onTypeSelect(type.id)}
            className={`qr-option ${selectedType === type.id ? "active" : ""} p-8`}
          >
            <div className={`w-14 h-14 rounded-full flex items-center justify-center mb-4 ${selectedType === type.id ? "text-primary" : "text-muted-foreground"}`}>
              {type.icon}
            </div>
            <div className="text-center">
              <div className="font-medium text-sm mb-2">{type.name}</div>
              <div className="text-xs text-muted-foreground">{type.description}</div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default QRCodeTypeSelector;
