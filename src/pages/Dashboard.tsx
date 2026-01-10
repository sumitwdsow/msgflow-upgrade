import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { 
  MessageSquare, 
  Send, 
  Users, 
  BarChart3, 
  Settings, 
  Wallet,
  FileText,
  Bell,
  Search,
  Plus,
  ChevronDown,
  Zap,
  TrendingUp,
  CheckCircle,
  ArrowUpRight,
  Home,
  Inbox,
  LogOut
} from "lucide-react";
import { Link } from "react-router-dom";

const Dashboard = () => {
  const stats = [
    { label: "Total Messages", value: "12,458", change: "+12.5%", icon: Send, positive: true, gradient: "from-blue-500 to-cyan-500" },
    { label: "Active Campaigns", value: "8", change: "+2", icon: Zap, positive: true, gradient: "from-primary to-accent" },
    { label: "Contacts", value: "3,247", change: "+156", icon: Users, positive: true, gradient: "from-purple-500 to-pink-500" },
    { label: "Wallet Balance", value: "₹4,520", change: "-₹280", icon: Wallet, positive: false, gradient: "from-orange-500 to-red-500" },
  ];

  const recentCampaigns = [
    { name: "Diwali Sale Promo", status: "completed", sent: 2500, delivered: 2487, read: 1823 },
    { name: "New Product Launch", status: "active", sent: 1200, delivered: 1195, read: 890 },
    { name: "Customer Feedback", status: "scheduled", sent: 0, delivered: 0, read: 0 },
  ];

  const navItems = [
    { icon: Home, label: "Dashboard", active: true },
    { icon: Send, label: "Campaigns" },
    { icon: Inbox, label: "Inbox" },
    { icon: Users, label: "Contacts" },
    { icon: FileText, label: "Templates" },
    { icon: Wallet, label: "Wallet" },
  ];

  return (
    <div className="min-h-screen bg-muted/30">
      {/* Sidebar */}
      <motion.aside
        initial={{ x: -280 }}
        animate={{ x: 0 }}
        transition={{ duration: 0.5 }}
        className="fixed left-0 top-0 bottom-0 w-64 bg-card border-r border-border hidden lg:flex flex-col"
      >
        {/* Logo */}
        <div className="p-6 border-b border-border">
          <Link to="/" className="flex items-center gap-2 group">
            <motion.div
              whileHover={{ scale: 1.1, rotate: 5 }}
              className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center shadow-lg"
            >
              <MessageSquare className="w-5 h-5 text-white" />
            </motion.div>
            <div>
              <span className="font-display font-bold text-lg text-foreground">
                MsgFlow
              </span>
            </div>
          </Link>
        </div>

        {/* Navigation */}
        <nav className="flex-1 p-4">
          <div className="space-y-1">
            {navItems.map((item, index) => (
              <motion.a
                key={index}
                href="#"
                whileHover={{ x: 4 }}
                className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200 ${
                  item.active 
                    ? 'bg-gradient-to-r from-primary/10 to-accent/10 text-primary font-medium border border-primary/20' 
                    : 'text-muted-foreground hover:bg-muted hover:text-foreground'
                }`}
              >
                <item.icon className="w-5 h-5" />
                {item.label}
              </motion.a>
            ))}
          </div>

          <div className="mt-8 pt-8 border-t border-border space-y-1">
            <a href="#" className="flex items-center gap-3 px-4 py-3 rounded-xl text-muted-foreground hover:bg-muted hover:text-foreground transition-all">
              <Settings className="w-5 h-5" />
              Settings
            </a>
            <a href="#" className="flex items-center gap-3 px-4 py-3 rounded-xl text-muted-foreground hover:bg-muted hover:text-foreground transition-all">
              <LogOut className="w-5 h-5" />
              Logout
            </a>
          </div>
        </nav>

        {/* Upgrade Banner */}
        <div className="p-4">
          <motion.div
            whileHover={{ scale: 1.02 }}
            className="bg-gradient-to-br from-primary/10 via-accent/5 to-primary/10 rounded-2xl p-5 border border-primary/20"
          >
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center mb-4 shadow-lg">
              <Zap className="w-6 h-6 text-white" />
            </div>
            <h4 className="font-semibold text-foreground mb-1">Upgrade to Pro</h4>
            <p className="text-sm text-muted-foreground mb-4">Get Bolt Marketing & more</p>
            <Button size="sm" className="w-full bg-gradient-to-r from-primary to-accent hover:opacity-90 text-white rounded-xl">
              Upgrade Now
            </Button>
          </motion.div>
        </div>
      </motion.aside>

      {/* Main Content */}
      <main className="lg:ml-64">
        {/* Top Header */}
        <motion.header
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="sticky top-0 z-40 bg-card/80 backdrop-blur-xl border-b border-border px-6 py-4"
        >
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <h1 className="font-display text-xl font-semibold text-foreground">Dashboard</h1>
            </div>

            <div className="flex items-center gap-4">
              {/* Search */}
              <div className="relative hidden md:block">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                <input
                  type="text"
                  placeholder="Search..."
                  className="h-10 w-64 pl-10 pr-4 rounded-xl border border-border bg-background text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                />
              </div>

              {/* Notifications */}
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="relative p-2.5 rounded-xl bg-muted hover:bg-muted/80 transition-colors"
              >
                <Bell className="w-5 h-5 text-muted-foreground" />
                <span className="absolute top-1.5 right-1.5 w-2.5 h-2.5 bg-primary rounded-full border-2 border-card" />
              </motion.button>

              {/* User Menu */}
              <motion.button
                whileHover={{ scale: 1.02 }}
                className="flex items-center gap-3 px-3 py-2 rounded-xl hover:bg-muted transition-colors"
              >
                <div className="w-9 h-9 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                  <span className="font-medium text-white text-sm">JD</span>
                </div>
                <span className="hidden md:block text-sm font-medium text-foreground">John Doe</span>
                <ChevronDown className="w-4 h-4 text-muted-foreground" />
              </motion.button>
            </div>
          </div>
        </motion.header>

        {/* Dashboard Content */}
        <div className="p-6">
          {/* Welcome Banner */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="relative overflow-hidden bg-gradient-to-r from-primary/10 via-accent/10 to-primary/5 rounded-3xl p-8 mb-8 border border-primary/20"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
            <div className="relative flex items-center justify-between">
              <div>
                <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-2">
                  Welcome back, John! 👋
                </h2>
                <p className="text-muted-foreground max-w-md">
                  You have 3 campaigns running. Your messages are performing 12% better than last week.
                </p>
              </div>
              <Button className="bg-gradient-to-r from-primary to-accent hover:opacity-90 text-white hidden md:flex rounded-xl shadow-lg">
                <Plus className="w-4 h-4 mr-2" />
                New Campaign
              </Button>
            </div>
          </motion.div>

          {/* Stats Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 + index * 0.1 }}
                whileHover={{ y: -4 }}
                className="bg-card rounded-2xl p-6 border border-border shadow-sm hover:shadow-lg hover:border-primary/20 transition-all duration-300"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${stat.gradient} flex items-center justify-center shadow-lg`}>
                    <stat.icon className="w-6 h-6 text-white" />
                  </div>
                  <span className={`text-sm font-medium px-2.5 py-1 rounded-full ${
                    stat.positive 
                      ? 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400' 
                      : 'bg-red-100 text-red-600 dark:bg-red-900/30 dark:text-red-400'
                  }`}>
                    {stat.change}
                  </span>
                </div>
                <div className="text-3xl font-bold text-foreground mb-1">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </motion.div>
            ))}
          </div>

          {/* Charts & Campaigns */}
          <div className="grid lg:grid-cols-3 gap-6">
            {/* Chart */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="lg:col-span-2 bg-card rounded-2xl p-6 border border-border shadow-sm"
            >
              <div className="flex items-center justify-between mb-6">
                <h3 className="font-display font-semibold text-foreground text-lg">Message Analytics</h3>
                <select className="text-sm border border-border rounded-xl px-4 py-2 bg-background focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all">
                  <option>Last 7 days</option>
                  <option>Last 30 days</option>
                  <option>Last 90 days</option>
                </select>
              </div>
              
              {/* Chart Visualization */}
              <div className="h-64 flex items-end justify-between gap-3 px-4">
                {[65, 80, 45, 90, 75, 85, 70].map((height, i) => (
                  <motion.div
                    key={i}
                    initial={{ height: 0 }}
                    animate={{ height: `${height}%` }}
                    transition={{ delay: 0.8 + i * 0.1, duration: 0.5 }}
                    className="flex-1 flex flex-col items-center gap-2"
                  >
                    <div 
                      className="w-full bg-gradient-to-t from-primary to-accent rounded-xl transition-all duration-300 hover:opacity-80"
                      style={{ height: '100%' }}
                    />
                    <span className="text-xs text-muted-foreground font-medium">
                      {['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'][i]}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Recent Campaigns */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              className="bg-card rounded-2xl p-6 border border-border shadow-sm"
            >
              <div className="flex items-center justify-between mb-6">
                <h3 className="font-display font-semibold text-foreground text-lg">Recent Campaigns</h3>
                <a href="#" className="text-sm text-primary hover:underline font-medium">View All</a>
              </div>
              
              <div className="space-y-4">
                {recentCampaigns.map((campaign, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.8 + index * 0.1 }}
                    whileHover={{ scale: 1.02 }}
                    className="p-4 rounded-xl bg-muted/50 hover:bg-muted transition-all cursor-pointer"
                  >
                    <div className="flex items-center justify-between mb-3">
                      <span className="font-medium text-foreground text-sm">{campaign.name}</span>
                      <span className={`px-2.5 py-1 rounded-full text-xs font-medium ${
                        campaign.status === 'completed' ? 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400' :
                        campaign.status === 'active' ? 'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400' :
                        'bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-400'
                      }`}>
                        {campaign.status}
                      </span>
                    </div>
                    <div className="flex items-center gap-4 text-xs text-muted-foreground">
                      <span className="flex items-center gap-1">
                        <Send className="w-3.5 h-3.5" /> {campaign.sent}
                      </span>
                      <span className="flex items-center gap-1">
                        <CheckCircle className="w-3.5 h-3.5" /> {campaign.delivered}
                      </span>
                      <span className="flex items-center gap-1">
                        <TrendingUp className="w-3.5 h-3.5" /> {campaign.read}
                      </span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Demo Notice */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1 }}
            className="mt-8 text-center"
          >
            <div className="inline-flex flex-col items-center gap-4 p-6 rounded-2xl bg-muted/50 border border-border">
              <p className="text-muted-foreground">
                This is a demo dashboard. To access the full platform:
              </p>
              <Button asChild className="bg-gradient-to-r from-primary to-accent hover:opacity-90 text-white rounded-xl shadow-lg">
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