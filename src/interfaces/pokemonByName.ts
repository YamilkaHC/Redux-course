export interface PokemonByName {
    abilities?: (AbilitiesEntity)[] | any;
    base_experience: number;
    forms?: (AbilityOrFormsEntityOrVersionOrItemOrMoveLearnMethodOrVersionGroupOrMoveOrStatOrTypeOrSpecies)[] | null;
    game_indices?: (GameIndicesEntity)[] | null;
    height: number;
    held_items?: (HeldItemsEntity)[] | null;
    id: number;
    is_default: boolean;
    location_area_encounters: string;
    moves?: (MovesEntity)[] | null;
    name: string;
    order: number;
    past_types?: (null)[] | null;
    species: AbilityOrFormsEntityOrVersionOrItemOrMoveLearnMethodOrVersionGroupOrMoveOrStatOrTypeOrSpecies;
    sprites: Sprites;
    stats?: (any)[] | null;
    types?: (any)[] | null;
    weight: number;
    data?: null | string
  }
  export interface AbilitiesEntity {
    ability: AbilityOrFormsEntityOrVersionOrItemOrMoveLearnMethodOrVersionGroupOrMoveOrStatOrTypeOrSpecies;
    is_hidden: boolean;
    slot: number;
  }
  export interface AbilityOrFormsEntityOrVersionOrItemOrMoveLearnMethodOrVersionGroupOrMoveOrStatOrTypeOrSpecies {
    name: string;
    url: string;
  }
  export interface GameIndicesEntity {
    game_index: number;
    version: AbilityOrFormsEntityOrVersionOrItemOrMoveLearnMethodOrVersionGroupOrMoveOrStatOrTypeOrSpecies;
  }
  export interface HeldItemsEntity {
    item: AbilityOrFormsEntityOrVersionOrItemOrMoveLearnMethodOrVersionGroupOrMoveOrStatOrTypeOrSpecies;
    version_details?: (VersionDetailsEntity)[] | null;
  }
  export interface VersionDetailsEntity {
    rarity: number;
    version: AbilityOrFormsEntityOrVersionOrItemOrMoveLearnMethodOrVersionGroupOrMoveOrStatOrTypeOrSpecies;
  }
  export interface MovesEntity {
    move: AbilityOrFormsEntityOrVersionOrItemOrMoveLearnMethodOrVersionGroupOrMoveOrStatOrTypeOrSpecies;
    version_group_details?: (VersionGroupDetailsEntity)[] | null;
  }
  export interface VersionGroupDetailsEntity {
    level_learned_at: number;
    move_learn_method: AbilityOrFormsEntityOrVersionOrItemOrMoveLearnMethodOrVersionGroupOrMoveOrStatOrTypeOrSpecies;
    version_group: AbilityOrFormsEntityOrVersionOrItemOrMoveLearnMethodOrVersionGroupOrMoveOrStatOrTypeOrSpecies;
  }
  export interface Sprites {
    back_default: string;
    back_female?: null;
    back_shiny: string;
    back_shiny_female?: null;
    front_default: string;
    front_female?: null;
    front_shiny: string;
    front_shiny_female?: null;
    other: any;
    versions: any;
  }