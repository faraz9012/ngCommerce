import { Component, Input, inject } from '@angular/core';
import { ReactiveFormsModule, UntypedFormGroup } from '@angular/forms';

import { PictureService } from '../../../../../services/picture.service';
import { FileUpload } from '../../../models/fileUpload';
import { SpinnerComponent } from '../../../../../shared/spinner/spinner.component';

@Component({
  selector: 'app-file-upload',
  standalone: true,
  imports: [ReactiveFormsModule, SpinnerComponent],
  template: `
   @if(isPictureLoading){
    <app-spinner></app-spinner>
  }
  @if(!isPictureLoading){
    
  <div [formGroup]="fileUpload">
    <div class="flex items-center justify-center w-full">
    @if(allowMultipleUploads) {
      @if(multipleFilesUpload.length <= 0){
        <label for="dropzone-file-{{patchValue}}"
                class="flex flex-col items-center justify-center w-full h-54 max-h-52 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 ">
                <div class="flex flex-col items-center justify-center pt-5 pb-6">
                    <svg class="w-8 h-8 mb-4 text-gray-500 " aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 16">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                            stroke-width="2"
                            d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2" />
                    </svg>
                    <p class="mb-2 text-sm text-gray-500 "><span
                            class="font-semibold">Click
                            to
                            upload</span></p>
                    <p class="text-xs text-gray-500 text-center">{{uploadHelpfulText}}</p>
                </div>
                <input id="dropzone-file-{{patchValue}}" type="file" class="hidden" (change)="onFileSelected($event)" accept="{{fileType}}" [attr.multiple]="allowMultipleUploads ? 'multiple': ''" />
            </label>
      }
      @else {
        @for(item of multipleFilesUpload; track item.imageId) {
          <div class="relative me-2">
            <button class="absolute right-[-5px] top-[-10px] bg-red-700 text-white rounded-full p-1 cursor-pointer" (click)="removeFile(item)">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-3 w-3" fill="currentColor" viewBox="0 0 384 512">
                <path d="M376.6 84.5c11.3-13.6 9.5-33.8-4.1-45.1s-33.8-9.5-45.1 4.1L192 206 56.6 43.5C45.3 29.9 25.1 28.1 11.5 39.4S-3.9 70.9 7.4 84.5L150.3 256 7.4 427.5c-11.3 13.6-9.5 33.8 4.1 45.1s33.8 9.5 45.1-4.1L192 306 327.4 468.5c11.3 13.6 31.5 15.4 45.1 4.1s15.4-31.5 4.1-45.1L233.7 256 376.6 84.5z"/>
              </svg>
            </button>
            <img id="{{item.imageId}}" src="{{item.srcAttribute}}" class="rounded-md shadow object-cover object-center" style="width: 250px; height:150px;" />
          </div>
          }
          <label for="dropzone-file-{{patchValue}}"
                class="flex flex-col items-center justify-center w-[150px] h-54 max-h-52 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 ">
                <div class="flex flex-col items-center justify-center pt-5 pb-6">
                    <svg class="w-8 h-8 mb-4 text-gray-500 " aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 16">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                            stroke-width="2"
                            d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2" />
                    </svg>
                </div>
                <input id="dropzone-file-{{patchValue}}" type="file" class="hidden" (change)="onFileSelected($event)" accept="{{fileType}}" [attr.multiple]="allowMultipleUploads ? 'multiple': ''" />
            </label>
        }
      }
    @else {
      @if(srcAttribute.length <= 0){
        <label for="dropzone-file-{{patchValue}}"
            class="flex flex-col items-center justify-center w-full h-54 max-h-52 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 ">
            <div class="flex flex-col items-center justify-center pt-5 pb-6">
                <svg class="w-8 h-8 mb-4 text-gray-500 " aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 16">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                        stroke-width="2"
                        d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2" />
                </svg>
                <p class="mb-2 text-sm text-gray-500 "><span
                        class="font-semibold">Click
                        to
                        upload</span></p>
                <p class="text-xs text-gray-500 text-center">{{uploadHelpfulText}}</p>
            </div>
            <input id="dropzone-file-{{patchValue}}" type="file" class="hidden" (change)="onFileSelected($event)" accept="{{fileType}}" [attr.multiple]="allowMultipleUploads ? 'multiple': ''" />
        </label>
        }
        @else {
          <div class="relative">
            <button class="absolute right-[-5px] top-[-10px] bg-red-700 text-white rounded-full p-1 cursor-pointer" (click)="this.srcAttribute = '';">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-3 w-3" fill="currentColor" viewBox="0 0 384 512">
                <path d="M376.6 84.5c11.3-13.6 9.5-33.8-4.1-45.1s-33.8-9.5-45.1 4.1L192 206 56.6 43.5C45.3 29.9 25.1 28.1 11.5 39.4S-3.9 70.9 7.4 84.5L150.3 256 7.4 427.5c-11.3 13.6-9.5 33.8 4.1 45.1s33.8 9.5 45.1-4.1L192 306 327.4 468.5c11.3 13.6 31.5 15.4 45.1 4.1s15.4-31.5 4.1-45.1L233.7 256 376.6 84.5z"/>
              </svg>
            </button>
            <img id="{{imageId}}" src="{{srcAttribute}}" class="rounded-md shadow" />
          </div>
        }

    }
    </div>
  </div>
  }
`,
  styles: ``
})
export class FileUploadComponent {

