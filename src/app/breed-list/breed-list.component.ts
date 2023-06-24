import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';

@Component({
  selector: 'app-breed-list',
  templateUrl: './breed-list.component.html',
  styleUrls: ['./breed-list.component.css']
})
export class BreedListComponent implements OnInit {

  public dogBreedsList: any = [];
  public dogBreed: string = "";
  public dogImage: string = "";
  public errorMsg: string = "";
  private static ERROR_MSG = "Something went wrong. Please try again!!";

  ngOnInit(): void {
    this.toGetListOfAllDogBreeds();
  }
  constructor(private appService: AppService) { }
  /**
   * To Get the List of All Dog Breeds from Rest API - https://dog.ceo/api/breeds/list/all
   * @returns Object
   * @error String
   */
  private toGetListOfAllDogBreeds() {
    this.appService.getListOfDogBreeds().subscribe((data: any) => {
      if (data && data.status === "success") {
        this.dogBreedsList = data.message;
        this.dogBreed = Object.keys(this.dogBreedsList)[0];
        this.toFetchDogBreed();
      } else {
        this.errorMsg = BreedListComponent.ERROR_MSG;
      }
    }, (error) => {
      this.errorMsg = BreedListComponent.ERROR_MSG;
    });
  }
  /**
   * To Get the random image of the selected dog breed from Rest API - https://dog.ceo/api/breed/+dogBreed+/images/random.
   * @param dogBreed as string
   * @returns Object
   * @error String
   */
  public toFetchDogBreed() {
    if (this.dogBreed) {
      this.appService.getRandonImageOfDogBreed(this.dogBreed).subscribe((data: any) => {
        if (data && data.status === "success") {
          this.dogImage = data.message;
        } else {
          this.errorMsg = BreedListComponent.ERROR_MSG;
        }
      }, (error) => {
        this.errorMsg = BreedListComponent.ERROR_MSG;
      });
    }
  }
}
