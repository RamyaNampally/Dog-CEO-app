import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  private localURL = 'https://dog.ceo/api/';

  constructor(private http: HttpClient) { }

  /**
   * To get List of All Dog Breeds
   * @returns Object
   */
  public getListOfDogBreeds() {
    return this.http.get(this.localURL + "breeds/list/all");
  }

  /**
   * To Get random Image of the selected Dog Breeds  
   * @returns Object
   */
  public getRandonImageOfDogBreed(dogBreed: string) {
    return this.http.get(this.localURL + "breed/" + dogBreed + "/images/random");
  }

  /**
   * To Get random Dog Breeds and its image
   * @returns Object
   */
  public getRandomDogBreed() {
    return this.http.get(this.localURL + "breeds/image/random");
  }
}
