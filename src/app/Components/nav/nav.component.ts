import { Component } from '@angular/core';
import { faDollarSign , faLeaf, faHome, faNewspaper, faBriefcase} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss'],
})
export class NavComponent {
  home = faHome;
  faDollarSign = faDollarSign;
  faLeaf = faLeaf;
  faNewspaper = faNewspaper;
  faBriefcase = faBriefcase;

  isSpecial: any = true;

  constructor(){
    this.removeActive();
  }

  makeActive() {
    if (this.isSpecial == false) {
      this.isSpecial = !this.isSpecial;
    }
  }

  removeActive() {
    if (this.isSpecial == true) {
      this.isSpecial = !this.isSpecial;
    }
  }
}
