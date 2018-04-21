import { Component, OnInit } from '@angular/core';
import { PetService } from '../../service/pet.service'

@Component({
  selector: 'app-dash',
  templateUrl: './dash.component.html',
  styleUrls: ['./dash.component.css']
})

export class DashComponent implements OnInit {
  headline = "These pets are looking for a home!";
  private pets:any;

  constructor(private ps: PetService) { }

  ngOnInit() {
    this.ps.all((data)=>{
      console.log(data);
      this.pets = data;
    })
  }

}
