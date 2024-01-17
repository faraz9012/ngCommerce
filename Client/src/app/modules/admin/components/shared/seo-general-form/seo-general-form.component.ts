import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-seo-general-form',
  template: `
                <!-- Name -->
                <div class="mb-3">
                    <label class="text-sm text-gray-700">{{nameLabel}}</label>
                    <input
                      id=""
                      type="text"
                      class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 mt-1"
                      placeholder="{{namePlaceholder}}"
                      [(ngModel)]="name" />     

                    @if(nameHelpfulText && nameHelpfulText.length > 0){
                      <small class="text-gray-400 text-xs">{{nameHelpfulText}}</small>
                    }
                </div>

                <!-- Description -->
                <div class="mb-3">
                    <label class="text-sm text-gray-700">{{descriptionLabel}}</label>
                    <textarea 
                      id=""
                      rows="4"
                      class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-indigo-500 focus:border-indigo-500"
                      placeholder="{{descriptionPlaceholder}}"
                      [(ngModel)]="description"></textarea>
                          
                    @if(descriptionHelpfulText && descriptionHelpfulText.length > 0){
                      <small class="text-gray-400 text-xs">{{descriptionHelpfulText}}</small>
                    }
                </div>

                <!-- Tags -->
                <div class="mb-3">
                    <label class="text-sm text-gray-700">{{tagsLabel}}</label>
                    <input
                      id=""
                      type="text"
                      class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 mt-1"
                      placeholder="{{tagsPlaceholder}}"
                      [(ngModel)]="tags" />     

                    @if(nameHelpfulText && nameHelpfulText.length > 0){
                      <small class="text-gray-400 text-xs">{{tagsHelpfulText}}</small>
                    }
                </div>
  `,
  styles: ``
})
export class SeoGeneralFormComponent {

  //Name
  @Input() nameLabel: string = '';
  @Input() namePlaceholder: string = '';
  @Input() nameHelpfulText: string = '';

  //Description  
  @Input() descriptionLabel: string = '';
  @Input() descriptionPlaceholder: string = '';
  @Input() descriptionHelpfulText: string = '';

  //Tags  
  @Input() tagsLabel: string = '';
  @Input() tagsPlaceholder: string = '';
  @Input() tagsHelpfulText: string = '';

  @Output() seoGeneralFormValues = new EventEmitter<{ name: string, description: string, tags: string }>();

  name: string = '';
  description: string = '';
  tags: string = '';
}
