// comment list component
const commentList = Vue.component("comment-list", {
  props: {
    comments: {
      type: Array,
      required: true
    }
  },
  data: function () {
    return {
      newComment: null,
      commentAuthor: null,
      error: null
    }
  },
  methods: {
    submitComment() {
      if (this.newComment && this.commentAuthor) {
        // If both fields are filled out, submit the comment...
        this.$emit('submit-comment', { username: this.commentAuthor,
                                       content: this.newComment });
        // ...and reset the fields
        this.newComment = null;
        this.commentAuthor = null;
        if (this.error) {
          this.error = null;
        }
      } else {
        // Otherwise, display an error
        this.error = "Please fill out both fields!";
      }
    }
  },
  template: `
    <div class=mt-2>
      <div class="container">
          <single-comment v-for="(comment, index) in comments"
                   :comment="comment"
                   :key="index"></single-comment>
         <hr>
         <h3>{{ error }}</h3>
         <form @submit.prevent="submitComment" class="mb-3">
           <div class="form-group">
             <label for="commentAuthor">Your Username</label>
             <input type="text"
                    class="form-control"
                    id="commentAuthor"
                    v-model="commentAuthor">
           </div>
           <div class="form-group">
             <label for="commentText">Add a comment</label>
             <textarea class="form-control"
                       id="commentText"
                       cols="40"
                       rows="3"
                       v-model="newComment"></textarea>
           </div>
           <button class="btn-sm btn btn-primary" type="submit">Publish</button>
         </form>
      </div>
    </div>
  `
});

// single Comment component
const comment = Vue.component("single-comment", {
  props: {
    comment: {
      type: Object,
      required: true
    }
  },
  template: `
    <div class="mb-2">
      <div class="card">
        <div class="card-header">
          <p>Published by: {{ comment.username }}</p>
        </div>
        <div class="card-body">
          <p>{{ comment.content }}</p>
        </div>
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
  },
  methods: {
    addNewComment(newComment) {
      this.comments.push(newComment);
    }
  },
  components: {
    comment: comment,
    commentList: commentList
  }
});
