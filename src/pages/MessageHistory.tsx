import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import DashboardLayout from "@/components/DashboardLayout";
import { 
  RefreshCw, 
  Pause,
  Filter,
  Eye,
  CheckCircle
} from "lucide-react";

const MessageHistory = () => {
  const [search, setSearch] = useState("");
  const [status, setStatus] = useState("");

  const stats = [
    { label: "Total Messages", value: "123941", color: "text-foreground" },
    { label: "Sent", value: "49215", color: "text-primary" },
    { label: "Delivered", value: "12565", color: "text-blue-500" },
    { label: "Failed", value: "34242", color: "text-red-500" },
    { label: "Pending", value: "0", color: "text-purple-500" },
  ];

  const messages = [
    { contact: "Satish Nagar", phone: "919821328856", status: "Sent", cost: "₹1.01", internalId: "#130738", apiId: "e3b90e32-d64b-4d90-adbd-59242a0a22fb", date: "Dec 03, 2025 13:09" },
    { contact: "Munna Lal", phone: "919818136764", status: "Sent", cost: "₹1.01", internalId: "#130729", apiId: "2694a837-d83c-4a4c-9d21-3ee8cccd6338", date: "Dec 03, 2025 12:56" },
    { contact: "Subodh Kumar Mandal", phone: "919818117341", status: "Sent", cost: "₹1.01", internalId: "#130720", apiId: "7b2faded-9cc8-46ea-b08c-38a227000a27", date: "Dec 03, 2025 12:56" },
    { contact: "Parmod Kumar", phone: "919818124021", status: "Sent", cost: "₹1.01", internalId: "#130722", apiId: "a8175332-bbc9-4610-81d6-e13240d89304", date: "Dec 03, 2025 12:56" },
    { contact: "Samsad", phone: "919818137800", status: "Sent", cost: "₹1.01", internalId: "#130730", apiId: "c2db8449-0f7e-492f-995d-148080bff64e", date: "Dec 03, 2025 12:56" },
    { contact: "Santosh Kumar", phone: "919818102570", status: "Sent", cost: "₹1.01", internalId: "#130715", apiId: "075fafe6-8664-457b-846c-11da2e9b403c", date: "Dec 03, 2025 12:56" },
    { contact: "Rekha Loiwal", phone: "919818126095", status: "Sent", cost: "₹1.01", internalId: "#130724", apiId: "b5622bce-9046-460a-b412-a2eb133b7eb6", date: "Dec 03, 2025 12:56" },
    { contact: "Lal Chandr Maurya", phone: "919818127843", status: "Sent", cost: "₹1.01", internalId: "#130726", apiId: "d8e94521-c4af-4b2e-9a18-6c7f4e890123", date: "Dec 03, 2025 12:56" },
  ];

  return (
    <DashboardLayout 
      title="Message History"
      headerActions={
        <div className="flex items-center gap-2">
          <span className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 text-sm font-medium">
            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
            Live
          </span>
          <Button variant="outline" size="sm">
            <Pause className="w-4 h-4 mr-2" />
            Pause Updates
          </Button>
          <Button variant="outline" size="sm">
            <RefreshCw className="w-4 h-4 mr-2" />
            Refresh
          </Button>
          <span className="text-sm text-muted-foreground">Updated: 08:46:45</span>
        </div>
      }
    >
      {/* Stats */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="grid grid-cols-5 gap-4 mb-6"
      >
        {stats.map((stat, index) => (
          <div key={index} className="bg-card rounded-xl p-5 border border-border text-center">
            <div className={`text-2xl font-bold ${stat.color}`}>{stat.value}</div>
            <div className="text-sm text-muted-foreground">{stat.label}</div>
          </div>
        ))}
      </motion.div>

      {/* Filters */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="flex items-center gap-4 mb-6"
      >
        <Input
          placeholder="Search by phone or name..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="max-w-xs"
        />
        <Select value={status} onValueChange={setStatus}>
          <SelectTrigger className="w-32">
            <SelectValue placeholder="Select..." />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All</SelectItem>
            <SelectItem value="sent">Sent</SelectItem>
            <SelectItem value="delivered">Delivered</SelectItem>
            <SelectItem value="failed">Failed</SelectItem>
          </SelectContent>
        </Select>
        <Input type="date" className="w-40" />
        <Input type="date" className="w-40" />
        <Button variant="outline" size="sm">
          <Filter className="w-4 h-4 mr-2" />
          Filter
        </Button>
        <Button variant="ghost" size="sm">Clear</Button>
      </motion.div>

      {/* Table */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="bg-card rounded-xl border border-border overflow-hidden"
      >
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-border bg-muted/30">
                <th className="text-left px-6 py-3 text-xs font-semibold text-muted-foreground uppercase">Contact</th>
                <th className="text-left px-6 py-3 text-xs font-semibold text-muted-foreground uppercase">Status</th>
                <th className="text-left px-6 py-3 text-xs font-semibold text-muted-foreground uppercase">Cost</th>
                <th className="text-left px-6 py-3 text-xs font-semibold text-muted-foreground uppercase">Message ID</th>
                <th className="text-left px-6 py-3 text-xs font-semibold text-muted-foreground uppercase">Date</th>
                <th className="text-left px-6 py-3 text-xs font-semibold text-muted-foreground uppercase">Actions</th>
              </tr>
            </thead>
            <tbody>
              {messages.map((message, index) => (
                <motion.tr
                  key={index}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: index * 0.05 }}
                  className="border-b border-border last:border-0 hover:bg-muted/30 transition-colors"
                >
                  <td className="px-6 py-4">
                    <div className="font-medium text-foreground text-sm">{message.contact}</div>
                    <div className="text-xs text-muted-foreground">{message.phone}</div>
                  </td>
                  <td className="px-6 py-4">
                    <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 text-xs font-medium">
                      <CheckCircle className="w-3 h-3" />
                      {message.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-sm text-foreground">{message.cost}</td>
                  <td className="px-6 py-4">
                    <div className="text-sm text-foreground">Internal: {message.internalId}</div>
                    <div className="text-xs text-muted-foreground font-mono">API: {message.apiId}</div>
                  </td>
                  <td className="px-6 py-4 text-sm text-muted-foreground">{message.date}</td>
                  <td className="px-6 py-4">
                    <button className="flex items-center gap-1 text-primary text-sm hover:underline">
                      <Eye className="w-4 h-4" />
                      View
                    </button>
                  </td>
                </motion.tr>
              ))}
            </tbody>
          </table>
        </div>
      </motion.div>
    </DashboardLayout>
  );
};

export default MessageHistory;
