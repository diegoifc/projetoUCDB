import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { AtividadeService } from '../shared/atividade.service';

@Component({
  selector: 'app-incluir',
  templateUrl: './incluir.component.html',
  styleUrls: ['./incluir.component.scss']
})
export class IncluirComponent implements OnInit {

  atividadeForm: FormGroup;
  title = 'Inserir';
  constructor(private fb: FormBuilder, private _router: Router, private atividadeService : AtividadeService) { 

    this.atividadeForm = this.fb.group({
      id: [0],
      nome: ['', [Validators.required]],
      datarealizada: ['',[Validators.required]],
      datafim: ['', [Validators.required]],
      descricao: ['', [Validators.required]],
     importante: ['']
    })
  }

  ngOnInit(): void {
  
  
  }
  salvar(fg :FormGroup) {
    if(fg.value.importante==true){
      fg.value.importante=1;
    }else {
      fg.value.importante=0;
    }
    this.atividadeService.setAtividades(fg.value).subscribe(
      (res: any) => {
        fg.patchValue({id: res.id});
        this._router.navigate(['/atividade']);
      }
    );
  }

  cancel() {
    this._router.navigate(['/atividade']);
  }
  get nome(){ return this.atividadeForm.get('nome');}
  get dataRe(){ return this.atividadeForm.get('datarealizada');}
  get dataFim(){ return this.atividadeForm.get('dataFim');}
  get descricao(){ return this.atividadeForm.get('descricao');}
  get prioridade(){ return this.atividadeForm.get('importante');}

}
