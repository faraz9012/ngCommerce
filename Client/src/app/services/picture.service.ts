import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { FileUpload } from '../modules/admin/models/fileUpload';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PictureService {

  baseUrl = environment.apiUrl;
  pictures: FileUpload[] = [];

  constructor(private http: HttpClient) { }

  uploadPicture(picture: File) {

    const formData = new FormData();
    formData.append('file', picture, picture.name);

    return this.http.post<FileUpload>(this.baseUrl + 'picture/upload-picture', formData);
  }

  async getPictureById(id: number) {
    return this.http.get(this.baseUrl + 'picture/' + id);
  }

}
