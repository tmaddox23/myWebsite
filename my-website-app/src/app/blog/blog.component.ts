import { Component } from '@angular/core';

interface BlogPost {
  id: number;
  author: string;
  date: string;
  content: string;
  likes: number;
  category: string;
  subject: string;
}

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent {
  posts: BlogPost[] = [
    { id: 1, author: 'Your Name', date: 'June 14, 2024', content: 'This is my first blog post!', likes: 0, category: 'Software', subject: 'First Post' },
    { id: 2, author: 'Your Name', date: 'June 15, 2024', content: 'Welcome to my blog!', likes: 0, category: 'Life', subject: 'Welcome' },
    { id: 3, author: 'Your Name', date: 'June 16, 2024', content: 'This is a post about sports!', likes: 0, category: 'Sports', subject: 'Sports Post' },
    { id: 4, author: 'Your Name', date: 'June 17, 2024', content: 'This is a post about games!', likes: 0, category: 'Games', subject: 'Games Post' },
  ];

  likePost(post: BlogPost) {
    post.likes += 1;
  }
}
