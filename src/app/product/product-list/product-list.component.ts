import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';
import { Router, RouterLink } from '@angular/router';
@Component({
  selector: 'app-product-list', 
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css',
})
export class ProductListComponent implements OnInit {
  products: any;
  categories: any;
  constructor(private dataService: DataService, private router: Router) {
    this.dataService.setApiUrl('http://localhost:3000/products');
  }
  ngOnInit(): void {
    this.loadData();
    this.loadCategories();
  }

  loadData() {
    this.dataService.getItems().subscribe((data: any) => {
      this.products = data.sort((a: any, b: any) => b.id - a.id);
    });
  }

  loadCategories() {
    this.dataService.setApiUrl('http://localhost:3000/categories');
    this.dataService.getItems().subscribe((data: any) => {
      this.categories = data;
    }); 
    this.dataService.setApiUrl('http://localhost:3000/products'); // Đặt lại URL API về sản phẩm
  }

  deleteItem(id: any) {
    if (confirm('Bạn có chắc chắn muốn xóa?')) {
      this.dataService.deleteItem(id).subscribe(() => {
        this.loadData();
      });
    }
  }
}