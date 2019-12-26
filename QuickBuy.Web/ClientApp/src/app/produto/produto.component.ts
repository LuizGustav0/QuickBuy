import {Component} from "@angular/core"

@Component({
  selector: "app-produto",
  template: "<html><body>{{obterNome()}}</body></html>"
})
export class ProdutoComponent { //Nome das classes começando com maíusculo por conta da convenção PascalCase
  public nome: string;
  public liberoParaVenda: boolean;

  /* camelCase para variáveis, atributos e nomes das funções */
  public obterNome(): string{
      return "Samsung";
    }

}
