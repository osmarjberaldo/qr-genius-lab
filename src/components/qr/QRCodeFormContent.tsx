
import { useState, useEffect } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { 
  Select, 
  SelectContent, 
  SelectItem, 
  SelectTrigger, 
  SelectValue 
} from "@/components/ui/select";
import { QRCodeType, QRCodeData } from "@/types/qr-types";
import { motion } from "framer-motion";

interface QRCodeFormContentProps {
  type: QRCodeType;
  data: QRCodeData;
  onChange: (data: Partial<QRCodeData>) => void;
}

const QRCodeFormContent = ({ type, data, onChange }: QRCodeFormContentProps) => {
  const [focusedInput, setFocusedInput] = useState<string | null>(null);

  useEffect(() => {
    setFocusedInput(null);
  }, [type]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    onChange({ [name]: value });
  };

  const handleSelectChange = (name: string, value: string) => {
    onChange({ [name]: value });
  };

  const renderFormByType = () => {
    switch (type) {
      case "url":
        return (
          <div className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="url">URL</Label>
              <Input
                id="url"
                name="url"
                placeholder="https://exemplo.com"
                value={data.url || ""}
                onChange={handleChange}
                onFocus={() => setFocusedInput("url")}
                onBlur={() => setFocusedInput(null)}
              />
            </div>
          </div>
        );

      case "vcard":
        return (
          <div className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="firstName">Nome</Label>
                <Input
                  id="firstName"
                  name="firstName"
                  placeholder="João"
                  value={data.firstName || ""}
                  onChange={handleChange}
                  onFocus={() => setFocusedInput("firstName")}
                  onBlur={() => setFocusedInput(null)}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="lastName">Sobrenome</Label>
                <Input
                  id="lastName"
                  name="lastName"
                  placeholder="Silva"
                  value={data.lastName || ""}
                  onChange={handleChange}
                  onFocus={() => setFocusedInput("lastName")}
                  onBlur={() => setFocusedInput(null)}
                />
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="organization">Empresa/Organização</Label>
              <Input
                id="organization"
                name="organization"
                placeholder="Nome da empresa"
                value={data.organization || ""}
                onChange={handleChange}
                onFocus={() => setFocusedInput("organization")}
                onBlur={() => setFocusedInput(null)}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="title">Cargo</Label>
              <Input
                id="title"
                name="title"
                placeholder="Desenvolvedor"
                value={data.title || ""}
                onChange={handleChange}
                onFocus={() => setFocusedInput("title")}
                onBlur={() => setFocusedInput(null)}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="phone">Telefone</Label>
              <Input
                id="phone"
                name="phone"
                placeholder="(11) 98765-4321"
                value={data.phone || ""}
                onChange={handleChange}
                onFocus={() => setFocusedInput("phone")}
                onBlur={() => setFocusedInput(null)}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">E-mail</Label>
              <Input
                id="email"
                name="email"
                placeholder="joao@exemplo.com"
                value={data.email || ""}
                onChange={handleChange}
                onFocus={() => setFocusedInput("email")}
                onBlur={() => setFocusedInput(null)}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="website">Website</Label>
              <Input
                id="website"
                name="website"
                placeholder="https://exemplo.com"
                value={data.website || ""}
                onChange={handleChange}
                onFocus={() => setFocusedInput("website")}
                onBlur={() => setFocusedInput(null)}
              />
            </div>
          </div>
        );

      case "pix":
        return (
          <div className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="pixKey">Chave PIX</Label>
              <Input
                id="pixKey"
                name="pixKey"
                placeholder="CPF, E-mail, Telefone ou Chave Aleatória"
                value={data.pixKey || ""}
                onChange={handleChange}
                onFocus={() => setFocusedInput("pixKey")}
                onBlur={() => setFocusedInput(null)}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="merchantName">Nome do Recebedor</Label>
              <Input
                id="merchantName"
                name="merchantName"
                placeholder="João Silva"
                value={data.merchantName || ""}
                onChange={handleChange}
                onFocus={() => setFocusedInput("merchantName")}
                onBlur={() => setFocusedInput(null)}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="amount">Valor (opcional)</Label>
              <Input
                id="amount"
                name="amount"
                placeholder="100.00"
                value={data.amount || ""}
                onChange={handleChange}
                onFocus={() => setFocusedInput("amount")}
                onBlur={() => setFocusedInput(null)}
              />
            </div>
          </div>
        );

      case "email":
        return (
          <div className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="emailAddress">Destinatário</Label>
              <Input
                id="emailAddress"
                name="emailAddress"
                placeholder="destinatario@exemplo.com"
                value={data.emailAddress || ""}
                onChange={handleChange}
                onFocus={() => setFocusedInput("emailAddress")}
                onBlur={() => setFocusedInput(null)}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="subject">Assunto</Label>
              <Input
                id="subject"
                name="subject"
                placeholder="Assunto do e-mail"
                value={data.subject || ""}
                onChange={handleChange}
                onFocus={() => setFocusedInput("subject")}
                onBlur={() => setFocusedInput(null)}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="body">Mensagem</Label>
              <Textarea
                id="body"
                name="body"
                placeholder="Conteúdo do e-mail"
                value={data.body || ""}
                onChange={handleChange}
                onFocus={() => setFocusedInput("body")}
                onBlur={() => setFocusedInput(null)}
                rows={4}
              />
            </div>
          </div>
        );

      case "sms":
        return (
          <div className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="phoneNumber">Número de Telefone</Label>
              <Input
                id="phoneNumber"
                name="phoneNumber"
                placeholder="+5511987654321"
                value={data.phoneNumber || ""}
                onChange={handleChange}
                onFocus={() => setFocusedInput("phoneNumber")}
                onBlur={() => setFocusedInput(null)}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="message">Mensagem (opcional)</Label>
              <Textarea
                id="message"
                name="message"
                placeholder="Conteúdo da mensagem"
                value={data.message || ""}
                onChange={handleChange}
                onFocus={() => setFocusedInput("message")}
                onBlur={() => setFocusedInput(null)}
                rows={4}
              />
            </div>
          </div>
        );

      case "wifi":
        return (
          <div className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="ssid">Nome da Rede (SSID)</Label>
              <Input
                id="ssid"
                name="ssid"
                placeholder="Nome da rede Wi-Fi"
                value={data.ssid || ""}
                onChange={handleChange}
                onFocus={() => setFocusedInput("ssid")}
                onBlur={() => setFocusedInput(null)}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="password">Senha</Label>
              <Input
                id="password"
                name="password"
                type="password"
                placeholder="Senha da rede Wi-Fi"
                value={data.password || ""}
                onChange={handleChange}
                onFocus={() => setFocusedInput("password")}
                onBlur={() => setFocusedInput(null)}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="encryption">Tipo de Segurança</Label>
              <Select
                name="encryption"
                value={data.encryption || "WPA"}
                onValueChange={(value) => handleSelectChange("encryption", value)}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Selecione o tipo de segurança" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="WPA">WPA/WPA2/WPA3</SelectItem>
                  <SelectItem value="WEP">WEP</SelectItem>
                  <SelectItem value="nopass">Sem Senha</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        );

      case "bitcoin":
        return (
          <div className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="address">Endereço da Carteira</Label>
              <Input
                id="address"
                name="address"
                placeholder="bc1qxy2kgdygjrsqtzq2n0yrf2493p83kkfjhx0wlh"
                value={data.address || ""}
                onChange={handleChange}
                onFocus={() => setFocusedInput("address")}
                onBlur={() => setFocusedInput(null)}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="amount">Valor em BTC (opcional)</Label>
              <Input
                id="amount"
                name="amount"
                placeholder="0.001"
                value={data.amount || ""}
                onChange={handleChange}
                onFocus={() => setFocusedInput("amount")}
                onBlur={() => setFocusedInput(null)}
              />
            </div>
          </div>
        );

      case "location":
        return (
          <div className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="query">Endereço ou Local</Label>
              <Input
                id="query"
                name="query"
                placeholder="Av. Paulista, São Paulo"
                value={data.query || ""}
                onChange={handleChange}
                onFocus={() => setFocusedInput("query")}
                onBlur={() => setFocusedInput(null)}
              />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="latitude">Latitude</Label>
                <Input
                  id="latitude"
                  name="latitude"
                  placeholder="-23.5505"
                  value={data.latitude || ""}
                  onChange={handleChange}
                  onFocus={() => setFocusedInput("latitude")}
                  onBlur={() => setFocusedInput(null)}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="longitude">Longitude</Label>
                <Input
                  id="longitude"
                  name="longitude"
                  placeholder="-46.6333"
                  value={data.longitude || ""}
                  onChange={handleChange}
                  onFocus={() => setFocusedInput("longitude")}
                  onBlur={() => setFocusedInput(null)}
                />
              </div>
            </div>
          </div>
        );

      case "event":
        return (
          <div className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="title">Título do Evento</Label>
              <Input
                id="title"
                name="title"
                placeholder="Conferência de Tecnologia"
                value={data.title || ""}
                onChange={handleChange}
                onFocus={() => setFocusedInput("title")}
                onBlur={() => setFocusedInput(null)}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="location">Local</Label>
              <Input
                id="location"
                name="location"
                placeholder="Centro de Convenções, São Paulo"
                value={data.location || ""}
                onChange={handleChange}
                onFocus={() => setFocusedInput("location")}
                onBlur={() => setFocusedInput(null)}
              />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="startDate">Data de Início</Label>
                <Input
                  id="startDate"
                  name="startDate"
                  type="datetime-local"
                  value={data.startDate || ""}
                  onChange={handleChange}
                  onFocus={() => setFocusedInput("startDate")}
                  onBlur={() => setFocusedInput(null)}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="endDate">Data de Término</Label>
                <Input
                  id="endDate"
                  name="endDate"
                  type="datetime-local"
                  value={data.endDate || ""}
                  onChange={handleChange}
                  onFocus={() => setFocusedInput("endDate")}
                  onBlur={() => setFocusedInput(null)}
                />
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="description">Descrição</Label>
              <Textarea
                id="description"
                name="description"
                placeholder="Detalhes sobre o evento"
                value={data.description || ""}
                onChange={handleChange}
                onFocus={() => setFocusedInput("description")}
                onBlur={() => setFocusedInput(null)}
                rows={3}
              />
            </div>
          </div>
        );

      // Add more cases here for other QR code types

      default:
        return (
          <div className="p-4 border border-dashed rounded-lg flex items-center justify-center">
            <p className="text-muted-foreground">Selecione um tipo de QR Code para continuar</p>
          </div>
        );
    }
  };

  const animationVariants = {
    initial: { opacity: 0, x: -20 },
    animate: { opacity: 1, x: 0, transition: { duration: 0.3 } },
    exit: { opacity: 0, x: 20, transition: { duration: 0.3 } },
  };

  return (
    <motion.div
      key={type}
      variants={animationVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      className="space-y-6"
    >
      {renderFormByType()}
    </motion.div>
  );
};

export default QRCodeFormContent;
