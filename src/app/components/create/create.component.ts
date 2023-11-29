import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Details } from 'src/app/details';
import { DataService } from 'src/app/service/data.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  track: Details = new Details();
  constructor(private dataService: DataService, private router: Router) { }

    ngOnInit(): void{

    }
  
  saveTrack(){
    this.dataService.createTrack(this.track).subscribe ({
      next: (data) =>{
      console.log(data);
      this.goToList();
    },
    error: (error) =>{
      console.log(error);
    } 
  })
};

   goToList(){

    this.router.navigate(['/debtCollection/pull/:month/:year']);
 
  }
  onSubmit(){
    console.log(this.track);
    this.saveTrack();

  }
}

