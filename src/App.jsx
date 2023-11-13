import React from 'react';
import BudgetTable from './components/BudgetTable';
import BudgetForm from './components/BudgetForm';

const  App = () => {

  return (
    <>
      <div >
        <BudgetTable className="w-96 h-12"/>
        <BudgetForm/>
        {/* <div><BudgetTable/></div> */}
        {/* <div><BudgetTable/></div> */}
      </div>
    </>
  )
}

export default App;
