import React, { useState, useEffect } from "react";
import "react-toastify/dist/ReactToastify.css"; // Import the toast styles
import { AiOutlineDelete } from "react-icons/ai";
import { FaRegEdit } from "react-icons/fa";
import { IoMdCheckmarkCircle, IoMdCheckmarkCircleOutline } from "react-icons/io";
import { toast, ToastContainer } from "react-toastify";

interface value {
  id: number;
  text: string;
  completed: boolean;
}
function App() {
  const [input, setInput] = useState<value[]>([]);
  const [newInput, setNewInput] = useState("");
  const [editingId, setEditingId] = useState<number | null>();
  const [editingText, setEditingText] = useState<string>("");

  // Add a new Task
  const handleClick = (e: React.FormEvent) => {
    e.preventDefault();
    const value = newInput.trim();
    setInput([...input, { id: Date.now(), text: value, completed: false }]);
    toast.success("You successfully added a task! Let complete it!", {
      position: "top-center",
    });
    setNewInput("");
  };
  return (
    <>

    </>
  )
}

export default App;