
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
      case "social":
        return (
          <div className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="selectedSocial">Selecione a Rede Social</Label>
              <Select
                name="selectedSocial"
                value={data.selectedSocial || "instagram"}
                onValueChange={(value) => handleSelectChange("selectedSocial", value)}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Selecione a rede social" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="instagram">Instagram</SelectItem>
                  <SelectItem value="facebook">Facebook</SelectItem>
                  <SelectItem value="twitter">Twitter</SelectItem>
                  <SelectItem value="linkedin">LinkedIn</SelectItem>
                  <SelectItem value="youtube">YouTube</SelectItem>
                  <SelectItem value="tiktok">TikTok</SelectItem>
                  <SelectItem value="pinterest">Pinterest</SelectItem>
                </SelectContent>
              </Select>
            </div>
            
            {data.selectedSocial === "instagram" && (
              <div className="space-y-2">
                <Label htmlFor="instagram">Nome de Usuário do Instagram</Label>
                <Input
                  id="instagram"
                  name="instagram"
                  placeholder="@seuperfil"
                  value={data.instagram || ""}
                  onChange={(e) => {
                    const value = e.target.value.replace(/^@/, ""); // Remove @ if user types it
                    onChange({ instagram: value });
                  }}
                  onFocus={() => setFocusedInput("instagram")}
                  onBlur={() => setFocusedInput(null)}
                />
                <p className="text-xs text-muted-foreground">
                  Digite seu nome de usuário sem o @
                </p>
              </div>
            )}
            
            {data.selectedSocial === "facebook" && (
              <div className="space-y-2">
                <Label htmlFor="facebook">Nome de Usuário do Facebook</Label>
                <Input
                  id="facebook"
                  name="facebook"
                  placeholder="seuperfil"
                  value={data.facebook || ""}
                  onChange={handleChange}
                  onFocus={() => setFocusedInput("facebook")}
                  onBlur={() => setFocusedInput(null)}
                />
              </div>
            )}
            
            {data.selectedSocial === "twitter" && (
              <div className="space-y-2">
                <Label htmlFor="twitter">Nome de Usuário do Twitter</Label>
                <Input
                  id="twitter"
                  name="twitter"
                  placeholder="@seuperfil"
                  value={data.twitter || ""}
                  onChange={(e) => {
                    const value = e.target.value.replace(/^@/, ""); // Remove @ if user types it
                    onChange({ twitter: value });
                  }}
                  onFocus={() => setFocusedInput("twitter")}
                  onBlur={() => setFocusedInput(null)}
                />
                <p className="text-xs text-muted-foreground">
                  Digite seu nome de usuário sem o @
                </p>
              </div>
            )}
            
            {data.selectedSocial === "linkedin" && (
              <div className="space-y-2">
                <Label htmlFor="linkedin">Nome de Usuário do LinkedIn</Label>
                <Input
                  id="linkedin"
                  name="linkedin"
                  placeholder="seuperfil"
                  value={data.linkedin || ""}
                  onChange={handleChange}
                  onFocus={() => setFocusedInput("linkedin")}
                  onBlur={() => setFocusedInput(null)}
                />
              </div>
            )}
            
            {data.selectedSocial === "youtube" && (
              <div className="space-y-2">
                <Label htmlFor="youtube">Nome do Canal do YouTube</Label>
                <Input
                  id="youtube"
                  name="youtube"
                  placeholder="@seucanal"
                  value={data.youtube || ""}
                  onChange={handleChange}
                  onFocus={() => setFocusedInput("youtube")}
                  onBlur={() => setFocusedInput(null)}
                />
              </div>
            )}
            
            {data.selectedSocial === "tiktok" && (
              <div className="space-y-2">
                <Label htmlFor="tiktok">Nome de Usuário do TikTok</Label>
                <Input
                  id="tiktok"
                  name="tiktok"
                  placeholder="@seuperfil"
                  value={data.tiktok || ""}
                  onChange={(e) => {
                    const value = e.target.value.replace(/^@/, ""); // Remove @ if user types it
                    onChange({ tiktok: value });
                  }}
                  onFocus={() => setFocusedInput("tiktok")}
                  onBlur={() => setFocusedInput(null)}
                />
                <p className="text-xs text-muted-foreground">
                  Digite seu nome de usuário sem o @
                </p>
              </div>
            )}
            
            {data.selectedSocial === "pinterest" && (
              <div className="space-y-2">
                <Label htmlFor="pinterest">Nome de Usuário do Pinterest</Label>
                <Input
                  id="pinterest"
                  name="pinterest"
                  placeholder="seuperfil"
                  value={data.pinterest || ""}
                  onChange={handleChange}
                  onFocus={() => setFocusedInput("pinterest")}
                  onBlur={() => setFocusedInput(null)}
                />
              </div>
            )}
          </div>
        );
      
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

      case "image":
        return (
          <div className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="url">URL da Imagem</Label>
              <Input
                id="url"
                name="url"
                placeholder="https://exemplo.com/imagem.jpg"
                value={data.url || ""}
                onChange={handleChange}
                onFocus={() => setFocusedInput("url")}
                onBlur={() => setFocusedInput(null)}
              />
              <p className="text-xs text-muted-foreground">
                Insira o link direto para a imagem (JPG, PNG, GIF, etc.)
              </p>
            </div>
          </div>
        );

      case "video":
        return (
          <div className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="url">URL do Vídeo</Label>
              <Input
                id="url"
                name="url"
                placeholder="https://youtube.com/watch?v=..."
                value={data.url || ""}
                onChange={handleChange}
                onFocus={() => setFocusedInput("url")}
                onBlur={() => setFocusedInput(null)}
              />
              <p className="text-xs text-muted-foreground">
                Suporta links do YouTube, Vimeo e outros serviços de vídeo
              </p>
            </div>
          </div>
        );

      case "phone":
        return (
          <div className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="phoneNumber">Número de Telefone</Label>
              <Input
                id="phoneNumber"
                name="phoneNumber"
                placeholder="(99) 99999-9999"
                value={data.phoneNumber || ""}
                onChange={(e) => {
                  let value = e.target.value.replace(/\D/g, "");
                  if (value.length > 0) {
                    if (value.length <= 11) {
                      if (value.length <= 2) {
                        value = `(${value}`;
                      } else if (value.length <= 7) {
                        value = `(${value.slice(0, 2)}) ${value.slice(2)}`;
                      } else {
                        value = `(${value.slice(0, 2)}) ${value.slice(2, 7)}-${value.slice(7, 11)}`;
                      }
                    }
                  }
                  onChange({ phoneNumber: value });
                }}
                onFocus={() => setFocusedInput("phoneNumber")}
                onBlur={() => setFocusedInput(null)}
                required
              />
              <p className="text-xs text-muted-foreground">
                Digite o número de telefone (apenas números)
              </p>
            </div>
          </div>
        );

      case "store":
        return (
          <div className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="url">URL da Loja</Label>
              <Input
                id="url"
                name="url"
                placeholder="https://minhaloja.com.br"
                value={data.url || ""}
                onChange={handleChange}
                onFocus={() => setFocusedInput("url")}
                onBlur={() => setFocusedInput(null)}
              />
              <p className="text-xs text-muted-foreground">
                Link para sua loja online ou marketplace
              </p>
            </div>
          </div>
        );

      case "biolink":
        return (
          <div className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="url">URL do Bio Link</Label>
              <Input
                id="url"
                name="url"
                placeholder="https://linktree.com/seuperfil"
                value={data.url || ""}
                onChange={handleChange}
                onFocus={() => setFocusedInput("url")}
                onBlur={() => setFocusedInput(null)}
              />
              <p className="text-xs text-muted-foreground">
                Link para seu perfil do Linktree, Beacons, ou similar
              </p>
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
              <Label htmlFor="city">Cidade</Label>
              <Input
                id="city"
                name="city"
                placeholder="São Paulo"
                value={data.city || ""}
                onChange={handleChange}
                onFocus={() => setFocusedInput("city")}
                onBlur={() => setFocusedInput(null)}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="cep">CEP</Label>
              <Input
                id="cep"
                name="cep"
                placeholder="00000-000"
                value={data.cep || ""}
                onChange={handleChange}
                onFocus={() => setFocusedInput("cep")}
                onBlur={() => setFocusedInput(null)}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="amount">Valor em R$</Label>
              <Input
                id="amount"
                name="amount"
                placeholder="R$ 0,00"
                value={data.amount ? `R$ ${Number(data.amount).toLocaleString('pt-BR', { minimumFractionDigits: 2 })}` : ""}
                onChange={(e) => {
                  const value = e.target.value.replace(/[^0-9]/g, '');
                  const numberValue = Number(value) / 100;
                  onChange({ amount: numberValue.toString() });
                }}
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

      case "music":
        return (
          <div className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="url">Link da Música</Label>
              <Input
                id="url"
                name="url"
                placeholder="https://open.spotify.com/track/..."
                value={data.url || ""}
                onChange={handleChange}
                onFocus={() => setFocusedInput("url")}
                onBlur={() => setFocusedInput(null)}
              />
            </div>
            <p className="text-sm text-muted-foreground">
              Suporta links do Spotify, Apple Music, YouTube Music, Deezer e outros serviços de streaming.
            </p>
          </div>
        );

      case "whatsapp":
        return (
          <div className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="phoneNumber">Número do WhatsApp</Label>
              <Input
                id="phoneNumber"
                name="phoneNumber"
                placeholder="11987654321"
                value={data.phoneNumber || ""}
                onChange={(e) => {
                  const value = e.target.value.replace(/\D/g, "");
                  handleChange({
                    target: {
                      name: "phoneNumber",
                      value: value
                    }
                  } as React.ChangeEvent<HTMLInputElement>);
                }}
                onFocus={() => setFocusedInput("phoneNumber")}
                onBlur={() => setFocusedInput(null)}
              />
              <p className="text-xs text-muted-foreground">
                Digite apenas números, sem espaços ou caracteres especiais
              </p>
            </div>
            <div className="space-y-2">
              <Label htmlFor="message">Mensagem (opcional)</Label>
              <Textarea
                id="message"
                name="message"
                placeholder="Olá! Gostaria de conversar..."
                value={data.message || ""}
                onChange={handleChange}
                onFocus={() => setFocusedInput("message")}
                onBlur={() => setFocusedInput(null)}
                rows={4}
              />
            </div>
          </div>
        );

      case "pdf":
        return (
          <div className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="url">Link do PDF</Label>
              <Input
                id="url"
                name="url"
                placeholder="https://exemplo.com/documento.pdf"
                value={data.url || ""}
                onChange={handleChange}
                onFocus={() => setFocusedInput("url")}
                onBlur={() => setFocusedInput(null)}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="description">Descrição (opcional)</Label>
              <Textarea
                id="description"
                name="description"
                placeholder="Adicione uma descrição para o documento"
                value={data.description || ""}
                onChange={handleChange}
                onFocus={() => setFocusedInput("description")}
                onBlur={() => setFocusedInput(null)}
                rows={3}
              />
            </div>
            <p className="text-sm text-muted-foreground">
              Suporta links diretos para arquivos PDF. Certifique-se de que o link termine com .pdf
            </p>
          </div>
        );

      case "phone":
        return (
          <div className="space-y-4">
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

      case "music":
        return (
          <div className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="url">Link da Música</Label>
              <Input
                id="url"
                name="url"
                placeholder="https://open.spotify.com/track/..."
                value={data.url || ""}
                onChange={handleChange}
                onFocus={() => setFocusedInput("url")}
                onBlur={() => setFocusedInput(null)}
              />
            </div>
            <p className="text-sm text-muted-foreground">
              Suporta links do Spotify, Apple Music, YouTube Music, Deezer e outros serviços de streaming.
            </p>
          </div>
        );

      case "pdf":
        return (
          <div className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="url">Link do PDF</Label>
              <Input
                id="url"
                name="url"
                placeholder="https://exemplo.com/documento.pdf"
                value={data.url || ""}
                onChange={handleChange}
                onFocus={() => setFocusedInput("url")}
                onBlur={() => setFocusedInput(null)}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="description">Descrição (opcional)</Label>
              <Textarea
                id="description"
                name="description"
                placeholder="Adicione uma descrição para o documento"
                value={data.description || ""}
                onChange={handleChange}
                onFocus={() => setFocusedInput("description")}
                onBlur={() => setFocusedInput(null)}
                rows={3}
              />
            </div>
            <p className="text-sm text-muted-foreground">
              Suporta links diretos para arquivos PDF. Certifique-se de que o link termine com .pdf
            </p>
          </div>
        );

      case "phone":
        return (
          <div className="space-y-4">
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

      case "music":
        return (
          <div className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="url">Link da Música</Label>
              <Input
                id="url"
                name="url"
                placeholder="https://open.spotify.com/track/..."
                value={data.url || ""}
                onChange={handleChange}
                onFocus={() => setFocusedInput("url")}
                onBlur={() => setFocusedInput(null)}
              />
            </div>
            <p className="text-sm text-muted-foreground">
              Suporta links do Spotify, Apple Music, YouTube Music, Deezer e outros serviços de streaming.
            </p>
          </div>
        );

      case "pdf":
        return (
          <div className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="url">Link do PDF</Label>
              <Input
                id="url"
                name="url"
                placeholder="https://exemplo.com/documento.pdf"
                value={data.url || ""}
                onChange={handleChange}
                onFocus={() => setFocusedInput("url")}
                onBlur={() => setFocusedInput(null)}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="description">Descrição (opcional)</Label>
              <Textarea
                id="description"
                name="description"
                placeholder="Adicione uma descrição para o documento"
                value={data.description || ""}
                onChange={handleChange}
                onFocus={() => setFocusedInput("description")}
                onBlur={() => setFocusedInput(null)}
                rows={3}
              />
            </div>
            <p className="text-sm text-muted-foreground">
              Suporta links diretos para arquivos PDF. Certifique-se de que o link termine com .pdf
            </p>
          </div>
        );

      case "phone":
        return (
          <div className="space-y-4">
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

      case "music":
        return (
          <div className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="url">Link da Música</Label>
              <Input
                id="url"
                name="url"
                placeholder="https://open.spotify.com/track/..."
                value={data.url || ""}
                onChange={handleChange}
                onFocus={() => setFocusedInput("url")}
                onBlur={() => setFocusedInput(null)}
              />
            </div>
            <p className="text-sm text-muted-foreground">
              Suporta links do Spotify, Apple Music, YouTube Music, Deezer e outros serviços de streaming.
            </p>
          </div>
        );

      case "app":
        return (
          <div className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="url">Link do Aplicativo</Label>
              <Input
                id="url"
                name="url"
                placeholder="https://play.google.com/store/apps/details?id=com.exemplo"
                value={data.url || ""}
                onChange={handleChange}
                onFocus={() => setFocusedInput("url")}
                onBlur={() => setFocusedInput(null)}
              />
            </div>
            <p className="text-sm text-muted-foreground">
              Insira o link da Google Play Store ou App Store para seu aplicativo.
            </p>
            <div className="space-y-2">
              <Label htmlFor="appName">Nome do Aplicativo (opcional)</Label>
              <Input
                id="appName"
                name="appName"
                placeholder="Nome do seu aplicativo"
                value={data.appName || ""}
                onChange={handleChange}
                onFocus={() => setFocusedInput("appName")}
                onBlur={() => setFocusedInput(null)}
              />
            </div>
          </div>
        );
        
      case "text":
        return (
          <div className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="text">Texto</Label>
              <Textarea
                id="text"
                name="text"
                placeholder="Digite o texto que deseja converter em QR Code"
                value={data.text || ""}
                onChange={handleChange}
                onFocus={() => setFocusedInput("text")}
                onBlur={() => setFocusedInput(null)}
                rows={6}
                className="min-h-[150px]"
              />
            </div>
            <p className="text-sm text-muted-foreground">
              Digite qualquer texto para gerar um QR Code. Pode ser uma mensagem, uma nota ou qualquer conteúdo textual.
            </p>
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
