<template>
  <div class="todo-item" :class="{stared: todo.stared}">
    <div class="todo-header">
      <!-- checkbox -->
      <div class="todo-check">
        <input type="checkbox" id="`todo-checkbox-${todo.id}`">
        <label for="`todo-checkbox-${todo.id}`"></label>
      </div>
      <!-- title -->
      <div class="todo-title">
        <span>{{todo.title}}</span>
      </div>
      <!-- star and edit button -->
      <div class="todo-control">
        <i class="fas fa-star stared" v-if="todo.stared"></i>
        <i class="far fa-star" v-else></i>
        <i class="fas fa-pencil-alt"></i>
      </div>
    </div>
    <div class="todo-body">

    </div>
    <div class="todo-footer text-secondary">
      <!-- date and icon of file and message -->
      <i class="far fa-calendar-alt todo-icon" v-if="todo.deadline"><span>from {{todo.deadline.start}} to {{todo.deadline.end}}</span></i>
      <i class="far fa-file todo-icon" v-if="todo.file"></i>
      <i class="far fa-comment-dots todo-icon" v-if="todo.comment"></i>
    </div>
  </div>
</template>

<script>
export default {
  props: ['todo'],
  name: 'Todo',
}
</script>
