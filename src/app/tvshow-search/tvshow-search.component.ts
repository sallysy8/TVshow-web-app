import { Component, Output, OnInit, EventEmitter } from "@angular/core";
import { FormControl, Validators } from "@angular/forms";
import { ShowService } from "../show/show.service";
import { debounceTime } from "rxjs/operators";

@Component({
  selector: "app-tvshow-search",
  templateUrl: "./tvshow-search.component.html",
  styleUrls: ["./tvshow-search.component.css"]
})
export class TVShowSearchComponent implements OnInit {
  @Output() searchEvent = new EventEmitter<string>();
  search = new FormControl("", [Validators.minLength(3)]);
  constructor() {}

  ngOnInit() {
    this.search.valueChanges
      .pipe(debounceTime(1000))
      .subscribe((searchValue: string) => {
        if (!this.search.invalid) {
          this.searchEvent.emit(searchValue);
        }
      });
  }
}
