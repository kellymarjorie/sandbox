import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-test-object',
  templateUrl: './test-object.component.html',
  styleUrls: ['./test-object.component.scss']
})
export class TestObjectComponent implements OnInit {
  model: any;

  extrasMetrics = [
    'name',
    'isActive',
    'age',
    'eyeColor',
    'company',
    'gender',
    'email'
  ];

  extrasLabels = {
    name: 'name',
    isActive: 'Is Active',
    age: 'Age',
    eyeColor: 'Eye Color',
    company: 'Company',
    gender: 'Gender',
    email: 'Email'
  };

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.loadData();
  }

  private loadData() {
    return this.http.get(`assets/test-object.json`).subscribe((res) => {
      this.model = res[0];
      console.log(res[0]);
    });
  }
}
