import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent implements OnInit {
  
  message!: string;
  color!: string;

  constructor(
    private fb: FormBuilder
  ) { }

  ngOnInit(): void {
    this.form.valueChanges.subscribe(res => {
      if(this.form.value.productName == "" && this.form.value.price == ""){
        this.message = '';
      }
    })
  }

  form: FormGroup = this.fb.group({
    productName: ["", Validators.required],
    price: [null, Validators.required]
  });

  save(){
    if(this.form.valid){
      if(this.form.value.price > 5 && this.form.value.price < 20 && this.form.value.productName.length > 5 && this.form.value.productName.length < 20){
        this.message = "Validated";
        this.color = "#00FF00";
      }
      else{
        this.message = "Invalid";
        this.color = "#FF0000";
      }  
    }
    else{
      this.message = "Invalid";
      this.color = "#FF0000";
    }
  }

  reset(){
    this.form.reset();
    this.message = '';
  }

}
