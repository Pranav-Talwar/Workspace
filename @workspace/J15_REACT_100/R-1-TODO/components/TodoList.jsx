import React from "react";
import Todo from "./Todo";
import styled from "styled-components";
const ListContainer = styled.div`
  margin: 20px 0;
`;
function TodoList({ todos, onDelete }) {
  return (
    <ListContainer>
      {todos.map((task, index) => (
        <Todo key={index} task={task} onDelete={() => onDelete(index)} />
      ))}
    </ListContainer>
  );
}
export default TodoList;
