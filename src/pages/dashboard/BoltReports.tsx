import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import DashboardLayout from "@/components/DashboardLayout";
import { 
  Zap, 
  RefreshCw, 
  Download, 
  Clock,
  Mail,
  CheckCircle,
  Eye,
  XCircle,
  IndianRupee
} from "lucide-react";

const BoltReports = () => {
  const [fromDate, setFromDate] = useState("2026-01-03");
  const [toDate, setToDate] = useState("2026-01-10");

  const liveStats = [
    { label: "Today", value: "0", color: "text-foreground" },
    { label: "Delivered", value: "0", color: "text-primary" },
    { label: "Read", value: "0", color: "text-primary" },
    { label: "Failed", value: "0", color: "text-red-500" },
  ];

  const statsCards = [
    { label: "Total Messages", value: "0", sublabel: "0% success rate", icon: Mail, iconBg: "bg-blue-100 dark:bg-blue-900/30", iconColor: "text-blue-500" },
    { label: "Success Rate", value: "0%", sublabel: "0 successful", icon: CheckCircle, iconBg: "bg-green-100 dark:bg-green-900/30", iconColor: "text-green-500" },
    { label: "Read Messages", value: "0", sublabel: "engagement", icon: Eye, iconBg: "bg-purple-100 dark:bg-purple-900/30", iconColor: "text-purple-500" },
    { label: "Total Cost", value: "₹0.00", sublabel: "spent", icon: IndianRupee, iconBg: "bg-amber-100 dark:bg-amber-900/30", iconColor: "text-amber-500" },
  ];

  return (
    <DashboardLayout 
      title="Bolt Marketing Reports"
      headerActions={
        <div className="flex items-center gap-2">
          <Button size="sm" className="bg-primary hover:bg-primary/90 text-white">
            <RefreshCw className="w-4 h-4 mr-2" />
            REFRESH
          </Button>
          <Button size="sm" variant="outline">
            <Download className="w-4 h-4 mr-2" />
            EXPORT CSV
          </Button>
        </div>
      }
    >
      {/* Live Statistics */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-card rounded-xl p-6 border border-border mb-6"
      >
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2">
            <Clock className="w-5 h-5 text-muted-foreground" />
            <span className="font-medium text-foreground">Live Statistics</span>
          </div>
          <span className="text-sm text-primary">Last updated: 03:15:14</span>
        </div>
        
        <div className="grid grid-cols-4 gap-8">
          {liveStats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className={`text-3xl font-bold ${stat.color}`}>{stat.value}</div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>
      </motion.div>

      {/* Date Filters */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="grid md:grid-cols-3 gap-4 mb-6"
      >
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
        <div className="flex items-end">
          <Button className="w-full bg-primary hover:bg-primary/90 text-white">
            APPLY FILTERS
          </Button>
        </div>
      </motion.div>

      {/* Stats Cards */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="grid md:grid-cols-4 gap-4 mb-6"
      >
        {statsCards.map((stat, index) => (
          <div key={index} className="bg-card rounded-xl p-5 border border-border">
            <div className="flex items-start justify-between">
              <div>
                <div className="text-sm text-muted-foreground mb-1">{stat.label}</div>
                <div className="text-2xl font-bold text-foreground">{stat.value}</div>
                <div className="text-xs text-muted-foreground mt-1">
                  <span className="text-green-500">↑ 0%</span> {stat.sublabel}
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
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="bg-card rounded-xl p-6 border border-border"
        >
          <h3 className="font-semibold text-foreground mb-4">Messages Over Time</h3>
          <div className="h-64 flex items-center justify-center text-muted-foreground">
            <p>No data available for selected period</p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="bg-card rounded-xl p-6 border border-border"
        >
          <h3 className="font-semibold text-foreground mb-4">Status Distribution</h3>
          <div className="h-64 flex items-center justify-center text-muted-foreground">
            <p>No data available for selected period</p>
          </div>
        </motion.div>
      </div>
    </DashboardLayout>
  );
};

export default BoltReports;
