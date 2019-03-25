import { Component, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';




@Component({
selector: 'app-root',
templateUrl: './app.component.html',
styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
title = 'proyectoM';
constructor(private router: Router) {}
ngOnInit() {
this.router.navigate(['']) ;
}
}
