import { Component, OnInit } from '@angular/core';
import {Router}from "@angular/router";

export interface PeriodicElement {
  name: string;
  email: string;
  phnumber: number;
  dateofbirth: Date;
  comment:string;
}
@Component({
  selector: 'app-userdetails',
  templateUrl: './userdetails.component.html',
  styleUrls: ['./userdetails.component.css']
})
export class UserdetailsComponent implements OnInit {

public dataSource                           
public ELEMENT_DATA:PeriodicElement[]
public userData:any =[]
public editFields
public editdata:boolean = false
  constructor(private router:Router) { }

  ngOnInit() {
    this.dataSource = JSON.parse(localStorage.getItem("userdata"))
    this.userData =JSON.parse(localStorage.getItem("userdata"))
  }
  EditFields(i,item){
    this.editdata = false
    this.editFields = i
     console.log(item)

  }
  SaveFields(i,item){
    this.editdata = true
    localStorage.setItem("userdata",JSON.stringify(this.userData));
  }

}
