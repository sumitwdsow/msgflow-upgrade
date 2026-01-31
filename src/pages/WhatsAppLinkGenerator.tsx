import { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { MessageSquare, Link2, Copy, Check, ArrowLeft, Smartphone, ExternalLink, Zap, Globe, Users } from "lucide-react";
import { toast } from "sonner";

const WhatsAppLinkGenerator = () => {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [message, setMessage] = useState("");
  const [linkGenerated, setLinkGenerated] = useState(false);
  const [copied, setCopied] = useState(false);
  const [copiedShort, setCopiedShort] = useState(false);

  const generateWhatsAppLink = () => {
    const cleanNumber = phoneNumber.replace(/\D/g, "");
    const encodedMessage = encodeURIComponent(message);
    return `https://wa.me/${cleanNumber}${message ? `?text=${encodedMessage}` : ""}`;
  };

  const generateShortLink = () => {
    const cleanNumber = phoneNumber.replace(/\D/g, "");
    return `https://wa.me/${cleanNumber}`;
  };

  const handleGenerate = () => {
    if (!phoneNumber) {
      toast.error("Please enter a phone number");
      return;
    }
    setLinkGenerated(true);
    toast.success("WhatsApp link generated!");
  };

  const handleCopyLink = async () => {
    const link = generateWhatsAppLink();
    await navigator.clipboard.writeText(link);
    setCopied(true);
    toast.success("Link copied to clipboard!");
    setTimeout(() => setCopied(false), 2000);
  };

  const handleCopyShortLink = async () => {
    const link = generateShortLink();
    await navigator.clipboard.writeText(link);
    setCopiedShort(true);
    toast.success("Short link copied!");
    setTimeout(() => setCopiedShort(false), 2000);
  };

  const handleOpenLink = () => {
    window.open(generateWhatsAppLink(), "_blank");
  };

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
                  Link Generator
                </span>
              </div>
            </Link>
            <div className="flex items-center gap-2">
              <Button variant="ghost" size="sm" asChild>
                <Link to="/whatsapp-qr-generator" className="gap-2">
                  QR Generator
                </Link>
              </Button>
              <Button variant="ghost" asChild>
                <Link to="/" className="gap-2">
                  <ArrowLeft className="w-4 h-4" />
                  Back to Home
                </Link>
              </Button>
            </div>
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
            <Link2 className="w-4 h-4" />
            <span className="text-sm font-medium">Free WhatsApp Link Generator</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-4">
            WhatsApp Link Generator
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Create click-to-chat WhatsApp links instantly. Share on your website, social media, or anywhere online.
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
                  Add your WhatsApp number and customize the pre-filled message
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
                    placeholder="Hi! I'd like to know more about your services..."
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    rows={4}
                  />
                  <p className="text-xs text-muted-foreground">
                    This message will auto-fill when someone clicks your link
                  </p>
                </div>

                <Button
                  onClick={handleGenerate}
                  className="w-full h-12 bg-[#25D366] hover:bg-[#128C7E] text-white font-medium rounded-xl"
                >
                  <Link2 className="w-5 h-5 mr-2" />
                  Generate Link
                </Button>
              </CardContent>
            </Card>
          </motion.div>

          {/* Link Display */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
          >
            <Card className="border-border/50 shadow-xl h-full">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Zap className="w-5 h-5 text-primary" />
                  Your WhatsApp Links
                </CardTitle>
                <CardDescription>
                  Copy and share these links anywhere
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                {linkGenerated ? (
                  <motion.div
                    initial={{ scale: 0.95, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    className="space-y-6"
                  >
                    {/* Full Link */}
                    <div className="space-y-3">
                      <Label className="text-sm font-medium">Full Link (with message)</Label>
                      <div className="p-4 bg-muted rounded-xl border border-border">
                        <p className="text-sm font-mono break-all text-foreground mb-3">
                          {generateWhatsAppLink()}
                        </p>
                        <div className="flex gap-2">
                          <Button
                            variant="outline"
                            size="sm"
                            onClick={handleCopyLink}
                            className="gap-2"
                          >
                            {copied ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                            {copied ? "Copied!" : "Copy"}
                          </Button>
                          <Button
                            variant="outline"
                            size="sm"
                            onClick={handleOpenLink}
                            className="gap-2"
                          >
                            <ExternalLink className="w-4 h-4" />
                            Test Link
                          </Button>
                        </div>
                      </div>
                    </div>

                    {/* Short Link */}
                    <div className="space-y-3">
                      <Label className="text-sm font-medium">Short Link (without message)</Label>
                      <div className="p-4 bg-muted rounded-xl border border-border">
                        <p className="text-sm font-mono break-all text-foreground mb-3">
                          {generateShortLink()}
                        </p>
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={handleCopyShortLink}
                          className="gap-2"
                        >
                          {copiedShort ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                          {copiedShort ? "Copied!" : "Copy"}
                        </Button>
                      </div>
                    </div>

                    {/* HTML Code */}
                    <div className="space-y-3">
                      <Label className="text-sm font-medium">HTML Button Code</Label>
                      <div className="p-4 bg-muted rounded-xl border border-border">
                        <pre className="text-xs font-mono break-all text-muted-foreground overflow-x-auto">
{`<a href="${generateWhatsAppLink()}" 
   target="_blank" 
   style="background:#25D366;color:white;
          padding:12px 24px;border-radius:8px;
          text-decoration:none;display:inline-block;">
   Chat on WhatsApp
</a>`}
                        </pre>
                        <Button
                          variant="outline"
                          size="sm"
                          className="mt-3 gap-2"
                          onClick={() => {
                            navigator.clipboard.writeText(`<a href="${generateWhatsAppLink()}" target="_blank" style="background:#25D366;color:white;padding:12px 24px;border-radius:8px;text-decoration:none;display:inline-block;">Chat on WhatsApp</a>`);
                            toast.success("HTML code copied!");
                          }}
                        >
                          <Copy className="w-4 h-4" />
                          Copy HTML
                        </Button>
                      </div>
                    </div>
                  </motion.div>
                ) : (
                  <div className="text-center py-12 space-y-4 text-muted-foreground">
                    <div className="w-20 h-20 mx-auto rounded-2xl border-2 border-dashed border-border flex items-center justify-center">
                      <Link2 className="w-8 h-8 opacity-30" />
                    </div>
                    <p>Enter your details and click generate to create your links</p>
                  </div>
                )}
              </CardContent>
            </Card>
          </motion.div>
        </div>

        {/* Use Cases Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="mt-16 max-w-5xl mx-auto"
        >
          <h2 className="text-2xl font-display font-bold text-center mb-8">
            Where to Use Your WhatsApp Link
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { icon: <Globe className="w-6 h-6" />, title: "Website", description: "Add a click-to-chat button" },
              { icon: <Users className="w-6 h-6" />, title: "Social Media", description: "Share in bio or posts" },
              { icon: "📧", title: "Email Signature", description: "Let contacts reach you faster" },
              { icon: "📄", title: "Digital Cards", description: "Add to your vCard or portfolio" },
            ].map((item, index) => (
              <Card key={index} className="border-border/50 text-center">
                <CardContent className="pt-6">
                  <div className="w-12 h-12 mx-auto rounded-xl bg-[#25D366]/10 flex items-center justify-center text-[#25D366] mb-3">
                    {typeof item.icon === "string" ? <span className="text-2xl">{item.icon}</span> : item.icon}
                  </div>
                  <h3 className="font-semibold mb-1">{item.title}</h3>
                  <p className="text-xs text-muted-foreground">{item.description}</p>
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
              <h3 className="text-xl font-semibold mb-2">Need Advanced WhatsApp Marketing?</h3>
              <p className="text-muted-foreground mb-6">
                Broadcast messages, automate responses, and manage conversations at scale with MsgFlow's WhatsApp Business API.
              </p>
              <div className="flex gap-3 justify-center flex-wrap">
                <Button asChild variant="outline">
                  <Link to="/whatsapp-qr-generator">
                    Generate QR Code
                  </Link>
                </Button>
                <Button asChild className="bg-gradient-to-r from-primary to-accent text-white">
                  <Link to="/signup">
                    Get Started Free
                  </Link>
                </Button>
              </div>
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

export default WhatsAppLinkGenerator;
