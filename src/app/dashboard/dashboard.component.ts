import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(
    private route:Router
  ) { }

  ngOnInit(): void {
  }
  auditpage(){
    this.route.navigate(['audit'])
  }
  logout(){
    this.route.navigate(['login'])
  }

}
