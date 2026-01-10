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
  Clock,
  ArrowUpRight
} from "lucide-react";
import { Link } from "react-router-dom";

const Dashboard = () => {
  const stats = [
    { label: "Total Messages", value: "12,458", change: "+12.5%", icon: Send, positive: true },
    { label: "Active Campaigns", value: "8", change: "+2", icon: Zap, positive: true },
    { label: "Contacts", value: "3,247", change: "+156", icon: Users, positive: true },
    { label: "Wallet Balance", value: "₹4,520", change: "-₹280", icon: Wallet, positive: false },
  ];

  const recentCampaigns = [
    { name: "Diwali Sale Promo", status: "completed", sent: 2500, delivered: 2487, read: 1823 },
    { name: "New Product Launch", status: "active", sent: 1200, delivered: 1195, read: 890 },
    { name: "Customer Feedback", status: "scheduled", sent: 0, delivered: 0, read: 0 },
  ];

  return (
    <div className="min-h-screen bg-muted/30">
      {/* Sidebar */}
      <aside className="fixed left-0 top-0 bottom-0 w-64 bg-card border-r border-border hidden lg:flex flex-col">
        {/* Logo */}
        <div className="p-6 border-b border-border">
          <Link to="/" className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-xl bg-primary flex items-center justify-center">
              <MessageSquare className="w-5 h-5 text-primary-foreground" />
            </div>
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
            <a href="#" className="flex items-center gap-3 px-4 py-3 rounded-xl bg-primary/10 text-primary font-medium">
              <BarChart3 className="w-5 h-5" />
              Dashboard
            </a>
            <a href="#" className="flex items-center gap-3 px-4 py-3 rounded-xl text-muted-foreground hover:bg-muted transition-colors">
              <Send className="w-5 h-5" />
              Campaigns
            </a>
            <a href="#" className="flex items-center gap-3 px-4 py-3 rounded-xl text-muted-foreground hover:bg-muted transition-colors">
              <MessageSquare className="w-5 h-5" />
              Inbox
            </a>
            <a href="#" className="flex items-center gap-3 px-4 py-3 rounded-xl text-muted-foreground hover:bg-muted transition-colors">
              <Users className="w-5 h-5" />
              Contacts
            </a>
            <a href="#" className="flex items-center gap-3 px-4 py-3 rounded-xl text-muted-foreground hover:bg-muted transition-colors">
              <FileText className="w-5 h-5" />
              Templates
            </a>
            <a href="#" className="flex items-center gap-3 px-4 py-3 rounded-xl text-muted-foreground hover:bg-muted transition-colors">
              <Wallet className="w-5 h-5" />
              Wallet
            </a>
          </div>

          <div className="mt-8 pt-8 border-t border-border">
            <a href="#" className="flex items-center gap-3 px-4 py-3 rounded-xl text-muted-foreground hover:bg-muted transition-colors">
              <Settings className="w-5 h-5" />
              Settings
            </a>
          </div>
        </nav>

        {/* Upgrade Banner */}
        <div className="p-4">
          <div className="bg-gradient-to-br from-primary/10 to-accent/10 rounded-xl p-4 border border-primary/20">
            <Zap className="w-8 h-8 text-primary mb-2" />
            <h4 className="font-semibold text-foreground mb-1">Upgrade to Pro</h4>
            <p className="text-sm text-muted-foreground mb-3">Get Bolt Marketing & more</p>
            <Button size="sm" className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">
              Upgrade Now
            </Button>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <main className="lg:ml-64">
        {/* Top Header */}
        <header className="sticky top-0 z-40 bg-card/95 backdrop-blur-sm border-b border-border px-6 py-4">
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
                  className="h-10 w-64 pl-10 pr-4 rounded-lg border border-border bg-background text-sm focus:outline-none focus:ring-2 focus:ring-primary/20"
                />
              </div>

              {/* Notifications */}
              <button className="relative p-2 rounded-lg hover:bg-muted transition-colors">
                <Bell className="w-5 h-5 text-muted-foreground" />
                <span className="absolute top-1 right-1 w-2 h-2 bg-primary rounded-full" />
              </button>

              {/* User Menu */}
              <button className="flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-muted transition-colors">
                <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                  <span className="font-medium text-primary text-sm">JD</span>
                </div>
                <span className="hidden md:block text-sm font-medium text-foreground">John Doe</span>
                <ChevronDown className="w-4 h-4 text-muted-foreground" />
              </button>
            </div>
          </div>
        </header>

        {/* Dashboard Content */}
        <div className="p-6">
          {/* Welcome Banner */}
          <div className="bg-gradient-to-r from-primary/10 via-accent/10 to-primary/5 rounded-2xl p-6 mb-8 border border-primary/20">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="font-display text-2xl font-bold text-foreground mb-2">
                  Welcome back, John! 👋
                </h2>
                <p className="text-muted-foreground">
                  You have 3 campaigns running. Your messages are performing 12% better than last week.
                </p>
              </div>
              <Button className="bg-primary hover:bg-primary/90 text-primary-foreground hidden md:flex">
                <Plus className="w-4 h-4 mr-2" />
                New Campaign
              </Button>
            </div>
          </div>

          {/* Stats Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {stats.map((stat, index) => (
              <div key={index} className="bg-card rounded-xl p-6 border border-border shadow-sm">
                <div className="flex items-center justify-between mb-4">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                    <stat.icon className="w-5 h-5 text-primary" />
                  </div>
                  <span className={`text-sm font-medium ${stat.positive ? 'text-green-600' : 'text-red-500'}`}>
                    {stat.change}
                  </span>
                </div>
                <div className="text-2xl font-bold text-foreground mb-1">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>

          {/* Charts & Campaigns */}
          <div className="grid lg:grid-cols-3 gap-6">
            {/* Chart Placeholder */}
            <div className="lg:col-span-2 bg-card rounded-xl p-6 border border-border shadow-sm">
              <div className="flex items-center justify-between mb-6">
                <h3 className="font-display font-semibold text-foreground">Message Analytics</h3>
                <select className="text-sm border border-border rounded-lg px-3 py-2 bg-background">
                  <option>Last 7 days</option>
                  <option>Last 30 days</option>
                  <option>Last 90 days</option>
                </select>
              </div>
              
              {/* Simple Chart Visualization */}
              <div className="h-64 flex items-end justify-between gap-2 px-4">
                {[65, 80, 45, 90, 75, 85, 70].map((height, i) => (
                  <div key={i} className="flex-1 flex flex-col items-center gap-2">
                    <div 
                      className="w-full bg-gradient-to-t from-primary to-accent rounded-t-lg transition-all duration-500"
                      style={{ height: `${height}%` }}
                    />
                    <span className="text-xs text-muted-foreground">
                      {['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'][i]}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Recent Campaigns */}
            <div className="bg-card rounded-xl p-6 border border-border shadow-sm">
              <div className="flex items-center justify-between mb-6">
                <h3 className="font-display font-semibold text-foreground">Recent Campaigns</h3>
                <a href="#" className="text-sm text-primary hover:underline">View All</a>
              </div>
              
              <div className="space-y-4">
                {recentCampaigns.map((campaign, index) => (
                  <div key={index} className="p-4 rounded-lg bg-muted/50 hover:bg-muted transition-colors">
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-medium text-foreground text-sm">{campaign.name}</span>
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                        campaign.status === 'completed' ? 'bg-green-100 text-green-700' :
                        campaign.status === 'active' ? 'bg-blue-100 text-blue-700' :
                        'bg-yellow-100 text-yellow-700'
                      }`}>
                        {campaign.status}
                      </span>
                    </div>
                    <div className="flex items-center gap-4 text-xs text-muted-foreground">
                      <span className="flex items-center gap-1">
                        <Send className="w-3 h-3" /> {campaign.sent}
                      </span>
                      <span className="flex items-center gap-1">
                        <CheckCircle className="w-3 h-3" /> {campaign.delivered}
                      </span>
                      <span className="flex items-center gap-1">
                        <TrendingUp className="w-3 h-3" /> {campaign.read}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Demo Notice */}
          <div className="mt-8 text-center">
            <p className="text-muted-foreground mb-4">
              This is a demo dashboard. To access the full platform:
            </p>
            <Button asChild className="bg-primary hover:bg-primary/90 text-primary-foreground">
              <a href="https://msgflow.in/register" target="_blank" rel="noopener noreferrer">
                Sign Up for MsgFlow
                <ArrowUpRight className="ml-2 w-4 h-4" />
              </a>
            </Button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
