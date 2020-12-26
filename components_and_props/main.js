Vue.component("Comment", {
  props: {
    comment: {
      type: Object,
      required: true
    }
  },
  template: `
    <div>
      <div class="card-body">
        <p>{{ comment.username }}</p>
        <p>{{ comment.content }}</p>
      </div>
    </div>`
});

const app = new Vue({
  el: "#app",
  data: {
    comments: [
      {username: "alice", content: "first comment"},
      {username: "jordan", content: "Hello world!"},
      {username: "goose", content: "meow meow meow!!!"},
      {username: "benny", content: "..."},
      {username: "birdy", content: "Hi I'm Mr. Panda!"},
    ]
  }
})
