import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import DashboardLayout from "@/components/DashboardLayout";
import { 
  FileText, 
  FileSpreadsheet,
  Mail,
  CheckCircle,
  Eye,
  XCircle,
  TrendingUp,
  TrendingDown,
  BarChart3
} from "lucide-react";

const Reports = () => {
  const [fromDate, setFromDate] = useState("2025-11-12");
  const [toDate, setToDate] = useState("2026-01-10");

  const stats = [
    { label: "Total Messages", value: "0", change: "+12%", positive: true, sublabel: "vs last period", icon: Mail, iconBg: "bg-blue-100 dark:bg-blue-900/30", iconColor: "text-blue-500" },
    { label: "Delivery Rate", value: "0.00%", change: "+3.2%", positive: true, sublabel: "vs last period", icon: CheckCircle, iconBg: "bg-green-100 dark:bg-green-900/30", iconColor: "text-green-500" },
    { label: "Read Rate", value: "0.00%", change: "+5.3%", positive: true, sublabel: "vs last period", icon: Eye, iconBg: "bg-purple-100 dark:bg-purple-900/30", iconColor: "text-purple-500" },
    { label: "Failure Rate", value: "0.00%", change: "-2.1%", positive: false, sublabel: "vs last period", icon: XCircle, iconBg: "bg-red-100 dark:bg-red-900/30", iconColor: "text-red-500" },
  ];

  const deliveryStats = [
    { label: "Delivered", value: "NaN%", color: "bg-green-500" },
    { label: "Read", value: "NaN%", color: "bg-blue-500" },
    { label: "Failed", value: "NaN%", color: "bg-red-500" },
    { label: "Pending", value: "NaN%", color: "bg-gray-400" },
  ];

  return (
    <DashboardLayout 
      title="Campaign Reports"
      headerActions={
        <div className="flex items-center gap-2">
          <Button variant="outline" size="sm">
            <FileText className="w-4 h-4 mr-2" />
            CSV
          </Button>
          <Button size="sm" className="bg-red-500 hover:bg-red-600 text-white">
            <FileText className="w-4 h-4 mr-2" />
            PDF
          </Button>
          <Button size="sm" className="bg-green-600 hover:bg-green-700 text-white">
            <FileSpreadsheet className="w-4 h-4 mr-2" />
            EXCEL
          </Button>
        </div>
      }
    >
      {/* Filters */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-card rounded-xl border border-border p-6 mb-6"
      >
        <div className="grid md:grid-cols-3 lg:grid-cols-6 gap-4">
          <div>
            <label className="text-sm font-medium text-foreground mb-2 block">From Date</label>
            <Input 
              type="date" 
              value={fromDate}
              onChange={(e) => setFromDate(e.target.value)}
            />
          </div>
          <div>
            <label className="text-sm font-medium text-foreground mb-2 block">To Date</label>
            <Input 
              type="date" 
              value={toDate}
              onChange={(e) => setToDate(e.target.value)}
            />
          </div>
          <div>
            <label className="text-sm font-medium text-foreground mb-2 block">Message Status</label>
            <Select>
              <SelectTrigger>
                <SelectValue placeholder="All Status" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Status</SelectItem>
                <SelectItem value="sent">Sent</SelectItem>
                <SelectItem value="delivered">Delivered</SelectItem>
                <SelectItem value="read">Read</SelectItem>
                <SelectItem value="failed">Failed</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div>
            <label className="text-sm font-medium text-foreground mb-2 block">Campaign</label>
            <Select>
              <SelectTrigger>
                <SelectValue placeholder="All Campaigns" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Campaigns</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div>
            <label className="text-sm font-medium text-foreground mb-2 block">Message Type</label>
            <Select>
              <SelectTrigger>
                <SelectValue placeholder="All Types" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Types</SelectItem>
                <SelectItem value="text">Text</SelectItem>
                <SelectItem value="image">Image</SelectItem>
                <SelectItem value="document">Document</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="flex items-end">
            <Button className="w-full bg-primary hover:bg-primary/90 text-white">
              APPLY FILTERS
            </Button>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-4 mt-4">
          <div>
            <label className="text-sm font-medium text-foreground mb-2 block">Min Delivery Rate (%)</label>
            <Input placeholder="e.g. 80" />
          </div>
          <div>
            <label className="text-sm font-medium text-foreground mb-2 block">Max Delivery Rate (%)</label>
            <Input placeholder="e.g. 100" />
          </div>
        </div>
      </motion.div>

      {/* Stats Cards */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="grid md:grid-cols-4 gap-4 mb-6"
      >
        {stats.map((stat, index) => (
          <div key={index} className="bg-card rounded-xl p-5 border border-border">
            <div className="flex items-start justify-between">
              <div>
                <div className="text-sm text-muted-foreground mb-1">{stat.label}</div>
                <div className="text-2xl font-bold text-foreground">{stat.value}</div>
                <div className="flex items-center gap-1 text-xs mt-1">
                  {stat.positive ? (
                    <TrendingUp className="w-3 h-3 text-green-500" />
                  ) : (
                    <TrendingDown className="w-3 h-3 text-red-500" />
                  )}
                  <span className={stat.positive ? 'text-green-500' : 'text-red-500'}>{stat.change}</span>
                  <span className="text-muted-foreground">{stat.sublabel}</span>
                </div>
              </div>
              <div className={`w-10 h-10 rounded-full ${stat.iconBg} flex items-center justify-center`}>
                <stat.icon className={`w-5 h-5 ${stat.iconColor}`} />
              </div>
            </div>
          </div>
        ))}
      </motion.div>

      {/* Charts */}
      <div className="grid lg:grid-cols-2 gap-6">
        {/* Messages Over Time */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="bg-card rounded-xl border border-border p-6"
        >
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-2">
              <BarChart3 className="w-5 h-5 text-muted-foreground" />
              <h3 className="font-semibold text-foreground">Messages Over Time</h3>
            </div>
            <Select defaultValue="7days">
              <SelectTrigger className="w-32">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="7days">Last 7 days</SelectItem>
                <SelectItem value="30days">Last 30 days</SelectItem>
                <SelectItem value="90days">Last 90 days</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="h-64 flex items-center justify-center text-muted-foreground">
            <p>No data available for selected period</p>
          </div>
        </motion.div>

        {/* Delivery Statistics */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="bg-card rounded-xl border border-border p-6"
        >
          <div className="flex items-center gap-2 mb-6">
            <BarChart3 className="w-5 h-5 text-muted-foreground" />
            <h3 className="font-semibold text-foreground">Delivery Statistics</h3>
          </div>
          
          <div className="flex items-center gap-4 flex-wrap">
            {deliveryStats.map((stat, index) => (
              <div key={index} className="flex items-center gap-2">
                <div className={`px-3 py-1.5 rounded text-white text-sm font-medium ${stat.color}`}>
                  {stat.label}:<br />{stat.value}
                </div>
              </div>
            ))}
          </div>

          <div className="h-48 flex items-center justify-center text-muted-foreground mt-4">
            <p>No data available for selected period</p>
          </div>
        </motion.div>
      </div>
    </DashboardLayout>
  );
};

export default Reports;
