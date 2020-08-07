import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-articles-container",
  templateUrl: "./articles-container.component.html",
  styleUrls: ["./articles-container.component.scss"],
})
export class ArticlesContainerComponent implements OnInit {
  articleList1: any[] = [
    {
      title: "PICK ME UP",
      subtitle: "Got the weather blues?",
      coverImgUrl: "../assets/tony-lee-1475087-unsplash@2x.png",
      avatarImgUrl: "../assets/2@2x.png",
    },
    {
      title: "FEELING FRAGILE",
      subtitle: "Need a little extra love?",
      imageOverlayText: "Overlay",
      coverImgUrl: "../assets/elijah-macleod-654389-unsplash@2x.png",
      avatarImgUrl: "../assets/1@2x.png",
    },
    {
      title: "DEAR DIARY",
      subtitle: "A modern twist on journaling.",
      coverImgUrl: "../assets/judith-prins-1475659-unsplash@2x.png",
      avatarImgUrl: "../assets/2@2x.png",
    },
    {
      title: "SEMINAR",
      subtitle: "Neurogenesis. What is it?",
      coverImgUrl: "../assets/artsy-vibes-1483057-unsplash@2x.png",
      avatarImgUrl: "../assets/1@2x.png",
    },
  ];
  articleList2: any[] = [
    {
      title: "FEELING FRAGILE",
      subtitle: "Need a little extra love?",
      coverImgUrl: "../assets/elijah-macleod-654389-unsplash@2x.png",
      avatarImgUrl: "../assets/1@2x.png",
    },
    {
      title: "DEAR DIARY",
      subtitle: "A modern twist on journaling.",
      coverImgUrl: "../assets/judith-prins-1475659-unsplash@2x.png",
      avatarImgUrl: "../assets/2@2x.png",
    },
    {
      title: "SEMINAR",
      subtitle: "Neurogenesis. What is it?",
      coverImgUrl: "../assets/artsy-vibes-1483057-unsplash@2x.png",
      avatarImgUrl: "../assets/1@2x.png",
    },
  ];

  constructor() {}

  ngOnInit() {}
}
