import { Component } from '@angular/core';
import {
  faSearch, faBell, faCommentAlt,faUserCircle,faLandmark,faArrowUp,faWallet,faBalanceScale
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
  faArrowUp = faArrowUp;
  faWallet = faWallet;
  faBalanceScale= faBalanceScale;

  itemList : any[] = [1,2,3,4,5,6,7];
}
