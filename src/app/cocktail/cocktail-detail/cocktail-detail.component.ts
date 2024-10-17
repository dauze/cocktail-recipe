import { ChangeDetectionStrategy, Component, OnInit, Signal, inject } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { Cocktail } from '../cocktail';
import { CocktailService } from '../cocktail.service';
import { NgClass, NgFor, NgIf, NgOptimizedImage } from '@angular/common';
import { FavoriteCocktailComponent } from '../favorite-cocktail/favorite-cocktail.component';

@Component({
  selector: 'app-cocktail-detail',
  standalone: true,
  imports: [NgOptimizedImage, NgClass, NgIf, NgFor, RouterModule, FavoriteCocktailComponent],
  templateUrl: './cocktail-detail.component.html',
  styleUrl: './cocktail-detail.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CocktailDetailComponent implements OnInit {
  private route = inject(ActivatedRoute);
  private cocktailService = inject(CocktailService);

  readonly cocktail:Signal<Cocktail | undefined> = this.cocktailService.cocktail;

  ngOnInit(): void {
    this.cocktailService.cocktailSelected(this.route.snapshot.paramMap.get('id') ?? '');
  }
}
