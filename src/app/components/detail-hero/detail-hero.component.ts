import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeroModel } from 'src/app/service/hero.model';
import { HeroesService } from 'src/app/service/heroes.service';
import { async } from '@angular/core/testing';

@Component({
  selector: 'app-detail-hero',
  templateUrl: './detail-hero.component.html'
})
export class DetailHeroComponent implements OnInit {

  hero: HeroModel;


  constructor(private activateRoute: ActivatedRoute, private heroesService: HeroesService) {
    //recibir los parametros
    this.activateRoute.params.subscribe( async data => {
      this.heroesService.getHero(await data.id).subscribe(heroService => {
        this.hero = heroService;
      });
    });

  }

  ngOnInit() {

  }

}
