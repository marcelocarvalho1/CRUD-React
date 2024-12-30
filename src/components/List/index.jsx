import Item from "../Item";
import styled from 'styled-components';

const ListContainer = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

const List = ({ tasks, onEdit, onDelete }) => {
  return (
    <ListContainer>
      {tasks.map((task) => (
        <Item key={task.id} task={task} onEdit={onEdit} onDelete={onDelete} />
      ))}
    </ListContainer>
  );
};

export default List;
