import { Component, OnInit, Input } from '@angular/core';
import { PetService } from '../../service/pet.service';
import { ActivatedRoute, Router, Params } from '@angular/router';

@Component({
  selector: 'app-edit-pet',
  templateUrl: './edit-pet.component.html',
  styleUrls: ['./edit-pet.component.css']
})

export class EditPetComponent implements OnInit {
  headline = "Edit this pet";
  private pet : any;

  constructor(private ps:PetService, private router:Router, private route:ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.ps.find(params.id, (data) => {
        this.pet = data;
      })
    });
  };


  update(){
    this.ps.update(this.pet, (data)=>{
      console.log(data);
      if(data.errors){
      }else{
        this.router.navigate(["/"])
      }
    })
  }





}
