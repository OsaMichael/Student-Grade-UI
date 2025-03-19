import { Component } from '@angular/core';
import { StudentService } from '../student.service';
import { Router } from '@angular/router';

import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatOptionModule } from '@angular/material/core';
import { MatSelectModule } from '@angular/material/select';
import { MatTableModule } from '@angular/material/table';


@Component({
  selector: 'app-fee-payment',
  standalone: true,
  imports: [
   CommonModule, FormsModule, MatInputModule, MatFormFieldModule, MatButtonModule, 
   MatOptionModule, MatSelectModule, MatTableModule
  ],
  templateUrl: './fee-payment.component.html',
  styleUrls: ['./fee-payment.component.css']
})
export class FeePaymentComponent {
  // Model for payment details
  payment: any = {
    studentNumber: '',
    Amount: 0,
    PaymentMethod: '',
    Name:'',
    Email:'',
    Remark:''

  };


  constructor(private studentService: StudentService, private router: Router) {}

  processPayment(): void {
    if (!this.payment.studentNumber || !this.payment.Amount || !this.payment.Email) {
      alert('Please fill all fields');
      return;
    }
    console.log('The payment request', this.payment)
    this.studentService.processPayment(this.payment).subscribe({
      next: (response) => {

        console.log('Payment Initialization Response:', response);

        if (response.url) {
             window.location.href = response.url

             
          //window.open(response.url, '_blank'); // Open Paystack URL in a new tab
         } else {
         alert('Failed to initialize payment.');
        }
      },
      error: (err) => {
        console.error('Error processing payment:', err);
        alert('Payment failed. Please try again.');
      }
    });
  }
}
