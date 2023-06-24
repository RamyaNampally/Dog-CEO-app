import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppService } from '../app.service';

@Component({
  selector: 'app-documentation',
  templateUrl: './documentation.component.html',
  styleUrls: ['./documentation.component.css']
})
export class DocumentationComponent implements OnInit {
  public dogBreedsList: any = [];
  public errorMsg: string = "";
  private static ERROR_MSG = "Something went wrong. Please try again!!";

  ngOnInit(): void {
    this.toGetListOfAllDogBreeds();
  }
  constructor(private appService: AppService) {}
  /**
   * To Get the List of All Dog Breeds from Rest API - https://dog.ceo/api/breeds/list/all
   * @returns Object
   * @error String
   */
  private toGetListOfAllDogBreeds() {
    this.appService.getListOfDogBreeds().subscribe((data: any) => {
      if (data && data['status'] === "success") {
        this.dogBreedsList = data;
      } else {
        this.errorMsg = DocumentationComponent.ERROR_MSG;
      }
    }, (error) => {
      this.errorMsg = DocumentationComponent.ERROR_MSG;
    });
  }
}
