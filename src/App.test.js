import { render, screen } from '@testing-library/react';
import CharacterSheet from './CharacterSheet';

test('renders learn react link', () => {
    render(<CharacterSheet />);
    const linkElement = screen.getByText(/learn react/i);
    expect(linkElement).toBeInTheDocument();
});
