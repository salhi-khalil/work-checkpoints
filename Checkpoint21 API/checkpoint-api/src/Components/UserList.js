import React from "react";
import { ListGroup } from 'react-bootstrap';


const UserList = ({ user }) => {
  return (
    <div className="userList">
        <ListGroup >
      {user.map((el) => (
        <div className="user" key={el.id}>
          <ListGroup.Item> ID: {el.id} </ListGroup.Item>
          <ListGroup.Item> Name: {el.name} </ListGroup.Item>
          <ListGroup.Item> Username: {el.username}</ListGroup.Item>
          <ListGroup.Item> Email: {el.email}</ListGroup.Item>
          {/*<ListGroup.Item> {el.address}</ListGroup.Item>
          <ListGroup.Item> {el.company}</ListGroup.Item>*/}
          <ListGroup.Item> Phone: {el.phone}</ListGroup.Item>
          <ListGroup.Item> Website: {el.website}</ListGroup.Item>

        </div>
      ))}
                </ListGroup>
    </div>
  );
};

export default UserList;
