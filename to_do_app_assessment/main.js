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
    counter: 0,
    task: null,
    tasks: []
  },
  methods: {
    submitTask(taskString) {
      `${this.tasks.push(taskString)}`;
      `${this.incrementCounter()}`;
    },
    deleteTask(task) {
      // figure out how to delete that specific task
      `${this.decrementCounter()}`;
    }
  },
  computed: {
    incrementCounter() {
      return `${this.counter}++`;
    },
    decrementCounter() {
      return `${this.counter}--`;
    }
  },
  props: {

  }

});
