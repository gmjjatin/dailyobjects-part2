import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'dailyobjects-part2';
  code : string = '';
  error : boolean = false;
  errorCode : string = '';
  resultCode : string = '';
  mapCodeToSuperhero : any = new Map();

  arrayOfSuperhero : Array<string> = [
    'SUPERMAN','THOR','ROBIN','IRONMAN','GHOSTRIDER','CAPTAINAMERICA','FLASH',
    'WOLVERINE',
    'BATMAN','HULK','BLADE','PHANTOM','SPIDERMAN','BLACKWIDOW','HELLBOY','PUNISHER'
  ];

  noToLetterArray : any = {
    'A':2,'B':2,'C':2,
    'D':3,'E':3,'F':3,
    'G':4,'H':4,'I':4,
    'J':5,'K':5,'L':5,
    'M':6,'N':6,'O':6,
    'P':7,'Q':7,'R':7,'S':7,
    'T':8,'U':8,'V':8,
    'W':9,'X':9,'Y':9,'Z':9
  };

  ngOnInit() {
      for(var i in this.arrayOfSuperhero){
        let superheroCharArray=this.arrayOfSuperhero[i].split('')
        let code=''
        for(var j in superheroCharArray){
              code=code+this.noToLetterArray[superheroCharArray[j]]
          }
        this.mapCodeToSuperhero.set(code,this.arrayOfSuperhero[i])
      }
      console.log(this.mapCodeToSuperhero)
    }

  fetchCode(code){
    this.resultCode='';
    if(this.code==''){
      if(code!=='0'){
        this.error=true;
        this.errorCode='Please enter \'0\' first';
        this.code=''
      }
      else{
        this.error=false;
        this.errorCode='';
        this.code=this.code+'0'
      }
    }
    else if(this.code=='0'){
      if(code!==' '){
        this.error=true;
        this.errorCode='Please enter \'space\' after \'0\' then enter code';
      }
      else{
        this.error=false;
        this.errorCode='';
        this.code=this.code+' '
      }

    }
    else{
      if(code==='1'){
        this.error=true;
        this.errorCode='This number can\'t be used in code';
      }
      else{
        this.error=false;
        this.errorCode='';
        this.code=this.code+code
      }
    }
  }

  matchSuperhero(){
    this.code=this.code.split(' ')[1]
    if(this.mapCodeToSuperhero.has(this.code)){
        this.resultCode = 'Following superhero called: '+this.mapCodeToSuperhero.get(this.code);
    }
    else{
        this.resultCode = 'Sorry no superhero found. Try with new code.'
    }
    this.code=''
  }
}
