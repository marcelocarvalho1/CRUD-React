import React, { useState, useEffect } from "react";
import styled from "styled-components";

// Styled Components
const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  gap: 15px;
  padding: 20px;
  background-color: #f8f8f8;
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  width: 100%;
  max-width: 600px;
  margin: 20px auto;
`;

const Input = styled.input`
  padding: 10px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 4px;
  width: 100%;
  box-sizing: border-box;
`;

const Textarea = styled.textarea`
  padding: 10px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 4px;
  resize: vertical;
  width: 100%;
  box-sizing: border-box;
`;

const Button = styled.button`
  padding: 10px 15px;
  background-color: #4caf50;
  color: #000000;
  font-size: 16px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  
  &:hover {
    background-color: #45a049;
  }
`;

const Form = ({ onAdd, onEdit, editTask }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  // Preenche o formulário se estiver editando
  useEffect(() => {
    if (editTask) {
      setTitle(editTask.title);
      setDescription(editTask.description);
    }
  }, [editTask]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (editTask) {
      onEdit({ id: editTask.id, title, description });
    } else {
      onAdd({ title, description });
    }

    setTitle("");
    setDescription("");
  };

  return (
    <FormContainer onSubmit={handleSubmit}>
      <Input
        type="text"
        placeholder="Titulo"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
      />
      <Textarea
        placeholder="Descrição da Tarefa"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        required
      />
      <Button type="submit">{editTask ? "Atualizar" : "Adicionar Tarefa"}</Button>
    </FormContainer>
  );
};

export default Form;
