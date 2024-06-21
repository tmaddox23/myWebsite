import { Component, Input } from '@angular/core';

interface BlogPost {
  id: number;
  author: string;
  date: string;
  content: string;
  category: string;
  subject: string;
}

@Component({
  selector: 'app-blog-post',
  templateUrl: './blog-post.component.html',
  styleUrls: ['./blog-post.component.css']
})
export class BlogPostComponent {
  @Input() category!: string;  // Use '!' to indicate it will be definitely assigned

  posts: BlogPost[] = [
    { id: 1, author: 'Your Name', date: 'June 14, 2024', content: 'This is my first blog post!', category: 'Software', subject: 'First Post' },
    { id: 2, author: 'Your Name', date: 'June 15, 2024', content: 'Welcome to my blog!', category: 'Life', subject: 'Welcome' },
    { id: 3, author: 'Your Name', date: 'June 16, 2024', content: 'This is a post about sports!', category: 'Sports', subject: 'Sports Post' },
    { id: 4, author: 'Your Name', date: 'June 17, 2024', content: 'This is a post about games!', category: 'Games', subject: 'Games Post' },
    { id: 5, author: 'Your Name', date: 'June 18, 2024', content: 'This is another post about software!', category: 'Software', subject: 'Second Software Post' },
    { id: 6, author: 'Your Name', date: 'June 19, 2024', content: 'This is another post about life!', category: 'Life', subject: 'Second Life Post' },
    { id: 7, author: 'Your Name', date: 'June 20, 2024', content: 'This is another post about sports!', category: 'Sports', subject: 'Second Sports Post' },
    { id: 8, author: 'Your Name', date: 'June 21, 2024', content: 'This is yet another post about software!', category: 'Software', subject: 'Third Software Post' },
    { id: 9, author: 'Your Name', date: 'June 22, 2024', content: 'This is yet another post about life!', category: 'Life', subject: 'Third Life Post' },
    { id: 10, author: 'Your Name', date: 'June 23, 2024', content: 'This is yet another post about sports!', category: 'Sports', subject: 'Third Sports Post' },
    { id: 11, author: 'Your Name', date: 'June 24, 2024', content: 'This is yet another post about games!', category: 'Games', subject: 'Third Games Post' },
    { id: 12, author: 'Your Name', date: 'June 25, 2024', content: 'This is the fourth post about software!', category: 'Software', subject: 'Fourth Software Post' },
    { id: 13, author: 'Your Name', date: 'June 26, 2024', content: 'This is the fourth post about life!', category: 'Life', subject: 'Fourth Life Post' },
    { id: 14, author: 'Your Name', date: 'June 27, 2024', content: 'This is the fourth post about sports!', category: 'Sports', subject: 'Fourth Sports Post' },
    { id: 15, author: 'Your Name', date: 'June 28, 2024', content: 'This is the fourth post about games!', category: 'Games', subject: 'Fourth Games Post' },
    { id: 14, author: 'Your Name', date: 'June 27, 2024', content: 'This is the fourth post about sports!', category: 'Sports', subject: 'Fourth Sports Post' },
    { id: 14, author: 'Your Name', date: 'June 27, 2024', content: 'This is the fourth post about sports!', category: 'Sports', subject: 'Fourth Sports Post' },
    { id: 14, author: 'Your Name', date: 'June 27, 2024', content: 'This is the fourth post about sports!', category: 'Sports', subject: 'Fourth Sports Post' },
    { id: 14, author: 'Your Name', date: 'June 27, 2024', content: 'This is the fourth post about sports!', category: 'Sports', subject: 'Fourth Sports Post' },
    { id: 14, author: 'Your Name', date: 'June 27, 2024', content: 'This is the fourth post about sports!', category: 'Sports', subject: 'Fourth Sports Post' },
    
  ];

  postsToShow: number = 6;

  getPostsByCategory(): BlogPost[] {
    return this.posts.filter(post => post.category === this.category).slice(0, this.postsToShow);
  }

  viewAllPosts() {
    this.postsToShow += 6;
  }

  hasMorePosts(): boolean {
    return this.posts.filter(post => post.category === this.category).length > this.postsToShow;
  }
}
