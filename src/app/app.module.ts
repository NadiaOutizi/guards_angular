import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AddArticleComponent } from './add-article/add-article.component';
import { ArticleComponent } from './article/article.component';
import { ButtonModule } from 'primeng/button';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CardModule } from 'primeng/card';
import {CommonModule} from "@angular/common";
import { InputTextModule } from 'primeng/inputtext';
import {TabMenuModule} from 'primeng/tabmenu';
import {TableModule} from 'primeng/table';
import { EditArticleComponent } from './edit-article/edit-article.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { PanelModule } from 'primeng/panel';


@NgModule({
  declarations: [
    AppComponent,
    AddArticleComponent,
    ArticleComponent,
    EditArticleComponent,
    LoginComponent,
    RegisterComponent,
    NotfoundComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ButtonModule,
    CardModule,
    InputTextModule,
    ButtonModule,
    CommonModule,
    TabMenuModule,
    TableModule,
    PanelModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
