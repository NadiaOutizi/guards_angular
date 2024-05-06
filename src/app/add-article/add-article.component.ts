import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ArticleC } from '../article-c';
import { Router } from '@angular/router';
import { User } from '../user';

@Component({
  selector: 'app-add-article',
  templateUrl: './add-article.component.html',
  styleUrl: './add-article.component.css'
})
export class AddArticleComponent implements OnInit{
  
  articleForm !: FormGroup;
  constructor(public formBuilder: FormBuilder, private router:Router){}
  
  
  ngOnInit(): void {
    this.articleForm = this.formBuilder.group({
      id: [''],
      name: [''],
      description: [''],
      price: [''],
    })
  }

  
  addArticle() {
    const article = {
      id: this.articleForm.get('id')?.value,
      name :this.articleForm.get('name')?.value,
      description:this.articleForm.get('description')?.value,
      price:this.articleForm.get('price')?.value
    }
    this.addToLocalStorage(article);
  }
  addToLocalStorage(art:ArticleC){
    let json = localStorage.getItem('articles');
    console.log('JSON: ',json);
    let articles : ArticleC[] = json ? JSON.parse(json) : []; 
    console.log('articles : ',articles);
    articles.push(art);
    const articlesJSON = JSON.stringify(articles);
     localStorage.setItem("articles", articlesJSON);
    this.router.navigate(["/listarticle"]);
  } 

} 

