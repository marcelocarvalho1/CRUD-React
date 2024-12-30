import React, { useState } from 'react';
import Form from './components/Form';
import List from './components/List';
import styled from 'styled-components'

const Container = styled.div`
  max-width: 800px;
  margin: 20px auto;
  background: #fff;
  border-radius: 8px;
  padding: 20px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
`;

const Title = styled.h1`
  text-align: center;
  color: #4caf50;
  margin-bottom: 20px;
`;

const App = () => {
    const [tasks, setTasks] = useState([]); // Lista de tarefas
    const [editTask, setEditTask] = useState(null); // Tarefa sendo editada

    // Adiciona uma nova tarefa
    const handleAddTask = (task) => {
        setTasks([...tasks, { id: Date.now(), ...task }]);
    };

    // Edita uma tarefa existente
    const handleEditTask = (updatedTask) => {
        setTasks(tasks.map(task => (task.id === updatedTask.id ? updatedTask : task)));
        setEditTask(null); // Limpa o estado de edição
    };

    // Exclui uma tarefa
    const handleDeleteTask = (id) => {
        setTasks(tasks.filter(task => task.id !== id));
    };

    return (
        <Container>
            <Title>Gerenciador de tarefas</Title>
            <Form onAdd={handleAddTask} onEdit={handleEditTask} editTask={editTask} />
            <List tasks={tasks} onEdit={setEditTask} onDelete={handleDeleteTask} />
        </Container>
    );
};

export default App;


