import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { environment } from "src/environments/environment";
import { ICurrentShow } from "../icurrent-show";
import { map } from "rxjs/operators";

interface ICurrentShowData {
  id: number;
  name: string;
  language: string;
  genres: [];
  status: string;
  runtime: number;
  premiered: Date;
  officialSite: string;
  schedule: {
    time: string;
    days: [string];
  };
  rating: {
    average: number;
  };
  image: {
    medium: string;
  };
  summary: string;
}

@Injectable({
  providedIn: "root"
})
export class ShowService {
  constructor(private httpClient: HttpClient) {}

  getCurrentTVshow(search: string) {

    return this.httpClient
      .get<ICurrentShowData>(
        `${environment.baseUrl}api.tvmaze.com/singlesearch/shows?q=${search}`
      )
      .pipe(map(data => this.transformToICurrentTVshow(data)));
  }

  private transformToICurrentTVshow(data: ICurrentShowData): ICurrentShow {
    return {
      channel: data.id,
      showname: data.name,
      airdate: data.premiered,
      showimage: data.image.medium,
      showdescription: data.summary
    };
  }
}
