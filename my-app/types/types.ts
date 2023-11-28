export interface Root {
  IdConteudo: number;
  NomeTipoConteudo: string;
  TituloConteudo: string;
  BreveDescricao: string;
  ConteudoDescricao: string;
  NomeCategoria: any;
  Arquivos: any[];
  ConteudoDependente: ConteudoDependente[];
  LinkConteudo: string;
  DataPublicacao: string;
  IsDestaqueConteudo: boolean;
  ConteudoHtmlEditor: string;
  IsPossuiLink: boolean;
  IsLinkPorExtenso: boolean;
  IdEmpresa: number;
}
export interface ConteudoDependente {
  IdConteudo: number;
  NomeTipoConteudo: string;
  TituloConteudo: string;
  BreveDescricao: string;
  ConteudoDescricao: string;
  NomeCategoria: string;
  Arquivos: any;
  ConteudoDependente: any;
  LinkConteudo: string;
  DataPublicacao: string;
  IsDestaqueConteudo: boolean;
  ConteudoHtmlEditor: string;
  IsPossuiLink: boolean;
  IsLinkPorExtenso: boolean;
  IdEmpresa: number;
}
