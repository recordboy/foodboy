import React from 'react';
import FoodForm from './components/FoodForm';
import FoodList from './components/FoodList';

interface DispatchProps {
  a: () => void;
}

function App() {

  

  


  return (
    <div className="App">
      {/* <FoodForm a={handleCreate} /> */}
      <FoodList />
    </div>
  );
}

const handleCreate = () => {

}

export default App;
