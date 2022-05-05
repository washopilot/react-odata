import React, { Component } from 'react';
import OData from 'react-odata';
import { Grid, GridColumn } from '@progress/kendo-react-grid';

const baseUrl = 'http://services.odata.org/V4/TripPinService/People';
const query = { filter: { FirstName: 'Russell' } };
const people_mock = [
  { FirstName: 'Jorge', LastName: 'Carrión', Gender: 'Hombre' },
  { FirstName: 'Pedrito', LastName: 'Palacios', Gender: 'Hombre' },
];

export default class App extends Component {
  render() {
    return (
      <div>
        <h1>Basic</h1>
        <OData baseUrl={baseUrl}>
          {({ loading, data, error }: { loading: any; data: any; error: any }) => {
            console.log(loading, data, error);
            return (
              data && (
                <Grid style={{ height: '400px' }} data={data.value}>
                  <GridColumn field="FirstName" title="First Name" width="140px" />
                  <GridColumn field="LastName" title="Last Name" width="140px" />
                  <GridColumn field="Gender" title="Gender" width="140px" />
                </Grid>
              )
            );
          }}
        </OData>
      </div>
    );
  }
}
