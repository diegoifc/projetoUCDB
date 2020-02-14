import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AtividadeService {

  constructor(private http: HttpClient) { }

  getAtividades(){
      return this.http.get(environment.apiBaseURI+'/Atividade');
  }

  setAtividades(formData: any){
      return this.http.post(environment.apiBaseURI+'/Atividade', formData);
  }

  putAtividades(formData: any){
    return this.http.put(environment.apiBaseURI + '/Atividade/' + formData.id, formData);
  }

  deleteAtividade(id: any){
    return this.http.delete(environment.apiBaseURI+ '/Atividade/' +id);
  }
}
