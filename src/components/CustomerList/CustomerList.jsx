// import { useState } from "react"; // React içerisindeki useState importluyoruz
import CustomerItem from "../CustomerItem/CustomerItem";
import "./CustomerList.css";

//  customers.map( (customer) yerine customerData.map( (customer))... idi
//  const customerData = [
//     {
//         id:1,
//         customerName: "Göt-Lalesi YAVUZ"
//     },
//     {
//         id:2,
//         customerName: "GAY BAVKİ"
//     },
//     {
//         id:3,
//         customerName: "TOP UĞUR-(Derin)"
//     },
//     {
//         id:4,
//         customerName: "Ladyboy MUGUR"
//     }
// ]

function CustomerList({ customers , setCustomers}){
// useState önden buradaydı ama daha kolay yönetelim diye app.jsx taşıdık.
//! delete customer
const handleDelete = (item) => {
    setCustomers(customers.filter( (customer) => customer.id !== item.id))}
    //!Filter ismi Ömer olanları gönder - burada ise itemi x olanları gönderme diğerlerini set set

    return (
    <ul className="customer-list">
        {customers.map( (customer) => (
        <CustomerItem customer={customer} key ={customer.id}
        handleDelete={handleDelete}  />
        ))}    
            {/*  HTML içerisine JS yazmak istiyorsan { } kullanman gerekiyor. */} 
    </ul>
    )

}

export default CustomerList;