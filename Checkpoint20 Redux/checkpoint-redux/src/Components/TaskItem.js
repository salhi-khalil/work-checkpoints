import React, { useRef } from "react";
import { Button, FormControl } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTrash,
  faEdit,
  faCheckCircle,
  faClock,
} from "@fortawesome/free-solid-svg-icons";

const TaskItem = ({ item,description, updateTask, removeTask, completeTask, uncompleteTask }) => {
  const inputRef = useRef(true);

  const changeFocus = () => {
    inputRef.current.disabled = false;
    inputRef.current.focus();
  };

  const update = (id, value, e) => {
    if (e.which === 13) {
      //here 13 is key code for enter key
      updateTask({ id, item: value });
      inputRef.current.disabled = true;
    }
  };
  return (
    <div className="TaskItem">
      <div className="TaskItemName">
      <FormControl 
        ref={inputRef}
        disabled={inputRef}
        defaultValue={item.item}
        onKeyPress={(e) => update(item.id, inputRef.current.value, e)}
      /></div>
      <div className="btns">
        <Button
          className="btn2"
          variant="primary"
          onClick={() => changeFocus()}
        >
          <FontAwesomeIcon icon={faEdit} />
        </Button>
        {item.completed ? (
          <Button
            className="btn2"
            variant="success"
            onClick={() => uncompleteTask(item.id)}
          >
            <FontAwesomeIcon icon={faCheckCircle} />
          </Button>
        ) : (
          <Button
            className="btn2"
            variant="warning"
            onClick={() => completeTask(item.id)}
          >
            <FontAwesomeIcon icon={faClock} />
          </Button>
        )}
        <Button
          className="btn2"
          variant="danger"
          onClick={() => removeTask(item.id)}
        >
          <FontAwesomeIcon icon={faTrash} />
        </Button>
      </div>
      {//item.completed && <span className="completed">done</span>
      }
    </div>
  );
};

export default TaskItem;
