<template>
  <div id="app">
    <div class="bg-primary">
      <div class="container justify-content-between d-flex todo-nav">
        <a href="#" :class="{active: currentTab === 'myTasks'}" @click="currentTab = 'myTasks'">My Tasks</a>
        <a href="#" :class="{active: currentTab === 'inProgress'}" @click="currentTab = 'inProgress'">In Progress</a>
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
          @closeEditTodo="closeEdit"
        ></edit-todo-item>
      </div>
      <div class="mt-4">
        <draggable v-model="todos">
          <div v-for="item in todos" :key="item.id">
            <todo-item
              v-if="editTodoId !== item.id"
              :todo="item"
              @editTodo="editTodo"
            ></todo-item>
            <edit-todo-item
              v-if="editTodoId === item.id"
              :todo="item"
              @closeEditTodo="closeEdit"
            ></edit-todo-item>
          </div>
        </draggable>
      </div>
    </div>
  </div>
</template>

<script>
import TodoItem from './components/TodoItem'
import EditTodoItem from './components/EditTodoItem'
import draggable from 'vuedraggable'

export default {
  name: 'app',
  data () {
    return {
      currentTab: 'myTasks',
      isNewTodo: false,
      editTodoId: -1,
      todos: [
        {
          'id': 1,
          'title': 'test yooooooooooooooo',
          'stared': true,
          'deadline_start': '2020-02-01',
          'deadline_end': '2020-02-06',
          'file': 'media/file/aaa.png',
          'completed': true,
        },
        {
          'id': 2,
          'title': 'test test test test test test test',
          'stared': false,
          'comment': `I'm test test test test`,
          'completed': false,
        },
        {
          'id': 3,
          'title': 'test 123456',
          'stared': false,
          'comment': `I'm test test test test`,
          'completed': false,
        },
      ],
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
    }
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
