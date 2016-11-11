import {Component, OnInit} from "@angular/core";
import { Page } from "ui/page";

@Component({
    selector: "my-app",
    templateUrl: "app.component.html",
})
export class AppComponent implements OnInit {
    public counter: number = 16;
    constructor(private page: Page){}

    ngOnInit() {
        this.page.actionBarHidden = true;
    }

    public get message(): string {
        if (this.counter > 0) {
            return this.counter + " taps left";
        } else {
            return "Hoorraaay! \nYou are ready to start building!";
        }
    }

    public onTap() {
        this.counter--;
    }
}
