import {IShowService} from './show.service';
import {ICurrentShow} from '../icurrent-show';
import {of} from 'rxjs';

export class ShowServiceFake implements IShowService{
  private fakeShow: ICurrentShow = {
    channel: 111,
    showname: 'Fake Show Service',
    airdate: '2019-08-25',
    time: '11:00',
    days: ['Sunday'],
    showimage: 'http://static.tvmaze.com/uploads/images/medium_portrait/31/78286.jpg',
    showdescription: 'Unit test'
  }

  public getCurrentTVshow(search: string) {
    return of(this.fakeShow);
  }
}