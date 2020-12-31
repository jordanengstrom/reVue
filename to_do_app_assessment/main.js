const taskList = Vue.component("task-list", {
  props: {
    tasks: {
      type: Array,
      required: true
    }
  },

  // data: function () {
  //   return {
  //     newTask: null,
  //     error: null
  //   }
  // },
  template: `
  <div>
    <single-task v-for="(task, index) in tasks" :task="task" :key="index"></single-task>
  </div>
  `
});

const singleTask = Vue.component("single-task", {
  props: {
    task: {
      type: String,
      required: false
    }
  },
  methods: {
    deleteTask(clickedTask) {
      if (clickedTask) {
        let taskIndex = this.tasks.indexOf(clickedTask);
        if (taskIndex > -1) {
          this.tasks.splice(taskIndex, 1);
        }
      }
    }
  },
  template: `
    <div>
      <div class="alert alert-success alert-dismissible fade show mb-2" role="alert">
        {{ task }}
        <button type="button" @click="deleteTask" class="close" data-dismiss="alert" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
    </div>
    `
});

const app = new Vue({
  el: "#app",
  data: {
    task: null,
    tasks: [],
    error: "To add a new task, write something and press enter!"
  },
  methods: {
    submitTask() {
      if (this.task) {
        let newTask = this.task;
        this.tasks.push(newTask);
        this.task = null;
        if (this.error) {
          this.error = null;
        }
      } else {
        this.error = "You must add a task before submitting."
      }
    }
  },
  computed: {
    getTaskCount() {
      return this.tasks.length;
    }
  },
  components: {
    task: singleTask,
    taskList: taskList
  }

});
