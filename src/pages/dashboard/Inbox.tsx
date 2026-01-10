import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import DashboardLayout from "@/components/DashboardLayout";
import { 
  MessageSquare, 
  Send,
  ArrowLeft,
  Clock,
  AlertTriangle,
  Image,
  CheckCheck
} from "lucide-react";

interface Conversation {
  id: string;
  name: string;
  lastMessage: string;
  time: string;
  status: "active" | "expired";
  unread?: number;
  remainingTime?: string;
}

interface Message {
  id: string;
  content: string;
  time: string;
  sender: "user" | "customer";
}

const Inbox = () => {
  const [selectedConversation, setSelectedConversation] = useState<string | null>(null);
  const [messageInput, setMessageInput] = useState("");

  const conversations: Conversation[] = [
    { id: "1", name: "Contact", lastMessage: "Hi", time: "2 hours ago", status: "active", remainingTime: "1289m" },
    { id: "2", name: "cdata7392", lastMessage: "Zama collection manufacturer and wholesaler ladies b...", time: "1 month ago", status: "expired" },
    { id: "3", name: "Sheetala Traders", lastMessage: "Thank you for contacting Sheetala Traders! Please let ...", time: "1 month ago", status: "expired" },
    { id: "4", name: "cdata1672", lastMessage: "Silwar ka kya ret hey", time: "1 month ago", status: "expired", unread: 3 },
    { id: "5", name: "cdata3226", lastMessage: "Thank you for contacting Dr. S. Faisal Sheikh! Please le...", time: "1 month ago", status: "expired", unread: 1 },
    { id: "6", name: '"Akanksha Lifestyle" Lucknowi Chikankari Store in ...', lastMessage: "Thank you for contacting Akanksha Lifestyle! We will r...", time: "1 month ago", status: "expired", unread: 1 },
  ];

  const messages: Message[] = [
    { id: "1", content: "specific questions or need assistance, feel free to ask.", time: "23:40", sender: "user" },
    { id: "2", content: "Contact details please", time: "23:41", sender: "customer" },
    { id: "3", content: "You can reach out to Rameshwar Prasad Jewellers at their contact number: +1-123-456-7890. If you need further assistance, feel free to ask!", time: "23:41", sender: "user" },
    { id: "4", content: "B", time: "23:42", sender: "customer" },
    { id: "5", content: "🗓 Today's Gold Rate Update 💎 18K Gold – ₹9650/ gram 💎 22K Gold – ₹11750/ gram 💎 24K Gold – ₹13250/ gram 🏆 Rameshwar Prasad Jewellers – Since 1932 ✅ 100% Hallmarked Jewellery ✅ Transparent & Fair Pricing ✅ Purity You Can Trust 📍 Prices valid for today only ✨ Visit us today for exclusive offers on gold & diamond jewellery.", time: "09:27", sender: "customer" },
    { id: "6", content: "Hi", time: "06:16", sender: "customer" },
    { id: "7", content: "Hi", time: "06:16", sender: "customer" },
  ];

  const selectedChat = conversations.find(c => c.id === selectedConversation);

  return (
    <DashboardLayout title="Inbox">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-card rounded-xl border border-border overflow-hidden h-[calc(100vh-220px)] flex"
      >
        {/* Conversation List */}
        <div className={`w-96 border-r border-border flex flex-col ${selectedConversation ? 'hidden lg:flex' : 'flex'}`}>
          <div className="p-4 border-b border-border">
            <div className="flex items-center gap-2 mb-1">
              <MessageSquare className="w-5 h-5 text-muted-foreground" />
              <span className="font-semibold text-foreground">Conversations</span>
            </div>
            <p className="text-sm text-muted-foreground">50 conversations</p>
          </div>

          <div className="flex-1 overflow-y-auto">
            {conversations.map((conversation) => (
              <div
                key={conversation.id}
                onClick={() => setSelectedConversation(conversation.id)}
                className={`p-4 border-b border-border cursor-pointer hover:bg-muted/50 transition-colors ${
                  selectedConversation === conversation.id ? 'bg-muted/50' : ''
                }`}
              >
                <div className="flex items-start justify-between mb-1">
                  <span className="font-medium text-foreground text-sm truncate flex-1">{conversation.name}</span>
                  {conversation.unread && (
                    <span className="w-5 h-5 rounded-full bg-primary text-white text-xs flex items-center justify-center ml-2">
                      {conversation.unread}
                    </span>
                  )}
                </div>
                <p className="text-xs text-muted-foreground truncate mb-2">{conversation.lastMessage}</p>
                <div className="flex items-center justify-between">
                  <span className="text-xs text-muted-foreground">{conversation.time}</span>
                  <span className={`inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-xs ${
                    conversation.status === 'active'
                      ? 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400'
                      : 'bg-muted text-muted-foreground'
                  }`}>
                    <Clock className="w-3 h-3" />
                    {conversation.status === 'active' ? `Active (${conversation.remainingTime})` : 'Expired'}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Chat Area */}
        <div className={`flex-1 flex flex-col ${selectedConversation ? 'flex' : 'hidden lg:flex'}`}>
          {selectedConversation ? (
            <>
              {/* Chat Header */}
              <div className="p-4 border-b border-border flex items-center gap-4">
                <Button 
                  variant="ghost" 
                  size="sm" 
                  className="lg:hidden"
                  onClick={() => setSelectedConversation(null)}
                >
                  <ArrowLeft className="w-4 h-4" />
                </Button>
                <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
                  <span className="font-medium text-primary">{selectedChat?.name.charAt(0)}</span>
                </div>
                <div className="flex-1">
                  <div className="font-semibold text-foreground">{selectedChat?.name}</div>
                  <div className="flex items-center gap-2 text-xs">
                    {selectedChat?.status === 'active' && (
                      <>
                        <span className="text-green-500 flex items-center gap-1">
                          <Clock className="w-3 h-3" />
                          Session active ({selectedChat.remainingTime} remaining)
                        </span>
                        <span className="w-1.5 h-1.5 rounded-full bg-green-500" />
                        <span className="text-muted-foreground">Connected</span>
                        <span className="text-muted-foreground">Active 2 hours ago</span>
                      </>
                    )}
                  </div>
                </div>
              </div>

              {/* Messages */}
              <div className="flex-1 overflow-y-auto p-4 space-y-4">
                {messages.map((message) => (
                  <div
                    key={message.id}
                    className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                  >
                    <div className={`max-w-[70%] rounded-2xl px-4 py-2 ${
                      message.sender === 'user'
                        ? 'bg-primary text-white rounded-br-md'
                        : 'bg-muted text-foreground rounded-bl-md'
                    }`}>
                      <p className="text-sm whitespace-pre-wrap">{message.content}</p>
                      <div className={`flex items-center justify-end gap-1 mt-1 ${
                        message.sender === 'user' ? 'text-white/70' : 'text-muted-foreground'
                      }`}>
                        <span className="text-xs">{message.time}</span>
                        {message.sender === 'user' && <CheckCheck className="w-3 h-3" />}
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Message Input */}
              <div className="p-4 border-t border-border">
                <div className="flex items-center gap-3">
                  <Button variant="ghost" size="icon">
                    <Image className="w-5 h-5 text-muted-foreground" />
                  </Button>
                  <Input
                    placeholder="Type a message..."
                    value={messageInput}
                    onChange={(e) => setMessageInput(e.target.value)}
                    className="flex-1"
                  />
                  <Button className="bg-primary hover:bg-primary/90 text-white" size="icon">
                    <Send className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </>
          ) : (
            <div className="flex-1 flex flex-col items-center justify-center p-8 text-center">
              <div className="w-16 h-16 rounded-full bg-muted flex items-center justify-center mb-4">
                <MessageSquare className="w-8 h-8 text-muted-foreground" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">Select a conversation</h3>
              <p className="text-muted-foreground max-w-sm mb-6">
                Choose a conversation from the sidebar to start chatting with your customers.
              </p>
              
              <div className="p-4 bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-800 rounded-lg max-w-md">
                <div className="flex items-start gap-3">
                  <AlertTriangle className="w-5 h-5 text-amber-500 flex-shrink-0 mt-0.5" />
                  <div className="text-left">
                    <p className="text-sm font-medium text-amber-700 dark:text-amber-400">24-Hour Session Window</p>
                    <p className="text-sm text-amber-600 dark:text-amber-500">
                      You can reply to customer messages within 24 hours of their last message. After that, you'll need to use approved templates.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </motion.div>
    </DashboardLayout>
  );
};

export default Inbox;
