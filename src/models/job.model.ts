import {Entity, model, property} from '@loopback/repository';

@model({settings: {strict: false}})
export class Job extends Entity {
  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<Job>) {
    super(data);
  }
}

export interface JobRelations {
  // describe navigational properties here
}

export type JobWithRelations = Job & JobRelations;
