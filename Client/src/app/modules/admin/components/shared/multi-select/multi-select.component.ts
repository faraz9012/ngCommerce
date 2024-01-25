import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule, ReactiveFormsModule, UntypedFormGroup } from '@angular/forms';
import { SearchPipe } from './search.pipe';

@Component({
    selector: 'app-multi-select',
    standalone: true,
    imports: [ReactiveFormsModule, FormsModule, SearchPipe],
    template: `
    <div [formGroup]="multiSelect">
        <button id="multi-select-Button" data-dropdown-toggle="multi-select" data-dropdown-placement="bottom"
            class="text-gray-700 border mt-3 w-full focus:ring-4 focus:outline-none focus:ring-indigo-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex justify-between items-center"
            type="button">{{label}}<svg class="w-2.5 h-2.5 ms-3" aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="m1 1 4 4 4-4" />
            </svg>
        </button>

        <!-- Dropdown menu -->
        <div id="multi-select" class="z-10 hidden bg-white rounded-lg shadow w-60 " formGroupName="{{groupName}}">
            <div class="p-3">
                <label for="input-group-search" class="sr-only">Search</label>
                <div class="relative">
                    <div class="absolute inset-y-0 rtl:inset-r-0 start-0 flex items-center ps-3 pointer-events-none">
                        <svg class="w-4 h-4 text-gray-500 " aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                        </svg>
                    </div>
                    <input type="text" id="input-group-search" [(ngModel)]="search" [ngModelOptions]="{standalone: true}"
                        class="block w-full p-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-indigo-500 focus:border-indigo-500 "
                        placeholder="Search for category">
                </div>
            </div>
            <ul class="h-48 px-3 pb-3 overflow-y-auto text-sm text-gray-700 "
                aria-labelledby="multi-select-Button">
                @if((dataSource | searchList: search).length){
                    
                    @for(item of dataSource | searchList: search; track item){
                        <li>
                            <div class="flex items-center ps-2 rounded hover:bg-gray-100 ">
                                <input id="{{item.id}}" type="checkbox" [value]="item.name"
                                    class="w-4 h-4 text-indigo-600 bg-gray-100 border-gray-300 rounded focus:ring-indigo-500"
                                    formControlName="{{controlName}}"
                                    (change)="toggleSelection(item.id)">
                                <label for="checkbox-item-11"
                                    class="w-full py-2 ms-2 text-sm font-medium text-gray-900 rounded ">
                                    {{item.name}}
                                </label>
                            </div>
                        </li>
                    }
                }
                @else {
                    
                <li class="flex justify-center items-center">
                    <label class="w-full py-2 text-sm font-medium text-gray-500 text-center">No results found</label>
                </li>
                }
            </ul>
        </div>

        <small class="text-gray-400 text-xs">{{helpfulText}}</small>
    </div>
  `,
    styles: ``
})
export class MultiSelectComponent {

    @Input() multiSelect: UntypedFormGroup = new UntypedFormGroup({});
    @Input() label: string = '';
    @Input() helpfulText: string = '';
    @Input() groupName: string = '';
    @Input() controlName: string = '';
    @Input() dataSource: any = [];

    @Output() selectedIdsChange: EventEmitter<string[]> = new EventEmitter<string[]>();

    search = '';
    isSelected: string[] = [];

    toggleSelection(itemId: string): void {
        const index = this.isSelected.indexOf(itemId);
      
        if (index === -1) {
          // Item is not in the array, add it
          this.isSelected.push(itemId);
        } else {
          // Item is in the array, remove it
          this.isSelected.splice(index, 1);
        }
        console.log(this.isSelected);
        
      
        this.selectedIdsChange.emit(this.isSelected);
      }
}
