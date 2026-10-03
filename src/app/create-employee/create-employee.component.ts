import { Component, OnInit } from '@angular/core';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';
import { error } from 'console';
import { Router} from '@angular/router'
import { FormGroup, Validators } from '@angular/forms';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrl: './create-employee.component.css'
})
export class CreateEmployeeComponent implements OnInit {

  employee: Employee = new Employee();

  constructor(private employeeService: EmployeeService,private router:Router){  }


  ngOnInit(): void {

  }
  saveEmployee()
  {
    this.employeeService.createEmployee(this.employee).subscribe(data => {
      console.log(data);
      this.goToEmployeeList();
    },
    error => console.log(error));
  }

  goToEmployeeList(){
    this.router.navigate(['/employees']);
  }

   onSubmit(){

    // console.log(this.employee);
    console.log(this.regForm);
    // if (this.regForm.controls["uname"].errors["required"])
    // if(this.employee.firstName.length >= 8) {
    //   console.log("test")
    //   this.saveEmployee();

    // } else {
    //   alert("Enter valid  FirstName");
    // }
    if((this.employee.firstName.length >= 8) && (this.employee.lastName.length >= 4) && (this.employee.emailId.length >= 8)) {
      console.log("test1")
      this.saveEmployee();

    } else {
      alert("Enter valid Details");
    }
    // if(this.employee.emailId.length >= 8) {
    //   console.log("test2")
    //   this.saveEmployee();

    // } else {
    //   alert("Enter valid EmailId");
    // }

    // this.saveEmployee();
   }

  regForm= new FormGroup({

     firstName: new FormControl ("John",[Validators.required,Validators.minLength(8)]),
     lastName : new FormControl ("Enter LastName",[Validators.required,Validators.minLength(8)]),
     mailId: new FormControl ("xyz@gmail.com",[Validators.required,Validators.minLength(8)])
  })

}
