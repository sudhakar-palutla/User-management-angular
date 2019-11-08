import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl, Validators} from '@angular/forms';
import {UserCreation} from '../user.creation'
import {Router}from "@angular/router"

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  userdata : UserCreation [];
  UserForm : FormGroup;
  public UserArray:any =[]
  constructor(private router:Router) { }

  ngOnInit() {
    this.UserForm = new FormGroup({
      name : new FormControl('',[Validators.required,Validators.minLength(5)]),
      email : new FormControl('',[Validators.email, Validators.required]),
      phnumber: new FormControl('',[Validators.required,Validators.minLength(10)]),
      dateofbirth: new FormControl(new Date()),
      comment: new FormControl()

    })
    //this.createUser();
    
  }

  createUser(){
    if(localStorage.getItem("userdata") != null){
      this.UserArray =JSON.parse(localStorage.getItem("userdata"))
    }
    this.UserArray.push(this.UserForm.value)
     localStorage.setItem("userdata",JSON.stringify(this.UserArray));
     this.router.navigate(['userdetails'])
  }


}
