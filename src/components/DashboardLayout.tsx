import { motion } from "framer-motion";
import { Link, useLocation } from "react-router-dom";
import { 
  MessageSquare, 
  Home,
  Zap,
  BarChart3,
  Bot,
  GitBranch,
  Send,
  FileText,
  Mail,
  Clock,
  AlertTriangle,
  Inbox,
  Users,
  Webhook,
  Wallet,
  Plus,
  CreditCard,
  Receipt,
  Building2,
  HelpCircle,
  TicketCheck,
  BellRing,
  Settings,
  LogOut,
  Bell
} from "lucide-react";

interface DashboardLayoutProps {
  children: React.ReactNode;
  title: string;
  subtitle?: string;
  headerActions?: React.ReactNode;
}

const DashboardLayout = ({ children, title, subtitle, headerActions }: DashboardLayoutProps) => {
  const location = useLocation();

  const navItems = [
    { icon: Home, label: "Dashboard", href: "/dashboard" },
    { icon: Zap, label: "Bolt Marketing", href: "/bolt-marketing" },
    { icon: BarChart3, label: "Bolt Reports", href: "/bolt-reports" },
    { icon: Bot, label: "Chatbot", href: "/chatbot" },
    { icon: GitBranch, label: "Flow Builder", href: "/flow-builder" },
    { icon: Send, label: "Campaigns", href: "/campaigns" },
    { icon: FileText, label: "Templates", href: "/templates" },
    { icon: Mail, label: "Send Message", href: "/send-message" },
    { icon: Clock, label: "Message History", href: "/message-history" },
    { icon: AlertTriangle, label: "Failed Messages", href: "/failed-messages" },
    { icon: Inbox, label: "Inbox", href: "/inbox" },
    { icon: Mail, label: "Inbound Messages", href: "/inbound-messages" },
    { icon: Users, label: "Contacts", href: "/contacts" },
    { icon: BarChart3, label: "Reports", href: "/reports" },
    { icon: Webhook, label: "Webhook Activity", href: "/webhook-activity" },
    { icon: Wallet, label: "Wallet", href: "/wallet" },
    { icon: Plus, label: "Top-up Wallet", href: "/top-up-wallet", indent: true },
    { icon: CreditCard, label: "Billing", href: "/billing" },
    { icon: Receipt, label: "Invoices", href: "/invoices" },
    { icon: Building2, label: "Business Profile", href: "/business-profile" },
    { icon: HelpCircle, label: "Support Tickets", href: "/support-tickets" },
    { icon: TicketCheck, label: "Submit Ticket", href: "/submit-ticket" },
    { icon: BellRing, label: "Notifications", href: "/notifications" },
  ];

  const isActive = (href: string) => location.pathname === href;

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
              <Link
                key={index}
                to={item.href}
                className={`flex items-center gap-3 px-3 py-2.5 rounded-lg transition-all duration-200 text-sm ${
                  item.indent ? 'ml-4' : ''
                } ${
                  isActive(item.href)
                    ? 'bg-primary/10 text-primary font-medium border-l-4 border-primary -ml-px' 
                    : 'text-muted-foreground hover:bg-muted hover:text-foreground'
                }`}
              >
                <item.icon className="w-4 h-4" />
                {item.label}
              </Link>
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
            <div>
              <h1 className="font-display text-xl font-semibold text-foreground">{title}</h1>
              {subtitle && <p className="text-sm text-muted-foreground">{subtitle}</p>}
            </div>

            <div className="flex items-center gap-4">
              {headerActions}
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
          {children}

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

export default DashboardLayout;
