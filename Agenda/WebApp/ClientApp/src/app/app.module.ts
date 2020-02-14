import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AtividadeComponent } from './atividade/atividade.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { HomeComponent } from './home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { IncluirComponent } from './incluir/incluir.component';


@NgModule({
  declarations: [
    AppComponent,
    AtividadeComponent,
    NavBarComponent,
    HomeComponent,
    IncluirComponent,

  ],
  imports: [
   BrowserModule, FormsModule, ReactiveFormsModule, HttpClientModule,
     RouterModule.forRoot([
      { path: '', component: HomeComponent, pathMatch: 'full' },
      { path: 'atividade', component: AtividadeComponent },
      { path: 'incluir', component: IncluirComponent},
      { path: 'excluir', component: AtividadeComponent}
    ])  
  ],
providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
