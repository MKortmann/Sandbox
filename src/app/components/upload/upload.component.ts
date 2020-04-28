import { Component, OnInit } from '@angular/core';

import { PostService } from '../../services/post.service';

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.css'],
})
export class UploadComponent implements OnInit {
  constructor(private postService: PostService) {}

  ngOnInit(): void {}

  upload(file) {
    console.log('upload.component.ts');

    this.postService.uploadfile(file);
  }
}
