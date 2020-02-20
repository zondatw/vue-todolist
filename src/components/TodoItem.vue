<template>
  <div class="todo-item" :class="{stared: todo.stared}">
    <div class="todo-header">
      <!-- checkbox -->
      <div class="todo-check">
        <input
          type="checkbox"
          :id="`todo-checkbox-${todo.id}`"
          v-model="todo.completed"
          @change="updateStatus('completed', todo.completed)"
        >
        <label :for="`todo-checkbox-${todo.id}`"></label>
      </div>
      <!-- title -->
      <div class="todo-title">
        <span :class="{completed: todo.completed}">{{todo.title}}</span>
      </div>
      <!-- star and edit button -->
      <div class="todo-control">
        <a href="#" @click.prevent="updateStatus('stared', !todo.stared)">
          <i class="fas fa-star stared" v-if="todo.stared"></i>
          <i class="far fa-star" v-else></i>
        </a>
        <a href="#" @click.prevent="editTodo()">
          <i class="fas fa-pencil-alt"></i>
        </a>
      </div>
    </div>
    <div class="todo-footer text-secondary">
      <!-- date and icon of file and message -->
      <i class="far fa-calendar-alt todo-icon" v-if="todo.deadline_start && todo.deadline_end"><span>from {{todo.deadline_start}} to {{todo.deadline_end}}</span></i>
      <i class="far fa-file todo-icon" v-if="todo.file"></i>
      <i class="far fa-comment-dots todo-icon" v-if="todo.comment"></i>
    </div>
  </div>
</template>

<script>
export default {
  props: ['todo'],
  name: 'Todo',
  methods: {
    updateStatus (field, status) {
      const vm = this
      const api = `api/todos/${vm.todo.id}`
      const tempTodo = {...vm.todo}
      tempTodo[field] = status
      vm.$http
        .put(api, tempTodo)
        .then(
          () => {
            vm.$emit('updateData')
          }
        )
    },
    editTodo () {
      this.$emit('editTodo', this.todo.id)
    }
  }
}
</script>
