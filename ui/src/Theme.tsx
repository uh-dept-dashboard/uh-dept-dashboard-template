/* Provide access to various thematic elements. */

class Theme {
  color: Record<string, string>;
  constructor() {
    this.color = {};
    this.color.green = '#376551';
    this.color.purple = '#7C64E8';
    this.color.lightGreen = '#4DE8A5';
    this.color.red = '#E84F35';
    this.color.yellow = '#E8D541';
  }
}

const theme = new Theme();

enum Units {
  Dollars = '$',
  Percent = '%'
}

export { theme, Units };
