import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';
import { Router, RouterLink } from '@angular/router';
@Component({
  selector: 'app-user-list',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './user-list.component.html',
  styleUrl: './user-list.component.css',
})
export class UserListComponent implements OnInit {
  constructor(private dataService: DataService, private router: Router) {
    this.dataService.setApiUrl('http://localhost:3000/users');
  }
  ngOnInit(): void {
    this.loadData();
  }
  users: any;
  loadData() {
    this.dataService.getItems().subscribe((data: any) => {
      this.users = data.sort((a: any, b: any) => b.id - a.id);
    });
  }
  deleteItem(id: any) {
    if (confirm('Bạn có chắc chắn muốn xóa?')) {
      this.dataService.deleteItem(id).subscribe(() => {
        this.loadData();
      });
    }
  }
}