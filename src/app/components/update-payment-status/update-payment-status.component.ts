import { Component,OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Details } from 'src/app/details';
import { DataService } from 'src/app/service/data.service';

@Component({
  selector: 'app-update-payment-status',
  templateUrl: './update-payment-status.component.html',
  styleUrls: ['./update-payment-status.component.css']
})
export class UpdatePaymentStatusComponent implements OnInit {


  paymentTrackId: number = 0;
  stat: Details = new Details();
  constructor(private dataService: DataService, private route: ActivatedRoute) { }

  ngOnInit(): void {

      // this.paymentTrackId = this.route.snapshot.params['paymentTrackId'];
      // this.dataService.update(this.paymentTrackId).subscribe({
      //   next: (data) => {
      
      //   },
      //   error: (error) => {
      //     console.log(error);
      //   }
      };
    }
  

 