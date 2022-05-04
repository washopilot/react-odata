import React, { Component } from 'react';
import Fetch from 'react-fetch-component';
import OData from 'react-odata';

const baseUrl = 'http://services.odata.org/V4/TripPinService/People';
const query = { filter: { FirstName: 'Russell' } };

export default class App extends Component {
  render() {
    return (
      <div>
        <h1>Basic</h1>
        <OData baseUrl={baseUrl} query={query}>
          {({ loading, data, error }: { loading: any; data: any; error: any }) => (
            <div>
              {loading && <span>Loading... </span>}
              {data &&
                data.value.map((d: any, i: any) => (
                  <div key={i} id={i}>
                    {d.FirstName}
                  </div>
                ))}
            </div>
          )}
        </OData>
      </div>
    );
  }

}
