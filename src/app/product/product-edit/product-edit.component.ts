import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DataService } from '../../services/data.service';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
@Component({
  selector: 'app-product-edit',
  standalone: true,
  imports: [FormsModule, CommonModule, RouterLink],
  templateUrl: './product-edit.component.html',
  styleUrl: './product-edit.component.css'
})
export class ProductEditComponent implements OnInit {
  constructor(private dataService: DataService, private router: Router, private route: ActivatedRoute) {
    this.dataService.setApiUrl('http://localhost:3000/products');
  }
  product: any
  id: any
  categories: any;

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.dataService.getItem(this.id).subscribe((data) => {
      this.product = data;
    })
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
      const formValue = { ...myForm.value};
      this.dataService.setApiUrl('http://localhost:3000/products');
      this.dataService.updateItem(this.id, formValue).subscribe(() => {
        this.router.navigate(['product']);
      });
    }
  }
}