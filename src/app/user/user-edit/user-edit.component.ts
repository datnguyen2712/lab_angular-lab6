import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DataService } from '../../services/data.service';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
@Component({
  selector: 'app-user-edit',
  standalone: true,
  imports: [FormsModule, CommonModule, RouterLink],
  templateUrl: './user-edit.component.html',
  styleUrl: './user-edit.component.css'
})
export class UserEditComponent implements OnInit {
  constructor(private dataService: DataService, private router: Router, private route: ActivatedRoute) {
    this.dataService.setApiUrl('http://localhost:3000/users');
  }
  user: any
  id: any
  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.dataService.getItem(this.id).subscribe((data) => {
      this.user = data;
    })
  }
  onSubmit(myForm: any) {
    if (myForm.valid) {
      this.dataService.updateItem(this.id, myForm.value).subscribe(() => {
        this.router.navigate(['user']);
      })
    }
  }
}