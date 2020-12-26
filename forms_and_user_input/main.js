const app = new Vue({
  el: "#app",
  data: {
    comment: null,
    comments: [],
    errors: null
  },
  methods: {
    onSubmit() {
      if (this.comment) {
        let newComment = this.comment
        this.comments.push(newComment);
        this.comment = null;

        if (this.errors) {
          this.errors = null;
        }

      } else {
        this.errors = "This comment field can't be empty"
      }

    }
  }
})
