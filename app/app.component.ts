import {Component, OnInit} from "@angular/core";
import { Page } from "ui/page";

@Component({
    selector: "my-app",
    templateUrl: "app.component.html",
})
export class AppComponent implements OnInit {

    constructor(private page: Page){}

    ngOnInit() {
        this.page.actionBarHidden = true;
    }


}
