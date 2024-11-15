import React from "react";
import './ExpenseItem.css'
import ExpenseDate from "./ExpenseDate";
import Card from "../../UI/Card";
const ExpenseItem = (props) => {

    return(
        <Card className="expense-item">
            <ExpenseDate date={props.data.date}></ExpenseDate>
            <div className="expense-item__description">
                <h2 class="text-center font-bold">{props.data.title}</h2>
                <div className="expense-item__price">{props.data.price}</div>
            </div>
        </Card>
    )
}

export default ExpenseItem;