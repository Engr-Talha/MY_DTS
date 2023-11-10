import { Component } from '@angular/core';

@Component({
  selector: 'app-inspector-user-application',
  templateUrl: './inspector-user-application.component.html',
  styleUrls: ['./inspector-user-application.component.scss'],
})
export class InspectorUserApplicationComponent {
  uploadedImages: { url: string; name: string }[] = [];

  onFileChange(event: any) {
    const files = event.target.files;
    if (files) {
      for (let i = 0; i < files.length; i++) {
        const file = files[i];
        const reader = new FileReader();

        reader.onload = () => {
          this.uploadedImages.push({ url: reader.result as string, name: file.name });
        };

        reader.readAsDataURL(file);
      }
    }
  }

  removeImage(index: number) {
    this.uploadedImages.splice(index, 1);
  }
}
