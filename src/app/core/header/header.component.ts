import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';

import { DataStorageService } from '../../shared/services/data-storage.service';
import { AuthService } from '../../auth/auth.service';
import * as fromApp from '../../ngrx-store/app.reducers';
import * as fromAuth from '../../auth/ngrx-store/auth.reducers';

@Component({
  selector: 'rb-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  constructor(private dataStorageService: DataStorageService,
    public authService: AuthService,
    private store: Store<fromApp.AppState>) { }

  authState: Observable<fromAuth.State>;

  ngOnInit() {
    this.authState = this.store.select('auth');
  }

  onSaveData() {
    this.dataStorageService.storeRecipes()
      .subscribe(
        (response) => {
          console.log(response);
        }
      );
  }

  onGetData() {
    this.dataStorageService.getRecipes();
  }

  onLogout() {
    this.authService.logout();
  }
}
