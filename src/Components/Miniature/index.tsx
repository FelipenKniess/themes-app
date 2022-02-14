import React from 'react';
import { Container } from './styles';
import { useTheme } from '../../hooks/theme';

type MinatureProps = {
  palette: PaletteData
}

type PaletteData = {
  id: string,
  name: string,
  backgroundColor: string,
  primaryTextColor: string,
  secondaryTextColor: string,
  accentColor: string
}

const Miniature = ({ palette }:MinatureProps) => {
  const { theme, updateTheme } = useTheme();

  const handleSelectTheme = (themeSelect:PaletteData) => {
    updateTheme({
      id: themeSelect.id,
      name: themeSelect.name,
      backgroundColor: themeSelect.backgroundColor,
      primaryColor: themeSelect.primaryTextColor,
      secondaryColor: themeSelect.secondaryTextColor,
      accentColor: themeSelect.accentColor,
    });
  };
  return (
    <Container palette={palette}>
      <div className="top">
        <span>Background</span>
      </div>
      <div className="content">
        <div>
          <span>
            Name:
            {' '}
            <strong>{palette.name}</strong>
          </span>
          <span>
            Primary color:
            {' '}
            <strong>
              {palette.primaryTextColor}
            </strong>
          </span>
          <span>
            Secondary color:
            {' '}
            <strong>{palette.secondaryTextColor}</strong>
          </span>
          <span>
            <button type="button" disabled>Accent color</button>
          </span>
        </div>
      </div>
      {palette.id === theme.id && (
        <span className="theme-selected">Theme selected</span>
      )}
      <div className="footer">
        <button type="button" className="select" onClick={() => handleSelectTheme(palette)}>Select</button>
      </div>
    </Container>
  );
};

export default Miniature;
