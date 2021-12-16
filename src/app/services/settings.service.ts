import { Injectable } from "@angular/core";
@Injectable()
export class SettingsService {
  constructor() {}

  public getConnectionUrl(): string {
    const url = localStorage.getItem("connection_url");
    if (url !== null) {
      return url;
    }
    return "https://boot2.akroma.org";
  }

  public setConnectionUrl(url: string): string {
    switch (url) {
      case "prod":
        localStorage.setItem("connection_url", "https://boot2.akroma.org");
        break;
      case "test":
        localStorage.setItem("connection_url", "https://test1.akroma.org");
        break;
      default:
        break;
    }
    return url;
  }
}
