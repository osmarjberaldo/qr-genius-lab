import * as React from "react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { MessageCircle } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const feedbackSchema = z.object({
  name: z.string().min(2, { message: "Nome deve ter pelo menos 2 caracteres" }),
  email: z.string().email({ message: "Email inválido" }),
  message: z.string().min(10, { message: "Mensagem deve ter pelo menos 10 caracteres" }),
});

type FeedbackForm = z.infer<typeof feedbackSchema>;

export function FeedbackButton() {
  const { toast } = useToast();
  const form = useForm<FeedbackForm>({
    resolver: zodResolver(feedbackSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  const [isAdBlockDetected, setIsAdBlockDetected] = React.useState(false);

  React.useEffect(() => {
    // Create a test ad element to check if it gets blocked
    const testAd = document.createElement('div');
    testAd.className = 'adsbox';
    testAd.innerHTML = '&nbsp;';
    testAd.style.position = 'absolute';
    testAd.style.opacity = '0';
    document.body.appendChild(testAd);
    
    // Load Google AdSense script
    const script = document.createElement('script');
    script.src = 'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-4204444212752267';
    script.async = true;
    script.crossOrigin = 'anonymous';
    document.head.appendChild(script);

    const detectAdBlock = () => {
      // Method 1: Check if test ad element is hidden (common ad blocker behavior)
      const isTestAdHidden = testAd.offsetHeight === 0;
      
      // Method 2: Check Google AdSense availability
      const isAdSenseBlocked = window.adsbygoogle === undefined;
      
      // Method 3: Try to execute AdSense code
      let isAdSenseExecutionBlocked = false;
      try {
        if (window.adsbygoogle) {
          (window.adsbygoogle = window.adsbygoogle || []).push({});
        }
      } catch (e) {
        isAdSenseExecutionBlocked = true;
      }
      
      // Only set adblock detected if multiple methods confirm it
      // This reduces false positives
      const adBlockDetected = (isTestAdHidden && (isAdSenseBlocked || isAdSenseExecutionBlocked));
      setIsAdBlockDetected(adBlockDetected);
      
      // Clean up test element
      if (testAd && testAd.parentNode) {
        testAd.parentNode.removeChild(testAd);
      }
    };

    // Give enough time for ad blockers to act and for AdSense to load
    const timer = setTimeout(detectAdBlock, 2000);
    return () => {
      clearTimeout(timer);
      // Clean up test element if component unmounts before detection
      if (testAd && testAd.parentNode) {
        testAd.parentNode.removeChild(testAd);
      }
    };
  }, []);


  const onSubmit = async (data: FeedbackForm) => {
    const mailtoLink = `mailto:contato@devosmar.com.br?subject=Feedback do QR Code Generator&body=Nome: ${data.name}%0D%0AEmail: ${data.email}%0D%0AMensagem: ${data.message}`;
    window.location.href = mailtoLink;
    
    toast({
      title: "Feedback enviado!",
      description: "Obrigado por seu feedback. Em breve entraremos em contato.",
    });
    
    form.reset();
  };

  return (
    <div>
      <Dialog>
        <DialogTrigger asChild>
          <Button variant="outline" className="gap-2">
            <MessageCircle className="h-4 w-4" />
            Enviar Feedback
          </Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Enviar Feedback</DialogTitle>
          </DialogHeader>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Nome</FormLabel>
                    <FormControl>
                      <Input placeholder="Seu nome" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input placeholder="seu@email.com" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="message"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Mensagem</FormLabel>
                    <FormControl>
                      <Textarea placeholder="Sua mensagem" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button type="submit" className="w-full">Enviar</Button>
            </form>
          </Form>
        </DialogContent>
      </Dialog>
      <ins
        className="adsbygoogle"
        style={{
          display: "block"
        }}
        data-ad-client="ca-pub-4204444212752267"
        data-ad-slot="8416093364"
        data-ad-format="auto"
        data-full-width-responsive="true"
      />
    </div>
  );
}