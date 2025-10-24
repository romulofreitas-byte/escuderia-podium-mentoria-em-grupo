import { create } from 'zustand';

interface Todo {
  id: string;
  text: string;
  completed: boolean;
}

interface TodoStore {
  todos: Todo[];
  addTodo: (text: string) => void;
  toggleTodo: (id: string) => void;
  removeTodo: (id: string) => void;
  updateTodo: (id: string, text: string) => void;
}

export const useTodoStore = create<TodoStore>((set) => ({
  todos: [],
  addTodo: (text) => set((state) => ({ 
    todos: [...state.todos, { id: Date.now().toString(), text, completed: false }] 
  })),
  toggleTodo: (id) => set((state) => ({ 
    todos: state.todos.map(todo => 
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    )
  })),
  removeTodo: (id) => set((state) => ({ 
    todos: state.todos.filter(todo => todo.id !== id) 
  })),
  updateTodo: (id, text) => set((state) => ({ 
    todos: state.todos.map(todo => 
      todo.id === id ? { ...todo, text } : todo
    )
  })),
}));