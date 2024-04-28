import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})

export class AppComponent {
  title = 'myapp';
  getName(name:any){
    alert(name)
  }
  displayValue = ""
  getData(val:any){
    console.warn(val)
    this.displayValue = val
  }

  count = 0;
  Counter(val:any){
    val === 'Inc' ? this.count++ : this.count--;
  }

  color="red"
  colorChange(){
    this.color = "green"
  }

  data = "";
  sendData(val:any){
    this.data = val;
  }

  childtoparent:string = "";
  childToParent(item :string){
    console.log(item);
    this.childtoparent = item;
  }
}
