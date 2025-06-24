import type { Character } from "../stores/CharactersStore";

export function useCharactersService() {
  const getAll = async () =>
    fetch("https://swapi.info/api/people")
      .then((res) => res.json())
      .then((data) => data ?? [])
      .catch((error) => console.error(error)); //todo: add normal error handling

  const delay = (ms: number) =>
    new Promise((resolve) => setTimeout(resolve, ms));

  const getFiltered = async (filter: string): Promise<Character[]> =>
    fetch("https://swapi.info/api/people") //todo: url to const
      .then((res) => res.json())
      .then(async (data) => {
        await delay(1500);
        return data;
      })
      .then(
        (data) =>
          (data.filter((character: Character) =>
            character.name.toLowerCase().includes(filter)
          ) as Character[]) ?? []
      )
      .catch((error) => {
        console.error(error); //todo: add normal error handling
        return [];
      });

  return {
    getAll,
    getFiltered,
  };
}
