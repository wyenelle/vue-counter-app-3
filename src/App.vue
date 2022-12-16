<template>
  <div class="title">TODOS</div>

  <ul>
    <li v-for="(todo, i) in todos" :key="i" class="todo-item">
      <span :class="[todo.isCompleted ?  'has-line-through' : '' ]">👉 {{ todo.name }}</span>
      <button class="delete-btn" @click="deleteTodo(todo.id)">Delete</button>
      <button @click="updateTodo(todo.id)">Complete</button>
      <button @click="removeTodo(todo.id)">Undo</button>
    </li>
  </ul>

  <div class="input-container">
    <input type="text" v-model="todo" />

    <button class="add-btn" @click="addTodo" :disabled="!todo">Add Todo</button>
  </div> 
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      todo: "",
      todos: [
        {
          id: 1,
          name: "Buy Bread",
          isCompleted: false,
        },

        {
          id: 2,
          name: "Buy Beans",
          isCompleted: false,
        },

        {
          id: 3,
          name: "Buy Water",
          isCompleted: false,
        }
      ],
    };
  },
  methods: {
    addTodo() {
      this.todos.push({
        id: this.todos.length + 1,
        name: this.todo,
        isCompleted: false,
      });
      this.todo = ''
    },
    removeTodo(id) {
      this.todos = this.todos.map(todo => todo.id === id ? {...todo, isCompleted : false} : todo)
    },
    updateTodo(id) {
      this.todos = this.todos.map(todo => todo.id === id ? {...todo, isCompleted : true} : todo)
    },
    deleteTodo(id) {
this.todos = this.todos.filter(todo => todo.id !== id)
    },
  },
};
</script>

<style>
.title {
  margin-bottom: 15px;
  font-size: 18px;
  font-weight: 600;
}

.add-btn {
  margin-left: 5px;
}

.delete-btn {
  margin-right: 5px;
  margin-left: 20px;
}

.input-container {
  margin-top: 20px;
}

.todo-item {
  margin-bottom: 10px;
}

.has-line-through {
  text-decoration: line-through;
}
</style>
