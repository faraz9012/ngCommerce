import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-general-form',
  template: `
                <!-- Name -->
                <div class="mb-3">
                    <label class="text-sm text-gray-700">{{nameLabel}}&nbsp;
                     @if(nameIsRequired){
                      <span class="text-red-500">*</span>
                    }
                    </label>
                    <input
                      id="first_name"
                      type="text"
                      class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 mt-1"
                      placeholder="{{namePlaceholder}}"
                      [(ngModel)]="name"
                      [required]="nameIsRequired" />     

                    @if(nameHelpfulText && nameHelpfulText.length > 0){
                      <small class="text-gray-400 text-xs">{{nameHelpfulText}}</small>
                    }
                </div>

                <!-- Description -->
                <div class="mb-3">
                    <label class="text-sm text-gray-700">{{descriptionLabel}}
                    @if(descriptionIsRequired){
                      <span class="text-red-500">*</span>
                    }
                  </label>
                    <textarea 
                      id="message"
                      rows="4"
                      class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-indigo-500 focus:border-indigo-500"
                      placeholder="{{descriptionPlaceholder}}"
                      [(ngModel)]="description" [required]="descriptionIsRequired"></textarea>
                          
                    @if(descriptionHelpfulText && descriptionHelpfulText.length > 0){
                      <small class="text-gray-400 text-xs">{{descriptionHelpfulText}}</small>
                    }
                </div>
  `,
  styles: ''
})
export class GeneralFormComponent {

  //Name
  @Input() nameLabel: string = '';
  @Input() namePlaceholder: string = '';
  @Input() nameIsRequired: boolean = false;
  @Input() nameHelpfulText: string = '';

  //Description  
  @Input() descriptionLabel: string = '';
  @Input() descriptionPlaceholder: string = '';
  @Input() descriptionIsRequired: boolean = false;
  @Input() descriptionHelpfulText: string = '';

  @Output() generalFormValues = new EventEmitter<{ name: string, description: string }>();

  name: string = '';
  description: string = '';
}
