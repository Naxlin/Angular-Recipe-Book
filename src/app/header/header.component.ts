import { Component } from '@angular/core';
import { DataStorageService } from '../shared/data-storage.service';

@Component ({
    selector: 'rb-header',
    templateUrl: 'header.component.html',
    styleUrls: []
})
export class HeaderComponent {
    constructor(private dsService: DataStorageService) { }

    onSaveData() {
        this.dsService.storeRecipes();
    }

    onFetchData() {
        this.dsService.fetchRecipes().subscribe();
    }
}