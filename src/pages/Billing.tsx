import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import DashboardLayout from "@/components/DashboardLayout";
import { 
  FileText, 
  FileSpreadsheet,
  Wallet,
  MessageSquare,
  ArrowDown,
  Clock,
  Filter,
  CheckCircle
} from "lucide-react";

const Billing = () => {
  const [activeTab, setActiveTab] = useState<"charges" | "statement">("charges");
  const [search, setSearch] = useState("");

  const stats = [
    { label: "Current Balance", value: "₹15,092.66", sublabel: "Reserved: ₹0.00", icon: Wallet, iconBg: "bg-green-100 dark:bg-green-900/30", iconColor: "text-green-500" },
    { label: "Total Messages", value: "123,871", sublabel: "This Month: 0", sublabelColor: "text-red-500", icon: MessageSquare, iconBg: "bg-blue-100 dark:bg-blue-900/30", iconColor: "text-blue-500" },
    { label: "Total Spent", value: "₹1,27,175.45", sublabel: "Avg Cost: ₹1.03", icon: ArrowDown, iconBg: "bg-purple-100 dark:bg-purple-900/30", iconColor: "text-purple-500" },
    { label: "This Month", value: "₹0.00", sublabel: "vs Last Month", sublabelColor: "text-red-500", icon: Clock, iconBg: "bg-amber-100 dark:bg-amber-900/30", iconColor: "text-amber-500" },
  ];

  const messages = [
    { id: "#130738", apiId: "e3b90e32-d64b-4d90-a...", contact: "919821328856", campaign: "N/A", template: "goldrate", status: "Sent", cost: "₹1.01", date: "03 Dec 2025, 07:39" },
    { id: "#130722", apiId: "a8175332-bbc9-4610-8...", contact: "919818124021", campaign: "N/A", template: "goldrate", status: "Sent", cost: "₹1.01", date: "03 Dec 2025, 07:26" },
    { id: "#130729", apiId: "2694a837-d83c-4a4c-9...", contact: "919818136764", campaign: "N/A", template: "goldrate", status: "Sent", cost: "₹1.01", date: "03 Dec 2025, 07:26" },
    { id: "#130728", apiId: "b283f927-6fdb-4a7f-9...", contact: "919818135533", campaign: "N/A", template: "goldrate", status: "Sent", cost: "₹1.01", date: "03 Dec 2025, 07:26" },
    { id: "#130717", apiId: "16fb6ddc-6f58-4de4-8...", contact: "919818107543", campaign: "N/A", template: "goldrate", status: "Sent", cost: "₹1.01", date: "03 Dec 2025, 07:26" },
    { id: "#130725", apiId: "cc94c6b1-628f-4fec-8...", contact: "919818128575", campaign: "N/A", template: "goldrate", status: "Sent", cost: "₹1.01", date: "03 Dec 2025, 07:26" },
  ];

  return (
    <DashboardLayout 
      title="Billing & Transactions"
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
      {/* Stats */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="grid md:grid-cols-4 gap-4 mb-6"
      >
        {stats.map((stat, index) => (
          <div key={index} className="bg-card rounded-xl p-5 border border-border">
            <div className="flex items-start justify-between">
              <div>
                <div className="text-sm text-muted-foreground mb-1">{stat.label}</div>
                <div className="text-2xl font-bold text-foreground">{stat.value}</div>
                <div className={`text-xs ${stat.sublabelColor || 'text-muted-foreground'} mt-1`}>
                  {stat.sublabel} {stat.sublabelColor && <span>↓ 100%</span>}
                </div>
              </div>
              <div className={`w-10 h-10 rounded-full ${stat.iconBg} flex items-center justify-center`}>
                <stat.icon className={`w-5 h-5 ${stat.iconColor}`} />
              </div>
            </div>
          </div>
        ))}
      </motion.div>

      {/* Table Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="bg-card rounded-xl border border-border"
      >
        {/* Tabs */}
        <div className="flex items-center gap-6 px-6 border-b border-border">
          <button
            onClick={() => setActiveTab("charges")}
            className={`py-4 border-b-2 transition-colors ${
              activeTab === "charges"
                ? 'border-primary text-primary font-medium'
                : 'border-transparent text-muted-foreground hover:text-foreground'
            }`}
          >
            Message Charges
          </button>
          <button
            onClick={() => setActiveTab("statement")}
            className={`py-4 border-b-2 transition-colors ${
              activeTab === "statement"
                ? 'border-primary text-primary font-medium'
                : 'border-transparent text-muted-foreground hover:text-foreground'
            }`}
          >
            Wallet Statement
          </button>
        </div>

        {/* Filters */}
        <div className="p-6 border-b border-border">
          <div className="flex flex-wrap items-center gap-4">
            <Input
              placeholder="Search..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-48"
            />
            <Select>
              <SelectTrigger className="w-36">
                <SelectValue placeholder="All Statuses" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Statuses</SelectItem>
                <SelectItem value="sent">Sent</SelectItem>
                <SelectItem value="delivered">Delivered</SelectItem>
                <SelectItem value="failed">Failed</SelectItem>
              </SelectContent>
            </Select>
            <Input type="date" className="w-40" />
            <Input type="date" className="w-40" />
            <Button className="bg-primary hover:bg-primary/90 text-white">
              <Filter className="w-4 h-4 mr-2" />
              Apply Filters
            </Button>
            <Button variant="ghost">Clear</Button>
          </div>
        </div>

        {/* Table */}
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-border bg-muted/30">
                <th className="text-left px-6 py-3 text-xs font-semibold text-muted-foreground uppercase">Message ID</th>
                <th className="text-left px-6 py-3 text-xs font-semibold text-muted-foreground uppercase">Contact</th>
                <th className="text-left px-6 py-3 text-xs font-semibold text-muted-foreground uppercase">Campaign</th>
                <th className="text-left px-6 py-3 text-xs font-semibold text-muted-foreground uppercase">Template</th>
                <th className="text-left px-6 py-3 text-xs font-semibold text-muted-foreground uppercase">Status</th>
                <th className="text-left px-6 py-3 text-xs font-semibold text-muted-foreground uppercase">Cost</th>
                <th className="text-left px-6 py-3 text-xs font-semibold text-muted-foreground uppercase">Date</th>
              </tr>
            </thead>
            <tbody>
              {messages.map((msg, index) => (
                <motion.tr
                  key={index}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: index * 0.05 }}
                  className="border-b border-border last:border-0 hover:bg-muted/30 transition-colors"
                >
                  <td className="px-6 py-4">
                    <div className="text-sm font-medium text-foreground">{msg.id}</div>
                    <div className="text-xs text-muted-foreground font-mono">{msg.apiId}</div>
                  </td>
                  <td className="px-6 py-4 text-sm text-foreground font-mono">{msg.contact}</td>
                  <td className="px-6 py-4 text-sm text-muted-foreground">{msg.campaign}</td>
                  <td className="px-6 py-4 text-sm text-foreground">{msg.template}</td>
                  <td className="px-6 py-4">
                    <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 text-xs font-medium">
                      <CheckCircle className="w-3 h-3" />
                      {msg.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-sm font-medium text-foreground">{msg.cost}</td>
                  <td className="px-6 py-4 text-sm text-muted-foreground">{msg.date}</td>
                </motion.tr>
              ))}
            </tbody>
          </table>
        </div>
      </motion.div>
    </DashboardLayout>
  );
};

export default Billing;
