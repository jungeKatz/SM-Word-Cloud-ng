import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-search-util',
  templateUrl: './search-util.component.html',
  styleUrls: ['./search-util.component.scss'],
})
export class SearchUtilComponent implements OnInit {
  form: FormGroup;
  constructor() {}

  ngOnInit(): void {
    this.createSearchForm();
  }
  createSearchForm(): void {
    this.form = new FormGroup({
      noOfResults: new FormControl(''),
      needWord: new FormControl(''),
      showTable: new FormControl(''),
      needPie: new FormControl(''),
    });
  }

onSubmit(): void{
console.log('onSubmit');
console.log(this.form.value);

}


}
