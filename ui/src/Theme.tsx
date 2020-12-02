/* Provide access to various thematic elements. */

class Theme {
  color: Record<string, string>;
  chartWidth: number;
  chartHeight: number;
  constructor() {
    this.color = {};
    this.color.green = '#376551';
    this.color.purple = '#7C64E8';
    this.color.lightGreen = '#4DE8A5';
    this.color.red = '#E84F35';
    this.color.yellow = '#E8D541';
    this.chartWidth = 325;
    this.chartHeight = 100;
  }
}

const theme = new Theme();

enum ChartType {
  TrendLineSpark = 'TrendLineSpark',
  BarSpark = 'BarSpark',
  PieSpark = 'PieSpark',
  DemographicPieSpark = 'DemographicPieSpark',
  LabeledBarSpark = 'LabeledBarSpark'
}

export { theme, ChartType };
