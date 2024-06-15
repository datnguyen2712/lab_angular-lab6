import { CommonModule } from '@angular/common';
import { AfterViewInit, Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit, AfterViewInit, OnDestroy {
  constructor() {
    console.log("constructor");
  }
  phones: any[] =[]
  timer:any;
  ngAfterViewInit(): void {
    console.log('ngAfterViewInit');
    var samsungli = document.getElementById('samsung');
    console.log(samsungli);
  }
  ngOnInit(): void {
    console.log("ngOnInit");
    // Call API
    this.phones = ["apple", "samsung", "xiaomi"]
    this.timer = setInterval(() => {
      console.log("timer");
    }, 1000);
  }
  ngOnDestroy(): void {
    console.log('ngOnDestroy');
    clearInterval(this.timer);
  }
}
