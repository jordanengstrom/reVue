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
    error: null
  },
  methods: {
    submitTask(taskString) {
      if (this.task) {
        let newTask = this.task
        this.tasks.push(newTask);
        this.task = null;
        if (this.errors) {
          this.errors = null;
        }
      } else {
        this.errors = "You must add a task before submitting."
      }
    }
  },
  computed: {
    getTaskCount() {
      return this.tasks.length;
    }
  }

});
