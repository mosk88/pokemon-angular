export interface IListPokemons   {
     pokedex_id: number;
  generation: number;
  category: string;
  name: {
    fr: string;
    en: string;
    jp: string;
  };
  sprites: {
    regular: string;
    shiny: string | null;
    gmax: string | null;
  };
  types: string[] | null;
  talents: string[] | null;
  stats: any | null;
  resistances: any | null;
  evolution: any | null;
  height: string | null;
  weight: string | null;
  egg_groups: string[] | null;
  sexe: any | null;
  catch_rate: number | null;
  level_100: number | null;
  formes: any | null;
    
}