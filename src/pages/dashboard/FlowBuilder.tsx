import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import DashboardLayout from "@/components/DashboardLayout";
import { 
  Plus, 
  GitBranch,
  CheckCircle,
  FileText,
  MessageSquare,
  RefreshCw
} from "lucide-react";

const FlowBuilder = () => {
  const [activeTab, setActiveTab] = useState("all");

  const stats = [
    { label: "Total Flows", value: "0", bg: "bg-gradient-to-br from-blue-500 to-blue-600", icon: GitBranch },
    { label: "Published", value: "0", bg: "bg-gradient-to-br from-green-500 to-green-600", icon: CheckCircle },
    { label: "Drafts", value: "0", bg: "bg-gradient-to-br from-amber-500 to-amber-600", icon: FileText },
    { label: "Total Responses", value: "0", bg: "bg-gradient-to-br from-purple-500 to-purple-600", icon: MessageSquare },
  ];

  const tabs = [
    { id: "all", label: "All Flows" },
    { id: "published", label: "Published" },
    { id: "draft", label: "Draft" },
  ];

  return (
    <DashboardLayout 
      title="Flow Builder"
      subtitle="Create interactive WhatsApp forms and collect responses"
    >
      {/* Stats Cards */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="grid md:grid-cols-4 gap-4 mb-6"
      >
        {stats.map((stat, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className={`${stat.bg} rounded-xl p-5 text-white relative overflow-hidden`}
          >
            <div className="relative z-10">
              <div className="text-sm text-white/80 mb-1">{stat.label}</div>
              <div className="text-3xl font-bold">{stat.value}</div>
            </div>
            <stat.icon className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 text-white/20" />
          </motion.div>
        ))}
      </motion.div>

      {/* Tabs and Create Button */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="flex items-center justify-between mb-6"
      >
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
        <Button className="bg-purple-600 hover:bg-purple-700 text-white">
          <Plus className="w-4 h-4 mr-2" />
          Create New Flow
        </Button>
      </motion.div>

      {/* Empty State */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="bg-card rounded-xl border border-border p-16 flex flex-col items-center justify-center text-center"
      >
        <div className="relative mb-6">
          <div className="w-24 h-24 rounded-2xl bg-gradient-to-br from-blue-100 to-purple-100 dark:from-blue-900/30 dark:to-purple-900/30 flex items-center justify-center">
            <RefreshCw className="w-12 h-12 text-blue-500" />
          </div>
          <div className="absolute -bottom-2 -right-2 w-8 h-8 rounded-full bg-purple-500 flex items-center justify-center">
            <Plus className="w-4 h-4 text-white" />
          </div>
        </div>
        
        <h3 className="text-xl font-semibold text-foreground mb-2">No flows yet</h3>
        <p className="text-muted-foreground max-w-md mb-6">
          Create your first WhatsApp Flow to start collecting structured data from your customers with interactive forms.
        </p>
        
        <Button className="bg-purple-600 hover:bg-purple-700 text-white">
          <Plus className="w-4 h-4 mr-2" />
          Create Your First Flow
        </Button>
      </motion.div>
    </DashboardLayout>
  );
};

export default FlowBuilder;
