import React,{ Component } from "react";
import "./App.css"
import EmpList from './EmpList';
class Employee extends Component
{
    state = {
        emps:[
            {id:101,name:'x',salary:7800},
            {id:102,name:'y',salary:3456},
            {id:103,name:'z',salary:7956},
            {id:102,name:'L',salary:5686},
        ]
    }
    render()
    {
        return(
            <div>
                <table style={{width:'500px',color:'red'}} border="1">
                    <tbody>
                        {this.state.emps.map((emp)=>{return (<EmpList key={emp.id}>{emp.name}</EmpList>)})}
                    </tbody>
                </table>
            </div>
        );
    }
}

export default Employee;