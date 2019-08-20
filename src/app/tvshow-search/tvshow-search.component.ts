import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ShowService } from '../show/show.service';


@Component({
  selector: 'app-tvshow-search',
  templateUrl: './tvshow-search.component.html',
  styleUrls: ['./tvshow-search.component.css']
})
export class TVShowSearchComponent implements OnInit {
  search = new FormControl();
  constructor(private ShowService: ShowService) {

   }

  ngOnInit() {
    this.search.valueChanges.subscribe((searchValue: string) =>{
      const userInput = searchValue.trim();
      this.ShowService.getCurrentTVshow(userInput).subscribe(data => console.log(data));
    })
  }


}
