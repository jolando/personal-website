import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CtaComponent } from './components/home/cta/cta.component';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './components/home/home.component';
import { FooterComponent } from './components/footer/footer.component';
import { ImprintComponent } from './components/imprint/imprint.component';
import { DataprivacyComponent } from './components/dataprivacy/dataprivacy.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ContactComponent } from './components/home/contact/contact.component';
import { ProgressBarComponent } from './components/progress-bar/progress-bar.component';
import { ProjectsComponent } from './components/home/projects/projects.component';
import { AboutComponent } from './components/home/about/about.component';
import { WorkComponent } from './components/home/work/work.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { SkillsComponent } from './components/home/skills/skills.component';
import { FadeInAnimationDirective } from './directive/gsap/fade-in.directive';
import { MomentumDirective } from './directive/gsap/momentum.directive';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { NgsRevealModule } from 'ngx-scrollreveal';

// import { CoreDirective } from './directive/gsap/core.directive';

@NgModule({
  declarations: [
    AppComponent,
    CtaComponent,
    HeaderComponent,
    HomeComponent,
    FooterComponent,
    ImprintComponent,
    DataprivacyComponent,
    ContactComponent,
    ProgressBarComponent,
    ProjectsComponent,
    AboutComponent,
    WorkComponent,
    SkillsComponent,
    FadeInAnimationDirective,
    MomentumDirective,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    FormsModule,

    MatButtonModule,
    MatMenuModule,
    MatToolbarModule,
    MatIconModule,
    MatCardModule,

   NgsRevealModule
  ],
  exports: [
    MatButtonModule,
    MatMenuModule,
    MatToolbarModule,
    MatIconModule,
    MatCardModule,
    MomentumDirective,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
