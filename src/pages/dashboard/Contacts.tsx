import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import DashboardLayout from "@/components/DashboardLayout";
import { 
  Plus, 
  Upload,
  Users,
  Filter,
  Search
} from "lucide-react";

const Contacts = () => {
  const [activeTab, setActiveTab] = useState<"contacts" | "segments">("contacts");
  const [search, setSearch] = useState("");

  const contacts = [
    { name: "pranshu", number: "919958882391", tags: "-", addedOn: "Nov 20, 2025", messages: 1 },
    { name: "Himanshu Tiwari", number: "919821328282", tags: "-", addedOn: "Oct 24, 2025", messages: 0 },
    { name: "Manoj Kumar Pal", number: "919821328873", tags: "-", addedOn: "Oct 24, 2025", messages: 0 },
    { name: "Sonam", number: "919821329016", tags: "-", addedOn: "Oct 24, 2025", messages: 0 },
    { name: "Rohit Kumar Mishra", number: "919821327997", tags: "-", addedOn: "Oct 24, 2025", messages: 0 },
    { name: "Mohit", number: "919821328993", tags: "-", addedOn: "Oct 24, 2025", messages: 0 },
    { name: "Manish Kumar Singh", number: "919821328423", tags: "-", addedOn: "Oct 24, 2025", messages: 0 },
    { name: "Arvind Kumar", number: "919821328639", tags: "-", addedOn: "Oct 24, 2025", messages: 0 },
    { name: "Satish Nagar", number: "919821328856", tags: "-", addedOn: "Oct 24, 2025", messages: 1 },
    { name: "Shiv Chand", number: "919821326285", tags: "-", addedOn: "Oct 24, 2025", messages: 0 },
  ];

  return (
    <DashboardLayout title="Contacts">
      {/* Tabs */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex items-center gap-6 mb-6 border-b border-border"
      >
        <button
          onClick={() => setActiveTab("contacts")}
          className={`flex items-center gap-2 pb-3 px-1 border-b-2 transition-colors ${
            activeTab === "contacts"
              ? 'border-primary text-primary'
              : 'border-transparent text-muted-foreground hover:text-foreground'
          }`}
        >
          <Users className="w-4 h-4" />
          Contacts
        </button>
        <button
          onClick={() => setActiveTab("segments")}
          className={`flex items-center gap-2 pb-3 px-1 border-b-2 transition-colors ${
            activeTab === "segments"
              ? 'border-primary text-primary'
              : 'border-transparent text-muted-foreground hover:text-foreground'
          }`}
        >
          <Filter className="w-4 h-4" />
          Segments
        </button>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="bg-card rounded-xl border border-border"
      >
        {/* Header */}
        <div className="p-6 border-b border-border">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h2 className="text-lg font-semibold text-foreground">Your Contacts</h2>
              <p className="text-sm text-muted-foreground">Manage your contact database</p>
            </div>
            <div className="flex items-center gap-3">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                <Input
                  placeholder="Search by name, phone, or email..."
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  className="pl-10 w-80"
                />
              </div>
              <Button variant="outline">
                <Upload className="w-4 h-4 mr-2" />
                Import
              </Button>
              <Button className="bg-primary hover:bg-primary/90 text-white">
                <Plus className="w-4 h-4 mr-2" />
                Add Contact
              </Button>
            </div>
          </div>
        </div>

        {/* Table */}
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-border bg-muted/30">
                <th className="text-left px-6 py-3 text-xs font-semibold text-muted-foreground uppercase">Name</th>
                <th className="text-left px-6 py-3 text-xs font-semibold text-muted-foreground uppercase">Number</th>
                <th className="text-left px-6 py-3 text-xs font-semibold text-muted-foreground uppercase">Tags</th>
                <th className="text-left px-6 py-3 text-xs font-semibold text-muted-foreground uppercase">Added On</th>
                <th className="text-left px-6 py-3 text-xs font-semibold text-muted-foreground uppercase">Messages</th>
                <th className="text-left px-6 py-3 text-xs font-semibold text-muted-foreground uppercase">Actions</th>
              </tr>
            </thead>
            <tbody>
              {contacts.map((contact, index) => (
                <motion.tr
                  key={index}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: index * 0.05 }}
                  className="border-b border-border last:border-0 hover:bg-muted/30 transition-colors"
                >
                  <td className="px-6 py-4 text-sm font-medium text-foreground">{contact.name}</td>
                  <td className="px-6 py-4 text-sm text-muted-foreground font-mono">{contact.number}</td>
                  <td className="px-6 py-4 text-sm text-muted-foreground">{contact.tags}</td>
                  <td className="px-6 py-4 text-sm text-muted-foreground">{contact.addedOn}</td>
                  <td className="px-6 py-4 text-sm text-foreground">{contact.messages}</td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-2">
                      <button className="text-primary text-sm hover:underline">View</button>
                      <button className="text-muted-foreground text-sm hover:underline">Edit</button>
                      <button className="text-red-500 text-sm hover:underline">Delete</button>
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

export default Contacts;
