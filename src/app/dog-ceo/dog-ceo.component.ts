import { Component } from '@angular/core';
import { AppService } from '../app.service';

@Component({
  selector: 'app-dog-ceo',
  templateUrl: './dog-ceo.component.html',
  styleUrls: ['./dog-ceo.component.css']
})
export class DogCeoComponent {

  public randomDog: any = [];
  public dogBreed: string = '';
  public errorMsg: string = "";
  private static ERROR_MSG = "Something went wrong. Please try again!!";

  ngOnInit(): void {
    this.togetRandomDogBreed();
  }
  constructor(private appService: AppService) { }
  /**
   * To Get random Dog Breeds and its image from Rest API - https://dog.ceo/api/breeds/image/random
   * @returns Object
   * @error String
   */
  togetRandomDogBreed() {
    this.appService.getRandomDogBreed().subscribe((data: any) => {
      if (data && data['status'] === "success") {
        this.randomDog = data;
        this.dogBreed = this.randomDog['message'];
      } else {
        this.errorMsg = DogCeoComponent.ERROR_MSG;
      }
    }, (error) => {
      this.errorMsg = DogCeoComponent.ERROR_MSG;
    });
  }

}
