import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-article",
  templateUrl: "./article.component.html",
  styleUrls: ["./article.component.scss"],
})
export class ArticleComponent implements OnInit {
  @Input() coverImgUrl: string;
  @Input() imageOverlayText: string;
  @Input() extended: boolean = false;
  @Input() title;
  @Input() subtitle;
  @Input() icon: "play" | "add" = "add";
  @Input() avatarImgUrl;

  constructor() {}

  ngOnInit() {}
}
