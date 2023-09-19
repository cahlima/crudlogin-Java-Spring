import { Produtos } from "./produtos.model";

export class Pedidos {
  constructor(  
    public id?: number ,
    public data?: string ,
    public quantidade?: string,
    public produtos?: Produtos,
    public cpf?: string,
    public itens?: string
  ) {}
}
