import { Component, OnInit, Input } from '@angular/core';
import { PetService } from '../../service/pet.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-about-pet',
  templateUrl: './about-pet.component.html',
  styleUrls: ['./about-pet.component.css']
})

export class AboutPetComponent implements OnInit {
  headline = "Details about ";
  private pet:any;
  

  constructor(private route: ActivatedRoute, private router: Router, private ps: PetService) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.ps.find(params.id, (data) => {
        this.pet = data;
      })
    });
  };

  like(){
    this.ps.like(this.pet._id, (data)=>{
      if(data.errors){
      }else{
        this.router.navigate(["/"])
      }
    });
  }
  
  destroy(){
    this.ps.destroy(this.pet, (data)=>{
      console.log(data);
      if(data.errors){
      }else{
        this.router.navigate(["/"])
      }
    })
  }



}
