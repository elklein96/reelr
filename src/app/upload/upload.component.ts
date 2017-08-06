import { Component, Output, EventEmitter, HostListener } from '@angular/core';

@Component({
  selector: 'upload',
  templateUrl: 'upload.component.html',
  styleUrls: ['upload.component.css']
})
export class UploadComponent{
  @Output() delete: EventEmitter<string> = new EventEmitter<string>();

  uploadedFiles: Array<Object> = [];
  status: Number = 15;

  constructor () { }

  handleFiles(event) {
    const files = event.srcElement.files;
    for (let i = 0; i < files.length; i++) {
      this.uploadedFiles.push(files[i]);
    }
  }

  @HostListener('document:keydown', ['$event'])
  handleKeyboardEvent(event: KeyboardEvent) { 
    if (event.key === 'Escape') {
      this.delete.emit('destroy');
    }
  }
}
