import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { ICurrentShow } from './icurrent-show';
import { map } from 'rxjs/operators';

interface ICurrentShowData {
  show: {
    name: string,
    language: string,
    status: string,
    runtime: number,
    premiered: Date,
    schedule: {
      time: string,
      days: [string]
    },
    rating: {
      average: number
    },
    network: {
      name: string
    },
    webChannel: {
      name: string
    },
    image: {
      medium: string
    },
    summary: string
  }

}

@Injectable({
  providedIn: 'root'
})
export class ShowService {

  constructor(private httpClient: HttpClient) { }

  getCurrentTVshow(showname: string) {

    return this.httpClient.get<ICurrentShowData>(
      `${environment.baseUrl}api.tvmaze.com/search/shows?q=${showname}`
    ).pipe(map(data => this.transformToICurrentTVshow(data)));

  }

  private transformToICurrentTVshow(data: ICurrentShowData): ICurrentShow {
    return {
      network: data.show.network.name,
      webchannel: data.show.webChannel.name,
      showname: data.show.name,
      airdate: data.show.premiered,
      showimage: data.show.image.medium,
      showdescription: data.show.summary
    }
  }
}
