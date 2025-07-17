import type { Meta, StoryObj } from '@storybook/vue3-vite';
import CharacterCard from './CharacterCard.vue';

const meta: Meta<typeof CharacterCard> = {
  title: 'CharacterCard',
  component: CharacterCard,
  tags: ['autodocs'],
  argTypes: {
    character: {
      control: 'object',
      description: 'The character to display',
      table: {
        category: 'Character',
        type: {
          summary: 'Character',
        },
      },
    },
  },
};

export default meta;

type Story = StoryObj<typeof CharacterCard>;

export const Default: Story = {
  args: {
    character: {
      name: 'Luke Skywalker',
      height: '172',
      mass: '77',
      birth_year: '19BBY',
      gender: 'male',
      url: 'https://swapi.dev/api/people/1/',
      hair_color: 'blond',
      skin_color: 'fair',
      eye_color: 'blue',
      films: [
        'https://swapi.dev/api/films/2/',
        'https://swapi.dev/api/films/6/',
        'https://swapi.dev/api/films/3/',
        'https://swapi.dev/api/films/1/',
        'https://swapi.dev/api/films/7/',
      ],
      vehicles: ['https://swapi.dev/api/vehicles/14/', 'https://swapi.dev/api/vehicles/30/'],
      starships: ['https://swapi.dev/api/starships/12/', 'https://swapi.dev/api/starships/22/'],
      species: ['https://swapi.dev/api/species/1/'],
      homeworld: 'https://swapi.dev/api/planets/1/',

      created: '2014-12-10T15:33:31.504000Z',
      edited: '2014-12-20T21:23:49.561000Z',
    },
  },
};
