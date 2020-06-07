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
  thirdFormGroup: FormGroup;
  newuser=new Userdetails();
  constructor(private _formBuilder: FormBuilder) { }
  newuser_:FormGroup;
  form: FormGroup;
  newuser_bool:boolean=false;
  photoupload_bool:boolean;
  regno_bool:boolean=false;
  userregno:any;

  ngOnInit() {
    this.newuser.nooftickets=1;
    this.firstFormGroup = this._formBuilder.group({
      firstCtrl: ['', Validators.required]
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
    this.photoupload_bool = true;
  }

  onSave(e){
    console.log(e);
    this.newuser_bool=true;
  }

  regno(){
    this.regno_bool= true;
    var date = new Date(); // had to remove the colon (:) after the T in order to make it work
var day = date.getDate();
var monthIndex = date.getMonth();
var year = date.getFullYear();
var minutes = date.getMinutes();
var hours = date.getHours();
var seconds = date.getSeconds();
var myFormattedDate =  hours+""+minutes+""+seconds;
    this.userregno = this.newuser.firstname.substring(0, 1) + this.newuser.lastname.substring(0, 1) + myFormattedDate
  }

  refreshPage(){
    window.location.reload();

  }

}
