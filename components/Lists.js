import React, { Component } from 'react';
import Form from '/home/durga/NodeJS/ExampleUserForm/components/Form';

class Lists extends Component {
   
    state = {
        currentIndex: -1, 
        list:this.returnList()
    }

    returnList () {
        if(localStorage.getItem('fields')==null)
        localStorage.setItem('fields',JSON.stringify([]))
        return JSON.parse(localStorage.getItem('fields'))        
    }

    handleEdit = (index) => {
        this.setState({
            currentIndex: index
        })

    }

    handleDelete = (index) =>{
        alert("Do you want to delete this")
        var list = this.returnList()
        list.splice(index,1)
        localStorage.setItem('fields',JSON.stringify(list))
        this.setState({ list, currentIndex: -1 })
    }

    onAddOrEdit = (data) => {

        var list = this.returnList()
        if(this.state.currentIndex===-1)
            list.push(data)
        else
             list[this.state.currentIndex] = data
        localStorage.setItem('fields', JSON.stringify(list))
        this.setState({ list, currentIndex: -1 })
    }

    
   render() {
   
     return (
      <div>
          <form>
          <Form 
           currentIndex = {this.state.currentIndex}
           list = {this.state.list}
           onAddOrEdit = {this.onAddOrEdit}
            />
         <br /> <br />
            <table>
                <tbody>
                    {this.state.list.map((item, index) => {
                            return <tr key = {index}>
                                    <td> {item.fName}</td>
                                    <td> {item.lName}</td>
                                    <td> {item.email}</td>
                                    <td> {item.gitId}</td>
                                    <td> {item.address}</td>
                                    <td> {item.city}</td>
                                    <td> <button onClick={() => this.handleEdit(index)}> Edit </button>
                                        </td>
                                    <td> <button onClick={() => this.handleDelete(index)}> Delete </button>
                                        </td>
                             </tr>

                        })
                    }

                </tbody>
            </table>
            </form>
      </div>
    );
  }
}

export default Lists;