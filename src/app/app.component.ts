import { Component, OnInit } from '@angular/core';
import { RouterLink, RouterModule, RouterOutlet } from '@angular/router';
import { AuthService } from './services/auth.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterOutlet, RouterLink, RouterModule, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{
  title = 'demo';

  user: any = null; 
  constructor(private authService: AuthService) {} 
  ngOnInit(): void { 
    this.user = this.authService.getUserInfo()       
    if(this.user==null) 
      this.authService.user$.subscribe((data) => { 
        this.user = data; 
      });    
  } 
  logOut() { 
    this.authService.logout(); 
    this.user=null 
  }

}
