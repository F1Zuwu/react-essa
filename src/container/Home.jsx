import React from "react";
import ExpenseItem from "../components/ExpenseItem";

const Home = () => {

    const expenses = [
        {
            date: new Date(2024,10,12),
            title: 'New book',
            price: 30.99
        },
        {
            date: new Date(2024, 10, 12),
            title: "New Jeans",
            price: 99.99
        }
    ]
    return(
        <div class="">
            <ExpenseItem data={expenses[0]}></ExpenseItem>
            <ExpenseItem data={expenses[1]}></ExpenseItem>
        </div>
    )
}

export default Home;