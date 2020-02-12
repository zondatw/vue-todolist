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
        <div v-for="item in todos" :key="item.id">
          <todo-item
            :todo="item"
          ></todo-item>
        <div class="todo-item">
          <div class="todo-header">
            <!-- completed checkbox -->
            <div class="todo-check">
              <input
                type="checkbox" :id="`todo-checkbox-`"
              >
              <label :for="`todo-checkbox-`"></label>
            </div>
            <!-- todo title -->
            <div class="todo-title">
              <input type="text" class="form-control">
            </div>
            <!-- star and editing button -->
            <div class="todo-control">
              <i class="fas fa-star stared"></i>
              <i class="fas fa-pencil-alt editing"></i>
            </div>
          </div>
          <div class="todo-body">
            <div class="todo-container">
              <!-- deadline -->
              <div class="todo-row">
                <div class="todo-row-icon">
                  <i class="far fa-calendar-alt"></i>
                </div>
                <div class="todo-row-body">
                  <b>Deadline</b>
                  <div class="form-inline todo-form-control">
                    <input type="date" class="form-control border-0">
                    <input type="time" class="form-control border-0 ml-2">
                  </div>
                </div>
              </div>
              <!-- file -->
              <div class="todo-row">
                <div class="todo-row-icon">
                  <i class="far fa-file"></i>
                </div>
                <div class="todo-row-body">
                  <b>File</b>
                  <div class="form-inline todo-form-control todo-file">
                    <div class="todo-file-col">
                      <input :id="`todo-edit-file`" type="file">
                      <label :for="`todo-edit-file`"></label>
                    </div>
                    <div class="todo-file-col">
                      <label :id="`todo-edit-file-content`" class="todo-file-content"></label>
                    </div>
                  </div>
                </div>
              </div>
              <!-- comment -->
              <div class="todo-row">
                <div class="todo-row-icon">
                  <i class="far fa-calendar-alt fa-comment-dots"></i>
                </div>
                <div class="todo-row-body">
                  <b>Comment</b>
                  <div class="todo-form-control">
                    <textarea
                      class="form-control border-0"
                      placeholder="Type your memo here..."
                    ></textarea>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="d-flex">
            <!-- cancel and add task button -->
            <button class="btn btn-light text-danger w-50 btn-lg rounded-0">
              <i class="fas fa-times"></i> Cancel
            </button>
            <button class="btn btn-primary w-50 btn-lg rounded-0">
              <i class="fas fa-plus"></i> Update Task
            </button>
          </div>
        </div>
      </div>
      <div class="mt-4">
        <draggable v-model="todos">
          <div v-for="item in todos" :key="item.id">
            <todo-item
              :todo="item"
            ></todo-item>
          </div>
        </draggable>
      </div>
    </div>
  </div>
</template>

<script>
import TodoItem from './components/TodoItem'
import draggable from 'vuedraggable'

export default {
  name: 'app',
  data () {
    return {
      currentTab: 'myTasks',
      todos: [
        {
          'id': 1,
          'title': 'test yooooooooooooooo',
          'stared': true,
          'deadline': {
            'start': '2020/02/01',
            'end': '2020/02/06',
          },
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
      ],
    }
  },
  components: {
    TodoItem,
    draggable
  }
}

window.onload = function () {
  var todoEditFile = document.getElementById('todo-edit-file')
  todoEditFile.addEventListener('change', function(e) {
    let fileName = e.target.value.split('\\').pop().split('/').pop();
    let todoEditFileContent = document.getElementById('todo-edit-file-content');
    todoEditFileContent.innerText = fileName;
  })
}
</script>

<style lang="scss">
.draggable {
  cursor: move;
}
</style>
