import { motion } from "framer-motion";
import { 
  MessageSquare, 
  Code2, 
  Key, 
  Send, 
  FileText, 
  Wallet, 
  Users, 
  BarChart3, 
  Webhook, 
  AlertCircle,
  Copy,
  Check,
  ArrowRight,
  Download,
  ExternalLink
} from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const Documentation = () => {
  const [copiedCode, setCopiedCode] = useState<string | null>(null);

  const copyToClipboard = (code: string, id: string) => {
    navigator.clipboard.writeText(code);
    setCopiedCode(id);
    setTimeout(() => setCopiedCode(null), 2000);
  };

  const CodeBlock = ({ code, language, id }: { code: string; language: string; id: string }) => (
    <div className="relative group">
      <pre className="bg-foreground text-background p-4 rounded-xl overflow-x-auto text-sm">
        <code>{code}</code>
      </pre>
      <button
        onClick={() => copyToClipboard(code, id)}
        className="absolute top-3 right-3 p-2 rounded-lg bg-background/10 hover:bg-background/20 transition-colors opacity-0 group-hover:opacity-100"
      >
        {copiedCode === id ? (
          <Check className="w-4 h-4 text-green-400" />
        ) : (
          <Copy className="w-4 h-4 text-background/70" />
        )}
      </button>
    </div>
  );

  const endpoints = [
    {
      method: "POST",
      path: "/api/v1/messages/send",
      description: "Send a WhatsApp message using a template",
    },
    {
      method: "GET",
      path: "/api/v1/messages/{id}/status",
      description: "Get message delivery status",
    },
    {
      method: "GET",
      path: "/api/v1/templates",
      description: "List all approved templates",
    },
    {
      method: "GET",
      path: "/api/v1/wallet/balance",
      description: "Check wallet balance",
    },
    {
      method: "POST",
      path: "/api/v1/messages/send-bulk",
      description: "Send bulk messages (max 100)",
    },
  ];

  const scopes = [
    { scope: "messages:send", description: "Send messages via API" },
    { scope: "templates:read", description: "View templates" },
    { scope: "wallet:read", description: "View wallet balance" },
    { scope: "contacts:read", description: "View contacts" },
    { scope: "contacts:write", description: "Create/update contacts" },
    { scope: "campaigns:read", description: "View campaigns" },
    { scope: "campaigns:write", description: "Create/update campaigns" },
    { scope: "reports:read", description: "View reports" },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-foreground text-background py-4 sticky top-0 z-50">
        <div className="container-custom flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center">
              <MessageSquare className="w-5 h-5 text-white" />
            </div>
            <span className="font-display font-bold text-xl">MsgFlow</span>
          </Link>
          <div className="flex items-center gap-4">
            <Button variant="ghost" className="text-background/70 hover:text-background hover:bg-background/10" asChild>
              <Link to="/">Back to Home</Link>
            </Button>
            <Button className="bg-primary hover:bg-primary/90 text-white" asChild>
              <a href="https://msgflow.in/login" target="_blank" rel="noopener noreferrer">
                Get API Key
                <ExternalLink className="w-4 h-4 ml-2" />
              </a>
            </Button>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="py-20 hero-gradient relative overflow-hidden">
        <div className="absolute inset-0">
          <motion.div
            animate={{ scale: [1, 1.2, 1], opacity: [0.2, 0.3, 0.2] }}
            transition={{ duration: 8, repeat: Infinity }}
            className="absolute top-20 right-20 w-96 h-96 bg-primary/20 rounded-full blur-3xl"
          />
        </div>
        <div className="container-custom relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center max-w-3xl mx-auto"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 text-white/90 text-sm font-medium mb-6">
              <Code2 className="w-4 h-4" />
              API & Plugin Documentation
            </div>
            <h1 className="font-display text-4xl md:text-5xl font-bold text-white mb-6">
              Integrate WhatsApp Messaging Into Your Apps
            </h1>
            <p className="text-xl text-white/70 mb-8">
              Complete guides for integrating MsgFlow WhatsApp Business API into your applications and WordPress websites.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button size="lg" className="bg-white text-foreground hover:bg-white/90 rounded-xl" asChild>
                <a href="https://msgflow.in/documentation/download-plugin" target="_blank" rel="noopener noreferrer">
                  <Download className="w-5 h-5 mr-2" />
                  Download WordPress Plugin
                </a>
              </Button>
              <Button size="lg" variant="outline" className="border-white/30 text-white hover:bg-white/10 rounded-xl" asChild>
                <a href="https://msgflow.in/login" target="_blank" rel="noopener noreferrer">
                  Get API Key
                  <ArrowRight className="w-5 h-5 ml-2" />
                </a>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="container-custom">
          <Tabs defaultValue="api" className="space-y-8">
            <TabsList className="grid w-full max-w-md mx-auto grid-cols-2 h-14 rounded-xl bg-muted p-1">
              <TabsTrigger value="api" className="rounded-lg h-full text-base font-medium">
                API Documentation
              </TabsTrigger>
              <TabsTrigger value="wordpress" className="rounded-lg h-full text-base font-medium">
                WordPress Plugin
              </TabsTrigger>
            </TabsList>

            <TabsContent value="api" className="space-y-12">
              {/* API Overview */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-card rounded-2xl border border-border p-8"
              >
                <h2 className="font-display text-2xl font-bold text-foreground mb-4">API Overview</h2>
                <p className="text-muted-foreground mb-6">
                  The MsgFlow API allows you to send WhatsApp messages programmatically using API keys or Sanctum tokens. 
                  Messages are billed on delivery confirmation, ensuring you only pay for successfully delivered messages.
                </p>
                <div className="bg-muted rounded-xl p-4">
                  <span className="text-sm text-muted-foreground">Base URL:</span>
                  <code className="ml-2 text-primary font-mono font-semibold">https://msgflow.in/api/v1</code>
                </div>
              </motion.div>

              {/* Authentication */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="bg-card rounded-2xl border border-border p-8"
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                    <Key className="w-6 h-6 text-primary" />
                  </div>
                  <h2 className="font-display text-2xl font-bold text-foreground">Authentication</h2>
                </div>
                <p className="text-muted-foreground mb-6">
                  The API supports two authentication methods. Include your API key in the request header.
                </p>
                <div className="space-y-4">
                  <h3 className="font-semibold text-foreground">1. API Key Authentication</h3>
                  <CodeBlock
                    id="auth-1"
                    language="bash"
                    code={`Authorization: Bearer YOUR_API_KEY

# Or use X-API-Key header:
X-API-Key: YOUR_API_KEY`}
                  />
                  <h3 className="font-semibold text-foreground mt-6">2. Sanctum Token Authentication</h3>
                  <CodeBlock
                    id="auth-2"
                    language="bash"
                    code={`Authorization: Bearer YOUR_SANCTUM_TOKEN`}
                  />
                </div>
              </motion.div>

              {/* Rate Limiting */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.15 }}
                className="bg-amber-500/10 border border-amber-500/20 rounded-2xl p-6"
              >
                <div className="flex items-start gap-4">
                  <AlertCircle className="w-6 h-6 text-amber-500 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">Rate Limiting</h3>
                    <ul className="text-muted-foreground space-y-1">
                      <li>• Default rate limit: <strong>100 requests per minute</strong> per API key</li>
                      <li>• Rate limit is configurable when creating API keys</li>
                      <li>• Rate limit exceeded responses return <code className="text-amber-600">HTTP 429</code></li>
                    </ul>
                  </div>
                </div>
              </motion.div>

              {/* Endpoints */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="bg-card rounded-2xl border border-border p-8"
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                    <Send className="w-6 h-6 text-primary" />
                  </div>
                  <h2 className="font-display text-2xl font-bold text-foreground">API Endpoints</h2>
                </div>
                <div className="space-y-4">
                  {endpoints.map((endpoint, index) => (
                    <div key={index} className="flex items-center gap-4 p-4 bg-muted rounded-xl">
                      <span className={`px-3 py-1 rounded-lg text-xs font-bold ${
                        endpoint.method === "POST" 
                          ? "bg-green-500/20 text-green-600" 
                          : "bg-blue-500/20 text-blue-600"
                      }`}>
                        {endpoint.method}
                      </span>
                      <code className="font-mono text-sm text-foreground flex-1">{endpoint.path}</code>
                      <span className="text-sm text-muted-foreground hidden md:block">{endpoint.description}</span>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* Send Message Example */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.25 }}
                className="bg-card rounded-2xl border border-border p-8"
              >
                <h2 className="font-display text-2xl font-bold text-foreground mb-6">Send Message Example</h2>
                <Tabs defaultValue="curl" className="space-y-4">
                  <TabsList className="bg-muted">
                    <TabsTrigger value="curl">cURL</TabsTrigger>
                    <TabsTrigger value="php">PHP</TabsTrigger>
                    <TabsTrigger value="json">Request Body</TabsTrigger>
                  </TabsList>
                  <TabsContent value="curl">
                    <CodeBlock
                      id="curl-example"
                      language="bash"
                      code={`curl -X POST https://msgflow.in/api/v1/messages/send \\
  -H "Authorization: Bearer YOUR_API_KEY" \\
  -H "Content-Type: application/json" \\
  -d '{
    "to": "+919876543210",
    "template_id": 123,
    "parameters": {
      "name": "John Doe",
      "order_id": "ORD12345"
    },
    "message_type": "UTILITY"
  }'`}
                    />
                  </TabsContent>
                  <TabsContent value="php">
                    <CodeBlock
                      id="php-example"
                      language="php"
                      code={`<?php
$ch = curl_init('https://msgflow.in/api/v1/messages/send');
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
curl_setopt($ch, CURLOPT_POST, true);
curl_setopt($ch, CURLOPT_HTTPHEADER, [
    'Authorization: Bearer YOUR_API_KEY',
    'Content-Type: application/json'
]);
curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode([
    'to' => '+919876543210',
    'template_id' => 123,
    'parameters' => [
        'name' => 'John Doe',
        'order_id' => 'ORD12345'
    ],
    'message_type' => 'UTILITY'
]));

$response = curl_exec($ch);
curl_close($ch);
echo $response;`}
                    />
                  </TabsContent>
                  <TabsContent value="json">
                    <CodeBlock
                      id="json-example"
                      language="json"
                      code={`{
  "to": "+919876543210",
  "template_id": 123,
  "parameters": {
    "name": "John Doe",
    "order_id": "ORD12345"
  },
  "message_type": "UTILITY"
}`}
                    />
                  </TabsContent>
                </Tabs>
              </motion.div>

              {/* API Scopes */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="bg-card rounded-2xl border border-border p-8"
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                    <FileText className="w-6 h-6 text-primary" />
                  </div>
                  <h2 className="font-display text-2xl font-bold text-foreground">API Key Scopes</h2>
                </div>
                <p className="text-muted-foreground mb-6">
                  When creating an API key, you can specify scopes to limit its permissions.
                </p>
                <div className="grid md:grid-cols-2 gap-3">
                  {scopes.map((item, index) => (
                    <div key={index} className="flex items-center gap-3 p-3 bg-muted rounded-xl">
                      <code className="text-primary font-mono text-sm">{item.scope}</code>
                      <span className="text-sm text-muted-foreground">— {item.description}</span>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* Webhooks */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.35 }}
                className="bg-card rounded-2xl border border-border p-8"
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                    <Webhook className="w-6 h-6 text-primary" />
                  </div>
                  <h2 className="font-display text-2xl font-bold text-foreground">Webhooks</h2>
                </div>
                <p className="text-muted-foreground mb-6">
                  MsgFlow sends webhooks to your endpoint when message status changes (delivered, read, failed).
                </p>
                <h3 className="font-semibold text-foreground mb-3">Webhook Payload:</h3>
                <CodeBlock
                  id="webhook-payload"
                  language="json"
                  code={`{
  "message_id": "12345",
  "status": "delivered",
  "to": "+919876543210",
  "timestamp": "2024-01-15T10:30:00Z",
  "error": null
}`}
                />
              </motion.div>
            </TabsContent>

            <TabsContent value="wordpress" className="space-y-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-card rounded-2xl border border-border p-8 text-center"
              >
                <div className="w-20 h-20 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-6">
                  <Download className="w-10 h-10 text-primary" />
                </div>
                <h2 className="font-display text-2xl font-bold text-foreground mb-4">WordPress Plugin</h2>
                <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
                  Easily integrate MsgFlow into your WordPress website. Send WhatsApp notifications for orders, 
                  form submissions, and more with our official plugin.
                </p>
                <Button size="lg" className="bg-primary hover:bg-primary/90 rounded-xl" asChild>
                  <a href="https://msgflow.in/documentation/download-plugin" target="_blank" rel="noopener noreferrer">
                    <Download className="w-5 h-5 mr-2" />
                    Download Plugin
                  </a>
                </Button>
              </motion.div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-muted py-8 border-t border-border">
        <div className="container-custom text-center">
          <p className="text-muted-foreground">
            Need help? Contact us at{" "}
            <a href="mailto:support@msgflow.in" className="text-primary hover:underline">
              support@msgflow.in
            </a>
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Documentation;
