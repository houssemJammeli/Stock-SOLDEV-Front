export interface ProduitDto {
  id: number
  nom: string;
  description: string;
  quantiteEnStock: number;
  prixUnitaire: number;
  categorie: string;
  fournisseurId: number;
  image: File; // correspond à IFormFile côté C#
  qte: number;
  imageUrl: string;
}