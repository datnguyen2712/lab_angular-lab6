import { CommonModule } from '@angular/common';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { DataService } from '../../services/data.service';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-category-list',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './category-list.component.html',
  styleUrl: './category-list.component.css'
})
export class CategoryListComponent implements OnInit {
  @Output() CategoryEvent = new EventEmitter<any>();
  sendDataToProduct():void{ 
    this.CategoryEvent.emit(this.categories);
  } 
  constructor(private dataService: DataService, private router: Router) {
    this.dataService.setApiUrl('http://localhost:3000/categories');
  }
  ngOnInit(): void {
    this.loadData();
  }
  categories: any;
  loadData() {
    this.dataService.getItems().subscribe((data: any) => {
      this.categories = data.sort((a: any, b: any) => b.id - a.id);
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
