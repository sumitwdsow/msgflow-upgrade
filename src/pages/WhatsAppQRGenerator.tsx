import { useState, useRef } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { MessageSquare, QrCode, Download, Copy, Check, ArrowLeft, Smartphone, Share2 } from "lucide-react";
import { toast } from "sonner";

const WhatsAppQRGenerator = () => {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [message, setMessage] = useState("");
  const [qrGenerated, setQrGenerated] = useState(false);
  const [copied, setCopied] = useState(false);
  const qrRef = useRef<HTMLDivElement>(null);

  const generateWhatsAppLink = () => {
    const cleanNumber = phoneNumber.replace(/\D/g, "");
    const encodedMessage = encodeURIComponent(message);
    return `https://wa.me/${cleanNumber}${message ? `?text=${encodedMessage}` : ""}`;
  };

  const handleGenerate = () => {
    if (!phoneNumber) {
      toast.error("Please enter a phone number");
      return;
    }
    setQrGenerated(true);
    toast.success("QR Code generated successfully!");
  };

  const handleCopyLink = async () => {
    const link = generateWhatsAppLink();
    await navigator.clipboard.writeText(link);
    setCopied(true);
    toast.success("Link copied to clipboard!");
    setTimeout(() => setCopied(false), 2000);
  };

  const handleDownload = () => {
    const link = generateWhatsAppLink();
    const qrUrl = `https://api.qrserver.com/v1/create-qr-code/?size=400x400&data=${encodeURIComponent(link)}&bgcolor=ffffff&color=25D366`;
    
    const a = document.createElement("a");
    a.href = qrUrl;
    a.download = `whatsapp-qr-${phoneNumber}.png`;
    a.target = "_blank";
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    toast.success("QR Code download started!");
  };

  const qrCodeUrl = qrGenerated
    ? `https://api.qrserver.com/v1/create-qr-code/?size=300x300&data=${encodeURIComponent(generateWhatsAppLink())}&bgcolor=ffffff&color=25D366`
    : "";

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-primary/5">
      {/* Header */}
      <header className="border-b border-border/50 bg-background/80 backdrop-blur-xl sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link to="/" className="flex items-center gap-2 group">
              <motion.div
                whileHover={{ scale: 1.1, rotate: 5 }}
                className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center shadow-lg"
              >
                <MessageSquare className="w-5 h-5 text-white" />
              </motion.div>
              <div>
                <span className="font-display font-bold text-xl text-foreground">
                  MsgFlow
                </span>
                <span className="block text-xs text-muted-foreground">
                  QR Generator
                </span>
              </div>
            </Link>
            <Button variant="ghost" asChild>
              <Link to="/" className="gap-2">
                <ArrowLeft className="w-4 h-4" />
                Back to Home
              </Link>
            </Button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-12 md:py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#25D366]/10 text-[#25D366] mb-6">
            <QrCode className="w-4 h-4" />
            <span className="text-sm font-medium">Free WhatsApp QR Generator</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-4">
            WhatsApp QR Code Generator
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Create instant QR codes for your WhatsApp number. Let customers reach you with a simple scan.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Input Form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
          >
            <Card className="border-border/50 shadow-xl">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Smartphone className="w-5 h-5 text-primary" />
                  Enter Your Details
                </CardTitle>
                <CardDescription>
                  Fill in your WhatsApp number and optional pre-filled message
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="phone">WhatsApp Number (with country code)</Label>
                  <Input
                    id="phone"
                    type="tel"
                    placeholder="e.g., 1234567890"
                    value={phoneNumber}
                    onChange={(e) => setPhoneNumber(e.target.value)}
                    className="h-12"
                  />
                  <p className="text-xs text-muted-foreground">
                    Include country code without + or 00 (e.g., 1 for US, 91 for India)
                  </p>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Pre-filled Message (Optional)</Label>
                  <Textarea
                    id="message"
                    placeholder="Hi! I found you through your QR code..."
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    rows={4}
                  />
                  <p className="text-xs text-muted-foreground">
                    This message will be pre-filled when someone scans the QR code
                  </p>
                </div>

                <Button
                  onClick={handleGenerate}
                  className="w-full h-12 bg-[#25D366] hover:bg-[#128C7E] text-white font-medium rounded-xl"
                >
                  <QrCode className="w-5 h-5 mr-2" />
                  Generate QR Code
                </Button>
              </CardContent>
            </Card>
          </motion.div>

          {/* QR Code Display */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
          >
            <Card className="border-border/50 shadow-xl h-full">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Share2 className="w-5 h-5 text-primary" />
                  Your QR Code
                </CardTitle>
                <CardDescription>
                  Scan this code to start a WhatsApp conversation
                </CardDescription>
              </CardHeader>
              <CardContent className="flex flex-col items-center justify-center min-h-[400px]">
                {qrGenerated ? (
                  <motion.div
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    className="text-center space-y-6"
                  >
                    <div
                      ref={qrRef}
                      className="p-6 bg-white rounded-2xl shadow-lg inline-block"
                    >
                      <img
                        src={qrCodeUrl}
                        alt="WhatsApp QR Code"
                        className="w-64 h-64"
                      />
                      <div className="mt-4 flex items-center justify-center gap-2">
                        <div className="w-8 h-8 rounded-full bg-[#25D366] flex items-center justify-center">
                          <svg viewBox="0 0 24 24" className="w-5 h-5 text-white fill-current">
                            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                          </svg>
                        </div>
                        <span className="text-sm font-medium text-gray-600">
                          Powered by MsgFlow
                        </span>
                      </div>
                    </div>

                    <div className="flex gap-3 justify-center">
                      <Button
                        variant="outline"
                        onClick={handleCopyLink}
                        className="gap-2"
                      >
                        {copied ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                        {copied ? "Copied!" : "Copy Link"}
                      </Button>
                      <Button
                        onClick={handleDownload}
                        className="gap-2 bg-primary hover:bg-primary/90"
                      >
                        <Download className="w-4 h-4" />
                        Download QR
                      </Button>
                    </div>

                    <p className="text-sm text-muted-foreground">
                      Link: <span className="font-mono text-xs break-all">{generateWhatsAppLink()}</span>
                    </p>
                  </motion.div>
                ) : (
                  <div className="text-center space-y-4 text-muted-foreground">
                    <div className="w-32 h-32 mx-auto rounded-2xl border-2 border-dashed border-border flex items-center justify-center">
                      <QrCode className="w-12 h-12 opacity-30" />
                    </div>
                    <p>Enter your details and click generate to create your QR code</p>
                  </div>
                )}
              </CardContent>
            </Card>
          </motion.div>
        </div>

        {/* Features Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="mt-16 max-w-4xl mx-auto"
        >
          <h2 className="text-2xl font-display font-bold text-center mb-8">
            Why Use MsgFlow QR Generator?
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                icon: "🚀",
                title: "Instant Generation",
                description: "Create QR codes in seconds with no sign-up required"
              },
              {
                icon: "📱",
                title: "Mobile Optimized",
                description: "Works perfectly on all devices and screen sizes"
              },
              {
                icon: "💯",
                title: "100% Free",
                description: "No hidden costs, watermarks, or limitations"
              }
            ].map((feature, index) => (
              <Card key={index} className="text-center border-border/50">
                <CardContent className="pt-6">
                  <div className="text-4xl mb-4">{feature.icon}</div>
                  <h3 className="font-semibold mb-2">{feature.title}</h3>
                  <p className="text-sm text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="mt-16 text-center"
        >
          <Card className="max-w-2xl mx-auto bg-gradient-to-r from-primary/10 to-accent/10 border-primary/20">
            <CardContent className="py-8">
              <h3 className="text-xl font-semibold mb-2">Want More WhatsApp Features?</h3>
              <p className="text-muted-foreground mb-6">
                Explore MsgFlow's full suite of WhatsApp Business API tools for marketing, automation, and customer engagement.
              </p>
              <Button asChild className="bg-gradient-to-r from-primary to-accent text-white">
                <Link to="/signup">
                  Get Started Free
                </Link>
              </Button>
            </CardContent>
          </Card>
        </motion.div>
      </main>

      {/* Footer */}
      <footer className="border-t border-border/50 bg-muted/30 py-8 mt-16">
        <div className="container mx-auto px-4 text-center text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} MsgFlow. All rights reserved.</p>
          <p className="mt-2">
            <Link to="/privacy" className="hover:text-foreground">Privacy Policy</Link>
            {" · "}
            <Link to="/terms" className="hover:text-foreground">Terms of Service</Link>
          </p>
        </div>
      </footer>
    </div>
  );
};

export default WhatsAppQRGenerator;
