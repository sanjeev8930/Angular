import { Component, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { PlaceholderService } from '../placeholder.service'
import { NgxSpinnerService } from 'ngx-spinner'



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  data: any;

  constructor(private placeHolderdata: PlaceholderService, private spinner: NgxSpinnerService) {
    this.spinner.show();
    this.placeHolderdata.getData().subscribe((data) => {
      console.warn(this.data)
      this.data = data.data;      
        this.spinner.hide();      
    })
  }

  ngOnInit() { }
}

