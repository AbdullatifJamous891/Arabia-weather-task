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
     // execute getImages function when page load
     this.getImages()
  };
  getImages(){
    axios.get(this.url).then((res)=>{
      //insert data inside array Imagearray
      console.log("dddddd",res.data.data);
      
      this.Imagearray = res.data['data']
    }).catch((error)=>{
      console.log(error)
    })
  }

}
