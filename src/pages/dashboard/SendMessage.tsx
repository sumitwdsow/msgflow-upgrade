import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import DashboardLayout from "@/components/DashboardLayout";
import { Send } from "lucide-react";

const SendMessage = () => {
  const [selectedTemplate, setSelectedTemplate] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");

  const templates = [
    { id: "gold1", name: "gold1" },
    { id: "goldrate", name: "goldrate" },
    { id: "dhanteras", name: "dhanteras_pricegoildcoin" },
    { id: "hhg", name: "hhg" },
    { id: "pranav", name: "pranav" },
    { id: "utiligold", name: "utiligold" },
  ];

  return (
    <DashboardLayout title="Send Single Template Message">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-2xl mx-auto"
      >
        <div className="bg-card rounded-xl border border-border p-6">
          <div className="flex items-center gap-3 mb-2">
            <Send className="w-5 h-5 text-primary" />
            <h2 className="text-lg font-semibold text-foreground">Send Template Message</h2>
          </div>
          <p className="text-sm text-muted-foreground mb-6">
            Send a single WhatsApp template message using approved templates
          </p>

          <div className="space-y-6">
            {/* Template Select */}
            <div>
              <label className="text-sm font-medium text-foreground mb-2 block">
                Select Template <span className="text-red-500">*</span>
              </label>
              <Select value={selectedTemplate} onValueChange={setSelectedTemplate}>
                <SelectTrigger>
                  <SelectValue placeholder="Choose a template..." />
                </SelectTrigger>
                <SelectContent>
                  {templates.map((template) => (
                    <SelectItem key={template.id} value={template.id}>
                      {template.name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            {/* Phone Number */}
            <div>
              <label className="text-sm font-medium text-foreground mb-2 block">
                Recipient Phone Number <span className="text-red-500">*</span>
              </label>
              <Input
                placeholder="e.g., 919876543210 (with country code, no + sign)"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
                className="font-mono"
              />
              <p className="text-xs text-muted-foreground mt-2">
                Enter phone number with country code (e.g., 919876543210 for India)
              </p>
            </div>

            {/* Submit Button */}
            <div className="flex justify-end">
              <Button 
                disabled={!selectedTemplate || !phoneNumber}
                className="bg-primary hover:bg-primary/90 text-white disabled:opacity-50"
              >
                <Send className="w-4 h-4 mr-2" />
                SEND MESSAGE
              </Button>
            </div>
          </div>
        </div>
      </motion.div>
    </DashboardLayout>
  );
};

export default SendMessage;
