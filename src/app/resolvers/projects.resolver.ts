import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';
import { ProjectsService } from '../core/services/projects.service';

@Injectable({
  providedIn: 'root',
})
export class ProjectsResolver implements Resolve<any> {
  constructor(private projectsService: ProjectsService) {}

  resolve(): Observable<any> {
    return this.projectsService.getAllProjects();
  }
}
