import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-player",
  templateUrl: "./player.component.html",
  styleUrls: ["./player.component.scss"],
})
export class PlayerComponent implements OnInit {
  @Input() playListHeight: any = "300px";
  get scrollHeight() {
    return this.playListHeight.replace("px", "") - 140;
  }
  currentSong = {
    name: "Somebody you know",
    length: "04:32",
  };
  songs: any[] = [
    {
      name: "Bad girl",
      length: "04:32",
    },
    {
      name: "Hating on the club",
      length: "04:32",
    },
    {
      name: "Somebody you know",
      length: "04:32",
    },
    {
      name: "Believer",
      length: "04:32",
    },
    {
      name: "Hey ya!",
      length: "04:32",
    },
    {
      name: "Live your life",
      length: "04:32",
    },
    {
      name: "Everything you say",
      length: "04:32",
    },
    {
      name: "In the end",
      length: "04:32",
    },
    {
      name: "Konayuki",
      length: "04:32",
    },
    {
      name: "Take me to church",
      length: "04:32",
    },
    {
      name: "Dreams",
      length: "04:32",
    },
    {
      name: "For you",
      length: "04:32",
    },
    {
      name: "Believer",
      length: "04:32",
    },
    {
      name: "Hey ya!",
      length: "04:32",
    },
    {
      name: "Live your life",
      length: "04:32",
    },
    {
      name: "Everything you say",
      length: "04:32",
    },
    {
      name: "In the end",
      length: "04:32",
    },
    {
      name: "Konayuki",
      length: "04:32",
    },
    {
      name: "Take me to church",
      length: "04:32",
    },
    {
      name: "Dreams",
      length: "04:32",
    },
    {
      name: "For you",
      length: "04:32",
    },
  ];

  constructor() {}

  ngOnInit() {}
}