  //Name
  @Input() fileUpload: UntypedFormGroup = new UntypedFormGroup({});
  @Input() fileType: string = '';
  @Input() uploadHelpfulText: string = '';
  @Input() patchValue: string = '';
  @Input() allowMultipleUploads: boolean = false;

  srcAttribute: string = '';
  multipleFilesUpload: { srcAttribute: string, imageId: number }[] = [];
  imageId: number = 0;
  isPictureLoading: boolean = false;

  _pictureService = inject(PictureService);

  async onFileSelected(event: any): Promise<void> {
    
    this.isPictureLoading = true;
    const files: FileList = event.target.files;
    if (!this.allowMultipleUploads && files.length > 0) {
      const selectedFile: File = files[0];

      if (selectedFile.type.startsWith('image/')) {
        await this.uploadPicture(files[0])

        if (!files[0]) return;
      }
    }
    else{
        for (let i = 0; i < files.length; i++) {
          const selectedFile: File = files[i];
    
          if (selectedFile.type.startsWith('image/')) {
            await this.uploadPicture(selectedFile)
    
          }
      }
    }
  }

  async uploadPicture(picture: any) {
    if (picture) {
      this._pictureService.uploadPicture(picture).subscribe(
        (response: FileUpload) => {
          if (response && response.srcAttribute)
            if(!this.allowMultipleUploads) {
              this.srcAttribute = response.srcAttribute
              this.imageId = response.id
              this.fileUpload.patchValue({
                [this.patchValue]: this.imageId
              })
            }
            else {
              const uploadedFile = { srcAttribute: response.srcAttribute, imageId: response.id };
              this.multipleFilesUpload.push(uploadedFile);
              this.fileUpload.patchValue({
                [this.patchValue]: uploadedFile.imageId
              })
              console.log(this.multipleFilesUpload);
              
            }

            setTimeout(() => {
            this.isPictureLoading = false;
            }, 1000);

        }
      );
    }
  }

  removeFile(file: { srcAttribute: string, imageId: number }): void {
    const index = this.multipleFilesUpload.indexOf(file);
    if (index !== -1) {
      this.multipleFilesUpload.splice(index, 1);
      this.fileUpload.patchValue({
        [this.patchValue]: this.multipleFilesUpload.map(uploadedFile => uploadedFile.imageId)
      });
    }
  }
}