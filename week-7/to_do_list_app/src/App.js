import React, { useState, useEffect } from 'react';
import './App.css';
import { AiOutlineDelete, AiOutlineEdit } from 'react-icons/ai';
import { BsCheckLg } from 'react-icons/bs';

function App() {
  const [allTodos, setAllTodos] = useState([]);
  const [newTodoTitle, setNewTodoTitle] = useState('');
  const [newDescription, setNewDescription] = useState('');
  const [completedTodos, setCompletedTodos] = useState([]);
  const [isCompletedScreen, setIsCompletedScreen] = useState(false);
  const [priority, setPriority] = useState('Low');
  const [category, setCategory] = useState('');
  const [dueDate, setDueDate] = useState('');
  const [editingIndex, setEditingIndex] = useState(null);

  const handleAddNewToDo = () => {
    if (!newTodoTitle || !newDescription || !priority || !category || !dueDate) {
      alert('Lütfen tüm alanları doldurun!');
      return;
    }

    let newToDoObj = {
      title: newTodoTitle,
      description: newDescription,
      priority: priority,
      category: category,
      dueDate: dueDate,
    };

    if (editingIndex !== null) {
      // Eğer düzenleme modundaysak, mevcut görevi güncelle
      let updatedTodos = [...allTodos];
      updatedTodos[editingIndex] = newToDoObj;
      setAllTodos(updatedTodos);
      setEditingIndex(null); // Düzenleme modunu kapat
    } else {
      // Yeni bir görev ekleniyor
      let updatedTodoArr = [...allTodos];
      updatedTodoArr.push(newToDoObj);
      setAllTodos(updatedTodoArr);
    }

    localStorage.setItem('todolist', JSON.stringify(allTodos));

    setNewDescription('');
    setNewTodoTitle('');
    setPriority('Low');
    setCategory('');
    setDueDate('');
  };

  const handleEdit = index => {
    // Düzenleme modunu aç ve mevcut görevin bilgilerini forma doldur
    setEditingIndex(index);
    const editedTodo = allTodos[index];
    setNewTodoTitle(editedTodo.title);
    setNewDescription(editedTodo.description);
    setPriority(editedTodo.priority);
    setCategory(editedTodo.category);
    setDueDate(editedTodo.dueDate);
  };

  const handleCancelEdit = () => {
    // Düzenleme modunu iptal et ve formu temizle
    setEditingIndex(null);
    setNewTodoTitle('');
    setNewDescription('');
    setPriority('Low');
    setCategory('');
    setDueDate('');
  };

  const handleToDoDelete = index => {
    let reducedTodos = [...allTodos];
    reducedTodos.splice(index, 1);
    localStorage.setItem('todolist', JSON.stringify(reducedTodos));
    setAllTodos(reducedTodos);
  };

  const handleCompletedTodoDelete = index => {
    let reducedCompletedTodos = [...completedTodos];
    reducedCompletedTodos.splice(index, 1);
    localStorage.setItem(
      'completedTodos',
      JSON.stringify(reducedCompletedTodos)
    );
    setCompletedTodos(reducedCompletedTodos);
  };

  const handleComplete = index => {
    const date = new Date();
    var dd = date.getDate();
    var mm = date.getMonth() + 1;
    var yyyy = date.getFullYear();
    var hh = date.getHours();
    var minutes = date.getMinutes();
    var ss = date.getSeconds();
    var finalDate =
      dd + '-' + mm + '-' + yyyy + ' at ' + hh + ':' + minutes + ':' + ss;

    let filteredTodo = {
      ...allTodos[index],
      completedOn: finalDate,
    };

    let updatedCompletedList = [...completedTodos, filteredTodo];
    setCompletedTodos(updatedCompletedList);
    localStorage.setItem('completedTodos', JSON.stringify(updatedCompletedList));

    handleToDoDelete(index);
  };

  useEffect(() => {
    let savedTodos = JSON.parse(localStorage.getItem('todolist'));
    let savedCompletedToDos = JSON.parse(
      localStorage.getItem('completedTodos')
    );

    if (savedTodos) {
      setAllTodos(savedTodos);
    }

    if (savedCompletedToDos) {
      setCompletedTodos(savedCompletedToDos);
    }
  }, []);

  return (
    <div className="App">
      <h1>MCA ToDo App</h1>

      <div className="todo-wrapper">
        <div className="todo-input">
          <div className="todo-input-item">
            <label>Title:</label>
            <input
              type="text"
              value={newTodoTitle}
              onChange={e => setNewTodoTitle(e.target.value)}
              placeholder="What's the title of your To Do?"
            />
          </div>
          <div className="todo-input-item">
            <label>Description:</label>
            <input
              type="text"
              value={newDescription}
              onChange={e => setNewDescription(e.target.value)}
              placeholder="What's the description of your To Do?"
            />
          </div>
          <div className="todo-input-item">
            <label>Priority:</label>
            <select
              value={priority}
              onChange={e => setPriority(e.target.value)}
            >
              <option value="Low">Low</option>
              <option value="Medium">Medium</option>
              <option value="High">High</option>
            </select>
          </div>
          <div className="todo-input-item">
            <label>Category:</label>
            <input
              type="text"
              value={category}
              onChange={e => setCategory(e.target.value)}
              placeholder="Category"
            />
          </div>
          <div className="todo-input-item">
            <label>Due Date:</label>
            <input
              type="text"
              value={dueDate}
              onChange={e => setDueDate(e.target.value)}
              placeholder="Due Date"
            />
          </div>
          <div className="todo-input-item">
            <button
              className="primary-btn"
              type="button"
              onClick={handleAddNewToDo}
            >
              {editingIndex !== null ? 'Update' : 'Add'}
            </button>
            {editingIndex !== null && (
              <button
                className="secondaryBtn"
                type="button"
                onClick={handleCancelEdit}
              >
                Cancel
              </button>
            )}
          </div>
        </div>
        <div className="btn-area">
          <button
            className={`secondaryBtn ${isCompletedScreen === false && 'active'}`}
            onClick={() => setIsCompletedScreen(false)}
          >
            To Do
          </button>
          <button
            className={`secondaryBtn ${isCompletedScreen === true && 'active'}`}
            onClick={() => setIsCompletedScreen(true)}
          >
            Completed
          </button>
        </div>
        <div className="todo-list">
          {isCompletedScreen === false &&
            allTodos.map((item, index) => (
              <div className="todo-list-item" key={index}>
                <div>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                  <p>Priority: {item.priority}</p>
                  <p>Category: {item.category}</p>
                  <p>Due Date: {item.dueDate}</p>
                </div>
                <div>
                  <AiOutlineDelete
                    title="Delete?"
                    className="icon"
                    onClick={() => handleToDoDelete(index)}
                  />
                  <BsCheckLg
                    title="Completed?"
                    className="check-icon"
                    onClick={() => handleComplete(index)}
                  />
                  <AiOutlineEdit
                    title="Edit?"
                    className="icon"
                    onClick={() => handleEdit(index)}
                  />
                </div>
              </div>
            ))}

          {isCompletedScreen === true &&
            completedTodos.map((item, index) => (
              <div className="todo-list-item" key={index}>
                <div>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                  <p>
                    <i>Completed at: {item.completedOn}</i>
                  </p>
                </div>
                <div>
                  <AiOutlineDelete
                    className="icon"
                    onClick={() => handleCompletedTodoDelete(index)}
                  />
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}

export default App;
