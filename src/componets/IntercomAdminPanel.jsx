import React, { useState, useEffect } from "react";
import { motion, AnimatePresence, useAnimation } from "framer-motion";
import {
  MessageSquare,
  Search,
  Phone,
  MoreHorizontal,
  Send,
  Paperclip,
  Smile,
  ChevronDown,
  User,
  Clock,
  X,
  Bot,
  Sparkles,
  ArrowRight,
  Menu,
  ChevronLeft,
  PanelRightOpen,
} from "lucide-react";

const IntercomAdminPanel = () => {
  const [selectedConversation, setSelectedConversation] = useState(0);
  const [newMessage, setNewMessage] = useState("");
  const [showCopilot, setShowCopilot] = useState(true);
  const [isMobile, setIsMobile] = useState(false);
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);

  const sidebarControls = useAnimation();
  const chatControls = useAnimation();

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const conversations = [
    {
      id: 1,
      name: "Luis - GitHub",
      message: "Hey! I have a question...",
      time: "45m",
      avatar: "L",
      status: "online",
      type: "open",
    },
    {
      id: 2,
      name: "Ivan - Nike",
      message: "Hi there, I have a qu...",
      time: "30m",
      avatar: "I",
      status: "away",
      type: "open",
      tag: "Nike",
    },
    {
      id: 3,
      name: "Lead from New York",
      message: "Good morning, let me...",
      time: "1h",
      avatar: "N",
      status: "offline",
      type: "lead",
    },
    {
      id: 4,
      name: "Booking API problems",
      message: "Bug report",
      time: "45m",
      avatar: "B",
      status: "offline",
      type: "bug",
      company: "Luis - Small Grafts",
    },
    {
      id: 5,
      name: "Miracle - Exemplary Bank",
      message: "Hey there, I'm here to...",
      time: "45m",
      avatar: "M",
      status: "offline",
      type: "open",
    },
  ];

  const currentConversation = {
    customer: "Luis Easton",
    messages: [
      {
        id: 1,
        type: "customer",
        text: "I bought a product from your store in November as a Christmas gift for a member of my family. However, it turns out they have something very similar already. I was hoping you'd be able to refund me, as it is un-opened.",
        time: "3min",
      },
      {
        id: 2,
        type: "agent",
        text: "Let me just look into this for you, Luis.",
        time: "2min",
      },
    ],
  };

  const suggestions = [
    "How do I get a refund?",
    "What's your return policy?",
    "Can I exchange this item?",
  ];

  const handleConversationSelect = (index) => {
    setSelectedConversation(index);
    chatControls.start({
      scale: [0.98, 1],
      opacity: [0.5, 1],
      transition: { duration: 0.3, ease: "easeOut" },
    });
  };

  const sidebarVariants = {
    expanded: {
      width: isMobile ? "100%" : "320px",
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 30,
        mass: 0.8,
      },
    },
    collapsed: {
      width: "80px",
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 30,
        mass: 0.8,
      },
    },
  };

  const copilotVariants = {
    expanded: {
      width: isMobile ? "100%" : "400px",
      opacity: 1,
      x: 0,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 30,
        mass: 0.8,
      },
    },
    collapsed: {
      width: "0px",
      opacity: 0,
      x: "100%",
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 35,
        mass: 0.6,
      },
    },
  };

  const conversationItemVariants = {
    initial: { opacity: 0, x: -20 },
    animate: {
      opacity: 1,
      x: 0,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 25,
      },
    },
    hover: {
      scale: 1.01,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 15,
      },
    },
  };

  const messageVariants = {
    initial: { opacity: 0, y: 20, scale: 0.9 },
    animate: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 20,
        mass: 0.6,
      },
    },
  };

  const pulseVariants = {
    animate: {
      scale: [1, 1.05, 1],
      transition: {
        duration: 2,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };

  return (
    <div className="h-screen bg-gray-100 flex overflow-hidden">
      {/* Sidebar */}
      <motion.div
        variants={sidebarVariants}
        animate={sidebarCollapsed ? "collapsed" : "expanded"}
        className={`bg-white border-r border-gray-200 flex flex-col ${
          isMobile ? "absolute z-20" : "relative"
        }`}
        style={{ minWidth: sidebarCollapsed ? "80px" : "320px" }}
      >
        {/* Header */}
        <motion.div
          className="p-4 border-b border-gray-100"
          layout
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
        >
          <div className="flex items-center justify-between mb-4">
            <AnimatePresence mode="wait">
              {!sidebarCollapsed && (
                <motion.h1
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.2 }}
                  className="text-lg font-semibold text-gray-900"
                >
                  Your inbox
                </motion.h1>
              )}
            </AnimatePresence>

            <div className="flex items-center space-x-2">
              {!sidebarCollapsed && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex items-center space-x-2"
                >
                  <Search className="w-4 h-4 text-gray-400" />
                  <MoreHorizontal className="w-4 h-4 text-gray-400" />
                </motion.div>
              )}
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => setSidebarCollapsed(!sidebarCollapsed)}
                className="p-1 text-gray-400 hover:text-gray-600 transition-colors"
              >
                <motion.div
                  animate={{ rotate: sidebarCollapsed ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <ChevronLeft className="w-4 h-4" />
                </motion.div>
              </motion.button>
            </div>
          </div>

          <AnimatePresence>
            {!sidebarCollapsed && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3 }}
                className="flex justify-between space-x-4 text-sm"
              >
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="flex items-center space-x-1 text-gray-700 border-b-2 border-gray-600 pb-1"
                >
                  <span>5 Open</span>
                  <ChevronDown className="w-3 h-3" />
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="flex items-center space-x-1 text-gray-500"
                >
                  <span>Waiting longest</span>
                  <ChevronDown className="w-3 h-3" />
                </motion.button>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>

        {/* Conversation List */}
        <div className="flex-1 overflow-y-auto">
          <AnimatePresence>
            {conversations.map((conv, index) => (
              <motion.div
                key={conv.id}
                variants={conversationItemVariants}
                initial="initial"
                animate="animate"
                whileHover={selectedConversation !== index ? "hover" : {}}
                onClick={() => handleConversationSelect(index)}
                className={`relative p-4 border-b border-gray-50 cursor-pointer transition-all duration-200 ${
                  selectedConversation === index
                    ? "bg-blue-50 rounded-lg m-2"
                    : "hover:bg-gray-50"
                }`}
                layout
                transition={{ type: "spring", stiffness: 300, damping: 25 }}
              >
                <div className="flex items-start space-x-3">
                  <div className="relative flex-shrink-0">
                    <motion.div
                      whileHover={{ scale: 1.1 }}
                      className={`w-8 h-8 rounded-full flex items-center justify-center text-white text-sm font-medium ${
                        conv.type === "open"
                          ? "bg-blue-500"
                          : conv.type === "lead"
                          ? "bg-green-500"
                          : "bg-gray-500"
                      }`}
                    >
                      {conv.avatar}
                    </motion.div>
                    <motion.div
                      variants={pulseVariants}
                      animate={conv.status === "online" ? "animate" : ""}
                      className={`absolute -bottom-1 -right-1 w-3 h-3 rounded-full border-2 border-white ${
                        conv.status === "online"
                          ? "bg-green-400"
                          : conv.status === "away"
                          ? "bg-yellow-400"
                          : "bg-gray-300"
                      }`}
                    />
                  </div>

                  <AnimatePresence>
                    {!sidebarCollapsed && (
                      <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -20 }}
                        transition={{ duration: 0.2, delay: 0.1 }}
                        className="flex-1 min-w-0"
                      >
                        <div className="flex items-center justify-between">
                          <h3 className="text-sm font-medium text-gray-900 truncate">
                            {conv.name}
                          </h3>
                          {conv.tag && (
                            <motion.span
                              initial={{ scale: 0 }}
                              animate={{ scale: 1 }}
                              className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-yellow-100 text-yellow-800"
                            >
                              {conv.tag}
                            </motion.span>
                          )}
                        </div>
                        <p className="text-sm text-gray-500 truncate mt-1 flex justify-between items-center">
                          <span className="ml-2 text-xs text-gray-400">
                          {conv.message}
                          </span>
                          <span className="text-xs text-gray-400">
                            {conv.time}
                          </span>
                        </p>
                        {conv.company && (
                          <p className="text-xs text-gray-400 mt-1">
                            {conv.company}
                          </p>
                        )}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </motion.div>

      {/* Main Chat Area */}
      <motion.div
        className="flex-1 flex flex-col bg-white"
        animate={chatControls}
        layout
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
      >
        {/* Chat Header */}
        <motion.div
          className="border-b border-gray-200 p-4"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <motion.h2
                key={selectedConversation}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                className="text-lg font-semibold text-gray-900"
              >
                {currentConversation.customer}
              </motion.h2>
              <div className="flex items-center space-x-2">
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <Phone className="w-4 h-4 text-gray-400" />
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <MoreHorizontal className="w-4 h-4 text-gray-400" />
                </motion.button>
              </div>
            </div>

            <div className="flex items-center space-x-3">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gray-900 text-white text-sm hover:bg-gray-800 px-4 py-2 rounded-md transition-colors"
              >
                Close
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setShowCopilot(!showCopilot)}
                className={`flex items-center space-x-2 px-3 py-2 rounded-md transition-all duration-200 ${
                  showCopilot
                    ? " hover:bg-gray-100"
                    : "bg-blue-50 text-blue-600 hover:bg-blue-100"
                }`}
                title={showCopilot ? "Hide AI Copilot" : "Show AI Copilot"}
              >
                <motion.div
                  animate={{ rotate: showCopilot ? 180 : 0 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                >
                  <PanelRightOpen className="w-4 h-4" />
                </motion.div>
              </motion.button>
            </div>
          </div>
        </motion.div>

        {/* Messages */}
        <div className="flex-1 overflow-y-auto p-6 bg-gray-50">
          <div className="max-w-4xl mx-auto space-y-4">
            <AnimatePresence>
              {currentConversation.messages.map((message, index) => (
                <motion.div
                  key={message.id}
                  variants={messageVariants}
                  initial="initial"
                  animate="animate"
                  transition={{ delay: index * 0.1 }}
                  className={`flex ${
                    message.type === "agent" ? "justify-end" : "justify-start"
                  }`}
                >
                  <div
                    className={`max-w-lg ${
                      message.type === "agent" ? "order-2" : "order-1"
                    }`}
                  >
                    <motion.div
                      whileHover={{ scale: 1.02 }}
                      className={`px-4 py-3 rounded-2xl ${
                        message.type === "agent"
                          ? "bg-blue-50 text-gray-900 ml-4"
                          : "bg-white text-gray-900 mr-4 shadow-sm"
                      }`}
                    >
                      <p className="text-sm leading-relaxed">{message.text}</p>
                    </motion.div>
                    <div
                      className={`flex items-center mt-1 text-xs text-gray-500 ${
                        message.type === "agent"
                          ? "justify-end mr-4"
                          : "justify-start ml-4"
                      }`}
                    >
                      <Clock className="w-3 h-3 mr-1" />
                      <span>{message.time}</span>
                    </div>
                  </div>

                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    className={`w-8 h-8 rounded-full flex items-center justify-center ${
                      message.type === "agent"
                        ? "order-1 bg-gray-600 mr-2"
                        : "order-2 bg-blue-500 ml-2"
                    }`}
                  >
                    {message.type === "agent" ? (
                      <User className="w-4 h-4 text-white" />
                    ) : (
                      <span className="text-white text-sm font-medium">L</span>
                    )}
                  </motion.div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>

        {/* Message Input */}
        <motion.div
          whileHover={{ scale: 1.01 }}
          className="rounded-2xl border  shadow-sm py-12 px-3 mx-6"
        >
          <div className="flex items-start space-x-3">
            <div className="flex items-center space-x-3 text-gray-500">
              <motion.button
                whileHover={{ scale: 1.1, color: "#374151" }} 
                whileTap={{ scale: 0.9 }}
                className="hover:text-gray-700 transition-colors"
              >
                <svg
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
                </svg>
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.1, color: "#374151" }}
                whileTap={{ scale: 0.9 }}
                className="hover:text-gray-700 transition-colors"
              >
                <svg
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
                  <path d="M6.5 2H20v20l-4-4H6.5a2.5 2.5 0 0 1 0-5H20" />
                </svg>
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.1, color: "#374151" }}
                whileTap={{ scale: 0.9 }}
                className="hover:text-gray-700 transition-colors"
              >
                <Smile className="w-5 h-5" />
              </motion.button>
            </div>

            <div className="flex-1">
              <motion.textarea
                whileFocus={{ scale: 1.01 }}
                value={newMessage}
                onChange={(e) => setNewMessage(e.target.value)}
                placeholder="Type your message..."
                className="w-full resize-none border-none outline-none bg-transparent text-gray-900 placeholder-gray-500 text-sm leading-relaxed"
                rows="1"
                style={{ minHeight: "20px", maxHeight: "120px" }}
                onInput={(e) => {
                  e.target.style.height = "auto";
                  e.target.style.height =
                    Math.min(e.target.scrollHeight, 120) + "px";
                }}
              />
            </div>

            <div className="flex items-center space-x-2">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gray-900 hover:bg-gray-800 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors flex items-center space-x-1"
              >
                <span>Send</span>
                <ChevronDown className="w-4 h-4" />
              </motion.button>
            </div>
          </div>
        </motion.div>
      </motion.div>

      {/* AI Copilot Panel */}
      <motion.div
        variants={copilotVariants}
        animate={showCopilot ? "expanded" : "collapsed"}
        className={` border-l border-gray-200 flex flex-col overflow-hidden ${
          isMobile ? "absolute z-10 right-0 h-full" : "relative"
        }`}
        style={{
          minWidth: showCopilot ? (isMobile ? "100%" : "400px") : "0px",
        }}
      >
        <AnimatePresence>
          {showCopilot && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2, delay: 0.1 }}
              className="flex flex-col h-full"
            >
              <motion.div
                className="p-4 border-b border-gray-100 flex-shrink-0"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-4">
                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      className="flex items-center space-x-2 border-b-2 pb-1"
                    >
                      <Bot className="w-4 h-4" />
                      <span className="text-sm font-medium">AI Copilot</span>
                    </motion.button>
                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      className="text-gray-500 text-sm font-medium"
                    >
                      Details
                    </motion.button>
                  </div>
                </div>
              </motion.div>

              <motion.div
                className="flex-1 p-4 overflow-y-auto"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
              >
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-lg p-6 text-center"
                >
                  <motion.div
                    animate={{
                      rotate: [0, 5, -5, 0],
                      scale: [1, 1.05, 1],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                    className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4"
                  >
                    <Sparkles className="w-8 h-8 text-blue-600" />
                  </motion.div>
                  <h4 className="font-medium text-gray-900 mb-2">
                    AI Assistant Ready
                  </h4>
                  <p className="text-sm text-gray-600 mb-4">
                    I can help you with customer queries, suggest responses, and
                    provide context.
                  </p>
                </motion.div>

                <motion.div
                  className="mt-6"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.4 }}
                >
                  <h4 className="text-sm font-medium text-gray-900 mb-3">
                    Suggested responses:
                  </h4>
                  <div className="space-y-2">
                    {suggestions.map((suggestion, index) => (
                      <motion.button
                        key={index}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.5 + index * 0.1 }}
                        whileHover={{
                          scale: 1.02,
                          backgroundColor: "rgb(243 244 246)",
                        }}
                        whileTap={{ scale: 0.98 }}
                        className="w-full flex items-center justify-between text-left p-3 bg-gray-50 rounded-lg text-sm text-gray-700 transition-colors"
                      >
                        <span>{suggestion}</span>
                        <ArrowRight className="w-4 h-4 text-gray-400" />
                      </motion.button>
                    ))}
                  </div>
                </motion.div>
              </motion.div>

              <motion.div
                className="p-4 border-t border-gray-100 flex-shrink-0"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
              >
                <div className="flex items-center space-x-2">
                  <motion.input
                    whileFocus={{ scale: 1.02 }}
                    type="text"
                    placeholder="Ask BeyondChats anything..."
                    className="flex-1 px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                  />
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="bg-gray-900 text-white hover:bg-gray-800 p-2 rounded-md transition-colors"
                  >
                    <Send className="w-4 h-4" />
                  </motion.button>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  );
};

export default IntercomAdminPanel;
