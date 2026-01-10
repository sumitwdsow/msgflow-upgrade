import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import DashboardLayout from "@/components/DashboardLayout";
import { 
  Plus, 
  RefreshCw,
  ExternalLink
} from "lucide-react";

const Templates = () => {
  const templates = [
    { id: "#60", name: "goldrate", subname: "goldrate", language: "English", type: "TEXT", category: "MARKETING", status: "PENDING", approvedDate: null, lastSynced: "Jan 10, 2026 02:31:57" },
    { id: "#59", name: "gold1", subname: "gold1_1764759174", language: "English", type: "TEXT", category: "MARKETING", status: "APPROVED", approvedDate: "Dec 03, 05:39", lastSynced: "Jan 10, 2026 02:31:57" },
    { id: "#36", name: "dhanteras_pricegoildcoin", subname: "dhanteras_pricegoildcoin", language: "English", type: "TEXT", category: "MARKETING", status: "APPROVED", approvedDate: "Oct 17, 23:55", lastSynced: "Jan 10, 2026 02:31:57" },
    { id: "#33", name: "hhg", subname: "hhg_1760157181", language: "English", type: "IMAGE", category: "MARKETING", status: "APPROVED", approvedDate: "Oct 10, 23:03", lastSynced: "Jan 10, 2026 02:31:57" },
    { id: "#32", name: "pranav", subname: "pranav_1760156383", language: "English", type: "IMAGE", category: "MARKETING", status: "APPROVED", approvedDate: "Oct 10, 22:50", lastSynced: "Jan 10, 2026 02:31:57" },
    { id: "#31", name: "utiligold", subname: "utiligold", language: "English", type: "TEXT", category: "MARKETING", status: "APPROVED", approvedDate: "Oct 10, 22:48", lastSynced: "Jan 10, 2026 02:31:57" },
    { id: "#28", name: "previewtest21760152477", subname: "previewtest21760152477", language: "en", type: "IMAGE", category: "MARKETING", status: "APPROVED", approvedDate: "Oct 10, 21:44", lastSynced: "Jan 10, 2026 02:31:57" },
    { id: "#27", name: "previewtest1760152377", subname: "previewtest1760152377", language: "en", type: "IMAGE", category: "MARKETING", status: "APPROVED", approvedDate: null, lastSynced: "Jan 10, 2026 02:31:57" },
  ];

  return (
    <DashboardLayout title="Message Templates">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-card rounded-xl border border-border"
      >
        {/* Header */}
        <div className="p-6 border-b border-border">
          <div className="flex items-center justify-between mb-2">
            <h2 className="text-lg font-semibold text-foreground">Message Templates</h2>
            <div className="flex items-center gap-2">
              <Button variant="outline" size="sm">
                <RefreshCw className="w-4 h-4 mr-2" />
                Get Templates
              </Button>
              <Button className="bg-primary hover:bg-primary/90 text-white" size="sm">
                <Plus className="w-4 h-4 mr-2" />
                Create Template
              </Button>
            </div>
          </div>
          <p className="text-sm text-muted-foreground">Your Templates (24)</p>
        </div>

        {/* Table */}
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-border bg-muted/30">
                <th className="text-left px-6 py-3 text-xs font-semibold text-muted-foreground uppercase">ID</th>
                <th className="text-left px-6 py-3 text-xs font-semibold text-muted-foreground uppercase">Name</th>
                <th className="text-left px-6 py-3 text-xs font-semibold text-muted-foreground uppercase">Language</th>
                <th className="text-left px-6 py-3 text-xs font-semibold text-muted-foreground uppercase">Type</th>
                <th className="text-left px-6 py-3 text-xs font-semibold text-muted-foreground uppercase">Category</th>
                <th className="text-left px-6 py-3 text-xs font-semibold text-muted-foreground uppercase">Status</th>
                <th className="text-left px-6 py-3 text-xs font-semibold text-muted-foreground uppercase">Last Synced</th>
                <th className="text-left px-6 py-3 text-xs font-semibold text-muted-foreground uppercase">Actions</th>
              </tr>
            </thead>
            <tbody>
              {templates.map((template, index) => (
                <motion.tr
                  key={index}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: index * 0.05 }}
                  className="border-b border-border last:border-0 hover:bg-muted/30 transition-colors"
                >
                  <td className="px-6 py-4 text-sm text-muted-foreground">{template.id}</td>
                  <td className="px-6 py-4">
                    <div className="font-medium text-foreground text-sm">{template.name}</div>
                    <div className="text-xs text-muted-foreground">{template.subname}</div>
                  </td>
                  <td className="px-6 py-4 text-sm text-foreground">{template.language}</td>
                  <td className="px-6 py-4 text-sm text-foreground">{template.type}</td>
                  <td className="px-6 py-4 text-sm text-foreground">{template.category}</td>
                  <td className="px-6 py-4">
                    <div>
                      <span className={`inline-flex items-center px-2.5 py-1 rounded text-xs font-medium ${
                        template.status === 'APPROVED' 
                          ? 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400' 
                          : 'bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-400'
                      }`}>
                        {template.status}
                      </span>
                      {template.approvedDate && (
                        <div className="text-xs text-muted-foreground mt-1">Approved: {template.approvedDate}</div>
                      )}
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="text-sm text-foreground">{template.lastSynced.split(' ')[0]} {template.lastSynced.split(' ')[1]} {template.lastSynced.split(' ')[2]}</div>
                    <div className="text-xs text-muted-foreground">{template.lastSynced.split(' ')[3]}</div>
                  </td>
                  <td className="px-6 py-4">
                    <button className="p-1.5 rounded hover:bg-muted transition-colors">
                      <ExternalLink className="w-4 h-4 text-primary" />
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

export default Templates;
