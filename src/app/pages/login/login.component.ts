import { CommonModule } from '@angular/common'; 
import { Component, OnInit } from '@angular/core'; 
import { FormsModule} from '@angular/forms'; 
import { AuthService } from '../../services/auth.service';
 
@Component({ 
  selector: 'app-login', 
  standalone: true, 
  imports: [FormsModule,CommonModule], 
  templateUrl: './login.component.html', 
  styleUrl: './login.component.css' 
}) 
export class LoginComponent implements OnInit { 
  constructor(private authService: AuthService) {} 
  onLogin(formData:any) { 
       this.authService.login(formData.email, formData.password) 
  } 
  ngOnInit(): void { 
      console.log('login:'+this.authService.isLoggedIn());       
  } 
}