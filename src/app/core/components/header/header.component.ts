import { Component, OnInit } from '@angular/core';
import { RouterLink, RouterModule } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatButtonModule } from '@angular/material/button';
import { CommonModule } from '@angular/common';
import {
  IgxIconModule,
  IgxNavbarModule,
  IgxDropDownModule,
  IgxToggleModule,
  IgxButtonModule,
} from 'igniteui-angular';
import { ProjectsService, Project } from '../../services/projects.service';

@Component({
  selector: 'app-header',
  imports: [
    RouterModule,
    MatButtonModule,
    MatDividerModule,
    MatIconModule,
    CommonModule,
    IgxIconModule,
    IgxNavbarModule,
    IgxDropDownModule,
    IgxToggleModule,
    IgxButtonModule,
  ],
  templateUrl: './header.component.html',
})
export class HeaderComponent implements OnInit {
  gameDevProjects: Project[] = [];

  constructor(private projectsService: ProjectsService) {}

  ngOnInit() {
    this.projectsService.getAllProjects().subscribe((projects) => {
      this.gameDevProjects = projects.filter(
        (p) => p.category === 'game-dev'
      );
    });
  }
}
