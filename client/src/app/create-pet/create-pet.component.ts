import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PetService } from '../../service/pet.service';

@Component({
  selector: 'app-create-pet',
  templateUrl: './create-pet.component.html',
  styleUrls: ['./create-pet.component.css']
})

export class CreatePetComponent implements OnInit {
  private pet:any;
  headline = "Know of a pet needing a home?";
  
  constructor(private ps:PetService, private route:Router, private activated:ActivatedRoute) { }

  init(){
      this.pet = {
        name: "",
        type: "",
        description:"",
        skill1:"",
        skill2:"",
        skill3:"",
        likes: 0,
    };
  }

  ngOnInit() {
    this.init();
  }

  create(){
    this.ps.create(this.pet, (data)=>{
      console.log(data);
      if(data.errors){
      }else{
        this.route.navigate(["/"])
      }
    })
  }

}
