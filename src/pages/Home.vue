<template>
  <div id="home">
    <div class="bg-primary">
      <div class="container justify-content-between d-flex todo-nav">
        <a href="#" :class="{active: currentTab === 'all'}" @click="currentTab = 'all'">My Tasks</a>
        <a href="#" :class="{active: currentTab === 'progress'}" @click="currentTab = 'progress'">In Progress</a>
        <a href="#" :class="{active: currentTab === 'completed'}" @click="currentTab = 'completed'">Completed</a>
      </div>
    </div>

    <div class="container">
      <div class="mt-4">
        <div
          v-if="!isNewTodo"
          class="todo-add"
        >
          <i class="fa fa-plus"></i>
          <input
            type="text"
            class="form-control form-control-lg"
            @focus="addTodo"
          >
        </div>
        <edit-todo-item
          v-if="isNewTodo"
          @updateData="getTodos"
          @closeEditTodo="closeEdit"
        ></edit-todo-item>
      </div>
      <div class="mt-4">
        <draggable v-model="todos" @end="updateSort">
          <div v-for="item in todos" :key="item.id">
            <div v-if="currentTab === 'all' || (currentTab === 'progress' && !item.completed) || (currentTab === 'completed' && item.completed)">
              <todo-item
                v-if="editTodoId !== item.id"
                :todo="item"
                @updateData="getTodos"
                @editTodo="editTodo"
              ></todo-item>
              <edit-todo-item
                v-if="editTodoId === item.id"
                :todo="item"
                @updateData="getTodos"
                @closeEditTodo="closeEdit"
              ></edit-todo-item>
            </div>
          </div>
        </draggable>
      </div>
    </div>
  </div>
</template>

<script>
import TodoItem from '../components/TodoItem'
import EditTodoItem from '../components/EditTodoItem'
import draggable from 'vuedraggable'

export default {
  name: 'home',
  data () {
    return {
      currentTab: 'all',
      isNewTodo: false,
      editTodoId: -1,
      todos: [],
    }
  },
  components: {
    TodoItem,
    EditTodoItem,
    draggable
  },
  methods: {
    addTodo () {
      this.editTodoId = -1;
      this.isNewTodo = true;
    },
    editTodo (id) {
      this.isNewTodo = false;
      this.editTodoId = id;
    },
    closeEdit () {
      this.isNewTodo = false;
      this.editTodoId = -1;
    },
    getTodos () {
      const api = 'http://localhost:5000/api/todos/'
      const sortApi = 'http://localhost:5000/api/sort/'
      const vm = this
      let tempTodos = []
      vm.todos = []

      vm.$http
        .get(api)
        .then(
          response => {
            tempTodos = response.data
            vm.$http
              .get(sortApi)
              .then(
                response => {
                  response.data.forEach(sortId => {
                    let tempTodo = tempTodos.find(item => item.id === sortId)
                    vm.todos.push(tempTodo)
                  })
                }
              )
          }
        )
    },
    updateSort () {
      const vm = this
      const api = 'http://localhost:5000/api/sort/'
      const sort = vm.todos.map(item => item.id)
      vm.$http
        .put(api, sort)
        .then(
          () => {
            vm.getTodos()
          }
        )
    }
  },
  mounted: function () {
    this.getTodos()
  }
}
</script>

<style lang="scss">
.todo-add {
  display: flex;
  position: relative;

  i {
    color: #9B9B9B;
    font-size: 1.5rem;
    position: absolute;
    left: 1rem;
    top: 0.75rem;
  }
}

.draggable {
  cursor: move;
}
</style>
