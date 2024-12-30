import React from 'react';
import styled from 'styled-components';


const ItemContainer = styled.li`
  background-color: #fff;
  padding: 15px;
  border-radius: 8px;
  border: 1px solid #ddd;
  margin-bottom: 15px;
`;

const Title = styled.h3`
  font-size: 18px;
  color: #333;
`;

const Description = styled.p`
  font-size: 16px;
  color: #555;
  margin-top: 5px;
`;

const ButtonContainer = styled.div`
  display: flex;
  gap: 10px;
  justify-content: flex-end;
  margin-top: 10px;
`;

const Button = styled.button`
  padding: 8px 12px;
  font-size: 14px;
  border-radius: 4px;
  border: none;
  cursor: pointer;

  &.edit-btn {
    background-color: #ebf830;
    color: #000000;

    &:hover {
      background-color: #ffee00;
    }
  }

  &.delete-btn {
    background-color: #f44336;
    color: #000000;

    &:hover {
      background-color: #d32f2f;
    }
  }
`;

const Item = ({ task, onEdit, onDelete }) => {
  return (
    <ItemContainer>
      <Title>{task.title}</Title>
      <Description>{task.description}</Description>
      <ButtonContainer>
        <Button className="edit-btn" onClick={() => onEdit(task)}>
          Editar
        </Button>
        <Button className="delete-btn" onClick={() => onDelete(task.id)}>
          Deletar
        </Button>
      </ButtonContainer>
    </ItemContainer>
  );
};

export default Item;
