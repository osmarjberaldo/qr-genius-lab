
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";
import { Switch } from "@/components/ui/switch";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { QRCodeCustomizationOptions } from "@/types/qr-types";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Paintbrush, 
  Image as ImageIcon, 
  Square, 
  Circle, 
  Layers
} from "lucide-react";
import { motion } from "framer-motion";
import { Label as UILabel } from "@/components/ui/label";

interface QRCodeCustomizationProps {
  options: QRCodeCustomizationOptions;
  onChange: (options: Partial<QRCodeCustomizationOptions>) => void;
}

const QRCodeCustomization = ({ options, onChange }: QRCodeCustomizationProps) => {
  const [logoFile, setLogoFile] = useState<File | null>(null);

  const handleColorChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    onChange({ [name]: value });
  };

  const handleSizeChange = (value: number[]) => {
    onChange({ size: value[0] });
  };

  const handleLogoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      setLogoFile(file);
      
      const reader = new FileReader();
      reader.onload = (event) => {
        if (event.target && event.target.result) {
          onChange({ imageSource: event.target.result as string });
        }
      };
      reader.readAsDataURL(file);
    }
  };

  const handleGradientToggle = (checked: boolean) => {
    onChange({ isGradient: checked });
  };

  const handleGradientColorChange = (index: number, color: string) => {
    const newColors = [...(options.gradientColors || ["#000000", "#000000"])];
    newColors[index] = color;
    onChange({ gradientColors: newColors });
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
    >
      <Tabs defaultValue="colors">
        <TabsList className="grid w-full grid-cols-3 mb-6">
          <TabsTrigger value="colors">
            <Paintbrush className="h-4 w-4 mr-2" />
            Cores
          </TabsTrigger>
          <TabsTrigger value="logo">
            <ImageIcon className="h-4 w-4 mr-2" />
            Logo
          </TabsTrigger>
          <TabsTrigger value="shape">
            <Layers className="h-4 w-4 mr-2" />
            Forma
          </TabsTrigger>
        </TabsList>

        <TabsContent value="colors" className="space-y-6 animate-slide-in-up">
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <Label htmlFor="isGradient" className="cursor-pointer">Usar Gradiente</Label>
              <Switch
                id="isGradient"
                checked={options.isGradient}
                onCheckedChange={handleGradientToggle}
              />
            </div>

            {options.isGradient ? (
              <div className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="gradientColor1">Cor Inicial</Label>
                  <div className="flex gap-3">
                    <div
                      className="w-10 h-10 rounded-md border"
                      style={{
                        backgroundColor: options.gradientColors?.[0] || "#000000",
                      }}
                    ></div>
                    <Input
                      id="gradientColor1"
                      type="color"
                      value={options.gradientColors?.[0] || "#000000"}
                      onChange={(e) => handleGradientColorChange(0, e.target.value)}
                      className="w-full h-10"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="gradientColor2">Cor Final</Label>
                  <div className="flex gap-3">
                    <div
                      className="w-10 h-10 rounded-md border"
                      style={{
                        backgroundColor: options.gradientColors?.[1] || "#000000",
                      }}
                    ></div>
                    <Input
                      id="gradientColor2"
                      type="color"
                      value={options.gradientColors?.[1] || "#000000"}
                      onChange={(e) => handleGradientColorChange(1, e.target.value)}
                      className="w-full h-10"
                    />
                  </div>
                </div>
                <div className="h-20 rounded-lg mt-2" 
                  style={{ 
                    background: `linear-gradient(135deg, ${options.gradientColors?.[0] || "#000000"}, ${options.gradientColors?.[1] || "#000000"})` 
                  }}
                />
              </div>
            ) : (
              <>
                <div className="space-y-2">
                  <Label htmlFor="fgColor">Cor do QR Code</Label>
                  <div className="flex gap-3">
                    <div
                      className="w-10 h-10 rounded-md border"
                      style={{ backgroundColor: options.fgColor }}
                    ></div>
                    <Input
                      id="fgColor"
                      name="fgColor"
                      type="color"
                      value={options.fgColor}
                      onChange={handleColorChange}
                      className="w-full h-10"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="bgColor">Cor de Fundo</Label>
                  <div className="flex gap-3">
                    <div
                      className="w-10 h-10 rounded-md border"
                      style={{ backgroundColor: options.bgColor }}
                    ></div>
                    <Input
                      id="bgColor"
                      name="bgColor"
                      type="color"
                      value={options.bgColor}
                      onChange={handleColorChange}
                      className="w-full h-10"
                    />
                  </div>
                </div>
              </>
            )}
          </div>

          <div className="space-y-3">
            <div className="flex justify-between items-center">
              <Label>Tamanho</Label>
              <span className="text-sm text-muted-foreground">{options.size}px</span>
            </div>
            <Slider
              value={[options.size]}
              min={100}
              max={400}
              step={10}
              onValueChange={handleSizeChange}
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="level">Nível de Correção de Erro</Label>
            <Select
              value={options.level}
              onValueChange={(value) => onChange({ level: value })}
            >
              <SelectTrigger>
                <SelectValue placeholder="Selecione o nível" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="L">Baixo (7%)</SelectItem>
                <SelectItem value="M">Médio (15%)</SelectItem>
                <SelectItem value="Q">Alta (25%)</SelectItem>
                <SelectItem value="H">Máxima (30%)</SelectItem>
              </SelectContent>
            </Select>
            <p className="text-xs text-muted-foreground mt-1">
              Nível mais alto permite maior personalização, mas pode reduzir a compatibilidade com leitores.
            </p>
          </div>

          <div className="flex items-center justify-between">
            <Label htmlFor="includeMargin" className="cursor-pointer">Incluir Margem</Label>
            <Switch
              id="includeMargin"
              checked={options.includeMargin}
              onCheckedChange={(checked) => onChange({ includeMargin: checked })}
            />
          </div>
        </TabsContent>

        <TabsContent value="logo" className="space-y-6 animate-slide-in-up">
          <div className="space-y-4">
            <UILabel className="block mb-2" htmlFor="logo-upload">
              Adicionar Logotipo ao Centro
            </UILabel>
            <div className="grid place-items-center p-6 border-2 border-dashed rounded-xl bg-secondary/30">
              <div className="text-center space-y-2">
                {options.imageSource ? (
                  <div className="relative mx-auto w-24 h-24 mb-4">
                    <img
                      src={options.imageSource}
                      alt="Logo preview"
                      className="w-full h-full object-contain"
                    />
                    <button
                      onClick={() => {
                        onChange({ imageSource: "" });
                        setLogoFile(null);
                      }}
                      className="absolute -top-2 -right-2 bg-destructive text-white w-6 h-6 rounded-full flex items-center justify-center text-xs"
                    >
                      ×
                    </button>
                  </div>
                ) : (
                  <div className="w-16 h-16 bg-muted rounded-lg flex items-center justify-center mx-auto mb-4">
                    <ImageIcon className="h-8 w-8 text-muted-foreground" />
                  </div>
                )}
                <UILabel
                  htmlFor="logo-upload"
                  className="cursor-pointer bg-primary text-primary-foreground px-4 py-2 rounded-md inline-block hover:bg-primary/90 transition-colors"
                >
                  {options.imageSource ? "Alterar Logo" : "Selecionar Logo"}
                </UILabel>
                <Input
                  id="logo-upload"
                  type="file"
                  accept="image/*"
                  onChange={handleLogoChange}
                  className="hidden"
                />
                <p className="text-xs text-muted-foreground mt-2">
                  Recomendado: imagem PNG ou SVG com fundo transparente
                </p>
              </div>
            </div>
          </div>
        </TabsContent>

        <TabsContent value="shape" className="space-y-6 animate-slide-in-up">
          <div className="space-y-4">
            <UILabel>Estilo dos Cantos</UILabel>
            <div className="grid grid-cols-2 gap-4">
              <div
                className={`border rounded-xl p-4 flex flex-col items-center justify-center gap-3 cursor-pointer transition-all ${
                  options.cornerType === "square" ? "border-primary bg-secondary/50" : "border-border"
                }`}
                onClick={() => onChange({ cornerType: "square" })}
              >
                <Square className="h-8 w-8" />
                <span className="text-sm font-medium">Quadrado</span>
              </div>
              <div
                className={`border rounded-xl p-4 flex flex-col items-center justify-center gap-3 cursor-pointer transition-all ${
                  options.cornerType === "rounded" ? "border-primary bg-secondary/50" : "border-border"
                }`}
                onClick={() => onChange({ cornerType: "rounded" })}
              >
                <Circle className="h-8 w-8" />
                <span className="text-sm font-medium">Arredondado</span>
              </div>
            </div>
            
            <div className="mt-4 space-y-2">
              <Label htmlFor="cornerColor">Cor dos Cantos</Label>
              <div className="flex gap-3">
                <div
                  className="w-10 h-10 rounded-md border"
                  style={{ backgroundColor: options.cornerColor }}
                ></div>
                <Input
                  id="cornerColor"
                  name="cornerColor"
                  type="color"
                  value={options.cornerColor}
                  onChange={handleColorChange}
                  className="w-full h-10"
                />
              </div>
            </div>
          </div>
        </TabsContent>
      </Tabs>
    </motion.div>
  );
};

export default QRCodeCustomization;
