import { Component, OnInit } from '@angular/core'; //on importe Component de '@angular/core'
import { POKEMONS } from './mock-pokemon-list';//🚨
import { Pokemon } from './pokemon';//🚨

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  //`<h1>Liste de pokemon</h1> PAS PRATIQUE CAR RISQUE DE SATURATION
  //<p>Ceci est un paragraphe</p>`

 
})
export class AppComponent implements OnInit {
  pokemons : Pokemon[] = POKEMONS; //imposition de liste 
  pokemonSelected: Pokemon|undefined;

  ngOnInit() {
    console.table(this.pokemons);
    //this.selectPokemon(this.pokemons[0]);//selection avec indice dans le tab
  }

  selectPokemon(pokemon : Pokemon){ //on fait appel aux propriétés qu'on a cree dans le fichier pokemon.ts
    //const id = +pokemonId;
    //const pokemon :Pokemon|undefined = this.pokemons.find(pokemon => pokemon.id == +pokemonId);//const index: number= +(event.target as HTMLInputElement).value //cast la balise html du dom a ou a lieu l'event //on a remplace la recherche par id avec un index
    if(pokemon){
      console.log(`Vous avez demand ce pokemon ${pokemon.name}`);
      this.pokemonSelected=pokemon;
    }else{
      console.log(`Vous avez demandé un pokemon qui n'existe pas`); 
      this.pokemonSelected = pokemon; 
    }
    //console.log(`Vous avez cliqué sur ce pokemon ${pokemon.name}`); 
    //console.log('Vous avez cliqué sur ce pokemon' + pokemonName);//ancienne methode
  }
}
