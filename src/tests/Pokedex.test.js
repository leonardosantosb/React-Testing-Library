import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from '../App';
import renderWithRouter from './RenderWithoutRouter';

describe('requisito numero 5', () => {
  test('a página contém um heading h2 com o texto Encountered Pokémon', () => {
    renderWithRouter(<App />);

    const pokedex = screen.getByRole('heading', { name: 'Encountered Pokémon' });

    expect(pokedex).toBeInTheDocument();
  });

  test('Os próximos Pokémon da lista devem ser mostrados, um a um, ao clicar sucessivamente no botão e o primeiro Pokémon da lista deve ser mostrado ao clicar no botão, se estiver no último Pokémon da lista', () => {
    renderWithRouter(<App />);
    const buttonProx = screen.getByRole('button', { name: 'Próximo Pokémon' });

    const poke0 = screen.getByText('Pikachu');
    expect(poke0).toBeInTheDocument();
    userEvent.click(buttonProx);
    const poke1 = screen.getByText('Charmander');
    expect(poke1).toBeInTheDocument();
    userEvent.click(buttonProx);
    const poke2 = screen.getByText('Caterpie');
    expect(poke2).toBeInTheDocument();
    userEvent.click(buttonProx);
    const poke3 = screen.getByText('Ekans');
    expect(poke3).toBeInTheDocument();
    userEvent.click(buttonProx);
    const poke4 = screen.getByText('Alakazam');
    expect(poke4).toBeInTheDocument();
    userEvent.click(buttonProx);
    const poke5 = screen.getByText('Mew');
    expect(poke5).toBeInTheDocument();
    userEvent.click(buttonProx);
    const poke6 = screen.getByText('Rapidash');
    expect(poke6).toBeInTheDocument();
    userEvent.click(buttonProx);
    const poke7 = screen.getByText('Snorlax');
    expect(poke7).toBeInTheDocument();
    userEvent.click(buttonProx);
    const poke8 = screen.getByText('Dragonair');
    expect(poke8).toBeInTheDocument();
    userEvent.click(buttonProx);
    const poke9 = screen.getByText('Pikachu');
    expect(poke9).toBeInTheDocument();
  });

  test('Teste se a Pokédex tem os botões de filtro', () => {
    renderWithRouter(<App />);

    const buttonType = screen.getAllByTestId('pokemon-type-button');
    const buttonAll = screen.getByRole('button', { name: 'All' });
    const buttonProx2 = screen.getByRole('button', { name: 'Próximo Pokémon' });

    expect(buttonAll).toBeInTheDocument();
    userEvent.click(buttonType[2]);
    const pokename = screen.getByText('Fire');
    const buttonSelect = screen.getByRole('button', { name: 'Fire' });
    expect(buttonAll).toBeInTheDocument();
    expect(pokename).toBeInTheDocument();
    expect(buttonSelect).toBeInTheDocument();
    userEvent.click(buttonProx2);
    const pokename1 = screen.getByText('Fire');
    expect(buttonAll).toBeInTheDocument();
    expect(pokename1).toBeInTheDocument();
  });

  test('Teste se a Pokédex contém um botão para resetar o filtro', () => {
    renderWithRouter(<App />);
    const buttonAll = screen.getByRole('button', { name: 'All' });
    const buttonFire = screen.getByRole('button', { name: 'Fire' });

    const poke0 = screen.getByText('Pikachu');
    expect(poke0).toBeInTheDocument();
    userEvent.click(buttonFire);
    const pokefire = screen.getByText('Charmander');
    expect(pokefire).toBeInTheDocument();
    userEvent.click(buttonAll);
    expect(poke0).toBeInTheDocument();
  });
});
