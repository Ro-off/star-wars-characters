import { defineStore } from "pinia";
import { ref, watch } from "vue";
import { useCharactersService } from "../services/CharactersService";

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

const { getFiltered } = useCharactersService();

// const allCharacters
export const useCharacterStore = defineStore("storeId", {
  state: () => {
    const filteredCharacters = ref<Character[]>([]);
    const filter = ref("");
    const isLoading = ref(false);

    const fetchFilteredCharacters = async () => {
      isLoading.value = true;
      filteredCharacters.value = await getFiltered(filter.value);
      isLoading.value = false;
    };

    watch(filter, fetchFilteredCharacters, { immediate: true });

    return {
      filter,
      isLoading,
      filteredCharacters,
    };
  },
});
