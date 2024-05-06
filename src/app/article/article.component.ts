import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../user.service';
import { User } from '../user';
import { RegisterComponent } from '../register/register.component';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {
  articles: any = null;
  users: any = null;
  isad :boolean = true;
  isAdmin: boolean | undefined;
  

  
  constructor(private router: Router, public userService: UserService , private user :RegisterComponent) {
    
  }
  checkisad(){
    this.isAdmin = localStorage.getItem('isad')==='true' ? true : false;
    console.log('is ad  '+this.isAdmin);
  }
  
  ngOnInit() {
    this.checkisad();

    this.loadArticles();
  }

  loadArticles() {
    const articlesJSON = localStorage.getItem('articles');
    this.articles = articlesJSON ? JSON.parse(articlesJSON) : null;
  }

  deleteArticle(article: any) {
    if (confirm('Are you sure you want to delete this article?')) {
      const index = this.articles.findIndex((a: any) => a.id === article.id);
      if (index !== -1) {
        this.articles.splice(index, 1);
        localStorage.setItem('articles', JSON.stringify(this.articles));
      }
    }
  }

  editArticle(article: any) {
    this.router.navigate(['/edit', article.id]);
  }

  login() {
    this.router.navigate(['/']);
  }

  logout() {
    this.userService.isLogged = false;
    this.router.navigate(['/']);
  }
}
