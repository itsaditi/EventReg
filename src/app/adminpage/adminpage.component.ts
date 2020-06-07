import { Component, OnInit,ViewChild } from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import {MatSort} from '@angular/material/sort';

// export interface PeriodicElement {
//   name: string;
//   position: number;
//   weight: number;
//   symbol: string;
// }

// const ELEMENT_DATA: PeriodicElement[] = [
//   {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
//   {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
//   {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
//   {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
//   {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
//   {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
//   {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
//   {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
//   {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
//   {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
// ];


export interface EventData {
  firstname: string;
    lastname: string;
    middlename: string;
    emailid: string;
    phonenumber: string;
    regtype:string;
    nooftickets:number;
}

const ELEMENT_DATA: EventData[] = [
  {firstname: "Jane",middlename:"",lastname:"Joe",emailid:"jane@emailid", phonenumber: '5197894488', regtype: "Corporate", nooftickets: 5},
  {firstname: "Aditi",middlename:"",lastname:"Patade",emailid:"aditi@emailid", phonenumber: '51978784488', regtype: "Other", nooftickets: 15},
  {firstname: "Susan",middlename:"",lastname:"David",emailid:"Susan@emailid", phonenumber: '5197894488', regtype: "Self", nooftickets:85},
  {firstname: "Jessica",middlename:"J",lastname:"Smith",emailid:"Jessica@emailid", phonenumber: '5197894488', regtype: "Group", nooftickets:45},
  {firstname: "Vedanti",middlename:"",lastname:"Patade",emailid:"vpatade@emailid", phonenumber: '5177894488', regtype: "Group", nooftickets:15},
  {firstname: "Sharyu",middlename:"S",lastname:"P",emailid:"sharyu@emailid", phonenumber: '5189894488', regtype: "Self", nooftickets: 1},
  {firstname: "Siddhi",middlename:"N",lastname:"Rane",emailid:"jane@emailid", phonenumber: '5197895888', regtype: "Corporate", nooftickets: 2},
  {firstname: "Shashi",middlename:"",lastname:"P",emailid:"jane@emailid", phonenumber: '5125894488', regtype: "Corporate", nooftickets: 3},
  {firstname: "Omkar",middlename:"",lastname:"K",emailid:"jane@emailid", phonenumber: '5197844488', regtype: "Corporate", nooftickets: 8},
  {firstname: "Rahul",middlename:"",lastname:"U",emailid:"jane@emailid", phonenumber: '5198994488', regtype: "Group", nooftickets: 10},
  {firstname: "Rohit",middlename:"",lastname:"Patel",emailid:"jane@emailid", phonenumber: '5197878488', regtype: "Corporate", nooftickets: 7},
  {firstname: "Raj",middlename:"",lastname:"Jain",emailid:"jane@emailid", phonenumber: '5197494488', regtype: "Corporate", nooftickets: 7},
  {firstname: "Abhishek",middlename:"",lastname:"M",emailid:"jane@emailid", phonenumber: '5197894618', regtype: "Self", nooftickets: 1},
  {firstname: "Sanjay",middlename:"",lastname:"Patel",emailid:"jane@emailid", phonenumber: '5197894412', regtype: "Corporate", nooftickets: 4},
  {firstname: "Kruti",middlename:"",lastname:"Shah",emailid:"jane@emailid", phonenumber: '5197894447', regtype: "Group", nooftickets: 5},
  {firstname: "David",middlename:"",lastname:"Joe",emailid:"jane@emailid", phonenumber: '5197894423', regtype: "Corporate", nooftickets: 5},
  {firstname: "Paras",middlename:"",lastname:"P",emailid:"jane@emailid", phonenumber: '5197894414', regtype: "Group", nooftickets: 5},
  {firstname: "Meenaxi",middlename:"",lastname:"Mathews",emailid:"jane@emailid", phonenumber: '5197894423', regtype: "Group", nooftickets: 5},
  {firstname: "Jenny",middlename:"",lastname:"Joe",emailid:"jane@emailid", phonenumber: '5197894489', regtype: "Corporate", nooftickets: 5},

  
];




@Component({
  selector: 'app-adminpage',
  templateUrl: './adminpage.component.html',
  styleUrls: ['./adminpage.component.css']
})
export class AdminpageComponent implements OnInit {
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;

  displayedColumns: string[] = ['firstname','emailid','phonenumber', 'regtype', 'nooftickets'];
  dataSource =  new MatTableDataSource(ELEMENT_DATA);
  constructor() { }

  ngOnInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;


  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}
