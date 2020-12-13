import { Component } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
 
})

export class AppComponent {
  title = 'project11';
  detectors = [];
  randomBL(){
      let tf =Boolean(Math.round(Math.random())); 
      return tf;
    }
  ngOnInit() {
   for(let i= 1;i<=10;i++)
      {this.detectors.push({id: i, name: 'Name'+i, status: this.randomBL()});}
      
    }
   create(NameInput){
     let c = 0;
     let len =  this.detectors.length -1;
     if(this.detectors[len])
     c = this.detectors[len].id+1;
     else c = 1;
    {this.detectors.push({id: c, name: NameInput.value, status: this.randomBL()});}
      NameInput.value ='';
   }
   delete(id_click){
   
     let findIndex = this.detectors.findIndex(detector => detector.id == id_click);
this.detectors.splice(findIndex,1)

   }

}
