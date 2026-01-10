import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import DashboardLayout from "@/components/DashboardLayout";
import { 
  MessageSquare, 
  Plus,
  Clock,
  CheckCircle,
  XCircle,
  Upload,
  Paperclip,
  HelpCircle,
  Mail
} from "lucide-react";

const SupportTickets = () => {
  const [activeTab, setActiveTab] = useState<"new" | "my">("new");
  const [category, setCategory] = useState("general");
  const [priority, setPriority] = useState("normal");

  const stats = [
    { label: "Total Tickets", value: "0", icon: MessageSquare, iconBg: "bg-blue-100 dark:bg-blue-900/30", iconColor: "text-blue-500" },
    { label: "Open", value: "0", icon: Clock, iconBg: "bg-amber-100 dark:bg-amber-900/30", iconColor: "text-amber-500", valueColor: "text-amber-500" },
    { label: "Resolved", value: "0", icon: CheckCircle, iconBg: "bg-green-100 dark:bg-green-900/30", iconColor: "text-green-500", valueColor: "text-green-500" },
    { label: "Closed", value: "0", icon: XCircle, iconBg: "bg-muted", iconColor: "text-muted-foreground" },
  ];

  const faqs = [
    { question: "How do I set up WhatsApp Business API?", answer: "To set up WhatsApp Business API, you need to verify your business and connect your phone number through our platform." },
    { question: "What are the message limits?", answer: "Message limits depend on your tier level. TIER_1K allows 1,000 messages per day, TIER_10K allows 10,000, and TIER_100K allows 100,000." },
    { question: "How do I manage my contacts?", answer: "You can manage contacts from the Contacts page. Import via CSV or add them individually." },
    { question: "What file formats are supported for bulk uploads?", answer: "We support CSV and Excel (XLSX) files for bulk contact uploads." },
    { question: "How do I track campaign performance?", answer: "Use the Reports page to track delivery rates, read receipts, and engagement metrics for your campaigns." },
  ];

  return (
    <DashboardLayout 
      title="Support Center"
      subtitle="Get help from our team"
    >
      {/* Stats */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="grid grid-cols-4 gap-4 mb-6"
      >
        {stats.map((stat, index) => (
          <div key={index} className="bg-card rounded-xl p-5 border border-border">
            <div className="flex items-start justify-between">
              <div>
                <div className="text-sm text-muted-foreground mb-1">{stat.label}</div>
                <div className={`text-2xl font-bold ${stat.valueColor || 'text-foreground'}`}>{stat.value}</div>
              </div>
              <div className={`w-10 h-10 rounded-full ${stat.iconBg} flex items-center justify-center`}>
                <stat.icon className={`w-5 h-5 ${stat.iconColor}`} />
              </div>
            </div>
          </div>
        ))}
      </motion.div>

      {/* Ticket Form */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="bg-card rounded-xl border border-border mb-6"
      >
        {/* Tabs */}
        <div className="flex items-center gap-6 px-6 border-b border-border">
          <button
            onClick={() => setActiveTab("new")}
            className={`flex items-center gap-2 py-4 border-b-2 transition-colors ${
              activeTab === "new"
                ? 'border-primary text-primary'
                : 'border-transparent text-muted-foreground hover:text-foreground'
            }`}
          >
            <Plus className="w-4 h-4" />
            Submit New Ticket
          </button>
          <button
            onClick={() => setActiveTab("my")}
            className={`flex items-center gap-2 py-4 border-b-2 transition-colors ${
              activeTab === "my"
                ? 'border-primary text-primary'
                : 'border-transparent text-muted-foreground hover:text-foreground'
            }`}
          >
            <MessageSquare className="w-4 h-4" />
            My Tickets
          </button>
        </div>

        <div className="p-6">
          {activeTab === "new" ? (
            <div className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="text-sm font-medium text-foreground mb-2 block">Category</label>
                  <Select value={category} onValueChange={setCategory}>
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="general">General Inquiry</SelectItem>
                      <SelectItem value="technical">Technical Support</SelectItem>
                      <SelectItem value="billing">Billing Issue</SelectItem>
                      <SelectItem value="api">API Support</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <label className="text-sm font-medium text-foreground mb-2 block">Priority</label>
                  <Select value={priority} onValueChange={setPriority}>
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="low">Low - No impact</SelectItem>
                      <SelectItem value="normal">Normal - Minor impact</SelectItem>
                      <SelectItem value="high">High - Major impact</SelectItem>
                      <SelectItem value="urgent">Urgent - Critical</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div>
                <label className="text-sm font-medium text-foreground mb-2 block">Subject</label>
                <Input placeholder="Brief description of your issue" />
              </div>

              <div>
                <label className="text-sm font-medium text-foreground mb-2 block">Message</label>
                <Textarea 
                  placeholder="Please describe your issue in detail..."
                  className="min-h-32"
                />
              </div>

              <div>
                <label className="text-sm font-medium text-foreground mb-2 block">Attachment (Optional)</label>
                <div className="border-2 border-dashed border-border rounded-xl p-8 text-center hover:border-primary/50 transition-colors cursor-pointer">
                  <Paperclip className="w-8 h-8 mx-auto text-muted-foreground mb-3" />
                  <p className="text-sm">
                    <span className="text-primary font-medium">Click to upload</span>
                    <span className="text-muted-foreground"> or drag and drop</span>
                  </p>
                  <p className="text-xs text-muted-foreground mt-1">PNG, JPG, PDF, DOC (Max 5MB)</p>
                </div>
              </div>

              <div className="flex justify-end">
                <Button className="bg-primary hover:bg-primary/90 text-white">
                  <Plus className="w-4 h-4 mr-2" />
                  SUBMIT TICKET
                </Button>
              </div>
            </div>
          ) : (
            <div className="text-center py-12 text-muted-foreground">
              <MessageSquare className="w-12 h-12 mx-auto mb-4 opacity-50" />
              <p>No tickets found</p>
            </div>
          )}
        </div>
      </motion.div>

      {/* FAQs */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="bg-card rounded-xl border border-border p-6 mb-6"
      >
        <div className="flex items-center gap-2 mb-4">
          <HelpCircle className="w-5 h-5 text-muted-foreground" />
          <h3 className="font-semibold text-foreground">Frequently Asked Questions</h3>
        </div>
        <Accordion type="single" collapsible>
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger className="text-left">{faq.question}</AccordionTrigger>
              <AccordionContent className="text-muted-foreground">{faq.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </motion.div>

      {/* Contact Banner */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="bg-gradient-to-r from-purple-600 to-purple-700 rounded-xl p-6 flex items-center justify-between"
      >
        <div className="text-white">
          <h4 className="font-semibold mb-1">Need immediate help?</h4>
          <p className="text-sm text-white/80">Our support team is available Monday-Friday, 9AM-6PM IST</p>
        </div>
        <Button variant="secondary" className="bg-white text-purple-600 hover:bg-white/90">
          <Mail className="w-4 h-4 mr-2" />
          Email Support
        </Button>
      </motion.div>
    </DashboardLayout>
  );
};

export default SupportTickets;
