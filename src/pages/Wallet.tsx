import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import DashboardLayout from "@/components/DashboardLayout";
import { 
  Plus, 
  Wallet as WalletIcon,
  ArrowDownLeft,
  ArrowUpRight,
  Clock
} from "lucide-react";

const Wallet = () => {
  const transactions = [
    { date: "10/01/2026", time: "06:40:48", type: "Debit", description: "adjusted", amount: "-₹1,450.00", balance: "₹15,092.66", isDebit: true },
    { date: "10/01/2026", time: "06:40:31", type: "Debit", description: "adjusted", amount: "-₹7,000.00", balance: "₹16,542.66", isDebit: true },
    { date: "10/01/2026", time: "06:24:46", type: "Refund", description: "Refund for failed message: webhook_failed", amount: "-₹1.04", balance: "₹23,542.66", isDebit: false },
    { date: "10/01/2026", time: "06:24:46", type: "Refund", description: "Refund for failed message: webhook_failed", amount: "-₹1.04", balance: "₹23,541.62", isDebit: false },
    { date: "10/01/2026", time: "06:24:45", type: "Refund", description: "Refund for failed message: webhook_failed", amount: "-₹1.04", balance: "₹23,539.54", isDebit: false },
    { date: "10/01/2026", time: "06:24:45", type: "Refund", description: "Refund for failed message: webhook_failed", amount: "-₹1.04", balance: "₹23,540.58", isDebit: false },
  ];

  return (
    <DashboardLayout 
      title="Wallet"
      headerActions={
        <Button className="bg-primary hover:bg-primary/90 text-white" asChild>
          <Link to="/top-up-wallet">
            <Plus className="w-4 h-4 mr-2" />
            ADD FUNDS
          </Link>
        </Button>
      }
    >
      {/* Balance Card */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-gradient-to-r from-primary via-primary to-purple-600 rounded-2xl p-8 mb-6 relative overflow-hidden"
      >
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
        <div className="relative flex items-center justify-between">
          <div className="text-white">
            <div className="flex items-center gap-2 mb-2">
              <WalletIcon className="w-5 h-5" />
              <span className="text-sm text-white/80">Wallet Balance</span>
            </div>
            <div className="text-4xl font-bold mb-2">₹15,092.66</div>
            <p className="text-sm text-white/80">Available: ₹15,092.66</p>
          </div>
          <Button variant="secondary" className="bg-white/20 text-white hover:bg-white/30 border-0" asChild>
            <Link to="/top-up-wallet">
              <Plus className="w-4 h-4 mr-2" />
              Top Up
            </Link>
          </Button>
        </div>
      </motion.div>

      {/* Transaction History */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="bg-card rounded-xl border border-border"
      >
        <div className="p-6 border-b border-border">
          <h3 className="font-semibold text-foreground">Transaction History</h3>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-border bg-muted/30">
                <th className="text-left px-6 py-3 text-xs font-semibold text-muted-foreground uppercase">Date</th>
                <th className="text-left px-6 py-3 text-xs font-semibold text-muted-foreground uppercase">Type</th>
                <th className="text-left px-6 py-3 text-xs font-semibold text-muted-foreground uppercase">Description</th>
                <th className="text-left px-6 py-3 text-xs font-semibold text-muted-foreground uppercase">Amount</th>
                <th className="text-left px-6 py-3 text-xs font-semibold text-muted-foreground uppercase">Balance</th>
              </tr>
            </thead>
            <tbody>
              {transactions.map((tx, index) => (
                <motion.tr
                  key={index}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: index * 0.05 }}
                  className="border-b border-border last:border-0 hover:bg-muted/30 transition-colors"
                >
                  <td className="px-6 py-4">
                    <div className="text-sm text-foreground">{tx.date}</div>
                    <div className="text-xs text-muted-foreground">{tx.time}</div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-2">
                      {tx.isDebit ? (
                        <ArrowDownLeft className="w-4 h-4 text-red-500" />
                      ) : (
                        <Clock className="w-4 h-4 text-muted-foreground" />
                      )}
                      <span className="text-sm text-foreground">{tx.type}</span>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-sm text-muted-foreground">{tx.description}</td>
                  <td className="px-6 py-4">
                    <span className={`text-sm font-medium ${tx.isDebit ? 'text-red-500' : 'text-muted-foreground'}`}>
                      {tx.amount}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-sm font-medium text-foreground">{tx.balance}</td>
                </motion.tr>
              ))}
            </tbody>
          </table>
        </div>
      </motion.div>
    </DashboardLayout>
  );
};

export default Wallet;
