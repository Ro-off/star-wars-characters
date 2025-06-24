import type { Character } from '../stores/CharactersStore';

export function useCharactersService() {
  const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

  const getAll = async () =>
    fetch('https://swapi.info/api/people')
      .then((res) => res.json())
      .then((data) => data ?? [])
      .catch((error) => console.error(error)); //todo: add normal error handling

  const getFiltered = async (filter: string): Promise<Character[]> =>
    fetch('https://swapi.info/api/people') //todo: url to const
      .then((res) => res.json())
      .then(async (data) => {
        await delay(1500);
        return data;
      })
      .then(
        (data) =>
          (data.filter((character: Character) =>
            character.name.toLowerCase().includes(filter),
          ) as Character[]) ?? [],
      )
      .catch((error) => {
        console.error(error); //todo: add normal error handling
        return [];
      });

  const getSingle = async (id: string) => {
    return fetch('https://swapi.info/api/people/' + id) //todo: fix url construction
      .then((res) => res.json())
      .then(async (data: Character) => {
        await delay(1500);
        return data;
      })
      .catch((error) => {
        console.error(error);
        return null;
      }); //todo: add normal error handling
  };

  return {
    getAll,
    getFiltered,
    getSingle,
  };
}
