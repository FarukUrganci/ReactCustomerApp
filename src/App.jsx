import { useState } from 'react';
import './App.css';
import CustomerForm from './components/CustomerForm/CustomerForm';
import CustomerList from './components/CustomerList/CustomerList';

function App() {
  const [customers, setCustomers] = useState([])  
  {/* React uygulamalarında kullanılan bir HOOK.hızlı geliştirme için kullanıyoruz */ }

  const addNewCustomer = (newCustomer) => {
      // setCustomers([...customers, newCustomer]);
      setCustomers( (prevState) => [newCustomer,...prevState])

  }
  return (
    <div className="App">

      <h1 className="title">System-System-System</h1>

     <CustomerForm addNewCustomer={addNewCustomer} />
     <i><mark>{customers.length === 0 && "Hiç Bir Kominist EKLENMEDİ"}</mark></i>
     <CustomerList customers = {customers} setCustomers={setCustomers}/>

    </div>
  );
}

export default App; // Dışarı aktardık
