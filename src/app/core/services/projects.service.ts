import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

export interface Project {
  id: string;
  title: string;
  description: string;
  category: 'game-dev';
  image: string;
}

@Injectable({
  providedIn: 'root', // ✅ makes it a singleton app-wide
})
export class ProjectsService {
  private projects: Project[] = [
    {
      id: 'aherosjourney',
      title: "A Hero's Journey RPG",
      description:
        'An immersive RPG adventure game built with RPG Maker VX. Features engaging storylines, character interactions, and multiple scenarios that take players through an epic journey with rich dialogue and exploration mechanics.',
      category: 'game-dev',
      image: '/logos/rpg-maker-vx-logo.jpg',
    },
    {
      id: 'averysadventure',
      title: "Avery's Adventure",
      description:
        'A platformer game developed in Scratch featuring engaging gameplay mechanics, multiple levels, and a compelling adventure narrative. Players guide Avery through various challenges and obstacles to reach the end goal.',
      category: 'game-dev',
      image: '/logos/scratch-logo.jpg',
    },
    {
      id: 'ballrolling',
      title: 'Unity Ball Rolling Game',
      description:
        'A physics-based ball rolling game developed in Unity. Features challenging levels, win/lose conditions, and smooth gameplay mechanics. Players navigate a ball through various obstacles and terrain to complete objectives.',
      category: 'game-dev',
      image: '/logos/unity-logo.png',
    },
  ];

  // ✅ returns all projects
  getAllProjects(): Observable<Project[]> {
    return of(this.projects);
  }

  // ✅ return one project by ID (for detail pages)
  getProjectById(id: string): Observable<Project | undefined> {
    return of(this.projects.find((p) => p.id === id));
  }
}
