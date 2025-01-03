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
  const handleEdit = (e: value) => {
    setEditingId(e.id);
    setEditingText(e.text);
  };
  const handleUpdate = (e: React.FormEvent<HTMLFormElement>, id: number) => {
    e.preventDefault();
    const trimmedValue = editingText.trim();
    setInput(
      input.map(task => 
        task.id === id ? {...task, text: trimmedValue} : task
      )
    );
  };
  const handleCancel = () => {
    setEditingId(null);
    setEditingText("");
  };
  const handleDelete = (id: number) => {
    setInput(input.filter(task => task.id !== id));
  };
  const handleComplete = (id: number) => {
    setInput(
      input.map(element => element.id === id ? {...element, completed: !element.completed} : element)
    );
  };
  return (
    <>

    </>
  )
}

export default App;