export interface CommandeDto {
  id: number;
  dateVente: Date;
  total: number;
  nomClient: string;
  emailClient: string;
  etatCommande: string;
}