import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { 
  MessageSquare, 
  Send, 
  Users, 
  Settings, 
  Wallet,
  FileText,
  Bell,
  Plus,
  ChevronDown,
  Zap,
  Home,
  Inbox,
  LogOut,
  BarChart3,
  Bot,
  GitBranch,
  Clock,
  AlertTriangle,
  Mail,
  Webhook,
  CreditCard,
  Receipt,
  Building2,
  HelpCircle,
  TicketCheck,
  BellRing,
  Upload,
  ChevronRight,
  ArrowUpRight
} from "lucide-react";
import { Link } from "react-router-dom";
import { Progress } from "@/components/ui/progress";

const Dashboard = () => {
  const stats = [
    { label: "Total campaigns", value: "8", title: "CAMPAIGNS", icon: GitBranch, color: "text-primary", bgColor: "bg-primary/10", iconBg: "bg-primary/20" },
    { label: "Last 30 days", value: "123941", title: "MESSAGES", icon: MessageSquare, color: "text-primary", bgColor: "bg-primary/10", iconBg: "bg-primary/20" },
    { label: "Total contacts", value: "184355", title: "CONTACTS", icon: Users, color: "text-primary", bgColor: "bg-primary/10", iconBg: "bg-primary/20" },
    { label: "Available balance", value: "₹15092.66", title: "WALLET BALANCE", icon: Wallet, color: "text-primary", bgColor: "bg-primary/10", iconBg: "bg-primary/20" },
    { label: "Awaiting approval", value: "0", title: "PENDING TEMPLATES", icon: FileText, color: "text-primary", bgColor: "bg-orange-50 dark:bg-orange-900/20", iconBg: "bg-orange-100 dark:bg-orange-900/30", titleColor: "text-orange-500" },
  ];

  const quickActions = [
    { title: "Create Campaign", description: "Launch new messaging campaign", icon: Plus, bgColor: "bg-card" },
    { title: "Upload Contacts", description: "Import and manage contacts", icon: Upload, bgColor: "bg-card", iconColor: "text-primary" },
    { title: "Manage Templates", description: "Create and edit templates", icon: FileText, bgColor: "bg-card" },
    { title: "Check Reports", description: "View analytics and insights", icon: BarChart3, bgColor: "bg-card", iconColor: "text-orange-500", iconBg: "bg-orange-100 dark:bg-orange-900/30" },
  ];

  const messageDelivery = [
    { label: "Delivered", value: 85, color: "bg-green-500" },
    { label: "Read", value: 72, color: "bg-blue-500" },
    { label: "Failed", value: 10, color: "bg-red-500" },
    { label: "Pending", value: 5, color: "bg-amber-500" },
  ];

  const recentCampaigns = [
    { name: "gghj", type: "WhatsApp Campaign", date: "Oct 11, 2025", status: "Draft", sent: "1,250", rate: 92 },
    { name: "a23", type: "WhatsApp Campaign", date: "Oct 11, 2025", status: "Draft", sent: "890", rate: 88 },
    { name: "a1", type: "WhatsApp Campaign", date: "Oct 11, 2025", status: "Draft", sent: "2,100", rate: 95 },
    { name: "ww", type: "WhatsApp Campaign", date: "Oct 11, 2025", status: "Draft", sent: "567", rate: 76 },
    { name: "11", type: "WhatsApp Campaign", date: "Oct 11, 2025", status: "Failed", sent: "1,800", rate: 91 },
  ];

  const navItems = [
    { icon: Home, label: "Dashboard", active: true },
    { icon: Zap, label: "Bolt Marketing", badge: "⚡" },
    { icon: BarChart3, label: "Bolt Reports", badge: "📊" },
    { icon: Bot, label: "Chatbot", badge: "🤖" },
    { icon: GitBranch, label: "Flow Builder", badge: "🔄" },
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
    { icon: BellRing, label: "Notifications", badge: "🔔" },
  ];

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
            <div>
              <span className="font-display font-bold text-lg text-primary">
                MsgFlow
              </span>
            </div>
          </Link>
        </div>

        {/* Navigation */}
        <nav className="flex-1 p-3">
          <div className="space-y-0.5">
            {navItems.map((item, index) => (
              <motion.a
                key={index}
                href="#"
                whileHover={{ x: 2 }}
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
              </motion.a>
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
            <h1 className="font-display text-xl font-semibold text-foreground">Dashboard</h1>

            <div className="flex items-center gap-4">
              {/* Notifications */}
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="relative p-2.5 rounded-lg hover:bg-muted transition-colors"
              >
                <Bell className="w-5 h-5 text-muted-foreground" />
              </motion.button>

              {/* User Menu */}
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

        {/* Dashboard Content */}
        <div className="p-6">
          {/* Stats Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 mb-6">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 + index * 0.05 }}
                whileHover={{ y: -2 }}
                className={`${stat.bgColor} rounded-xl p-4 border border-border/50`}
              >
                <div className="flex items-start justify-between mb-2">
                  <span className={`text-xs font-semibold uppercase tracking-wide ${stat.titleColor || stat.color}`}>
                    {stat.title}
                  </span>
                  <div className={`w-8 h-8 rounded-lg ${stat.iconBg} flex items-center justify-center`}>
                    <stat.icon className={`w-4 h-4 ${stat.titleColor || stat.color}`} />
                  </div>
                </div>
                <div className="text-2xl font-bold text-foreground mb-1">{stat.value}</div>
                <div className="text-xs text-muted-foreground">{stat.label}</div>
              </motion.div>
            ))}
          </div>

          {/* Quick Actions */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
            {quickActions.map((action, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 + index * 0.05 }}
                whileHover={{ y: -2, boxShadow: '0 4px 12px rgba(0,0,0,0.1)' }}
                className={`${action.bgColor} rounded-xl p-4 border border-border cursor-pointer transition-all`}
              >
                <div className="flex items-start justify-between">
                  <div>
                    <h3 className="font-semibold text-foreground text-sm mb-1">{action.title}</h3>
                    <p className="text-xs text-muted-foreground">{action.description}</p>
                  </div>
                  <div className={`w-10 h-10 rounded-lg ${action.iconBg || 'bg-primary/10'} flex items-center justify-center`}>
                    <action.icon className={`w-5 h-5 ${action.iconColor || 'text-primary'}`} />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Message Delivery & Templates */}
          <div className="grid lg:grid-cols-2 gap-6 mb-6">
            {/* Message Delivery */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="bg-card rounded-xl p-6 border border-border"
            >
              <div className="flex items-center justify-between mb-6">
                <h3 className="font-semibold text-foreground">Message Delivery</h3>
                <span className="text-sm text-muted-foreground">Last 30 days</span>
              </div>
              
              <div className="flex items-center gap-8">
                {/* Donut Chart */}
                <div className="relative w-36 h-36 flex-shrink-0">
                  <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
                    <circle
                      cx="50"
                      cy="50"
                      r="40"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="12"
                      className="text-muted/30"
                    />
                    <circle
                      cx="50"
                      cy="50"
                      r="40"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="12"
                      strokeDasharray={`${85 * 2.51} ${100 * 2.51}`}
                      className="text-green-500"
                      strokeLinecap="round"
                    />
                  </svg>
                  <div className="absolute inset-0 flex flex-col items-center justify-center">
                    <span className="text-2xl font-bold text-foreground">85%</span>
                    <span className="text-xs text-muted-foreground">Success</span>
                  </div>
                </div>

                {/* Progress Bars */}
                <div className="flex-1 space-y-4">
                  {messageDelivery.map((item, index) => (
                    <div key={index} className="space-y-1.5">
                      <div className="flex items-center justify-between text-sm">
                        <div className="flex items-center gap-2">
                          <div className={`w-2.5 h-2.5 rounded-full ${item.color}`} />
                          <span className="text-foreground">{item.label}</span>
                        </div>
                        <span className={`font-medium ${
                          item.label === 'Failed' ? 'text-red-500' : 
                          item.label === 'Pending' ? 'text-amber-500' : 
                          'text-foreground'
                        }`}>{item.value}%</span>
                      </div>
                      <div className="h-2 bg-muted rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={{ width: `${item.value}%` }}
                          transition={{ delay: 0.6 + index * 0.1, duration: 0.5 }}
                          className={`h-full rounded-full ${item.color}`}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Templates */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="bg-card rounded-xl p-6 border border-border"
            >
              <h3 className="font-semibold text-foreground mb-6">Templates</h3>
              
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-muted-foreground">Total Templates</span>
                  <span className="text-sm font-semibold text-foreground">24</span>
                </div>
                <Progress value={100} className="h-2 bg-primary/20" />
                
                <Button className="w-full bg-primary hover:bg-primary/90 text-white mt-4">
                  Create New Template
                </Button>
              </div>
            </motion.div>
          </div>

          {/* Recent Campaigns Table */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            className="bg-card rounded-xl border border-border overflow-hidden"
          >
            <div className="flex items-center justify-between p-6 border-b border-border">
              <h3 className="font-semibold text-foreground">Recent Campaigns</h3>
              <a href="#" className="text-sm text-primary hover:underline font-medium flex items-center gap-1">
                View All <ChevronRight className="w-4 h-4" />
              </a>
            </div>
            
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-border bg-muted/30">
                    <th className="text-left px-6 py-3 text-xs font-semibold text-muted-foreground uppercase tracking-wider">Campaign Name</th>
                    <th className="text-left px-6 py-3 text-xs font-semibold text-muted-foreground uppercase tracking-wider">Date</th>
                    <th className="text-left px-6 py-3 text-xs font-semibold text-muted-foreground uppercase tracking-wider">Status</th>
                    <th className="text-left px-6 py-3 text-xs font-semibold text-muted-foreground uppercase tracking-wider">Messages Sent</th>
                    <th className="text-left px-6 py-3 text-xs font-semibold text-muted-foreground uppercase tracking-wider">Delivery Rate</th>
                  </tr>
                </thead>
                <tbody>
                  {recentCampaigns.map((campaign, index) => (
                    <motion.tr
                      key={index}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.8 + index * 0.05 }}
                      className="border-b border-border last:border-0 hover:bg-muted/30 transition-colors"
                    >
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-3">
                          <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                            <MessageSquare className="w-4 h-4 text-primary" />
                          </div>
                          <div>
                            <div className="font-medium text-foreground text-sm">{campaign.name}</div>
                            <div className="text-xs text-muted-foreground">{campaign.type}</div>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4 text-sm text-muted-foreground">{campaign.date}</td>
                      <td className="px-6 py-4">
                        <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium ${
                          campaign.status === 'Draft' 
                            ? 'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400' 
                            : 'bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400'
                        }`}>
                          <span className={`w-1.5 h-1.5 rounded-full ${
                            campaign.status === 'Draft' ? 'bg-blue-500' : 'bg-red-500'
                          }`} />
                          {campaign.status}
                        </span>
                      </td>
                      <td className="px-6 py-4 text-sm text-foreground font-medium">{campaign.sent}</td>
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-3">
                          <div className="w-20 h-2 bg-muted rounded-full overflow-hidden">
                            <div 
                              className={`h-full rounded-full ${
                                campaign.rate >= 90 ? 'bg-green-500' : 
                                campaign.rate >= 80 ? 'bg-amber-500' : 'bg-red-500'
                              }`}
                              style={{ width: `${campaign.rate}%` }}
                            />
                          </div>
                          <span className={`text-sm font-medium ${
                            campaign.rate >= 90 ? 'text-green-500' : 
                            campaign.rate >= 80 ? 'text-amber-500' : 'text-red-500'
                          }`}>{campaign.rate}%</span>
                        </div>
                      </td>
                    </motion.tr>
                  ))}
                </tbody>
              </table>
            </div>
          </motion.div>

          {/* Footer */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className="mt-8 flex items-center justify-between text-sm text-muted-foreground"
          >
            <div className="flex items-center gap-6">
              <Link to="/terms" className="hover:text-foreground transition-colors">Terms & Conditions</Link>
              <Link to="/privacy" className="hover:text-foreground transition-colors">Privacy Policy</Link>
              <a href="#" className="hover:text-foreground transition-colors">Support</a>
            </div>
            <span>Version 1.0.0</span>
          </motion.div>

          {/* Demo Notice */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.1 }}
            className="mt-6 text-center"
          >
            <div className="inline-flex flex-col items-center gap-3 p-4 rounded-xl bg-muted/50 border border-border">
              <p className="text-sm text-muted-foreground">
                This is a demo dashboard. To access the full platform:
              </p>
              <Button asChild size="sm" className="bg-gradient-to-r from-primary to-accent hover:opacity-90 text-white rounded-lg">
                <a href="https://msgflow.in/register" target="_blank" rel="noopener noreferrer">
                  Sign Up for MsgFlow
                  <ArrowUpRight className="ml-2 w-4 h-4" />
                </a>
              </Button>
            </div>
          </motion.div>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
