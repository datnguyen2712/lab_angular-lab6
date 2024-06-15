import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DataService } from '../../services/data.service';
import { Router, RouterLink } from '@angular/router';
import { CategoryListComponent } from '../../category/category-list/category-list.component';

@Component({
  selector: 'app-product-add',
  standalone: true,
  imports: [FormsModule, CommonModule, RouterLink, CategoryListComponent],
  templateUrl: './product-add.component.html',
  styleUrl: './product-add.component.css'
})
export class ProductAddComponent implements OnInit {
  constructor(private dataService: DataService, private router: Router) {
    this.dataService.setApiUrl('http://localhost:3000/products');
  }
  categories: any;
  
  ngOnInit(): void {
    this.loadCategories();
  }

  loadCategories() {
    this.dataService.setApiUrl('http://localhost:3000/categories');
    this.dataService.getItems().subscribe((data: any) => {
      this.categories = data;
      console.log(this.categories);
    });
  }

  onSubmit(myForm: any) {
    if (myForm.valid) {
      this.dataService.setApiUrl('http://localhost:3000/products');
      this.dataService.addItem(myForm.value).subscribe((data) => {
        console.log(data);
        this.router.navigate(['/product']);
      });

    } else {
      // Hiển thị lỗi khi form chưa valid
      Object.keys(myForm.controls).forEach((field) => {
        const control = myForm.controls[field];
        control.markAsTouched();
      });
    }
  }
  
 


}
