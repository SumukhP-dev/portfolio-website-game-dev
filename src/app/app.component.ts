import { RouterModule } from '@angular/router';
import { Component } from '@angular/core';
import { CoreModule } from './core/core.module';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [RouterModule, CoreModule, CommonModule],
  templateUrl: './app.component.html',
})
export class AppComponent {
  title = 'portfolio';
  isDisabled = false;
}
