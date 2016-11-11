import { Component, OnInit, ViewChild, AfterViewInit, Renderer, ElementRef, trigger, state, style, transition, animate } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-checkin',
  templateUrl: './checkin.component.html',
  styleUrls: ['./checkin.component.scss'],
  animations: [
    trigger('flyInOut', [
      state('in', style({transform: 'translateX(0)'})),
      transition('void => *', [
        style({transform: 'translateX(100%)'}),
        animate('300ms ease-in')
      ]),
      transition('* => void', [
        style({transform: 'translateX(-100%)'}),
        animate('300ms ease-out')
      ])
    ])
  ]
})
export class CheckinComponent implements OnInit, AfterViewInit {
  @ViewChild('searchInput') searchInput: ElementRef;
  search: string;
  showSearch: boolean = false;
  title: string = "Harvest Check-in";
  selected: any = [];
  confirmed: boolean = false;

  constructor(
    private router: Router,
    private renderer: Renderer
  ) { }

  ngOnInit() {
  }

  ngAfterViewInit() {
    this.renderer.invokeElementMethod(this.searchInput.nativeElement, 'focus');
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
