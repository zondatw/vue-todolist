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
        <div class="todo-item">
          <div class="todo-header">
            <!-- checkbox -->
            <div class="todo-check">
              <input type="checkbox">
              <label></label>
            </div>
            <!-- title -->
            <div class="todo-title">
              <span>test</span>
            </div>
            <!-- star and edit button -->
            <div class="todo-control">
              <i class="far fa-star"></i>
              <i class="fas fa-pencil-alt"></i>
            </div>
          </div>
          <div class="todo-body">

          </div>
          <div class="todo-footer">
            <!-- date and icon of file and message -->
            <i class="far fa-calendar-alt"></i>
            <i class="far fa-file"></i>
            <i class="far fa-comment-dots"></i>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      currentTab: 'myTasks',
    }
  },
  components: {
  }
}
</script>
