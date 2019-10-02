import { Time } from "@angular/common";

export interface ICurrentShow {
  channel: number,
  showname: string,
  airdate: string,
  time: string,
  days: [string],
  showimage: string,
  showdescription: string
}
