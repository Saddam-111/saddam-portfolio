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
      console.log(res.data)
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
      <h3 className="text-xl font-bold">Client Messages</h3>
      <div className="grid gap-4">
        {Array.isArray(messages) && messages.map((msg) => (
          <motion.div
            key={msg._id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white dark:bg-gray-900 p-4 rounded-xl shadow-md flex justify-between items-start"
          >
            <div>
              <p className="font-semibold">{msg.name} ({msg.email})</p>
              <p className="mt-1 text-gray-600 dark:text-gray-300">{msg.message}</p>
              <p className="text-xs text-gray-400 mt-2">{new Date(msg.createdAt).toLocaleString()}</p>
            </div>
            <button
              onClick={() => handleDelete(msg._id)}
              className="text-red-500 hover:text-red-600 transition-all"
            >
              <FaTrash />
            </button>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
