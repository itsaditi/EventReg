import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-landingpage',
  templateUrl: './landingpage.component.html',
  styleUrls: ['./landingpage.component.css']
})
export class LandingpageComponent implements OnInit {

  constructor(private router: Router) { }
  hide: boolean = true;
  error:any;
  ngOnInit() {
  }
  myFunction() {
    this.hide = !this.hide;
  }

  OnSave(e){
    console.log(e);
    if(e.username=="Admin" && e.password=="Admin"){
      this.router.navigateByUrl('/adminpage');
    }
    else{
      alert("Invalid username or password");
    }
  }

}
