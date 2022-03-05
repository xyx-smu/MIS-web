import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class LocalStorageService {
  private storage = {};
  private mode: "private" | "normal" = "normal"; // 浏览器是无痕模式还是正常模式

  constructor() {
    try {
      window.localStorage.setItem("", "");
      window.localStorage.removeItem("");
    } catch (err) {
      this.mode = "private";
    }
  }

  getItem(key: string) {
    switch (this.mode) {
      case "normal":
        return window.localStorage.getItem(key);
      case "private":
        if (this.storage[key] === null || this.storage[key] === undefined) {
          return null;
        } else {
          return this.storage[key];
        }
    }
  }

  setItem(key: string, value: any) {
    switch (this.mode) {
      case "normal":
        window.localStorage.setItem(key, value);
        break;
      case "private":
        this.storage[key] = value;
        break;
    }
  }

  removeItem(key: string) {
    switch (this.mode) {
      case "normal":
        window.localStorage.removeItem(key);
        break;
      case "private":
        delete this.storage[key];
        break;
    }
  }

  clear() {
    switch (this.mode) {
      case "normal":
        window.localStorage.clear();
        break;
      case "private":
        this.storage = {};
        break;
    }
  }
}
