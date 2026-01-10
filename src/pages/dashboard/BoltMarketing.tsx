import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { Link } from "react-router-dom";
import { 
  Zap, 
  MessageSquare, 
  ArrowRight, 
  ArrowLeft,
  Check, 
  FileText, 
  Send, 
  BarChart3,
  Users,
  Clock,
  Home,
  Inbox,
  LogOut,
  Settings,
  Bot,
  GitBranch,
  AlertTriangle,
  Mail,
  Webhook,
  CreditCard,
  Receipt,
  Building2,
  HelpCircle,
  TicketCheck,
  BellRing,
  Wallet,
  Plus,
  Bell,
  Search,
  Filter,
  ChevronRight,
  AlertCircle
} from "lucide-react";

const BoltMarketing = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [selectedTemplate, setSelectedTemplate] = useState<string | null>(null);
  const [selectedContacts, setSelectedContacts] = useState<string[]>([]);
  const [contactTab, setContactTab] = useState<'individual' | 'segment'>('individual');
  const [searchQuery, setSearchQuery] = useState('');

  const steps = [
    { number: 1, label: "Template" },
    { number: 2, label: "Contacts" },
    { number: 3, label: "Variables" },
    { number: 4, label: "Confirm" },
  ];

  const templates = [
    { id: "gold1", name: "gold1", type: "MARKETING", language: "EN" },
    { id: "dhanteras", name: "dhanteras_pricegoildcoin", type: "MARKETING", language: "EN" },
    { id: "hhg", name: "hhg", type: "MARKETING", language: "EN" },
    { id: "pranav", name: "pranav", type: "MARKETING", language: "EN" },
    { id: "utiligold", name: "utiligold", type: "MARKETING", language: "EN", description: "Gold Rate Information for today: 18K Gold – ₹{{1}} per gram 22K Gold – ₹{{2}} per gram 24K Gold...", variables: 3 },
    { id: "preview1", name: "previewtest21760152477", type: "MARKETING", language: "EN" },
    { id: "preview2", name: "previewtest1760152377", type: "MARKETING", language: "EN" },
    { id: "testimg", name: "testimg1760151901", type: "MARKETING", language: "EN" },
    { id: "a112", name: "a112_1759306013_test", type: "MARKETING", language: "EN" },
    { id: "livegold", name: "livegoldprice", type: "MARKETING", language: "EN" },
    { id: "goldprice", name: "goldprice_1759295548", type: "MARKETING", language: "EN" },
    { id: "test_marketing", name: "test_marketing_1759283942", type: "MARKETING", language: "EN" },
  ];

  const quickSelectOptions = [
    "First 10", "First 50", "First 100", "First 200", "First 500", "First 1K",
    "First 2K", "First 5K", "First 10K", "First 25K", "First 50K", "First 100K"
  ];

  const contacts = [
    { id: "1", name: "LOKESH", phone: "919897137356" },
    { id: "2", name: "LOKESH", phone: "919897137358" },
    { id: "3", name: "TEJVIR SINGH", phone: "919897871958" },
    { id: "4", name: "TEJVIR SINGH", phone: "919897871956" },
    { id: "5", name: "SUNIL KUMAR", phone: "919897412203" },
    { id: "6", name: "SUNIL KUMAR", phone: "919897412205" },
  ];

  const navItems = [
    { icon: Home, label: "Dashboard", href: "/dashboard" },
    { icon: Zap, label: "Bolt Marketing", active: true },
    { icon: BarChart3, label: "Bolt Reports" },
    { icon: Bot, label: "Chatbot" },
    { icon: GitBranch, label: "Flow Builder" },
    { icon: Send, label: "Campaigns" },
    { icon: FileText, label: "Templates" },
    { icon: Mail, label: "Send Message" },
    { icon: Clock, label: "Message History" },
    { icon: AlertTriangle, label: "Failed Messages" },
    { icon: Inbox, label: "Inbox" },
    { icon: Mail, label: "Inbound Messages" },
    { icon: Users, label: "Contacts" },
    { icon: BarChart3, label: "Reports" },
    { icon: Webhook, label: "Webhook Activity" },
    { icon: Wallet, label: "Wallet" },
    { icon: Plus, label: "Top-up Wallet", indent: true },
    { icon: CreditCard, label: "Billing" },
    { icon: Receipt, label: "Invoices" },
    { icon: Building2, label: "Business Profile" },
    { icon: HelpCircle, label: "Support Tickets" },
    { icon: TicketCheck, label: "Submit Ticket" },
    { icon: BellRing, label: "Notifications" },
  ];

  const handleContactToggle = (contactId: string) => {
    setSelectedContacts(prev => 
      prev.includes(contactId) 
        ? prev.filter(id => id !== contactId)
        : [...prev, contactId]
    );
  };

  const handleSelectAll = () => {
    setSelectedContacts(contacts.map(c => c.id));
  };

  const handleNext = () => {
    if (currentStep < 4) setCurrentStep(currentStep + 1);
  };

  const handleBack = () => {
    if (currentStep > 1) setCurrentStep(currentStep - 1);
  };

  return (
    <div className="min-h-screen bg-muted/30">
      {/* Sidebar */}
      <motion.aside
        initial={{ x: -280 }}
        animate={{ x: 0 }}
        transition={{ duration: 0.5 }}
        className="fixed left-0 top-0 bottom-0 w-64 bg-card border-r border-border hidden lg:flex flex-col overflow-y-auto"
      >
        {/* Logo */}
        <div className="p-4 border-b border-border sticky top-0 bg-card z-10">
          <Link to="/" className="flex items-center gap-2 group">
            <motion.div
              whileHover={{ scale: 1.1, rotate: 5 }}
              className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center shadow-lg"
            >
              <MessageSquare className="w-5 h-5 text-white" />
            </motion.div>
            <span className="font-display font-bold text-lg text-primary">MsgFlow</span>
          </Link>
        </div>

        {/* Navigation */}
        <nav className="flex-1 p-3">
          <div className="space-y-0.5">
            {navItems.map((item, index) => (
              <motion.div key={index}>
                {item.href ? (
                  <Link
                    to={item.href}
                    className={`flex items-center gap-3 px-3 py-2.5 rounded-lg transition-all duration-200 text-sm ${
                      item.indent ? 'ml-4' : ''
                    } ${
                      item.active 
                        ? 'bg-primary/10 text-primary font-medium border-l-4 border-primary -ml-px' 
                        : 'text-muted-foreground hover:bg-muted hover:text-foreground'
                    }`}
                  >
                    <item.icon className="w-4 h-4" />
                    {item.label}
                  </Link>
                ) : (
                  <a
                    href="#"
                    className={`flex items-center gap-3 px-3 py-2.5 rounded-lg transition-all duration-200 text-sm ${
                      item.indent ? 'ml-4' : ''
                    } ${
                      item.active 
                        ? 'bg-primary/10 text-primary font-medium border-l-4 border-primary -ml-px' 
                        : 'text-muted-foreground hover:bg-muted hover:text-foreground'
                    }`}
                  >
                    <item.icon className="w-4 h-4" />
                    {item.label}
                  </a>
                )}
              </motion.div>
            ))}
          </div>

          <div className="mt-6 pt-6 border-t border-border space-y-0.5">
            <a href="#" className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-muted-foreground hover:bg-muted hover:text-foreground transition-all text-sm">
              <Settings className="w-4 h-4" />
              Settings
            </a>
            <a href="#" className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-muted-foreground hover:bg-muted hover:text-foreground transition-all text-sm">
              <LogOut className="w-4 h-4" />
              Logout
            </a>
          </div>
        </nav>
      </motion.aside>

      {/* Main Content */}
      <main className="lg:ml-64">
        {/* Top Header */}
        <motion.header
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="sticky top-0 z-40 bg-card/95 backdrop-blur-xl border-b border-border px-6 py-4"
        >
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Zap className="w-6 h-6 text-amber-500" />
              <h1 className="font-display text-xl font-semibold text-foreground">Bolt Marketing</h1>
              <span className="text-sm text-muted-foreground">
                Wallet Balance: <span className="text-primary font-medium">₹15092.66</span>
              </span>
            </div>

            <div className="flex items-center gap-4">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="relative p-2.5 rounded-lg hover:bg-muted transition-colors"
              >
                <Bell className="w-5 h-5 text-muted-foreground" />
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.02 }}
                className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-muted transition-colors"
              >
                <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center border-2 border-primary/30">
                  <span className="font-medium text-primary text-sm">P</span>
                </div>
                <span className="hidden md:block text-sm font-medium text-foreground">Pranav Goel</span>
              </motion.button>
            </div>
          </div>
        </motion.header>

        {/* Content */}
        <div className="p-6">
          {/* Info Banner */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-card rounded-xl p-5 border border-border mb-6"
          >
            <div className="flex items-start gap-3">
              <div className="w-10 h-10 rounded-lg bg-amber-100 dark:bg-amber-900/30 flex items-center justify-center flex-shrink-0">
                <Zap className="w-5 h-5 text-amber-500" />
              </div>
              <div>
                <h2 className="font-semibold text-foreground mb-1">Ultra-Fast Marketing Messages</h2>
                <p className="text-sm text-muted-foreground">
                  Send marketing messages at lightning speed using WhatsApp's MM Lite API. Perfect for time-sensitive promotions and campaigns. 
                  <span className="text-primary font-medium ml-1">Cost: ₹1.01/message (₹0.86 + 18% GST)</span>
                </p>
              </div>
            </div>
            
            <div className="mt-4 p-3 bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-800 rounded-lg">
              <p className="text-sm text-amber-700 dark:text-amber-400">
                <span className="font-medium">Note:</span> Some messages may fail due to WhatsApp's ecosystem engagement policies. Failed messages are automatically refunded. This is normal behavior and not a system error.
              </p>
            </div>
          </motion.div>

          {/* Stepper */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="mb-8"
          >
            <div className="flex items-center justify-between max-w-3xl mx-auto">
              {steps.map((step, index) => (
                <div key={step.number} className="flex items-center flex-1">
                  <div className="flex flex-col items-center">
                    <motion.div
                      className={`w-10 h-10 rounded-full flex items-center justify-center font-semibold text-sm transition-all ${
                        currentStep >= step.number
                          ? 'bg-primary text-white'
                          : 'bg-muted text-muted-foreground'
                      }`}
                      animate={{ scale: currentStep === step.number ? 1.1 : 1 }}
                    >
                      {currentStep > step.number ? (
                        <Check className="w-5 h-5" />
                      ) : (
                        step.number
                      )}
                    </motion.div>
                    <span className={`text-xs mt-2 ${
                      currentStep >= step.number ? 'text-foreground font-medium' : 'text-muted-foreground'
                    }`}>
                      {step.label}
                    </span>
                  </div>
                  {index < steps.length - 1 && (
                    <div className={`flex-1 h-0.5 mx-2 ${
                      currentStep > step.number ? 'bg-primary' : 'bg-muted'
                    }`} />
                  )}
                </div>
              ))}
            </div>
          </motion.div>

          {/* Step Content */}
          <AnimatePresence mode="wait">
            {/* Step 1: Select Template */}
            {currentStep === 1 && (
              <motion.div
                key="step1"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
              >
                <h3 className="text-lg font-semibold text-foreground mb-4">Select Marketing Template</h3>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {templates.map((template) => (
                    <motion.div
                      key={template.id}
                      whileHover={{ y: -2 }}
                      onClick={() => setSelectedTemplate(template.id)}
                      className={`bg-card rounded-xl p-4 border cursor-pointer transition-all ${
                        selectedTemplate === template.id
                          ? 'border-primary ring-2 ring-primary/20'
                          : 'border-border hover:border-primary/50'
                      }`}
                    >
                      <h4 className="font-medium text-foreground mb-2">{template.name}</h4>
                      {template.description && (
                        <p className="text-xs text-muted-foreground mb-2 line-clamp-2">{template.description}</p>
                      )}
                      <div className="flex items-center gap-2 flex-wrap">
                        <span className="px-2 py-0.5 bg-primary/10 text-primary text-xs font-medium rounded">
                          {template.type}
                        </span>
                        <span className="px-2 py-0.5 bg-muted text-muted-foreground text-xs rounded">
                          {template.language}
                        </span>
                        {template.variables && (
                          <span className="px-2 py-0.5 bg-muted text-muted-foreground text-xs rounded">
                            {template.variables} variables
                          </span>
                        )}
                      </div>
                    </motion.div>
                  ))}
                </div>

                <div className="flex justify-end mt-6">
                  <Button 
                    onClick={handleNext}
                    disabled={!selectedTemplate}
                    className="bg-primary hover:bg-primary/90 text-white"
                  >
                    Next <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </div>
              </motion.div>
            )}

            {/* Step 2: Select Contacts */}
            {currentStep === 2 && (
              <motion.div
                key="step2"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
              >
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-semibold text-foreground">
                    Select Recipients ({selectedContacts.length} selected)
                  </h3>
                  <Button variant="ghost" size="sm" onClick={handleBack} className="text-primary">
                    <ArrowLeft className="w-4 h-4 mr-1" /> Back to Templates
                  </Button>
                </div>

                {/* Tabs */}
                <div className="flex border border-border rounded-lg overflow-hidden mb-4">
                  <button
                    onClick={() => setContactTab('individual')}
                    className={`flex-1 px-4 py-3 text-sm font-medium flex items-center justify-center gap-2 transition-colors ${
                      contactTab === 'individual'
                        ? 'bg-primary/10 text-primary border-b-2 border-primary'
                        : 'text-muted-foreground hover:bg-muted'
                    }`}
                  >
                    <Users className="w-4 h-4" />
                    Individual Contacts
                  </button>
                  <button
                    onClick={() => setContactTab('segment')}
                    className={`flex-1 px-4 py-3 text-sm font-medium flex items-center justify-center gap-2 transition-colors ${
                      contactTab === 'segment'
                        ? 'bg-primary/10 text-primary border-b-2 border-primary'
                        : 'text-muted-foreground hover:bg-muted'
                    }`}
                  >
                    <Filter className="w-4 h-4" />
                    Use Segment
                  </button>
                </div>

                {/* Tip Banner */}
                <div className="p-3 bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-800 rounded-lg mb-4">
                  <p className="text-sm text-amber-700 dark:text-amber-400">
                    <span className="font-medium">💡 Tip:</span> Only 5,000 contacts are loaded for browsing. To select more, use the <span className="font-medium">Quick Select buttons above</span> (First 10K, 25K, 50K, 100K, or Select All 184,355).
                  </p>
                </div>

                {/* Search */}
                <div className="relative mb-4">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                  <Input
                    placeholder="Search contacts by name or phone..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="pl-10"
                  />
                </div>

                {/* Quick Select */}
                <div className="bg-card rounded-xl p-4 border border-border mb-4">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-sm font-medium text-foreground">Quick Select:</span>
                    <span className="text-xs text-amber-500">👋 Total: 184,355 contacts available</span>
                  </div>
                  <div className="grid grid-cols-3 md:grid-cols-6 gap-2 mb-3">
                    {quickSelectOptions.map((option) => (
                      <Button
                        key={option}
                        variant="outline"
                        size="sm"
                        className="text-xs"
                      >
                        {option}
                      </Button>
                    ))}
                  </div>
                  <div className="flex items-center gap-2">
                    <Button variant="outline" size="sm" onClick={handleSelectAll}>
                      Select All 184,355
                    </Button>
                    <Button variant="outline" size="sm">
                      Select This Page
                    </Button>
                    <div className="flex-1" />
                    <span className="text-sm text-muted-foreground">Show:</span>
                    <select className="border border-border rounded px-2 py-1 text-sm bg-background">
                      <option>50</option>
                      <option>100</option>
                      <option>200</option>
                    </select>
                    <span className="text-sm text-muted-foreground">per page</span>
                  </div>
                </div>

                {/* Contacts List */}
                <div className="bg-card rounded-xl border border-border">
                  <div className="flex items-center justify-between p-4 border-b border-border">
                    <span className="text-sm text-muted-foreground">
                      Showing 1-50 of 5000 loaded (184,355 total - use Quick Select for more)
                    </span>
                    <span className="text-sm text-primary font-medium">{selectedContacts.length} selected</span>
                  </div>
                  <div className="divide-y divide-border">
                    {contacts.map((contact) => (
                      <div
                        key={contact.id}
                        className="flex items-center gap-4 p-4 hover:bg-muted/50 transition-colors"
                      >
                        <Checkbox
                          checked={selectedContacts.includes(contact.id)}
                          onCheckedChange={() => handleContactToggle(contact.id)}
                        />
                        <div>
                          <div className="font-medium text-foreground text-sm">{contact.name}</div>
                          <div className="text-xs text-muted-foreground">{contact.phone}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                  
                  {/* Pagination */}
                  <div className="flex items-center justify-between p-4 border-t border-border">
                    <Button variant="outline" size="sm" disabled>
                      <ArrowLeft className="w-4 h-4 mr-1" /> Previous
                    </Button>
                    <div className="flex items-center gap-1">
                      {[1, 2, 3, 4, 5].map((page) => (
                        <Button
                          key={page}
                          variant={page === 1 ? "default" : "outline"}
                          size="sm"
                          className="w-8 h-8 p-0"
                        >
                          {page}
                        </Button>
                      ))}
                      <span className="px-2 text-muted-foreground">...</span>
                      <Button variant="outline" size="sm" className="w-10 h-8 p-0">
                        100
                      </Button>
                    </div>
                    <Button variant="outline" size="sm">
                      Next <ArrowRight className="w-4 h-4 ml-1" />
                    </Button>
                  </div>
                </div>

                <div className="flex justify-end mt-6">
                  <Button 
                    onClick={handleNext}
                    className="bg-primary hover:bg-primary/90 text-white"
                  >
                    Next <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </div>
              </motion.div>
            )}

            {/* Step 3: Variables */}
            {currentStep === 3 && (
              <motion.div
                key="step3"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
              >
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-semibold text-foreground">Configure Variables</h3>
                  <Button variant="ghost" size="sm" onClick={handleBack} className="text-primary">
                    <ArrowLeft className="w-4 h-4 mr-1" /> Back
                  </Button>
                </div>

                <div className="bg-card rounded-xl p-6 border border-border mb-6">
                  <p className="text-muted-foreground text-sm mb-4">
                    No variables required for this template. Click Next to continue.
                  </p>
                </div>

                <div className="flex justify-end">
                  <Button 
                    onClick={handleNext}
                    className="bg-primary hover:bg-primary/90 text-white"
                  >
                    Next <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </div>
              </motion.div>
            )}

            {/* Step 4: Review & Send */}
            {currentStep === 4 && (
              <motion.div
                key="step4"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
              >
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-semibold text-foreground">Review & Send</h3>
                  <Button variant="ghost" size="sm" onClick={handleBack} className="text-primary">
                    <ArrowLeft className="w-4 h-4 mr-1" /> Back
                  </Button>
                </div>

                {/* Summary */}
                <div className="bg-card rounded-xl p-6 border border-border mb-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <span className="text-sm text-muted-foreground">Template</span>
                      <p className="font-medium text-foreground">{selectedTemplate || 'gold1'}</p>
                    </div>
                    <div>
                      <span className="text-sm text-muted-foreground">Recipients</span>
                      <p className="font-medium text-foreground">{selectedContacts.length || 1} contact{selectedContacts.length !== 1 ? 's' : ''}</p>
                    </div>
                    <div>
                      <span className="text-sm text-muted-foreground">Cost per Message</span>
                      <p className="font-medium text-foreground">₹1.01</p>
                    </div>
                    <div>
                      <span className="text-sm text-muted-foreground">Total Cost</span>
                      <p className="font-semibold text-primary text-lg">₹{((selectedContacts.length || 1) * 1.01).toFixed(2)}</p>
                    </div>
                  </div>
                </div>

                {/* Message Preview */}
                <div className="mb-6">
                  <h4 className="font-medium text-foreground mb-3">Message Preview</h4>
                  <div className="bg-muted/30 rounded-xl p-6 flex justify-center">
                    <div className="bg-card rounded-2xl p-4 max-w-xs shadow-lg border border-border">
                      <div className="bg-primary rounded-xl h-12 mb-2" />
                      <span className="text-xs text-muted-foreground">08:43</span>
                    </div>
                  </div>
                </div>

                {/* Warning */}
                <div className="p-4 bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-800 rounded-lg mb-6">
                  <div className="flex items-start gap-3">
                    <AlertCircle className="w-5 h-5 text-amber-500 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="text-sm font-medium text-amber-700 dark:text-amber-400">Ready to send?</p>
                      <p className="text-sm text-amber-600 dark:text-amber-500">
                        Messages will be sent immediately via Bolt (MM Lite) API. Make sure all details are correct before proceeding.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="flex justify-end">
                  <Button 
                    className="bg-amber-500 hover:bg-amber-600 text-white px-8"
                  >
                    <Zap className="w-4 h-4 mr-2" />
                    Send Bolt Messages
                  </Button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Footer */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="mt-12 flex items-center justify-between text-sm text-muted-foreground"
          >
            <div className="flex items-center gap-6">
              <Link to="/terms" className="hover:text-foreground transition-colors">Terms & Conditions</Link>
              <Link to="/privacy" className="hover:text-foreground transition-colors">Privacy Policy</Link>
              <a href="#" className="hover:text-foreground transition-colors">Support</a>
            </div>
            <span>Version 1.0.0</span>
          </motion.div>
        </div>
      </main>
    </div>
  );
};

export default BoltMarketing;
