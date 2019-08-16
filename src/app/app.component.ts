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

  noToLetterArray : Array<string> = [
    '1',
    'ABC',
    'DEF',
    'GHI',
    'JKL',
    'MNO',
    'PQRS',
    'TUV',
    'WXYZ',
    '*',
    '0',
    '#',
  ];

  ngOnInit() {

      for(var i in this.arrayOfSuperhero){
        let superheroCharArray=this.arrayOfSuperhero[i].split('')
        let code=''
        for(var j in superheroCharArray){
          for(var k in this.noToLetterArray){
            if(this.noToLetterArray[k].match(superheroCharArray[j])){
              code=code+(parseInt(k)+1)
              break;
            }
          }

        }
        this.mapCodeToSuperhero.set(code,this.arrayOfSuperhero[i])
      }
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
      if(code!=='#'){
        this.error=true;
        this.errorCode='Please enter \'space\' after \'0\' then enter code';
        this.code=''
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
        this.code=''
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
