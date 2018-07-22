import { Component, OnInit } from '@angular/core';
import axios from 'axios';
@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  tag='weather'
  url = `https://api.giphy.com/v1/gifs/search?api_key=UsrbTXZTtwKxOd0uMFMT9MYF5e8EY99E&q=${this.tag}`
  Imagearray = [];
  
  constructor() { }

  ngOnInit() {
     this.getImages()
  }
  getImages(){
    axios.get(this.url).then((Images)=>{
      
      this.Imagearray = Images.data['data']
      console.log("alo alo", this.Imagearray)
    }).catch((error)=>{
      console.log(error)
    })
  }

}
