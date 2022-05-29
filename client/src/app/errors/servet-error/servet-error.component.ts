import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-servet-error',
  templateUrl: './servet-error.component.html',
  styleUrls: ['./servet-error.component.css']
})
export class ServetErrorComponent implements OnInit {
  error: any; 

  constructor(private router: Router) { 
    const navigation = this.router.getCurrentNavigation();
    this.error = navigation?.extras?.state?.error;
  }

  ngOnInit(): void {
  }

}
