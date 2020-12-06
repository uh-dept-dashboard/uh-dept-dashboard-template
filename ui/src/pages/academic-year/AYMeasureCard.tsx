import React from 'react';
import {Card, Statistic, Grid, Icon} from 'semantic-ui-react';
import './AYMeasureCards.css';
import {ChartType } from '../../Theme';
import {TrendLineSpark, BarSpark, DemographicPieSpark, LabeledBarSpark, PieSpark} from '../../components/spark/SparkCharts';
import {UnitType} from "../../DataTypes";
import Drilldown from "./Drilldown";

interface SparkDataSet {
  chartType: ChartType,
  chartTitle: string,
  chartData: { value: number }[]
}

interface AYMeasureCardProps {
  latestYear: number,
  name: string,
  description: string,
  year: number,
  value: number,
  priorDelta?: number,
  nextDelta?: number,
  sparks: Array<SparkDataSet>,
  unit?: UnitType,
  drilldowns?: any[]
}

const formatNumber = (num: number) => {
  // Numbers less than 1,000 are just what they are.
  if (num < 1000) {
    return `${num}`;
  }
  // Numbers between 1,000 and 1,000,000 are formatted with 3 digit precision and a 'K'.
  if (num < 1000000) {
    return `${(num / 1000).toPrecision(3)}K`;
  }
  // Numbers more than 1M are formatted with an M.
  return `${(num / 1000000).toPrecision(3)}M`;
}

const AYMeasureCard: React.FunctionComponent<AYMeasureCardProps> = ({name, description, year, value, priorDelta, nextDelta, unit, sparks, drilldowns}) => {
  let formattedValue = formatNumber(value);
  if (unit)
    if (unit === UnitType.Percent) {
      formattedValue = `${formattedValue}%`;
    } else if (unit === UnitType.Dollars) {
      formattedValue = `$${formattedValue}`;
    }
  const formattedPriorDelta = (priorDelta && priorDelta < 0) ? `${priorDelta}` : `+${priorDelta}`;
  const formattedNextDelta = (nextDelta && nextDelta < 0) ? `${nextDelta}` : `+${nextDelta}`;
  return (
    <Card raised={true}>
      <Card.Content>
        <Grid>
          <Grid.Column width={4} verticalAlign="middle" textAlign="right"
                       style={{paddingLeft: '0px', paddingRight: '35px'}}>
            {(year > 2015) ? (<div><Icon name="arrow left"/> {formattedPriorDelta}% {year - 1} </div>) : ''}
          </Grid.Column>
          <Grid.Column style={{paddingLeft: 0, paddingRight: 0}} width={8}>
            <div className="measureHeader" style={{textAlign: 'center'}}>
              <Statistic>
                <Statistic.Label>{name}</Statistic.Label>
                <Statistic.Value>{formattedValue}</Statistic.Value>
              </Statistic>
            </div>
          </Grid.Column>
          <Grid.Column width={4} verticalAlign="middle" textAlign="left"
                       style={{paddingLeft: '35px', paddingRight: '0px'}}>
            {(year < 2019) ? (<div> {formattedNextDelta}% <Icon name="arrow right"/> {year + 1} </div>) : ''}
          </Grid.Column>
        </Grid>
        <Card.Description style={{paddingTop: '10px', minHeight: '75px'}}>{description}</Card.Description>
        { sparks ? sparks.map((data, index) => <div key={index} style={{paddingTop: '10px'}}>
          <Card.Description textAlign='center'>{data.chartTitle}</Card.Description>
          { (data.chartType === ChartType.TrendLineSpark) ? <TrendLineSpark data={data.chartData} /> : ''}
          { (data.chartType === ChartType.BarSpark) ? <BarSpark data={data.chartData} /> : ''}
          { (data.chartType === ChartType.PieSpark) ? <div style={{paddingTop: '10px'}}><PieSpark data={data.chartData} /></div> : ''}
          { (data.chartType === ChartType.DemographicPieSpark) ? <div style={{paddingTop: '10px'}}><DemographicPieSpark data={data.chartData} /></div> : ''}
          { (data.chartType === ChartType.LabeledBarSpark) ? <div style={{paddingTop: '10px'}}><LabeledBarSpark data={data.chartData} /></div> : ''}
        </div>) : ''}

        { drilldowns && drilldowns[0]? <Card.Description textAlign='center' style={{paddingTop: '20px', paddingBottom: '20px'}}>Drilldowns</Card.Description> : ''}
        { drilldowns && drilldowns[0]? drilldowns.map((entry) => <Drilldown name={entry.name} description={entry.description} />) : '' }

      </Card.Content>

    </Card>
  )
}

export type { SparkDataSet, AYMeasureCardProps };
export default AYMeasureCard;
