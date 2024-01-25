import { Component, Input } from '@angular/core';
import { ReactiveFormsModule, UntypedFormGroup } from '@angular/forms';

@Component({
  selector: 'app-general-form',
  standalone: true,
  imports: [ReactiveFormsModule],
  template: `
                <div [formGroup]="generalForm">
                  <!-- Name -->
                <div class="mb-3" >
                <div formGroupName="formDetails">
                    <label class="text-sm text-gray-700">{{nameLabel}}&nbsp;
                     @if(nameIsRequired){
                      <span class="text-red-500">*</span>
                    }
                    </label>
                    <input
                      id=""
                      type="text"
                      class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 mt-1"
                      placeholder="{{namePlaceholder}}"
                      formControlName="name"
                      [required]="nameIsRequired" />     

                      @if (this.generalForm.get('formDetails.name')?.invalid && (this.generalForm.get('formDetails.name')?.touched || this.generalForm.get('formDetails.name')?.dirty)) {
                      <div class="text-red-500">
                          Please enter a name for the category
                      </div>
                      }
                    @if(nameHelpfulText && nameHelpfulText.length > 0){
                      <small class="text-gray-400 text-xs">{{nameHelpfulText}}</small>
                    }
                    </div>
                </div>

                <!-- Description -->
                <div class="mb-3" formGroupName="formDetails">
                    <label class="text-sm text-gray-700">{{descriptionLabel}}
                    @if(descriptionIsRequired){
                      <span class="text-red-500">*</span>
                    }
                  </label>
                    <textarea 
                      id=""
                      rows="4"
                      class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-indigo-500 focus:border-indigo-500"
                      placeholder="{{descriptionPlaceholder}}"
                      formControlName="description"
                      [required]="descriptionIsRequired"></textarea>
                          
                    @if(descriptionHelpfulText && descriptionHelpfulText.length > 0){
                      <small class="text-gray-400 text-xs">{{descriptionHelpfulText}}</small>
                    }
                </div>
                </div>
  `,
  styles: ''
})
export class GeneralFormComponent {

  //Name
  @Input() generalForm: UntypedFormGroup = new UntypedFormGroup({});

  @Input() nameLabel: string = '';
  @Input() namePlaceholder: string = '';
  @Input() nameIsRequired: boolean = false;
  @Input() nameHelpfulText: string = '';

  //Description  
  @Input() descriptionLabel: string = '';
  @Input() descriptionPlaceholder: string = '';
  @Input() descriptionIsRequired: boolean = false;
  @Input() descriptionHelpfulText: string = '';

}
