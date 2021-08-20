import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl, Validators, FormBuilder} from '@angular/forms';
import {AdharNoValidation} from './shared/adhar.validator';
import {MobNoValidation} from './shared/mobile.validation';

@Component({
  selector: 'app-add-student',
  templateUrl: './add-student.component.html',
  styleUrls: ['./add-student.component.css']
})
export class AddStudentComponent implements OnInit {

  constructor(private fb: FormBuilder){}

  addStudent= this.fb.group({
    SName:['', Validators.required], 
    AdharNo:['',[Validators.required,AdharNoValidation]], 
    Pname:[''], 
    MobNo:['',[Validators.required,MobNoValidation]], 
    name:['']
  })
  // addStudent= new FormGroup({
  //   SName:new FormControl(''), 
  //   AdharNo:new FormControl(''), 
  //   Pname:new FormControl(''), 
  //   MobNo:new FormControl(''), 
  //   name:new FormControl('') 
  // })
  // collectData(){
  //   console.warn(this.addStudent.value)
  // }
  

  ngOnInit(): void {

  }

}
