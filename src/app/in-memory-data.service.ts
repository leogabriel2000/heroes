import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Hero } from './hero';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const heroes = [
      { id: 11, name: 'Dr Nice',country: 'Cavite' },
      { id: 12, name: 'Narco',country: 'Bulacan'  },
      { id: 13, name: 'Bombasto',country: 'Tarlac'  },
      { id: 14, name: 'Celeritas',country: 'Cavite'  },
      { id: 15, name: 'Magneta',country: 'Cebu'  },
      { id: 16, name: 'RubberMan',country: 'Davao'  },
      { id: 17, name: 'Dynama',country: 'Ilocos'  },
      { id: 18, name: 'Dr IQ',country: 'Baguio'  },
      { id: 19, name: 'Magma',country: 'Pangasinan'  },
      { id: 20, name: 'Tornado',country: 'Metro Manila' }
    ];
    return {heroes};
  }

  // Overrides the genId method to ensure that a hero always has an id.
  // If the heroes array is empty,
  // the method below returns the initial number (11).
  // if the heroes array is not empty, the method below returns the highest
  // hero id + 1.
  genId(heroes: Hero[]): number {
    return heroes.length > 0 ? Math.max(...heroes.map(hero => hero.id)) + 1 : 11;
  }
}
