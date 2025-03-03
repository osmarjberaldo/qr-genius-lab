import * as React from "react";
import { AlertDialog, AlertDialogAction, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle } from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";
import { ShieldAlert } from "lucide-react";

interface AdBlockDetectorProps {
  isAdBlockDetected: boolean;
}

export function AdBlockDetector({ isAdBlockDetected }: AdBlockDetectorProps) {
  const [isOpen, setIsOpen] = React.useState(false);
  
  React.useEffect(() => {
    if (isAdBlockDetected) {
      setIsOpen(true);
    } else {
      setIsOpen(false);
    }
  }, [isAdBlockDetected]);

  const handleRefresh = () => {
    window.location.reload();
  };

  return (
    <AlertDialog open={isOpen} onOpenChange={setIsOpen}>
      <AlertDialogContent className="max-w-md">
        <AlertDialogHeader>
          <div className="flex items-center justify-center mb-4">
            <ShieldAlert className="h-12 w-12 text-destructive" />
          </div>
          <AlertDialogTitle className="text-center text-xl">
            Bloqueador de Anúncios Detectado
          </AlertDialogTitle>
          <AlertDialogDescription className="text-center">
            <p className="mb-4">
              Detectamos que você está usando um bloqueador de anúncios. Nosso site é gratuito e depende de anúncios para continuar funcionando.
            </p>
            <p className="mb-4">
              Por favor, desative seu bloqueador de anúncios para continuar usando nosso gerador de QR Code gratuito.
            </p>
            <div className="bg-muted p-4 rounded-md text-sm">
              <p className="font-medium mb-2">Como desativar seu bloqueador de anúncios:</p>
              <ol className="list-decimal pl-5 space-y-1 text-left">
                <li>Localize o ícone do bloqueador de anúncios na barra de ferramentas do seu navegador</li>
                <li>Clique no ícone e selecione "Pausar" ou "Desativar neste site"</li>
                <li>Atualize a página para continuar usando o gerador de QR Code</li>
              </ol>
            </div>
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogAction asChild>
            <Button onClick={handleRefresh} className="w-full">
              Atualizei a página
            </Button>
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}