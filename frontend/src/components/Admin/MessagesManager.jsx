import React, { useEffect, useState, useContext } from "react";
import { AdminContext } from "../../context/AdminContext";
import axios from "../../utils/api";
import { motion } from "framer-motion";
import { FaTrash } from "react-icons/fa";

export default function MessagesManager() {
  const { setError } = useContext(AdminContext);
  const [messages, setMessages] = useState([]);

  const fetchMessages = async () => {
    try {
      const res = await axios.get("/messages");
      setMessages(res.data.messages);
    } catch (err) {
      setError(err.response?.data?.message || "Failed to fetch messages");
    }
  };

  useEffect(() => {
    fetchMessages();
  }, []);

  const handleDelete = async (id) => {
    if (!window.confirm("Delete this message?")) return;
    try {
      await axios.delete(`/messages/${id}`);
      fetchMessages();
    } catch (err) {
      setError(err.response?.data?.message || "Delete failed");
    }
  };

  return (
    <div className="space-y-4">
      {/* Header */}
      <div className="border border-[#1f521f]">
        <div className="border-b border-[#1f521f] p-2 flex items-center gap-2">
          <span className="text-[#33ff00] font-mono text-xs">messages_manager.sh</span>
        </div>
        <div className="p-3">
          <h3 className="font-mono text-[#33ff00] text-lg">MESSAGES_MANAGEMENT</h3>
        </div>
      </div>

      {/* Messages List */}
      <div className="grid gap-3">
        {Array.isArray(messages) && messages.map((msg) => (
          <motion.div
            key={msg._id}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="border border-[#1f521f] bg-[#0a0a0a] p-4"
          >
            <div className="flex justify-between items-start gap-3">
              <div className="flex-1">
                <p className="font-mono text-sm text-[#33ff00]">
                  {msg.name} <span className="text-[#666666]">({msg.email})</span>
                </p>
                <p className="font-mono text-xs text-[#cccccc] mt-2">{msg.message}</p>
                <p className="font-mono text-xs text-[#666666] mt-2">
                  {new Date(msg.createdAt).toLocaleString()}
                </p>
              </div>
              <button
                onClick={() => handleDelete(msg._id)}
                className="font-mono text-xs px-2 py-1 border border-[#ff3333] text-[#ff3333] hover:bg-[#ff3333] hover:text-[#0a0a0a]"
              >
                [DEL]
              </button>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
