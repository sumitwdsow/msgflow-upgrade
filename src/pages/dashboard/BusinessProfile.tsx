import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import DashboardLayout from "@/components/DashboardLayout";
import { 
  RefreshCw, 
  Edit,
  CheckCircle,
  Camera
} from "lucide-react";

const BusinessProfile = () => {
  return (
    <DashboardLayout title="Business Profile">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-card rounded-xl border border-border p-6 mb-6"
      >
        <div className="flex items-center justify-between mb-6">
          <div>
            <h2 className="text-lg font-semibold text-foreground">WhatsApp Business Profile</h2>
            <p className="text-sm text-muted-foreground">Last updated: Jan 10, 2026 03:25</p>
          </div>
          <Button variant="outline">
            <RefreshCw className="w-4 h-4 mr-2" />
            REFRESH
          </Button>
        </div>

        {/* Profile Info */}
        <div className="flex items-start gap-6 mb-8">
          <div className="relative">
            <div className="w-20 h-20 rounded-full bg-gradient-to-br from-amber-100 to-amber-200 flex items-center justify-center border-4 border-amber-300">
              <span className="text-2xl">💎</span>
            </div>
            <button className="absolute -bottom-1 -right-1 w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center shadow-lg">
              <Camera className="w-4 h-4" />
            </button>
          </div>
          <div className="flex-1">
            <h3 className="text-xl font-bold text-foreground mb-2">Rameshwar Prasad Jewellers</h3>
            <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 text-sm font-medium">
              <CheckCircle className="w-4 h-4" />
              Verified
            </span>
          </div>
        </div>

        {/* About Section */}
        <div className="mb-6">
          <div className="flex items-center justify-between mb-2">
            <span className="font-medium text-foreground">About:</span>
            <Button variant="ghost" size="sm" className="text-primary">
              <Edit className="w-4 h-4 mr-1" />
              Edit
            </Button>
          </div>
          <p className="text-muted-foreground">
            Rameshwar Prasad Jewellers, a trusted name in gold & silver jewellery, blending timeless craftsmanship with modern elegance.
          </p>
        </div>

        {/* Profile Details */}
        <div className="flex items-center justify-between">
          <span className="font-medium text-foreground">Profile Details:</span>
          <Button variant="ghost" size="sm" className="text-primary">
            <Edit className="w-4 h-4 mr-1" />
            Edit
          </Button>
        </div>
      </motion.div>

      {/* Status Cards */}
      <div className="grid md:grid-cols-3 gap-6">
        {/* Account Health */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="bg-gradient-to-br from-primary to-primary/80 rounded-xl p-6 text-white"
        >
          <div className="flex items-center justify-between mb-4">
            <h4 className="font-semibold">Account Health</h4>
            <RefreshCw className="w-4 h-4" />
          </div>
          <div className="space-y-3">
            <div>
              <span className="text-sm text-white/70">STATUS</span>
              <p className="font-semibold">success</p>
            </div>
          </div>
        </motion.div>

        {/* Quality Rating */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl p-6 text-white"
        >
          <div className="flex items-center justify-between mb-4">
            <h4 className="font-semibold">Quality Rating</h4>
            <RefreshCw className="w-4 h-4" />
          </div>
          <div className="space-y-3">
            <div>
              <span className="text-sm text-white/70">PHONE QUALITY</span>
              <p className="font-semibold flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-green-500" />
                GREEN
              </p>
            </div>
            <div>
              <span className="text-sm text-white/70">CURRENT LIMIT</span>
              <p className="font-semibold">TIER_100K</p>
            </div>
            <div>
              <span className="text-sm text-white/70">PREVIOUS LIMIT</span>
              <p className="font-semibold">TIER_1K</p>
            </div>
            <div>
              <span className="text-sm text-white/70">EVENT</span>
              <p className="font-semibold text-red-400">DOWNGRADE</p>
            </div>
          </div>
        </motion.div>

        {/* WABA Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="bg-gradient-to-br from-red-500 to-red-600 rounded-xl p-6 text-white"
        >
          <div className="flex items-center justify-between mb-4">
            <h4 className="font-semibold">WABA Info</h4>
            <RefreshCw className="w-4 h-4" />
          </div>
          <div className="space-y-3 text-sm">
            <div>
              <span className="text-white/70">WABA ID</span>
              <p className="font-semibold">762027446797869</p>
            </div>
            <div>
              <span className="text-white/70">ACCOUNT STATUS</span>
              <p className="font-semibold text-green-300">ACTIVE</p>
            </div>
            <div>
              <span className="text-white/70">ALLOWED TPS</span>
              <p className="font-semibold">70 messages/sec</p>
            </div>
            <div>
              <span className="text-white/70">MESSAGE STATUS</span>
              <p className="font-semibold text-green-300">AVAILABLE</p>
            </div>
            <div>
              <span className="text-white/70">PHONE NUMBER</span>
              <p className="font-semibold">917052334580</p>
            </div>
            <div>
              <span className="text-white/70">WABA NAME</span>
              <p className="font-semibold">Rameshwar Prasad Jewellers</p>
            </div>
            <div>
              <span className="text-white/70">PHONE QUALITY</span>
              <p className="font-semibold flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-green-400" />
                GREEN
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </DashboardLayout>
  );
};

export default BusinessProfile;
