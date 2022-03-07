import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from '../../environments/environment';

interface Porcentagem {
    name: string;
    value: number;
}

@Injectable ( {
    providedIn: 'root'
} )
export class CarteiraService {

  private url = environment.services.backend.baseUrl + "/carteira/";

  constructor(private http: HttpClient) {
  }

 private data: Porcentagem[] = [
        {
          "name": "Renda fixa",
          "value": 5000
        },
        {
          "name": "Renda variavel",
          "value": 2000
        },
        {
          "name": "outros",
          "value": 3000
        },

      ];

      get porcentagemData() {
          return this.data;
      }

      resetar() {
          this.data = [
          {
            "name": "Renda fixa",
            "value": 0
          },
          {
            "name": "Renda variavel",
            "value": 0
          },
          {
            "name": "outros",
            "value": 0
          },

        ];
      }

}
