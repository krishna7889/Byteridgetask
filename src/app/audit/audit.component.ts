import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-audit',
  templateUrl: './audit.component.html',
  styleUrls: ['./audit.component.css']
})
export class AuditComponent implements OnInit {
 
  array=[{
    "id": "5001", "type": "None","date":"06/03/2007 13:44:25"},
			{ "id": "5002", "type": "Glazed","date":"06/03/2007 13:44:25" },
			{ "id": "5005", "type": "Sugar" ,"date":"06/03/2007 13:44:25"},
			{ "id": "5007", "type": "Powdered Sugar","date":"06/03/2007 13:44:25" },
			{ "id": "5006", "type": "Chocolate with Sprinkles" ,"date":"06/03/2007 13:44:25"},
			{ "id": "5003", "type": "Chocolate","date":"06/03/2007 13:44:25" },
			{ "id": "5004", "type": "Maple" ,"date":"06/03/2007 13:44:25"}
  ]
  headings:any
  constructor(private route:Router) { }

  ngOnInit(): void {
    // this.headings = Object.keys(this.array[0]);
  }
  dashpage(){
    this.route.navigate(['dashboard'])
  }
  logout(){
    this.route.navigate(['login'])
  }

}
