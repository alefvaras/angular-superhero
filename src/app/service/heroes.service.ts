import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { stringify } from 'querystring';
import { HeroesModel, Result } from './heroes.model';
import { HeroModel } from './hero.model';


@Injectable({
  providedIn: 'root'
})
export class HeroesService {
  private _apiKey = '1042995269229450';
  private _baseUrl = 'https://superheroapi.com';
  constructor(private httpClient: HttpClient) { }

  serachHeroes(search: string){
    const url = `${this._baseUrl}/api.php/${this._apiKey}/search/${search}`;
    return this.httpClient.get<HeroesModel>(url);
  }


getHero(id: string){
  const url = `${this._baseUrl}/api.php/${this._apiKey}/${id}`;
  return this.httpClient.get<HeroModel>(url);
}


}
