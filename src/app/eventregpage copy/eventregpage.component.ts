import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Userdetails } from './../userdetails';

@Component({
  selector: 'app-eventregpage',
  templateUrl: './eventregpage.component.html',
  styleUrls: ['./eventregpage.component.css']
})
export class EventregpageComponent implements OnInit {
  isLinear = false;
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  form: FormGroup;
  newuser=new Userdetails();

  constructor(private _formBuilder: FormBuilder) {}

  ngOnInit() {
    this.firstFormGroup = this._formBuilder.group({
      firstCtrl: ['', Validators.required],
      firstname: ['', Validators.required],
      lastname: ['', Validators.required],
      middlename: ['', Validators.required],
      emailid: ['', Validators.required],
      mobileno: ['', Validators.required],
      regtype: ['', Validators.required],
      nooftickets: ['', Validators.required]
    });
    this.secondFormGroup = this._formBuilder.group({
      secondCtrl: ['', Validators.required]
    });
     this.form = this._formBuilder.group({
       dateFormCtrl: ['', Validators.required],
       emailFormCtrl: ['', Validators.email]
    });
  }

  OnSave(e){
    console.log(e)
  }
}

export class EventregpageComponent1 implements OnInit {
  isLinear = false;
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  thirdFormGroup: FormGroup;
  newuser=new Userdetails();
  constructor(private _formBuilder: FormBuilder) { }
  newuser_:FormGroup;
  form: FormGroup;

  ngOnInit() {
    this.firstFormGroup = this._formBuilder.group({
      firstCtrl: ['', Validators.required],
      firstname: ['', Validators.required],
      lastname: ['', Validators.required],
      middlename: ['', Validators.required],
      emailid: ['', Validators.required],
      mobileno: ['', Validators.required],
      regtype: ['', Validators.required],
      nooftickets: ['', Validators.required]


    });


    this.secondFormGroup = this._formBuilder.group({
      secondCtrl: ['', Validators.required]
    });
    this.thirdFormGroup = this._formBuilder.group({
      thirdCtrl: ['', Validators.required]
    });
    this.form = this._formBuilder.group({
      dateFormCtrl: ['', Validators.required],
      emailFormCtrl: ['', Validators.email]
   });
  }

  public imagePath;
  imgURL: any;
  public message: string;
 
  preview(files) {
    if (files.length === 0)
      return;
 
    var mimeType = files[0].type;
    if (mimeType.match(/image\/*/) == null) {
      this.message = "Only images are supported.";
      return;
    }
 
    var reader = new FileReader();
    this.imagePath = files;
    reader.readAsDataURL(files[0]); 
    reader.onload = (_event) => { 
      this.imgURL = reader.result; 
    }
  }

  onSave(e){
    console.log(e);
  
  }

}
