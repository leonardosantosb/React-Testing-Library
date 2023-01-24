import React from 'react';
import { screen } from '@testing-library/react';
import renderWithRouter from './RenderWithoutRouter';
import { About } from '../pages';

describe('requisito numero 2', () => {
  test('A página contém as informações sobre a Pokédex e se sáo 2 paragrafos', () => {
    renderWithRouter(<About />);
    const infoPoke1 = screen.getByText('This application simulates a Pokédex, a digital encyclopedia containing all Pokémon');
    const infopoke2 = screen.getByText('One can filter Pokémon by type, and see more details for each one of them');

    expect(infoPoke1).toBeInTheDocument();
    expect(infopoke2).toBeInTheDocument();
  });

  test('A página contém um heading h2 com o texto About Pokédex', () => {
    renderWithRouter(<About />);
    const heading = screen.getByRole('heading', { name: 'About Pokédex' });

    expect(heading).toBeInTheDocument();
  });

  test('A página contém uma imagem especifica de uma pokedex', () => {
    renderWithRouter(<About />);
    const image = screen.getByAltText('Pokédex');

    expect(image).toHaveAttribute('src', 'https://cdn2.bulbagarden.net/upload/thumb/8/86/Gen_I_Pok%C3%A9dex.png/800px-Gen_I_Pok%C3%A9dex.png');
  });
});
