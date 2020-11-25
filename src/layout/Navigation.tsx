import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import styled from 'styled-components';
import Button from '@material-ui/core/Button';
import Link from '@material-ui/core/Link';
import BorderColorIcon from '@material-ui/icons/BorderColor';
import BarChartIcon from '@material-ui/icons/BarChart';

const Container = styled.nav`
  display: flex;
  justify-content: center;
  gap: 1em;
  background: hsl(0, 0, 0, 97%);
  padding: 0.5em 0;
`;

function Navigation(): React.ReactElement {
  return (
    <Container>
      <Link component={RouterLink} to='/'>
        <Button
          variant='contained'
          color='default'
          startIcon={<BorderColorIcon />}
        >
          Paint
        </Button>
      </Link>
      <Link component={RouterLink} to='/statistics'>
        <Button
          variant='contained'
          color='default'
          startIcon={<BarChartIcon />}
        >
          Statistics
        </Button>
      </Link>
    </Container>
  );
}

export default Navigation;
