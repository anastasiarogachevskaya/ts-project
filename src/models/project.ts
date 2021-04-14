namespace App {
  // Project Class
  // reason for being a class to be able to instantiate it
  export enum ProjectStatus { Active, Finished };
  export class Project {
    constructor(
      public id: string,
      public title: string,
      public description: string,
      public people: number,
      public status: ProjectStatus) {
      
    }
  }
}