import { useState, useEffect } from "react";
import { QRCodeCanvas } from "qrcode.react";
import PIX from "react-qrcode-pix";
import { Button } from "@/components/ui/button";
import { QRCodeType, QRCodeData, QRCodeCustomizationOptions } from "@/types/qr-types";
import { Download, Share2, RefreshCw } from "lucide-react";
import { toast } from "sonner";
import { motion } from "framer-motion";

const now = new Date().getTime().toString();

interface QRCodePreviewProps {
  data: QRCodeData;
  type: QRCodeType;
  options: QRCodeCustomizationOptions;
}

const QRCodePreview = ({ data, type, options }: QRCodePreviewProps) => {
  const [qrValue, setQrValue] = useState<string>("");
  const [pixCode, setPixCode] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [fullPIX, setFullPIX] = useState("");

  useEffect(() => {
    if (!isDataEmpty()) {
      setIsLoading(true);
      const timer = setTimeout(() => {
        generateQRValue();
        setIsLoading(false);
      }, 500);

      return () => clearTimeout(timer);
    } else {
      setQrValue("");
    }
  }, [data, type]);

  const generateQRValue = () => {
    let value = "";

    switch (type) {
      case "social":
        const socialType = data.selectedSocial || "instagram";
        if (socialType === "instagram" && data.instagram) {
          value = `https://instagram.com/${data.instagram}`;
        } else if (socialType === "facebook" && data.facebook) {
          value = `https://facebook.com/${data.facebook}`;
        } else if (socialType === "twitter" && data.twitter) {
          value = `https://twitter.com/${data.twitter}`;
        } else if (socialType === "linkedin" && data.linkedin) {
          value = `https://linkedin.com/in/${data.linkedin}`;
        } else if (socialType === "youtube" && data.youtube) {
          value = `https://youtube.com/${data.youtube}`;
        } else if (socialType === "tiktok" && data.tiktok) {
          value = `https://tiktok.com/@${data.tiktok}`;
        } else if (socialType === "pinterest" && data.pinterest) {
          value = `https://pinterest.com/${data.pinterest}`;
        } else {
          value = "";
        }
        break;
      case "whatsapp":
        const phoneNumber = data.phoneNumber?.replace(/\D/g, "") || "";
        value = `https://wa.me/${phoneNumber}${data.message ? "?text=" + encodeURIComponent(data.message) : ""}`;
        break;
      case "url":
        value = data.url || "";
        break;
      case "vcard":
        value = `BEGIN:VCARD
VERSION:3.0
N:${data.lastName || ""};${data.firstName || ""}
FN:${data.firstName || ""} ${data.lastName || ""}
ORG:${data.organization || ""}
TITLE:${data.title || ""}
TEL;TYPE=WORK,VOICE:${data.phone || ""}
EMAIL:${data.email || ""}
URL:${data.website || ""}
END:VCARD`;
        break;
      case "email":
        value = `mailto:${data.emailAddress || ""}?subject=${encodeURIComponent(data.subject || "")}&body=${encodeURIComponent(
          data.body || ""
        )}`;
        break;
      case "sms":
        value = `sms:${data.phoneNumber || ""}${data.message ? "?body=" + encodeURIComponent(data.message) : ""}`;
        break;
      case "wifi":
        value = `WIFI:S:${data.ssid || ""};T:${data.encryption || "WPA"};P:${data.password || ""};;`;
        break;
      case "bitcoin":
        value = `bitcoin:${data.address || ""}${data.amount ? "?amount=" + data.amount : ""}`;
        break;
      case "location":
        value = `geo:${data.latitude || "0"},${data.longitude || "0"}${data.query ? "?q=" + encodeURIComponent(data.query) : ""}`;
        break;
      case "event":
        const startDate = data.startDate ? new Date(data.startDate).toISOString().replace(/[-:]/g, "").replace(/\.\d+/g, "") : "";
        const endDate = data.endDate ? new Date(data.endDate).toISOString().replace(/[-:]/g, "").replace(/\.\d+/g, "") : "";
        value = `BEGIN:VEVENT
SUMMARY:${data.title || ""}
LOCATION:${data.location || ""}
DESCRIPTION:${data.description || ""}
DTSTART:${startDate}
DTEND:${endDate}
END:VEVENT`;
        break;
      case "pdf":
        value = data.url || "";
        break;
      case "phone":
        const formattedPhone = data.phoneNumber?.replace(/\D/g, "") || "";
        if (formattedPhone.length > 0) {
          // Format phone number properly for tel: protocol
          // If it already has country code (starts with 55), use it, otherwise add it
          const phoneWithCountry = formattedPhone.startsWith("55") ? formattedPhone : `55${formattedPhone}`;
          value = `tel:+${phoneWithCountry}`;
        } else {
          value = "";
        }
        break;
      case "app":
        value = data.url || "";
        break;
      case "image":
        value = data.url || "";
        break;
      case "video":
        value = data.url || "";
        break;
      case "store":
        value = data.url || "";
        break;
      case "biolink":
        value = data.url || "";
        break;
      case "music":
        if (!data.url) {
          value = "";
          break;
        }
        // Validate and format music streaming URLs
        const musicUrl = data.url.trim();
        if (musicUrl.includes("spotify.com") || 
            musicUrl.includes("music.apple.com") || 
            musicUrl.includes("music.youtube.com") || 
            musicUrl.includes("youtube.com/watch") || 
            musicUrl.includes("youtu.be") || 
            musicUrl.includes("deezer.com") || 
            musicUrl.includes("soundcloud.com")) {
          value = musicUrl.startsWith("http") ? musicUrl : `https://${musicUrl}`;
        } else {
          value = musicUrl.startsWith("http") ? musicUrl : `https://${musicUrl}`;
        }
        break;
      case "text":
        value = data.text || "";
        break;
      default:
        value = "";
    }

    setQrValue(value);
  };

  const downloadQRCode = () => {
    if (!qrValue) {
      toast.error("Preencha os dados para gerar o QR Code");
      return;
    }

    const canvas = document.getElementById("qrcode") as HTMLCanvasElement;
    if (!canvas) return;

    const url = canvas.toDataURL("image/png");
    const link = document.createElement("a");
    link.download = `qrcode-${type}-${Date.now()}.png`;
    link.href = url;
    link.click();

    toast.success("QR Code baixado com sucesso!");
  };

  const shareQRCode = async () => {
    if (!qrValue) {
      toast.error("Preencha os dados para gerar o QR Code");
      return;
    }

    const canvas = document.getElementById("qrcode") as HTMLCanvasElement;
    if (!canvas) return;

    try {
      canvas.toBlob(async (blob) => {
        if (!blob) {
          toast.error("Não foi possível gerar a imagem para compartilhamento");
          return;
        }
        
        const file = new File([blob], "qrcode.png", { type: "image/png" });
        
        if (navigator.share && navigator.canShare({ files: [file] })) {
          try {
            await navigator.share({
              title: "QR Code Compartilhado",
              text: "Aqui está seu QR Code personalizado",
              files: [file],
            });
            toast.success("QR Code compartilhado com sucesso!");
          } catch (error) {
            console.error("Error sharing:", error);
            toast.error("Compartilhamento cancelado ou não suportado");
          }
        } else {
          const url = URL.createObjectURL(blob);
          const tempLink = document.createElement('a');
          tempLink.href = url;
          tempLink.download = `qrcode-${type}-${Date.now()}.png`;
          document.body.appendChild(tempLink);
          tempLink.click();
          document.body.removeChild(tempLink);
          URL.revokeObjectURL(url);
          toast.success("QR Code baixado com sucesso!");
        }
      }, "image/png");
    } catch (error) {
      console.error("Error preparing share:", error);
      toast.error("Não foi possível compartilhar o QR Code");
    }
  };

  const isDataEmpty = () => {
    if (type === "social") {
      const socialType = data.selectedSocial || "instagram";
      if (socialType === "instagram") return !data.instagram;
      if (socialType === "facebook") return !data.facebook;
      if (socialType === "twitter") return !data.twitter;
      if (socialType === "linkedin") return !data.linkedin;
      if (socialType === "youtube") return !data.youtube;
      if (socialType === "tiktok") return !data.tiktok;
      if (socialType === "pinterest") return !data.pinterest;
      return true;
    }
    if (type === "whatsapp") return !data.phoneNumber;
    if (type === "url") return !data.url;
    if (type === "vcard") return !data.firstName && !data.lastName && !data.email && !data.phone;
    if (type === "pix") return !data.pixKey || !data.merchantName;
    if (type === "email") return !data.emailAddress;
    if (type === "sms") return !data.phoneNumber;
    if (type === "wifi") return !data.ssid;
    if (type === "bitcoin") return !data.address;
    if (type === "location") return (!data.latitude || !data.longitude) && !data.query;
    if (type === "event") return !data.title;
    if (type === "pdf") return !data.url || !data.url.toLowerCase().endsWith('.pdf');
    if (type === "app") return !data.url;
    if (type === "phone") return !data.phoneNumber;
    if (type === "image") return !data.url;
    if (type === "video") return !data.url;
    if (type === "store") return !data.url;
    if (type === "biolink") return !data.url;
    if (type === "music") return !data.url;
    if (type === "text") return !data.text;
    return true;
  };

  const getBackgroundStyle = () => {
    if (options.isGradient && options.gradientColors?.length >= 2) {
      return {
        background: `linear-gradient(135deg, ${options.gradientColors[0]}, ${options.gradientColors[1]})`,
      };
    }
    return { backgroundColor: options.bgColor };
  };

  return (
    <div className="flex flex-col items-center justify-center space-y-6 w-full p-4 sm:p-6 md:p-8 mx-auto">
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="relative w-full flex items-center justify-center"
      >
        {isLoading ? (
          <div className="w-full max-w-[500px] aspect-square flex items-center justify-center">
            <RefreshCw className="animate-spin text-primary/50" size={50} />
          </div>
        ) : isDataEmpty() ? (
          <div className="w-full max-w-[500px] aspect-square flex items-center justify-center border-2 border-dashed border-primary/20 rounded-xl">
            <p className="text-muted-foreground text-center px-4 sm:px-8 text-sm sm:text-base md:text-lg">Preencha os dados para gerar o QR Code</p>
          </div>
        ) : (
          <div
            className="p-4 sm:p-6 md:p-8 rounded-2xl shadow-lg max-w-full overflow-hidden flex items-center justify-center"
            style={getBackgroundStyle()}
          >
            {type === "pix" ? (
              <PIX
                pixkey={data.pixKey || "osmarjunioberaldo@hotmail.com"}
                merchant={data.merchantName || "Osmar Junio Beraldo"}
                city={data.city || "Bandeirantes"}
                cep={data.cep || "86.390-000"}
                code={"RQP" + now}
                amount={data.amount ? parseFloat(data.amount) : undefined}
                onLoad={setFullPIX}
                resize={Math.min(384, window.innerWidth > 768 ? 384 : window.innerWidth - 80)}
                variant="fluid"
                padding={30}
                color={options.fgColor}
                bgColor={options.isGradient ? "transparent" : options.bgColor}
                bgRounded
                divider
              />     
            ) : (
              <QRCodeCanvas
                id="qrcode"
                value={qrValue}
                size={Math.min(options.size, window.innerWidth > 768 ? options.size : window.innerWidth - 80)}
                bgColor={options.isGradient ? "transparent" : options.bgColor}
                fgColor={options.fgColor}
                level={options.level as "L" | "M" | "Q" | "H"}
                includeMargin={options.includeMargin}
                imageSettings={
                  options.imageSource
                    ? {
                        src: options.imageSource,
                        x: undefined,
                        y: undefined,
                        height: 50,
                        width: 50,
                        excavate: true,
                      }
                    : undefined
                }
              />
            )}
          </div>
        )}
      </motion.div>
      <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-4 mt-6 w-full sm:w-auto">
        <Button
          variant="outline"
          onClick={downloadQRCode}
          disabled={isDataEmpty() || isLoading}
          className="rounded-full w-full sm:w-auto"
        >
          <Download size={18} className="mr-2" />
          Baixar
        </Button>
        <Button
          onClick={shareQRCode}
          disabled={isDataEmpty() || isLoading}
          className="rounded-full w-full sm:w-auto"
        >
          <Share2 size={18} className="mr-2" />
          Compartilhar
        </Button>
      </div>

      {!isDataEmpty() && !isLoading && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.4 }}
          className="text-xs text-muted-foreground text-center max-w-xs mt-4"
        >
          <p>Escaneie o código com a câmera do seu dispositivo ou use um aplicativo leitor de QR Code.</p>
        </motion.div>
      )}
    </div>
  );
};

export default QRCodePreview;
