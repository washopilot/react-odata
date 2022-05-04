import React, { Component } from 'react';
import OData from 'react-odata';
import { Grid, GridColumn } from '@progress/kendo-react-grid';
import { DataResult } from '@progress/kendo-data-query';

const baseUrl = 'http://services.odata.org/V4/TripPinService/People';
const query = { filter: { FirstName: 'Russell' } };
let people: any;

export default class App extends Component {
  render() {
    return (
      <div>
        <h1>Basic</h1>
        <OData baseUrl={baseUrl}>
          {({ loading, data, error }: { loading: any; data: any; error: any }) => {
            data && this.asignarPeople(data.value);
          }}
        </OData>
        {/* <Grid style={{ height: '400px' }} data={people}> */}
        <Grid
          style={{ height: '400px' }}
          data={[
            {
              FirstName: 'Jorge',
              LastName: 'Palacios',
            },
          ]}>
          <GridColumn field="FirstName" title="First Name" width="80px" />
          <GridColumn field="LastName" title="Last Name" width="180px" />
        </Grid>
      </div>
    );
  }

  asignarPeople(data: any) {
    people = data;
    console.log(people, data);
  }
}
