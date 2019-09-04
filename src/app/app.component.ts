import { Component } from "@angular/core";
import { ICurrentShow } from "./icurrent-show";
import { ShowService } from "./show/show.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  title = "TVshow-web-app";
  currentShow: ICurrentShow;
  constructor(private ShowService: ShowService) {}
  doSearch(searchValue) {
    const userInput = searchValue.trim();
    this.ShowService.getCurrentTVshow(userInput).subscribe(
      data => (this.currentShow = data)
    );
  }
}
