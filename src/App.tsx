import { request } from 'http';
import React from 'react';
import OData from 'react-odata';

function App() {
  const baseUrl = 'http://services.odata.org/V4/TripPinService/People';
  const query = { filter: { FirstName: 'Russell' } };

  return (
    <OData baseUrl={baseUrl} query={query} options={{ mode: 'no-cors' }}>
      {({ loading, error, data }: { loading: any; error: any; data: any }) => (
        <div>
          {loading && <span>Loading...</span>}
          {data &&
            data.value.map((d: any, i: any) => (
              <div key={i} id={i}>
                {d}
              </div>
            ))}
        </div>
      )}
    </OData>
  );
}

export default App;
