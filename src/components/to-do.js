import React from "react";
import { Button } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import TextareaAutosize from "@mui/base/TextareaAutosize";
import DeleteIcon from "@mui/icons-material/Delete";
import RefreshIcon from "@mui/icons-material/Refresh";
import { useState } from "react";
import { v4 as uuid } from "uuid";

const Note = () => {
  const [text, setText] = useState("");
  const [tasks, setTasks] = useState([]);

  const saveNote = () => {
    let _tasks = [...tasks];
    const unique_id = uuid();
    let obj = { id: unique_id, value: text };
    _tasks.push(obj);
    setText("");
    text.length <= 0 ? alert("Empty") : setTasks(_tasks);
  };

  const handleChange = (e) => {
    setText(e.target.value);
  };

  const resetPage = () => {
    window.location.reload();
  };

  const handleDelete = (noteId) => {
    const filterdNotes = tasks.filter((task) => task.id !== noteId);
    setTasks(filterdNotes);
  };

  return (
    <div className="notes">
      <h2 className="head">To-Do-Notes-App</h2>
      <div>
        <div>
          <Button
            onClick={saveNote}
            type="textValue"
            variant="contained"
            size="medium"
            endIcon={<AddIcon />}
            sx={{ ml: 12.8, mt: 2.8 }}
          >
            Add Note
          </Button>
        </div>
        <div>
          <TextareaAutosize
            onChange={handleChange}
            placeholder="Type..."
            className="texta"
            style={{ height: 200 }}
          />
        </div>
      </div>
      <div>
        {tasks.map((item, index) => (
          <div className="note1">
            <h4 className="counter">Note: {index + 1}</h4>
            <TextareaAutosize
              aria-label="empty textarea"
              className="note"
              style={{ height: 100 }}
              value={item.value}
            />
            <Button
              onClick={() => handleDelete(item.id)}
              variant="outlined"
              sx={{ ml: 2, mb: 12 }}
              startIcon={<DeleteIcon />}
            >
              Delete Note
            </Button>
          </div>
        ))}
      </div>
      <div>
        <Button
          onClick={resetPage}
          type="Value"
          variant="contained"
          size="medium"
          startIcon={<RefreshIcon />}
          sx={{ ml: 12.8, mb: 1 }}
        >
          Reset
        </Button>
      </div>
    </div>
  );
};

export default Note;
