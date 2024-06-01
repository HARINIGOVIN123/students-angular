import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from 'src/app/data.service';

@Component({
  selector: 'app-screen',
  templateUrl: './screen.component.html',
  styleUrls: ['./screen.component.css']
})
export class ScreenComponent implements OnInit{
  student = {
    dob: '',
    age: 0
  };
  // mark
  sum:number=0;

  marks :any= {
    Tamil:0,
    English:0,
    Maths: 0,
    Science:0,
    Social:0,
  };

  totalMark: number = 0;
  averageMark: number = 0;


  // district
  constructor(private data: DataService, private router:Router) {}

  ngOnInit() {
    this.district = this.data.district();
    this.taluk = this.data.taluk();
  }
  district:any=[];
  taluk:any=[];
  village:any=[];

  onSelect(district:any){
    this.taluk = this.data.taluk().filter(e=> e.id == district.target.value);
    console.log(this.taluk);
  }
  ontaluk(taluk:any){
    this.village = this.data.village().filter(a=>a.name == taluk.target.value);
    console.log(this.village);
  }


// dob calculate
  calculateAge() {
    if (this.student.dob) {
      const today = new Date();
      const birthDate = new Date(this.student.dob);
      let age = today.getFullYear() - birthDate.getFullYear();
      const monthDiff = today.getMonth() - birthDate.getMonth();

      if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
        age--;
      }

      this.student.age = age;
    }
  }

  // Function to calculate total mark
  calculateMark(a:any) {

    this.sum+=parseInt(a);
    this.totalMark = this.sum;
    this.averageMark =this. sum / Object.keys(this.marks).length;
  }
  // acknownledge number
  generateId(name:string):string {
    const initials = name.substring(0,3).toUpperCase();
    const randomNumber = Math.floor(Math.random()*900) +100;
    return `${initials}${randomNumber}`
  }
// popup
  submit(){
    console.log('Submitted value:', this.submit);

    const name = (document.getElementById('name')as HTMLInputElement).value;
    const id= this.generateId(name);
    alert(`sumbited successfully. Your ID is : ${id}`)
    this.router.navigate(['/page']);
  }

  screenObj: any ={
    "name":"string",
    "mobile":"string",
    "dob":"date",
    "age":"number",
    "address":"string",
    "district":"string",
    "taluk":"string",
    "village":"string",
    "tamil":"number",
    "english":"number",
    "maths":"number",
    "science":"number",
    "social":"number",
    "total":"number",
    "average":"number"
  }
}
