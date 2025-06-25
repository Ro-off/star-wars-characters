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

  const getSingle = async <T>(url: string) => {
    return fetch(url) //todo: fix url construction
      .then((res) => res.json())
      .then(async (data: T) => {
        await delay(1500);

        return data;
      })
      .catch((error) => {
        console.error(error);
        return null;
      }); //todo: add normal error handling
  };

  const getAllCharacterData = async (id: string) => {
    const url = 'https://swapi.info/api/people/' + id;
    const character = await getSingle<Character>(url);

    return character
      ? {
          ...character,
          films: await Promise.all(
            (character.films ?? []).map(async (url: string | undefined) =>
              url ? await getSingle<{ title: string }>(url).then((data) => data?.title) : undefined,
            ),
          ),
          vehicles: await Promise.all(
            (character.vehicles ?? []).map(async (url: string | undefined) =>
              url ? await getSingle<{ name: string }>(url).then((data) => data?.name) : undefined,
            ),
          ),
          starships: await Promise.all(
            (character.starships ?? []).map(async (url: string | undefined) =>
              url ? await getSingle<{ name: string }>(url).then((data) => data?.name) : undefined,
            ),
          ),
          species: await Promise.all(
            (character.species ?? []).map(async (url: string | undefined) =>
              url ? await getSingle<{ name: string }>(url).then((data) => data?.name) : undefined,
            ),
          ),
          homeworld: character.homeworld
            ? await getSingle<{ name: string }>(character.homeworld).then((data) => data?.name)
            : undefined,
        }
      : character;
  };

  // const getTitle = async (url: string) => {
  //   console.log('🚀 ~ getTitle ~ url:', url);
  //   const data = await fetch(url).then((res) => res.json());
  //   console.log('🚀 ~ getTitle ~ data:', data);
  //   return data.title;
  // };

  return {
    getAll,
    getFiltered,
    getAllCharacterData,
  };
}
