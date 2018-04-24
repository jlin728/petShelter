import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable()
export class PetService {

  constructor(private http:HttpClient) { }

  all(cb){
    this.http.get('/api/pets')
    .subscribe(data =>cb(data));
  }

  create(pet, cb){
    this.http.post('/api/pets', pet)
    .subscribe(data=>cb(data));
  }

  find(_id, cb){
    console.log(_id);
    this.http.get('/api/pets/'+ _id)
    .subscribe(data=>cb(data));
  }

  update(pet, cb){
    this.http.put('/api/pets/'+ pet._id, pet)
    .subscribe(data=>cb(data));
  }

  destroy(pet, cb){
    this.http.delete('/api/pets/'+ pet._id)
    .subscribe(data=>cb(data));
  }

  like(pet, cb){
    console.log("pauls service");
    this.http.put('/api/pets/like/'+ pet._id, pet)
    .subscribe(data=>cb(data));
  }


}
