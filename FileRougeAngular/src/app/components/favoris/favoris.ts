import { Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-favoris',
  imports: [],
  templateUrl: './favoris.html',
  styleUrl: './favoris.css',
})
export class Favoris implements OnInit{
  constructor(private router: Router){}

favorites: string[]= [];
ngOnInit() {
  this.favorites = JSON.parse(
    localStorage.getItem('favorites') || '[]'
  );
}

getRecipeImage(recipe: string): string {
  const images: { [key: string]: string } = {
    'Tiramisu Recette Original' : 'assets/images/tiramisu.webp',
    'Salade composée': 'assets/images/p4.web.webp',
    'Cassoulet' : 'assets/images/p5.jpeg',
    'Epinard Tomate Cerise' : 'assets/images/p6.jpeg',
    'Poisson Sauce Curry' : 'assets/images/p7.webp',
    'Salade De Thon' : 'assets/images/p8.png',
    'Gratin De Pomme De Terre' : 'assets/images/p9.jpeg',
    'Salade De Pêches' : 'assets/images/p10.jpeg',
    'Chicken Potetoes' : 'assets/images/p14.jpeg',
    'Salade Turc' : 'assets/images/p11.jpeg',
    'Pancake' : 'assets/images/p12.jpeg',
    'Pizza' : 'assets/images/p13.png'

  };
  return images[recipe] || '';
}
}
