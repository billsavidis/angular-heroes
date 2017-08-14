import { Injectable } from '@angular/core';

import { Hero } from './hero';
import { HEROES } from './mock-heroes';

@Injectable()
export class HeroService {
  getHeroes(): Promise<Hero[]> {
    return Promise.resolve(HEROES);
  }

  getHeroesWithDelay(): Promise<Hero[]> {
    return new Promise(resolve => setTimeout(() => resolve(this.getHeroes()), Math.random()*4000));
  }

  getHero(id: number): Promise<Hero> {
  return this.getHeroes().then(heroes => heroes.find(hero => hero.id === id));
}
}
