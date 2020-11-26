import React from 'react';
import {Card, Statistic, Grid, Icon} from 'semantic-ui-react';
import './AYMeasureCards.css';
import {ChartType, Units} from '../../Theme';
import LineSpark from '../../components/spark/LineSpark';

interface SparkDataObject {
  value: number
}

interface SparkDataSet {
  chartType: ChartType,
  title: string,
  data: SparkDataObject[]
}


interface AYMeasureCardProps {
  name: string,
  description: string,
  year: number,
  value: number,
  priorDelta?: number,
  nextDelta?: number,
  // eslint-disable-next-line
  sparks?: Array<SparkDataSet>,
  unit?: Units
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

const AYMeasureCard: React.FunctionComponent<AYMeasureCardProps> = ({name, description, year, value, priorDelta, nextDelta, unit, sparks}) => {
  let formattedValue = formatNumber(value);
  if (unit)
    if (unit === Units.Percent) {
      formattedValue = `${formattedValue}%`;
    } else if (unit === Units.Dollars) {
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
        <Card.Description style={{paddingTop: '10px'}}>{description}</Card.Description>
        { sparks ? sparks.map((data, index) => <div key={index} style={{paddingTop: '10px'}}>
          <Card.Description textAlign='center'>{data.title}</Card.Description>
          <LineSpark data={data} />
        </div>) : ''}
      </Card.Content>

    </Card>
  )
}

export type { SparkDataSet, SparkDataObject, AYMeasureCardProps };
export default AYMeasureCard;
