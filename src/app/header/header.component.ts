import { Component, EventEmitter, Output } from '@angular/core';

@Component ({
    selector: 'rb-header',
    templateUrl: 'header.component.html',
    styleUrls: []
})
export class HeaderComponent {
    @Output() navigate = new EventEmitter<string>();

    onSelect(feature: string) {
        this.navigate.emit(feature);
    }
}