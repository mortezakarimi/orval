/*
 * Generated by orval v3.2.3 🍺
 * Do not edit manually.
 * Swagger Petstore
 * OpenAPI spec version: 1.0.0
 */
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CreatePetsBody, ListPetsParams, Pet, Pets } from '../../model';
import listPetsMutator from './../../../../src/api/mutator/response-type';

@Injectable()
export class PetsService {
  constructor(private http: HttpClient) {}
  listPets(params?: ListPetsParams, version: number = 1) {
    return listPetsMutator<Pets>(
      { url: `/v${version}/pets`, method: 'get', params },
      this.http,
    );
  }
  createPets(createPetsBody: CreatePetsBody, version: number = 1) {
    return this.http.post<unknown>(`/v${version}/pets`, createPetsBody);
  }
  showPetById(petId: string, version: number = 1) {
    return this.http.get<Pet>(`/v${version}/pets/${petId}`);
  }
}