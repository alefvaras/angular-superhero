import { Component, OnInit, HostListener } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html'
})
export class NavbarComponent implements OnInit {
  hero: string;

  constructor(private router: Router) { }

  ngOnInit() {

  }

  searchHero(hero: string): void {

    this.hero = hero;
    this.router.navigate(['/search', hero]);

  }

}
