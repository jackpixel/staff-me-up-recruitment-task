import React from 'react';
import PeopleRow from './components/people-row';
import { data } from './data/mocks';

function App() {
  return (
    <PeopleRow data={data} />
  );
}

export default App;
