
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { HttpModule, JsonpModule } from '@angular/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './components/app/app.component';
import { CounterComponent } from './components/counter/counter.component';
import { HomeComponent } from './components/home/home.component';
import { ServersComponent } from './components/servers/servers.component';
import { MaterialComponent } from './components/material/material.component';
import { TodoComponent } from './components/todo/todo.component';
import { ListComponent } from './components/list/list.component';
import { DialogComponent, ExampleDialogComponent } from './components/dialog/dialog.component';
import { FormComponent } from './components/form/form.component';
import { FullLandingPhotoComponent } from './components/fullLandingPhoto/fullLandingPhoto.component';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { JokeFormComponent } from './components/joke-form/joke-form.component';
import { JokeComponent } from './components/joke/joke.component';
import { FormsComponent } from './components/forms/forms.component';
import { HttpComponent } from './components/http/http.component';
import { AppTuneComponent } from './components/app-tune/app-tune.component';
import { ArtistAlbumListComponent } from './components/artistAlbumList/artistAlbumList.component';
import { ArtistTrackListComponent } from './components/artistTrackList/artistTrackList.component';
import { ArtistComponent } from './components/artist/artist.component';
import { DefaultPipe } from './pipes/default.pipe';
import { CleanPipe } from './pipes/clean.pipe';

import { CardHoverDirective } from './directives/CardHover.directive';

import { SearchService } from './services/SearchService';

import 'hammerjs';
import { ToastModule } from 'ng2-toastr/ng2-toastr';
import { ToastOptions } from 'ng2-toastr';
import { CustomOption } from './components/todo/todo.component';

import { MatTooltipModule, MatButtonModule, MatCardModule, MatMenuModule, MatToolbarModule} from '@angular/material';
import { MatIconModule, MatSnackBar , MatSnackBarModule} from '@angular/material';
import {  MatDialogModule, MatInputModule, MatSidenavModule, MatFormFieldModule, MatSelectModule} from '@angular/material';


const appRoutes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'counter',      component: CounterComponent },
  { path: 'servers',      component: ServersComponent },
  { path: 'material',      component: MaterialComponent },
  { path: 'list',      component: ListComponent },
  { path: 'dialog',      component: DialogComponent },
  { path: 'form',      component: FormComponent },
  { path: 'photo',      component: FullLandingPhotoComponent },
  { path: 'http',      component: HttpComponent },
  { path: 'tune',      component: AppTuneComponent },
  {
    path: 'artist/:artistId',
    component: ArtistComponent,
    children: [
      {path: '', redirectTo: 'tracks', pathMatch: 'full'},
      {path: 'tracks', component: ArtistTrackListComponent},
      {path: 'albums', component: ArtistAlbumListComponent}
    ]
  },
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  { path: '**', component: HomeComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    CounterComponent,
    HomeComponent,
    ServersComponent,
    MaterialComponent,
    TodoComponent,
    ListComponent,
    DialogComponent,
    ExampleDialogComponent,
    FormComponent,
    FullLandingPhotoComponent,
    SidenavComponent,
    JokeFormComponent,
    JokeComponent,
    CardHoverDirective,
    DefaultPipe,
    CleanPipe,
    FormsComponent,
    HttpComponent,
    AppTuneComponent,
    ArtistAlbumListComponent,
    ArtistComponent,
    ArtistTrackListComponent
  ],
  imports: [
    HttpModule,
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    BrowserAnimationsModule,
    NgbModule.forRoot(),
    MatTooltipModule,
    MatButtonModule,
    MatCardModule,
    MatMenuModule,
    MatToolbarModule,
    MatIconModule,
    ToastModule.forRoot(),
    FormsModule,
    MatSnackBarModule,
    MatDialogModule,
    MatInputModule,
    MatSidenavModule,
    MatFormFieldModule,
    MatSelectModule,
    ReactiveFormsModule,
    JsonpModule
  ],
  entryComponents: [
    ExampleDialogComponent
  ],
  providers: [
    {provide: ToastOptions, useClass: CustomOption},
    SearchService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

