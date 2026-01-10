import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import DashboardLayout from "@/components/DashboardLayout";
import { 
  Wallet,
  CheckCircle,
  Clock,
  AlertCircle,
  Info,
  CreditCard
} from "lucide-react";

const TopUpWallet = () => {
  const [selectedAmount, setSelectedAmount] = useState<string>("1000");
  const [customAmount, setCustomAmount] = useState("");
  const [paymentMethod, setPaymentMethod] = useState("card");

  const amounts = ["1", "100", "500", "1000", "2000", "5000", "10000"];

  const infoItems = [
    { icon: CheckCircle, title: "Instant Credit", description: "Your wallet will be credited immediately after successful payment", color: "text-green-500" },
    { icon: CreditCard, title: "Processing Fees", description: "Credit/Debit Cards: 3% fee\nUPI, Net Banking, Wallets: 2% fee", color: "text-blue-500" },
    { icon: Clock, title: "Processing Time", description: "Most payments are processed within 2-3 minutes", color: "text-amber-500" },
    { icon: AlertCircle, title: "Non-Refundable", description: "Wallet top-ups are non-refundable as per our refund policy", color: "text-red-500" },
  ];

  return (
    <DashboardLayout 
      title="Wallet Top-up"
    >
      {/* Current Balance */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-card rounded-xl border border-border p-6 mb-6"
      >
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-sm text-muted-foreground mb-1">Current Balance</h3>
            <div className="text-3xl font-bold text-primary">₹15,092.66</div>
          </div>
          <div className="text-right text-sm text-muted-foreground">
            <p>Available for messaging</p>
            <p>Last updated: 10/01/2026, 06:40:48</p>
          </div>
        </div>
      </motion.div>

      <div className="grid lg:grid-cols-2 gap-6">
        {/* Add Money Form */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="bg-card rounded-xl border border-border p-6"
        >
          <h3 className="font-semibold text-foreground mb-6">Add Money to Wallet</h3>

          {/* Amount Selection */}
          <div className="mb-6">
            <label className="text-sm font-medium text-foreground mb-3 block">Select Amount</label>
            <div className="grid grid-cols-3 gap-3 mb-4">
              {amounts.map((amount) => (
                <Button
                  key={amount}
                  variant={selectedAmount === amount ? "default" : "outline"}
                  onClick={() => {
                    setSelectedAmount(amount);
                    setCustomAmount("");
                  }}
                  className={selectedAmount === amount ? "bg-primary text-white" : ""}
                >
                  ₹{amount}
                </Button>
              ))}
            </div>
            <div className="relative">
              <Wallet className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <Input
                placeholder="Enter custom amount"
                value={customAmount}
                onChange={(e) => {
                  setCustomAmount(e.target.value);
                  setSelectedAmount("");
                }}
                className="pl-10"
              />
            </div>
            <p className="text-xs text-muted-foreground mt-2">Minimum: ₹1, Maximum: ₹1,00,000</p>
          </div>

          {/* Payment Method */}
          <div className="mb-6">
            <label className="text-sm font-medium text-foreground mb-3 block">Payment Method</label>
            <RadioGroup value={paymentMethod} onValueChange={setPaymentMethod} className="space-y-3">
              <div className="flex items-center space-x-3 p-3 rounded-lg border border-border hover:bg-muted/50 cursor-pointer">
                <RadioGroupItem value="card" id="card" />
                <Label htmlFor="card" className="flex-1 cursor-pointer">
                  <span className="font-medium">Credit/Debit Card</span>
                  <span className="text-muted-foreground text-sm ml-2">(3% fee)</span>
                </Label>
              </div>
              <div className="flex items-center space-x-3 p-3 rounded-lg border border-border hover:bg-muted/50 cursor-pointer">
                <RadioGroupItem value="upi" id="upi" />
                <Label htmlFor="upi" className="flex-1 cursor-pointer">
                  <span className="font-medium">UPI</span>
                  <span className="text-muted-foreground text-sm ml-2">(2% fee)</span>
                </Label>
              </div>
              <div className="flex items-center space-x-3 p-3 rounded-lg border border-border hover:bg-muted/50 cursor-pointer">
                <RadioGroupItem value="netbanking" id="netbanking" />
                <Label htmlFor="netbanking" className="flex-1 cursor-pointer">
                  <span className="font-medium">Net Banking</span>
                  <span className="text-muted-foreground text-sm ml-2">(2% fee)</span>
                </Label>
              </div>
              <div className="flex items-center space-x-3 p-3 rounded-lg border border-border hover:bg-muted/50 cursor-pointer">
                <RadioGroupItem value="wallet" id="wallet" />
                <Label htmlFor="wallet" className="flex-1 cursor-pointer">
                  <span className="font-medium">Digital Wallet</span>
                  <span className="text-muted-foreground text-sm ml-2">(2% fee)</span>
                </Label>
              </div>
            </RadioGroup>
          </div>

          <Button className="w-full bg-primary hover:bg-primary/90 text-white">
            PROCEED TO PAYMENT
          </Button>
        </motion.div>

        {/* Important Information */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="space-y-6"
        >
          <div className="bg-card rounded-xl border border-border p-6">
            <div className="flex items-center gap-2 mb-4">
              <Info className="w-5 h-5 text-muted-foreground" />
              <h3 className="font-semibold text-foreground">Important Information</h3>
            </div>
            <div className="space-y-4">
              {infoItems.map((item, index) => (
                <div key={index} className="flex items-start gap-3">
                  <item.icon className={`w-5 h-5 ${item.color} flex-shrink-0 mt-0.5`} />
                  <div>
                    <h4 className="font-medium text-foreground text-sm">{item.title}</h4>
                    <p className="text-sm text-muted-foreground whitespace-pre-line">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-xl p-4">
            <p className="text-sm text-blue-700 dark:text-blue-400">
              <span className="font-medium">Need help?</span> Contact our support team at{" "}
              <a href="mailto:support@msgflow.com" className="underline">support@msgflow.com</a>
            </p>
          </div>
        </motion.div>
      </div>

      {/* View History Button */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="flex justify-center mt-8"
      >
        <Button variant="outline" className="px-8">
          VIEW TOP-UP HISTORY
        </Button>
      </motion.div>
    </DashboardLayout>
  );
};

export default TopUpWallet;
