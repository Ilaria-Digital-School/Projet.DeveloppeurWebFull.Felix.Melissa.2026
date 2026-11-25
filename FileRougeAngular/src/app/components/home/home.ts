import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {

  constructor(private router: Router) { }
  searchTerm = '';
  searchText = '';
  matchesSearch(recipeName: string): boolean {
    return recipeName.toLocaleLowerCase().includes(this.searchTerm.toLocaleLowerCase());

  }
  goToRecipe() {
    this.router.navigate(['/recipe'],
      { queryParams: { id: 'tiramisu' }
      });
  }
  favorites: string[] = JSON.parse(localStorage.getItem('favorites') || '[]');

  toggleFavorite(recipeName : string ){
    if (this.favorites.includes(recipeName)) {
      this.favorites = this.favorites.filter( recipe => recipe !== recipeName);
    } else {
      this.favorites.push(recipeName);
    }
    localStorage.setItem('favorites', JSON.stringify(this.favorites));
  }
  isFavorite(recipeName : string) : boolean {
    return this.favorites.includes(recipeName);
  }
}



