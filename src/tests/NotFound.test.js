import React from 'react';
import { screen } from '@testing-library/react';
import { act } from 'react-dom/test-utils';
import App from '../App';
import renderWithRouter from './RenderWithoutRouter';
import { NotFound } from '../pages';

describe('requisito numero 4', () => {
  test('A página contém um heading h2 com o texto Page requested not found', () => {
    const { history } = renderWithRouter(<App />);

    act(() => {
      history.push('/caminho');
    });

    const notFound = screen.getByRole('heading', { name: 'Page requested not found' });
    expect(notFound).toBeInTheDocument();
  });

  test('A página mostra uma imagem especifica', () => {
    renderWithRouter(<NotFound />);
    const image = screen.getByAltText('Pikachu crying because the page requested was not found');

    expect(image).toHaveAttribute('src', 'https://media.giphy.com/media/kNSeTs31XBZ3G/giphy.gif');
  });
});
