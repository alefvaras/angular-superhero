import { Component, OnInit, OnChanges, Input, SimpleChanges } from '@angular/core';
import { HeroesService } from 'src/app/service/heroes.service';
import { Result } from 'src/app/service/heroes.model';
import { Router, ActivatedRoute } from '@angular/router';




@Component({
  selector: 'app-heroes',
  templateUrl: './search.heroes.component.html',
  styles: []
})
export class SearchHeroesComponent implements OnInit  {

  heroResult: Result[];
  @Input() hero: string;
  show: boolean;

  constructor(private heroesService: HeroesService, private router: Router, private activateRoute: ActivatedRoute) {
    this.activateRoute.params.subscribe(data => {
      this.hero = data.hero;
      this.ngOnInit();
    });

  }

  ngOnInit() {

  

    this.heroesService.serachHeroes(this.hero).subscribe(result => {
      if (result.response === 'success') {

        this.heroResult = result.results;

      } else {
        this.show = true;
      }
    });


  }



  //navegacion
  showHero(id: string): void {
    this.router.navigate(['/detail', id]);

  }



}
