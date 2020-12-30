Vue.component("task", {
  props: {
    comment: {
      type: Object,
      required: true
    }
  },
  template: `
    <div>
      <div class="card-body">
        <p>{{ task }}</p>
      </div>
    </div>`
});

const app = new Vue({
  el: "#app",
  data: {
    task: null,
    tasks: [],
    error: "To add a new task, write something and press enter!"
  },
  methods: {
    submitTask(taskString) {
      if (this.task) {
        let newTask = this.task
        this.tasks.push(newTask);
        this.task = null;
        if (this.error) {
          this.error = null;
        }
      } else {
        this.error = "You must add a task before submitting."
      }
    },
    deleteTask(clickedTask) {
      if (clickedTask) {
        let taskIndex = this.tasks.indexOf(clickedTask);
        if (taskIndex > -1) {
          this.tasks.splice(taskIndex, 1);
        }
      }
    }
  },
  computed: {
    getTaskCount() {
      return this.tasks.length;
    }
  }

});
