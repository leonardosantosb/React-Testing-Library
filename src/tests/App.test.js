import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { act } from 'react-dom/test-utils';
import App from '../App';
import renderWithRouter from './RenderWithoutRouter';

describe('requisito numero 1', () => {
  test('O topo da aplicação contém um conjunto fixo de links de navegação', () => {
    renderWithRouter(<App />);
    const link1 = screen.getByRole('link', { name: 'Home' });
    const link2 = screen.getByRole('link', { name: 'About' });
    const link3 = screen.getByRole('link', { name: 'Favorite Pokémon' });

    expect(link1).toBeInTheDocument();
    expect(link2).toBeInTheDocument();
    expect(link3).toBeInTheDocument();
  });

  test('A aplicação é redirecionada para a página inicial, na URL / ao clicar no link Home da barra de navegação', () => {
    const { history } = renderWithRouter(<App />);
    const link1 = screen.getByRole('link', { name: 'Home' });
    userEvent.click(link1);
    const { pathname } = history.location;
    expect(pathname).toBe('/');
  });

  test('A aplicação é redirecionada para a página inicial, na URL / ao clicar no link Home da barra de navegação', () => {
    const { history } = renderWithRouter(<App />);
    const link2 = screen.getByRole('link', { name: 'About' });
    userEvent.click(link2);
    const { pathname } = history.location;
    expect(pathname).toBe('/about');
  });

  test('A aplicação é redirecionada para a página de Pokémon Favoritados, na URL /favorites, ao clicar no link Favorite Pokémon da barra de navegação;', () => {
    const { history } = renderWithRouter(<App />);
    const link3 = screen.getByRole('link', { name: 'Favorite Pokémon' });
    userEvent.click(link3);
    const { pathname } = history.location;
    expect(pathname).toBe('/favorites');
  });

  test('A aplicação é redirecionada para a página Not Found ao entrar em uma URL desconhecida.', () => {
    const { history } = renderWithRouter(<App />);

    act(() => {
      history.push('/caminho');
    });

    const notFound = screen.getByText('Page requested not found');
    expect(notFound).toBeInTheDocument();
  });
});
