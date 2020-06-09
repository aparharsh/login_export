import React, { Component } from 'react'
import "./Export.css";
import { CSVLink } from "react-csv";
import Auth from "../components_Login/Auth"

export class Export extends Component {
    state ={
        users: [
          {id:1 , name: "ABC", age: 24, email: 'abc@email.com'},
          {id:2 , name: "EFG", age: 30, email: 'efg@email.com'},
          {id:3 , name: "ONM", age: 26, email: 'onm@email.com'},
          {id:4 , name: "UTS", age: 21, email: 'uts@email.com'},
          {id:5 , name: "XYZ", age: 28, email: 'xyz@email.com'}
        ]
      }
    
      TableData(){
        return this.state.users.map((user) => {
          const {id, name, age, email} = user
          return (
            <tr key = {id}>
              <td>{id}</td>
              <td>{name}</td>
              <td>{age}</td>
              <td>{email}</td>
            </tr>
          )
        })
      }
  
    render() {
        return (
            <div >
                <h1 style={{color: 'blue', display: 'flex', justifyContent: "center", padding: "25px"}}>Exporting Table</h1>
                <table style= {{display: "flex", justifyContent:"center"}}>
                    <tbody>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Age</th>
                        <th>E-Mail</th>
                    </tr>
                        {this.TableData()}
                    </tbody>
                </table>
                <CSVLink
                    data={this.state.users}
                    filename={"users.csv"}
                    className="dwnld_btn"
                    target="_blank"
                    style={{ display: "inlineBlock", justifyContent:"center", textDecorationColor: "black", backgroundColor:"#4CAF50", fontSize: "20px", padding: "14px 40px", borderRadius:"20px"}}
                >
                    Download
                </CSVLink>
                <br/> <br/> 
                <button onClick={()=> {
                    Auth.logout(()=>{this.props.history.push("/");
                });
                }
                    } >Logout</button>
            </div>
        )
    }
}

 
export default Export
