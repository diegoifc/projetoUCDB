import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormArray, Validators, FormGroup } from '@angular/forms';
import { AtividadeService } from '../shared/atividade.service';
import { Router } from '@angular/router';




@Component({
  selector: 'app-atividade',
  templateUrl: './atividade.component.html',
  styleUrls: ['./atividade.component.scss']
})
export class AtividadeComponent implements OnInit {
  notification = null;
  corTabela = null;
  atividadeForms : FormArray = this.fb.array([]);
  constructor(private fb: FormBuilder, private atividadeService : AtividadeService, private router: Router) { }
  atividadeList =[];
  ngOnInit(): void {
    this.atividadeService.getAtividades().subscribe(
      res => {

          (res as []).forEach((atividade: any) => {
            let df: Date,  dr : Date;
            let data : string;
            dr = new Date(atividade.datarealizada);
            df = new Date(atividade.datafim);
            let imp = atividade.importante;
            this.atividadeForms.push(this.fb.group({
              id: [atividade.id],
              nome: [atividade.nome, [Validators.required]],
              datarealizada: [dr],
              datafim: [df, [Validators.required]],
              descricao: [atividade.descricao],
              situacao: [this.getSituacao(df,dr,imp)],
              importante: [imp]
              
            }));
          });
        
      });
  }
  getSituacao( df: Date , dr: Date, imp: any){
    let now = new Date(); 
    if(imp ==0){
      return 'Não Fazer';
    } else if ((now <= df) && (dr.toLocaleDateString()=='01/01/1')) {
      return "Pra fazer";}
      else if ((dr.toLocaleDateString()!='01/01/1')) {return "Concluída";} else {return "Pendente";}
    }
 incluir(){
  this.router.navigate(['/incluir']);
 }

 alterarDados(fg: FormGroup){
  if(fg.value.importante==true){
    fg.value.importante=1;
  }else {
    fg.value.importante=0;
  }
   
    this.atividadeService.putAtividades(fg.value).subscribe(
      (res: any) => {
        this.showNotification('update');
      }
    );
 }

 deletarDados(id,i){
   if(confirm('Tem Certeza que deseja remover esta Atividade?')){
  this.atividadeService.deleteAtividade(id).subscribe(
    (res: any) => {
      this.atividadeForms.removeAt(i);
      this.showNotification('delete');
    }
  );
}
 }
  
  addAtividadeForms() {
    this.atividadeForms.push(this.fb.group({
      atividadeID: [0],
      nome: ['', [Validators.required]],
      datarealizada: [''],
      datafim: ['', [Validators.required]],
      descricao:[''],
      situacao: [''],
      importante:['']

    }))
  }
  getClass(situacao){
      switch (situacao) {
        case 'Concluída':
          return 'table-success';
          break;
        case 'Pra fazer':
          return  '';
          break;
        case 'Pendente':
          return 'table-info';
          break;
  
        default:
          return 'table-active'
          break;
      }
  
}
showNotification(category) {
  switch (category) {
    case 'insert':
      this.notification = { class: 'text-success', message: 'Salvo com Sucesso!' };
      break;
    case 'update':
      this.notification = { class: 'text-primary', message: 'Dados Atualizados!' };
      break;
    case 'delete':
      this.notification = { class: 'text-danger', message: 'Atividade Excluída' };
      break;

    default:
      break;
  }
  setTimeout(() => {
    this.notification = null;
  }, 3000);
}
}
