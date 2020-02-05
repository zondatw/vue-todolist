<template>
  <div id="app">
    <div class="bg-primary">
      <div class="container justify-content-between d-flex todo-nav">
        <a href="#" :class="{active: currentTab === 'myTasks'}" @click="currentTab = 'myTasks'">My Tasks</a>
        <a href="#" :class="{active: currentTab === 'inProgress'}" @click="currentTab = 'inProgress'">In Progress</a>
        <a href="#" :class="{active: currentTab === 'completed'}" @click="currentTab = 'completed'">Completed</a>
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