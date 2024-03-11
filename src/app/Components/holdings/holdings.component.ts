import { Component } from '@angular/core';
import {
  faSearch, faBell, faCommentAlt,faUserCircle,faLandmark
} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-holdings',
  templateUrl: './holdings.component.html',
  styleUrls: ['./holdings.component.scss']
})
export class HoldingsComponent {

  faSearch = faSearch;
  faBell = faBell;
  faCommentAlt = faCommentAlt;
  faUserCircle = faUserCircle;
  faLandmark = faLandmark;
}
