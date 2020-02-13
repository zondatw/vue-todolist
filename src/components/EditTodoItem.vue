<template>
  <div class="todo-item">
    <div class="todo-header" :class="{stared: cacheTodo.stared}">
      <!-- completed checkbox -->
      <div class="todo-check">
        <input
          type="checkbox"
          :id="`todo-checkbox-edit`"
          v-model="cacheTodo.completed"
        >
        <label :for="`todo-checkbox-edit`"></label>
      </div>
      <!-- todo title -->
      <div class="todo-title">
        <input
          type="text"
          class="form-control"
          v-model="cacheTodo.title"
        >
      </div>
      <!-- star and editing button -->
      <div class="todo-control">
        <a href="#" @click="updateStatus('stared', !cacheTodo.stared)">
          <i class="fas fa-star stared" v-if="cacheTodo.stared"></i>
          <i class="far fa-star" v-else></i>
        </a>
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
              <input type="date" class="form-control border-0" v-model="cacheTodo.deadline_start">
              <input type="date" class="form-control border-0 ml-2" v-model="cacheTodo.deadline_end">
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
                v-model="cacheTodo.comment"
              ></textarea>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="d-flex">
      <!-- cancel and add task button -->
      <button
        class="btn btn-light text-danger w-50 btn-lg rounded-0"
        @click="closeEdit"
      >
        <i class="fas fa-times"></i> Cancel
      </button>
      <button class="btn btn-primary w-50 btn-lg rounded-0" @click="updateTodo">
        <i class="fas fa-plus"></i> Update Task
      </button>
    </div>
  </div>
</template>

<script>
export default {
  props: ['todo'],
  name: 'EditTodo',
  data () {
    return {
      cacheTodo: {},
    }
  },
  mounted: function() {
    var todoEditFile = document.getElementById('todo-edit-file')
    todoEditFile.addEventListener('change', function(e) {
      let fileName = e.target.value.split('\\').pop().split('/').pop();
      let todoEditFileContent = document.getElementById('todo-edit-file-content');
      todoEditFileContent.innerText = fileName;
    })
  },
  methods: {
    closeEdit () {
      this.$emit('closeEditTodo')
    },
    updateStatus (field, status) {
      this.cacheTodo[field] = status
    },
    updateTodo () {
      const vm = this
      const tempTodo = {...this.cacheTodo}

      if (!this.todo) {
        // create new todo
        const api = `http://localhost:5000/todos`
        vm.$http
          .post(api, tempTodo)
          .then(
            response => {
              console.log(response)
              vm.$emit('closeEditTodo')
              vm.$emit('updateData')
            }
          )
      } else {
        const api = `http://localhost:5000/todos/${vm.todo.id}`
        vm.$http
          .put(api, tempTodo)
          .then(
            response => {
              console.log(response)
              vm.$emit('closeEditTodo')
              vm.$emit('updateData')
            }
          )
      }
    }
  },
  created () {
    if (!this.todo) {
      this.cacheTodo = {
        'title': '',
        'stared': false,
        'deadline_start': '',
        'deadline_end': '',
        'file': '',
        'completed': false,
      }
    } else {
      this.cacheTodo = {...this.todo}
    }
  }
}
</script>
