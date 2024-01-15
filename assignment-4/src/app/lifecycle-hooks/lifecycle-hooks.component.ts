import { Component, OnDestroy, OnInit  } from '@angular/core';

@Component({
  selector: 'app-lifecycle-hooks',
  standalone: true,
  imports: [],
  templateUrl: './lifecycle-hooks.component.html',
  styleUrl: './lifecycle-hooks.component.css'
})
export class LifecycleHooksComponent implements OnInit, OnDestroy {
 
  
  constructor() {
    console.log('Constructor called');

  }
  
  
  ngOnInit() {
    console.log('ngOnInit called');
  }

  ngOnChanges() {
    console.log('ngOnChanges called');
  }

  ngOnDestroy() {
    console.log('ngOnDestroy called');
  }

  ngAfterViewInit() {
    console.log('ngAfterViewInit called');
  }

  

  ngDoCheck() {
    console.log('ngDoCheck called');
  }

  ngAfterContentInit() {
    console.log('ngAfterContentInit called');
  }

  ngAfterContentChecked() {
    console.log('ngAfterContentChecked called');
  }

  ngAfterViewChecked() {
    console.log('ngAfterViewChecked called');
  }

addLifecycleHooks() {
  this.ngOnChanges();
  this.ngOnInit();
  this.ngDoCheck();
  this.ngAfterContentInit();
  this.ngAfterContentChecked();
  this.ngAfterViewInit();
  this.ngAfterViewChecked();
  this.ngOnDestroy();
 }

}

