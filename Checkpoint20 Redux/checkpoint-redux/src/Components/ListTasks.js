import React, { useState } from "react";
import { connect } from "react-redux";
import {
  addTask,
  completeTask,
  uncompleteTask,
  removeTask,
  updateTask,
} from "../Redux/Reducers";
import TaskItem from "./TaskItem";
import {
  Dropdown,
  DropdownButton,
  ButtonGroup,
  Card,
  ListGroup,
} from "react-bootstrap";
import Task from "./Task";

const mapStateToProps = (state) => {
  return {
    task: state,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addTask: (obj) => dispatch(addTask(obj)),
    removeTask: (id) => dispatch(removeTask(id)),
    updateTask: (obj) => dispatch(updateTask(obj)),
    completeTask: (id) => dispatch(completeTask(id)),
    uncompleteTask: (id) => dispatch(uncompleteTask(id)),
  };
};

const ListTasks = (props) => {
  const [Filter, setFilter] = useState("all");
  return (
    <div className="ListTasks">
      <Card>
        <Card.Header>
          <div className="btns3">
            <DropdownButton
              as={ButtonGroup}
              title="Filter"
              id="bg-vertical-dropdown-1"
              variant="btn"
            >
              <Dropdown.Item eventKey="1" onClick={() => setFilter("active")}>
                Active
              </Dropdown.Item>
              <Dropdown.Item
                eventKey="2"
                onClick={() => setFilter("completed")}
              >
                Completed
              </Dropdown.Item>
              <Dropdown.Item eventKey="3" onClick={() => setFilter("all")}>
                All
              </Dropdown.Item>
            </DropdownButton>
          </div>
        </Card.Header>

        {props.task.length === 0 ? (
          <div className="cardBody">
            <h6>You didn't add any tasks yet! Please add a new task!</h6>
            <hr/>
            <Task />
          </div>
        ) : null}
        {props.task.length > 0 && Filter === "active" ? (
           <div className="cardBody">
             <Card.Body className="cardBody">
            <Card.Title>Active tasks</Card.Title>
            {props.task.map((item) => {
              return (
                item.completed == false && (
                  <Card style={{ width: "75%" }}>
                    <ListGroup variant="flush">
                      <ListGroup.Item>
                        <TaskItem
                          key={item.id}
                          item={item}
                          description={item.description}
                          removeTask={props.removeTask}
                          updateTask={props.updateTask}
                          completeTask={props.completeTask}
                          uncompleteTask={props.uncompleteTask}
                        />
                      </ListGroup.Item>
                    </ListGroup>
                  </Card>
                )
              );
            })}
          </Card.Body></div>
        ) : null}
        {props.task.length > 0 && Filter === "completed" ? (
           <div className="cardBody">
             <Card.Body className="cardBody">
            <Card.Title>Completed Tasks</Card.Title>
            {props.task.map((item) => {
              return (
                item.completed == true && (
                  <Card style={{ width: "75%" }}>
                    <ListGroup variant="flush">
                      <ListGroup.Item>
                        <TaskItem
                          key={item.id}
                          item={item}
                          removeTask={props.removeTask}
                          updateTask={props.updateTask}
                          completeTask={props.completeTask}
                          uncompleteTask={props.uncompleteTask}
                        />
                      </ListGroup.Item>
                    </ListGroup>
                  </Card>
                )
              );
            })}
          </Card.Body></div>
        ) : null}
        {props.task.length > 0 && Filter === "all" ? (
           <div className="cardBody">
             <Card.Body className="cardBody">
            <Card.Title>All Tasks</Card.Title>
            {props.task.map((item) => {
              return (
                <Card style={{ width: "75%" }}>
                  <ListGroup variant="flush">
                    <ListGroup.Item>
                      <TaskItem
                        key={item.id}
                        item={item}
                        removeTask={props.removeTask}
                        updateTask={props.updateTask}
                        completeTask={props.completeTask}
                        uncompleteTask={props.uncompleteTask}
                      />
                    </ListGroup.Item>
                  </ListGroup>
                </Card>
              );
            })}
          </Card.Body></div>
        ) : null}
      </Card>
    </div>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(ListTasks);
