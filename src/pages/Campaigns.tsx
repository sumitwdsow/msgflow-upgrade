import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import DashboardLayout from "@/components/DashboardLayout";
import { 
  Plus, 
  MessageSquare,
  Eye,
  Edit,
  Trash2
} from "lucide-react";

const Campaigns = () => {
  const [activeTab, setActiveTab] = useState("all");

  const tabs = [
    { id: "all", label: "All Campaigns" },
    { id: "active", label: "Active" },
    { id: "draft", label: "Draft" },
    { id: "completed", label: "Completed" },
  ];

  const campaigns = [
    { name: "gghj", description: "No description", createdBy: "Unknown", date: "Oct 11, 2025", time: "7:20 AM", status: "Draft", sent: "0 / 1", delivered: "0% delivered" },
    { name: "a23", description: "No description", createdBy: "Unknown", date: "Oct 11, 2025", time: "7:16 AM", status: "Draft", sent: "0 / 2", delivered: "0% delivered" },
    { name: "a1", description: "No description", createdBy: "Unknown", date: "Oct 11, 2025", time: "7:12 AM", status: "Draft", sent: "0 / 2", delivered: "0% delivered" },
    { name: "ww", description: "No description", createdBy: "Unknown", date: "Oct 11, 2025", time: "7:09 AM", status: "Draft", sent: "0 / 2", delivered: "0% delivered" },
    { name: "11", description: "No description", createdBy: "Unknown", date: "Oct 11, 2025", time: "7:04 AM", status: "Failed", sent: "0 / 1", delivered: "0% delivered" },
    { name: "wew", description: "No description", createdBy: "Unknown", date: "Oct 11, 2025", time: "6:56 AM", status: "Failed", sent: "0 / 1", delivered: "0% delivered" },
    { name: "g1-duplicate-test", description: "No description", createdBy: "Unknown", date: "Oct 11, 2025", time: "6:55 AM", status: "Failed", sent: "0 / 0", delivered: "0% delivered" },
    { name: "g1", description: "No description", createdBy: "Unknown", date: "Oct 11, 2025", time: "6:50 AM", status: "Failed", sent: "0 / 1", delivered: "0% delivered" },
  ];

  return (
    <DashboardLayout title="Campaigns">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-card rounded-xl border border-border"
      >
        {/* Header */}
        <div className="p-6 border-b border-border">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-semibold text-foreground">Campaign Management</h2>
            <Button className="bg-primary hover:bg-primary/90 text-white">
              <Plus className="w-4 h-4 mr-2" />
              Create Campaign
            </Button>
          </div>
          
          <div className="flex items-center gap-2">
            {tabs.map((tab) => (
              <Button
                key={tab.id}
                variant={activeTab === tab.id ? "default" : "outline"}
                size="sm"
                onClick={() => setActiveTab(tab.id)}
                className={activeTab === tab.id ? "bg-primary text-white" : ""}
              >
                {tab.label}
              </Button>
            ))}
          </div>
        </div>

        {/* Table */}
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-border bg-muted/30">
                <th className="text-left px-6 py-3 text-xs font-semibold text-muted-foreground uppercase">Campaign Name</th>
                <th className="text-left px-6 py-3 text-xs font-semibold text-muted-foreground uppercase">Created By</th>
                <th className="text-left px-6 py-3 text-xs font-semibold text-muted-foreground uppercase">Date</th>
                <th className="text-left px-6 py-3 text-xs font-semibold text-muted-foreground uppercase">Status</th>
                <th className="text-left px-6 py-3 text-xs font-semibold text-muted-foreground uppercase">Messages Sent</th>
                <th className="text-left px-6 py-3 text-xs font-semibold text-muted-foreground uppercase">Actions</th>
              </tr>
            </thead>
            <tbody>
              {campaigns.map((campaign, index) => (
                <motion.tr
                  key={index}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: index * 0.05 }}
                  className="border-b border-border last:border-0 hover:bg-muted/30 transition-colors"
                >
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                        <MessageSquare className="w-4 h-4 text-primary" />
                      </div>
                      <div>
                        <div className="font-medium text-foreground text-sm">{campaign.name}</div>
                        <div className="text-xs text-muted-foreground">{campaign.description}</div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-sm text-muted-foreground">{campaign.createdBy}</td>
                  <td className="px-6 py-4">
                    <div className="text-sm text-foreground">{campaign.date}</div>
                    <div className="text-xs text-muted-foreground">{campaign.time}</div>
                  </td>
                  <td className="px-6 py-4">
                    <span className={`inline-flex items-center px-2.5 py-1 rounded text-xs font-medium ${
                      campaign.status === 'Draft' 
                        ? 'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400' 
                        : 'bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400'
                    }`}>
                      {campaign.status}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <div className="text-sm font-medium text-foreground">{campaign.sent}</div>
                    <div className="text-xs text-muted-foreground">{campaign.delivered}</div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-2">
                      <button className="p-1.5 rounded hover:bg-muted transition-colors">
                        <Eye className="w-4 h-4 text-muted-foreground" />
                      </button>
                      <button className="p-1.5 rounded hover:bg-muted transition-colors">
                        <Edit className="w-4 h-4 text-muted-foreground" />
                      </button>
                      <button className="p-1.5 rounded hover:bg-muted transition-colors">
                        <Trash2 className="w-4 h-4 text-red-500" />
                      </button>
                    </div>
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

export default Campaigns;
