import { Component, Input, OnInit } from "@angular/core";
import { ICurrentShow } from "../icurrent-show";

@Component({
  selector: "app-current-show",
  templateUrl: "./current-show.component.html",
  styleUrls: ["./current-show.component.css"]
})
export class CurrentShowComponent implements OnInit {
  @Input() current: ICurrentShow;
  constructor() {}
  ngOnInit() {}
}
