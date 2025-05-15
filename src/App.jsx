import { useEffect, useRef, useState } from 'react'
import './App.css'
import TodoItem from './components/TodoItem'
import { IoMdAdd } from "react-icons/io";
import { RiTodoFill } from "react-icons/ri";
import Swal from 'sweetalert2';

function App() {

  const [todos, setTodos] = useState(localStorage.getItem("todos") ? JSON.parse(localStorage.getItem("todos")) : []);

  const data = useRef();

  const addTodos = () => {
    if (data.current.value.trim() == '') {
      message('error', 'Hata!', 'Lütfen bir görev girin');
      return;
    }

    const inputText = data.current.value.trim();


    const newTodo = {
      id: todos.length + 1,
      text: inputText,
      completed: false
    };

    setTodos((prev) => [...prev, newTodo]);
    data.current.value = '';
    message('success', 'Başarılı!', 'Görev başarıyla eklendi');
  }

  const toggle = (id) => {
    setTodos((prevTodos) => {
      return prevTodos.map((todo) => {
        if (todo.id === id) {

          return { ...todo, iscompleted: !todo.iscompleted }
        }
        return todo;
      })
    })

  }


  const deleteTodo = (id) => {

    Swal.fire({
      title: 'Silmek istediğinize emin misiniz?',
      text: "Bu işlem geri alınamaz!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Evet, sil!'
    }).then((result) => {
      if (result.isConfirmed) {
        message('success', 'Başarılı!', 'Görev başarıyla silindi');
        setTodos((prevTodos) => {
          return prevTodos.filter((todo) => todo.id !== id);
        })
      }
    })

  }

  const message = (type, title, message) => {
    Swal.fire({
      title: title,
      text: message,
      icon: type
    });
  }

  useEffect(() => { localStorage.setItem("todos", JSON.stringify(todos)) }, [todos]);


  return (
    <>
      <div className='bg-slate-800 h-screen flex items-center justify-center'>
        <div className="card w-[650px] h-[450px] bg-white shadow-lg rounded-lg p-6">
          <div className="card-header text-2xl flex items-center justify-center gap-4">
            <RiTodoFill />
            <h1 className="font-bold text-center">TaskFlow - Simple Todo</h1>
          </div>
          <div className="card-body mt-4 px-4">
            {/* SearchBar */}
            <div className='flex justify-center py-4'>
              <div className="card border-indigo-500  border-2 shadow-md rounded-l-lg px-4 py-[3px] w-full">
                <input type="text" ref={data} className="border-none outline-none bg-transparent cursor-text w-full" placeholder='Yeni bir görev gir' />
              </div>
              <div className="card bg-indigo-500 shadow-md rounded-r-lg w-[40px] text-xl flex items-center justify-center text-[#fff] cursor-pointer" onClick={() => addTodos()}><IoMdAdd /></div>
            </div>
            {/* Todo Items */}
            <div className='border-indigo-500 border-2 h-[285px] px-3 rounded-lg overflow-y-auto scrollbar-thin scrollbar-thumb-[#433D8B] scrollbar-track-[#E5E5E5]'>
              {todos.map((todo) => (
                <TodoItem key={todo.id} todo={todo} toggle={toggle} deleteTodo={deleteTodo} />
              ))}
            </div>

          </div>
        </div>
      </div>
    </>
  )
}

export default App
