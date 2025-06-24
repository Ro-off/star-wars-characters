import { defineStore } from 'pinia';
import { reactive, ref, watch } from 'vue';
import { useCharactersService } from '../services/CharactersService';

export type Character = {
  name: string;
  height: string;
  mass: string;
  hair_color: string;
  skin_color: string;
  eye_color: string;
  birth_year: string;
  gender: string;
  homeworld: string;
  films: string[];
  species: string[];
  vehicles: string[];
  starships: string[];
  created: string;
  edited: string;
  url: string;
};

type FilteredCharacters = { value: Character[]; isLoading: boolean; filter: string };
const characterStore = useCharactersService();

export const useCharacterStore = defineStore('storeId', {
  state: () => {
    const currentCharacter = reactive({
      isLoading: false,
      getAllCharacterData: async (id: string) => {
        currentCharacter.isLoading = true;
        return await characterStore.getSingle(id).then((character) => {
          currentCharacter.isLoading = false;
          return character;
        });
      },
    });

    const filteredCharacters = reactive<FilteredCharacters>({
      value: [],
      isLoading: false,
      filter: '',
    });

    const fetchFilteredCharacters = async () => {
      filteredCharacters.isLoading = true;
      filteredCharacters.value = await characterStore.getFiltered(filteredCharacters.filter);
      filteredCharacters.isLoading = false;
    };

    watch(() => filteredCharacters.filter, fetchFilteredCharacters, { immediate: true });

    return {
      filteredCharacters,
      currentCharacter,
    };
  },
});
