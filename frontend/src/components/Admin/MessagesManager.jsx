import React, { useEffect, useState, useContext } from "react";
import { AdminContext } from "../../context/AdminContext";
import axios from "../../utils/api";
import { motion } from "framer-motion";
import { FaTrash, FaSpinner } from "react-icons/fa";
import { Card, Button } from "../Common";

const MessagesManager = () => {
  const { setError } = useContext(AdminContext);
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchMessages = async () => {
    try {
      setLoading(true);
      const res = await axios.get("/messages");
      setMessages(res.data.messages);
    } catch (err) {
      setError(err.response?.data?.message || "Failed to fetch messages");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => { fetchMessages(); }, []);

  const handleDelete = async (id) => {
    if (!window.confirm("Delete this message?")) return;
    setLoading(true);
    try {
      await axios.delete(`/messages/${id}`);
      setMessages(messages.filter((m) => m._id !== id));
    } catch (err) {
      setError(err.response?.data?.message || "Delete failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="space-y-4">
      <div>
        <h3 className="font-display font-semibold text-lg sm:text-xl text-text-primary mb-1">
          Messages
        </h3>
        <p className="text-text-secondary text-sm">Contact form submissions from visitors.</p>
      </div>

      {loading && messages.length === 0 ? (
        <div className="flex justify-center py-12"><FaSpinner className="animate-spin text-primary text-2xl" /></div>
      ) : messages.length === 0 ? (
        <p className="text-text-secondary text-center py-12">No messages yet.</p>
      ) : (
        <div className="space-y-3">
          {messages.map((msg) => (
            <Card key={msg._id} className="rounded-xl">
              <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3 p-4">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="font-display font-medium text-text-primary">{msg.name}</span>
                    <span className="text-text-secondary text-sm">({msg.email})</span>
                  </div>
                  <p className="text-text-secondary text-sm leading-relaxed">{msg.message}</p>
                  <p className="text-text-secondary/50 text-xs mt-2 font-mono">{new Date(msg.createdAt).toLocaleString()}</p>
                </div>
                <button onClick={() => handleDelete(msg._id)} className="text-error hover:text-error/80 p-2" aria-label="Delete message">
                  <FaTrash />
                </button>
              </div>
            </Card>
          ))}
        </div>
      )}
    </div>
  );
};

export default MessagesManager;