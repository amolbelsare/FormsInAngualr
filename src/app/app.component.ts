import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'AngularForm';

  contact= new contact;
  ngOnInit(): void {
    this.contact ={
      firstName: "Rakesh",
      lastName: "Singh",
      email: "rakesh.singh.s@gmail.com",
      gender: "male",
      isMarried: true,
      country: "2",
      address: {
        city: "Hyderabad",
        street: "32-3RT S. R. Nagar",
        pincode: "500038"
      }
    }
  }

  countryList:country[] =[
    new country("1", 'India'),
    new country("2", 'USA'),
    new country('3', 'England')
  ];

  onSubmit(contactForm:NgForm){
    console.log(contactForm.value);
  }

  reset(contactForm:NgForm){
    contactForm.resetForm();
  }
}

class country{
  id:string;
  name:string;
  constructor(id:string, name:string){
    this.id = id;
    this.name = name;
  }
}

class contact{
  firstName?: string;
  lastName?:string;
  email?:string;
  gender?:string;
  isMarried?:boolean;
  country?:string;
  address!:{
    city: string;
    street: string;
    pincode: string;
  } 
}

