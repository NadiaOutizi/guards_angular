import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-edit-article',
  templateUrl: './edit-article.component.html',
  styleUrls: ['./edit-article.component.css']
})
export class EditArticleComponent implements OnInit {
  articleForm!: FormGroup;
  articleId: number = 0;

  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.articleId = +params['id'];
      // Here you should fetch the article details from localStorage based on the articleId
      // and prepopulate the form fields
    });

    this.articleForm = this.formBuilder.group({
      id: [''],
      name: [''],
      description: [''],
      price: ['']
    });
  }

  updateArticle() {
    const updatedArticle = {
      id: this.articleForm.get('id')?.value,
      name: this.articleForm.get('name')?.value,
      description: this.articleForm.get('description')?.value,
      price: this.articleForm.get('price')?.value
    };
  
    // Fetch the articles from localStorage
    let articles = JSON.parse(localStorage.getItem('articles') || '[]');
  
    // Find the index of the article to be updated
    const index = articles.findIndex((a: any) => a.id === this.articleId);
  
    // If article found, update it
    if (index !== -1) {
      articles[index] = updatedArticle;
      localStorage.setItem('articles', JSON.stringify(articles));
    }
  
    // Navigate back to the article list page
    this.router.navigate(['/listarticle']);
  }
  

}
