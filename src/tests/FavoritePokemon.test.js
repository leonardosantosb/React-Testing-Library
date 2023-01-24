import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { FavoritePokemon } from '../pages';
import renderWithRouter from './RenderWithoutRouter';
import App from '../App';

describe('requisito numero 3', () => {
  test('É exibida na tela a mensagem No favorite pokemon found, caso a pessoa não tenha Pokémon favoritos', () => {
    renderWithRouter(<FavoritePokemon />);
    const favoritePoke = screen.getByText('No favorite Pokémon found');

    expect(favoritePoke).toBeInTheDocument();
  });

  test('Teste se apenas são exibidos os Pokémon favoritados', () => {
    renderWithRouter(<App />);
    const link1 = screen.getByRole('link', { name: 'Home' });
    userEvent.click(link1);
    const moreDetails = screen.getByText('More details');
    userEvent.click(moreDetails);
    const favoritado = screen.getByText('Pokémon favoritado?');
    userEvent.click(favoritado);
    const link3 = screen.getByRole('link', { name: 'Favorite Pokémon' });
    userEvent.click(link3);
    const listapoke = screen.getByText('Pikachu');

    expect(listapoke).toBeInTheDocument();
  });
});
