import React from 'react';
import RowComp from './RowComp';

class ListEmp extends React.Component{
    constructor(props){
        super(props);
        this.state={
            eid:'',
            ename:'',
            salary:'',
            department:'',
            employee:'',
            emparr:[],
            employees:[]
        }
    }

    onChangeCtrl=(e)=>{
        var cname= e.target.name;
        var cval= e.target.value;
        this.setState({[cname]: cval});
    }
    saveAll=(e)=>{
        e.preventDefault();
        // console.log(this.state.employees+" ...1")
        this.setState({employees:[...this.state.emparr]});
        //console.log(this.state.employees+"...2")
        }
    onSubmit=(e)=>{
        e.preventDefault();
        var ereg = new EReg(this.state.eid, this.state.ename, this.state.salary, this.state.department);
        this.setState({emparr: [...this.state.emparr,ereg]});
      //  console.log(this.state.emparr)
        let a = JSON.stringify(ereg);
        this.setState({ employee: a });
    }

  

    render(){
        return(
            <div>
                <form method="post">
                    <table align="center">
                        <tr><td>Employee Id</td><td><input type="text" name="eid" required="true" onChange={this.onChangeCtrl}/></td></tr>
                        <tr><td>Employee Name</td><td><input type="text" name="ename" required="true" onChange={this.onChangeCtrl}/></td></tr>
                        <tr><td>Salary</td><td><input type="text" name="salary" required="true" onChange={this.onChangeCtrl}/></td></tr>
                        <tr><td>Department</td><td><input type="text" name="department" required="true" onChange={this.onChangeCtrl}/></td></tr>
                        <tr><td><input type="submit" className="btn btn-danger" onClick={this.onSubmit}/></td><td><input className="btn btn-danger" type="reset" value="Cancel"/></td></tr>
                    </table>
                    <br/>
                    {
                    this.state.employee!==null && this.state.employee!=="" &&
                    <div className="alert alert-primary">{this.state.employee}</div>
                    }
                    <br/>
                    <br/>
                    <input type="submit" className="btn btn-info" value="Show All Employees" onClick={this.saveAll}/>
                    
                    <table className='table'>
                        {
                            this.state.employees.map(e=> <RowComp key={e.eid} emp={e}/>)
                        }
                    </table>
                </form>
            </div>
        );
    }
}

class EReg{
    constructor(eid, ename, salary, department){
        this.eid= eid;
        this.ename= ename;
        this.salary= salary;
        this.department= department;
    }
}
export default ListEmp;