import React,{Component} from 'react';

export default class MyComponent extends Component{
	//properties
	state = {
			
			student : {
			name:"deepak gupta",
			age : 20
		}
	}

	//methods
	render(){
		return (
			<div>
				<h1>Student Name = {this.state.student.name}</h1>
				<p>{this.getStudentAge()}</p>
				<button onClick={this.setAge}>+</button>
			</div>
		)
	}

	getStudentAge = () => {
		console.log(this.state.student);
		return this.state.student.age;
	}

	setAge = () =>{

		//Object Cloning
		var newStudent = this.state.student;
		newStudent.age ++ ;

		this.setState({
			student: newStudent
		});

		console.log(this.state.student);
	}

}