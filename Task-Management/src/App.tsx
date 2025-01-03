import React, { useState } from "react";
// import "react-toastify/dist/ReactToastify.css"; // Import the toast styles
import { AiOutlineDelete } from "react-icons/ai";
import { FaRegEdit } from "react-icons/fa";
import { IoMdCheckmarkCircle, IoMdCheckmarkCircleOutline } from "react-icons/io";
// import { toast, ToastContainer } from "react-toastify";

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
    // toast.success("You successfully added a task! Let complete it!", {
    //   position: "top-center",
    // });
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
     <div className="bg-slate-200 w-full h-screen p-5 flex justify-center items-center">
      <div>
        <input type="text" value={newInput} onChange={(e) => setNewInput(e.target.value)} className="mx-auto border rounded-xl p-2 w-[500px] outline-none" autoFocus/>
        <button onClick={handleClick} disabled={!newInput.trim()} className="p-2 bg-purple-400/50 rounded-lg ms-2 font-bold disabled:cursor-not-allowed disabled:opacity-50">ADD</button>
        {
          input.length === 0 ? (
            <p className="text-center pt-8 text-gray-500">
              Track your work shedule!
            </p>
          ) : (
            <ul className="mt-6 bg-gray-200 shadow-lg p-3 rounded-lg">
              {
                input.map(value => (
                  <li className="flex items-center justify-between py-2 text-slate-950 text-lg border-b border-gray-300 last:border-b-0">
                    <div className="flex items-center gap-4">
                      <span className={`${value.completed ? "line-through text-gray-500 bg-green-200 p-1 rounded-lg" : ""}`}>{value.text.toUpperCase()}</span>
                    </div>
                    {
                      editingId === value.id ? (
                        <form
                        onSubmit={(e) => handleUpdate(e, value.id)}
                        className="flex items-center w-full"
                      >
                        <input
                          type="text"
                          value={editingText}
                          onChange={(e) => setEditingText(e.target.value)}
                          className="flex-1 border rounded-xl p-1 outline-none mr-2"
                          autoFocus
                        />
                        <button
                          type="submit"
                          className="bg-green-400 px-2 py-1 rounded-lg font-bold text-white"
                        >
                          Save
                        </button>
                        <button
                          type="button"
                          className="bg-red-400 px-2 py-1 rounded-lg font-bold text-white"
                          onClick={handleCancel}
                        >
                          Cancel
                        </button>
                        </form>
                      ) : (
                        <>
                        <div className="flex items-center gap-4">
                          <button
                            onClick={() => handleEdit(value)}
                            className="ml-4 text-blue-400"
                          >
                            <FaRegEdit />
                          </button>
                        </div>
                      </>
                      )
                    }
                </li>
                ))
              }
            </ul>
          )
        }
      </div>
    </div>

    </>
  )
}

export default App;