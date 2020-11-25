import React from 'react';

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

import { Drawing } from '../components/Canvas';
import LayoutContainer from '../layout/Layout';

interface StatisticsProps {
  drawing: Drawing;
}

function getTotalObjectsFromDrawing(drawing: Drawing) {
  return drawing?.objects?.length ?? 0;
}

function getUniqueColorsFromDrawing(drawing: Drawing) {
  const colors: string[] = [];

  drawing?.objects?.forEach((drawingObject) => {
    if (!drawingObject) return;

    const { stroke } = drawingObject;

    if (!colors.includes(stroke)) {
      colors.push(stroke);
    }
  });

  return colors.length;
}

function createData(metricName: string, metricValue: number | string) {
  return { metricName, value: metricValue };
}

function Statistics({ drawing }: StatisticsProps): React.ReactElement {
  const rows = [
    createData('Total Objects', getTotalObjectsFromDrawing(drawing)),
    createData('Number of Unique Colours', getUniqueColorsFromDrawing(drawing)),
  ];

  return (
    <LayoutContainer>
      <TableContainer component={Paper}>
        <Table aria-label='simple table'>
          <TableHead>
            <TableRow>
              <TableCell>Metric</TableCell>
              <TableCell align='right'>Value</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow key={row.metricName}>
                <TableCell component='th' scope='row'>
                  {row.metricName}
                </TableCell>
                <TableCell align='right'>{row.value}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </LayoutContainer>
  );
}

export default Statistics;
/*

angle: 0
backgroundColor: ""
fill: null
fillRule: "nonzero"
flipX: false
flipY: false
globalCompositeOperation: "source-over"
height: 71
left: 194.91
opacity: 1
originX: "left"
originY: "top"
paintFirst: "fill"
path: (39) [Array(3), Array(5), Array(5), Array(5), Array(5), Array(5), Array(5), Array(5), Array(5), Array(5), Array(5), Array(5), Array(5), Array(5), Array(5), Array(5), Array(5), Array(5), Array(5), Array(5), Array(5), Array(5), Array(5), Array(5), Array(5), Array(5), Array(5), Array(5), Array(5), Array(5), Array(5), Array(5), Array(5), Array(5), Array(5), Array(5), Array(5), Array(5), Array(3)]
scaleX: 1
scaleY: 1
shadow: null
skewX: 0
skewY: 0
stroke: "rgb(0, 0, 0)"
strokeDashArray: null
strokeDashOffset: 0
strokeLineCap: "round"
strokeLineJoin: "round"
strokeMiterLimit: 10
strokeWidth: 1
top: 231.31
type: "path"
version: "4.2.0"
visible: true
width: 386
 */
