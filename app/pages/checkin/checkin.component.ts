import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-checkin',
  templateUrl: 'pages/checkin/checkin.component.html',
  styleUrls: ['pages/checkin/checkin.component.css'],
})
export class CheckinComponent implements OnInit {
  search: string;
  showSearch: boolean = false;
  title: string = "Harvest Check-in";
  selected: any = [];
  confirmed: boolean = false;

  constructor(
    private router: Router,
  ) { }

  ngOnInit() {
  }

  onKey(event: any) {
    this.search = event.target.value;
    if (this.search) {
      this.showSearch = true;
    } else {
      this.showSearch = false;
    }
  }

  select(id) {
      let index = this.selected.indexOf(id);
      if(index == -1) {
          this.selected.push(id);
      } else {
          this.selected.splice(index,1);
      }

  }

  confirm() {
    console.log(this.selected);
    this.confirmed = true;
    setTimeout(()=>{
      this.router.navigate(['/']);
    },1500);
    // Check in that person/family, show success message, clear search, redirect to Person type selection
  }

}
