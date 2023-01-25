import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from '../App';
import renderWithRouter from './RenderWithoutRouter';

const moreDetails = 'More details';

describe('requisito numero 6', () => {
  test('Teste se é renderizado um card com as informações de determinado Pokémon', () => {
    renderWithRouter(<App />);

    const link1 = screen.getByRole('link', { name: 'Home' });
    userEvent.click(link1);
    const moreDet = screen.getByText(moreDetails);
    userEvent.click(moreDet);
    const pokename = screen.getByText('Pikachu');
    const poketype = screen.getByText('Electric');
    const pokeweight = screen.getByText('Average weight: 6.0 kg');
    const image = screen.getByAltText('Pikachu sprite');

    expect(image).toHaveAttribute('src', 'https://archives.bulbagarden.net/media/upload/b/b2/Spr_5b_025_m.png');
    expect(pokeweight).toBeInTheDocument();
    expect(pokename).toBeInTheDocument();
    expect(poketype).toBeInTheDocument();
  });

  test('Se o card do Pokémon indicado na Pokédex contém um link de navegação para exibir detalhes deste Pokémon. O link deve possuir a URL /pokemon/<id>, onde <id> é o id do Pokémon exibido', () => {
    const { history } = renderWithRouter(<App />);

    const details = screen.getByRole('link', { name: 'More details' });
    expect(details).toBeInTheDocument();
    userEvent.click(details);
    const { pathname } = history.location;
    expect(pathname).toBe('/pokemon/25');
  });

  test('Se existe um ícone de estrela nos Pokémon favoritados', () => {
    renderWithRouter(<App />);

    const link1 = screen.getByRole('link', { name: 'Home' });
    userEvent.click(link1);
    const moreDet = screen.getByText(moreDetails);
    userEvent.click(moreDet);
    const favoritado = screen.getByText('Pokémon favoritado?');
    userEvent.click(favoritado);
    const image = screen.getByAltText('Pikachu is marked as favorite');

    expect(image).toHaveAttribute('src', '/star-icon.svg');
    expect(image).toBeInTheDocument();
  });
});
