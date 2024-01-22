import { Component, EventEmitter, Input, Output, inject } from '@angular/core';
import { PictureService } from '../../../../../services/picture.service';
import { FileUpload } from '../../../models/fileUpload';

@Component({
  selector: 'app-file-upload',
  template: `
  <div class="flex items-center justify-center w-full">
  <label for="dropzone-file"
      class="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 ">
      <div class="flex flex-col items-center justify-center pt-5 pb-6">
         @if(srcAttribute.length <= 0){
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
          <p class="text-xs text-gray-500 ">SVG, PNG, JPG or GIF (MAX.
              800x400px)
          </p>
         }
         @else {
          <img src="{{srcAttribute}}" />
         }
      </div>
      <input id="dropzone-file" type="file" class="hidden" alt="{{altAttribute}}" title="{{titleAttribute}}" (change)="onFileSelected($event)" accept="{{fileType}}" />
  </label>
</div>
`,
  styles: ``
})
export class FileUploadComponent {

  @Input() fileType: string = '';
  @Input() altAttribute: string = '';
  @Input() titleAttribute: string = '';

  srcAttribute: string = '';
  @Output() fileSelected = new EventEmitter<File>();

  _pictureService = inject(PictureService);

  async onFileSelected(event: any): Promise<void> {
    const files: FileList = event.target.files;
    if (files.length > 0) {
      const selectedFile: File = files[0];

      if (selectedFile.type.startsWith('image/')) {
        await this.uploadPicture(files[0])

        if (!files[0]) return;

        this.fileSelected.emit(files[0]);
      }
    }
  }

  async uploadPicture(picture: any) {
    if (picture) {
      this._pictureService.uploadPicture(picture).subscribe(
        (response: FileUpload) => {
          if (response && response.srcAttribute)
            this.srcAttribute = response.srcAttribute
        }
      );
    }
  }

  async getPicture(id: number) {
    this._pictureService.getPictureById(id);
  }

}