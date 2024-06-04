import styled from 'styled-components';

const TodoList = ({
  todo,
  input,
  inputValue,
  addTask,
  deleteTodo,
  deleteAll,
  toggleIsCompleted,
  setFilterTodo,
  filter,
  editingId,
  editingText,
  setEditingText,
  startEditing,
  saveEditing,
}) => {
  return (
    <form onSubmit={addTask}>
      <h1>TodoList</h1>
      <div>
        <input type="text" value={input} onChange={(e) => inputValue(e)} />
        <button type="submit">Add</button>
        <button type="button" onClick={() => deleteAll()}>Delete All</button>
      </div>
      <StyledDiv>
        <p onClick={() => setFilterTodo('All')}>All</p>
        <p onClick={() => setFilterTodo('InCompleted')}>InCompleted</p>
        <p onClick={() => setFilterTodo('Completed')}>Completed</p>
      </StyledDiv>
      {filter.map((item) => (
        <StyledDiv key={item.id}>
          <input
            type="checkbox"
            checked={item.isCompleted}
            onChange={() => toggleIsCompleted(item.id)}
          />
          {editingId === item.id ? (
            <input
              type="text"
              value={editingText}
              onChange={(e) => setEditingText(e.target.value)}
            />
          ) : (
            <h2 style={{ textDecoration: item.isCompleted ? 'line-through' : '' }}>
              {item.name}
            </h2>
          )}
          {editingId === item.id ? (
            <button type="button" onClick={() => saveEditing(item.id)}>Save</button>
          ) : (
            <button type="button" onClick={() => startEditing(item.id, item.name)}>Update</button>
          )}
          <button type="button" onClick={() => deleteTodo(item.id)}>Delete</button>
        </StyledDiv>
      ))}
    </form>
  );
};

export default TodoList;

const StyledDiv = styled.div`
  display: flex;
  justify-content: space-between;
  width: 300px;
`;
