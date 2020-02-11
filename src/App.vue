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
</script>

<style lang="scss">
.draggable {
  cursor: move;
}
</style>
