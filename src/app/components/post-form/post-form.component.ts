import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';
// EventEmitter: use in components with the @Output directive to emit custom events
// synchronously or asynchronously, and register handlers for those events by
// subscribing to an instance.

import { PostService } from '../../services/post.service';
import { Post } from '../../models/Post';

@Component({
  selector: 'app-post-form',
  templateUrl: './post-form.component.html',
  styleUrls: ['./post-form.component.css'],
})
export class PostFormComponent implements OnInit {
  // @Output is an event Emitter obj. that throw data outside this component.
  @Output() newPost: EventEmitter<Post> = new EventEmitter();
  @Output() updatedPost: EventEmitter<Post> = new EventEmitter();

  @Input() currentPost: Post;
  @Input() isEditPassed: Boolean;

  // dependency injection
  constructor(private postService: PostService) {}

  ngOnInit(): void {}

  addPost(title, body) {
    if (!title || !body) {
      alert('Please, add post');
    } else {
      this.postService
        .savePost({
          title,
          body,
        } as Post)
        .subscribe((post) => {
          console.log(post);
          // we are emmiting an event. We are giving off it.
          this.newPost.emit(post);
        });
    }
  }

  updatePost(title, body, id) {
    console.log(`${title} - body: ${body} - id: ${id}`);
    if (!title || !body) {
      alert('Please, add post');
    } else {
      this.postService
        .updatePost({ title, body } as Post, id)
        .subscribe((post) => {
          console.log(post);
          this.isEditPassed = false;
          this.updatedPost.emit(post);
        });
    }
  }

  // updatePost() {
  //   console.log(`${this.currentPost.}`);

  //   this.postService.updatePost(this.currentPost).subscribe((post) => {
  //     console.log(post);
  //   });
  // }
}
