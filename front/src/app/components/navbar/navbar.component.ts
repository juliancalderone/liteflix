import { Component, OnInit, TemplateRef } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { LiteflixService } from 'src/app/services/liteflix.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';


interface HtmlInputEvent extends Event {
  target: HTMLInputElement & EventTarget;
}

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  public movieForm: FormGroup;
  photoSelected: string | ArrayBuffer;

  public loadingMovie;
  public message;
  modalRef: BsModalRef;
  file: File;

  public selectedOption: string;

  categories = [
    { value: 1, label: 'Acción' },
    { value: 2, label: 'Suspenso' },
    { value: 3, label: 'Terror' },
    { value: 4, label: 'Documentales' },
    { value: 5, label: 'Animación' },
  ];

  constructor(
    private modalService: BsModalService,
    private liteflix: LiteflixService
  ) {}

  initForm() {
    this.movieForm = new FormGroup({
      title: new FormControl('', [Validators.required]),
      category: new FormControl('', [Validators.required]),
      photoInput: new FormControl('', [Validators.required]),
    });
  }

  handleStatusChange(event) {
    this.selectedOption = event[0].value;
  }

  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }

  onPhotoSelected(event: HtmlInputEvent): void {
    if (event.target.files && event.target.files[0]) {
      this.file = <File>event.target.files[0];
      // image preview
      const reader = new FileReader();
      reader.onload = (e) => (this.photoSelected = reader.result);
      reader.readAsDataURL(this.file);
    }
  }

  uploadMovie(title, category) {
    this.loadingMovie = true;
    this.liteflix
      .createNewMovie(title.value, category.value, this.file)
      .subscribe(
        (res) => {
          this.loadingMovie = false;
          this.message = true;
          console.log(res);
          setTimeout(function () {
            location.reload();
          }, 2000);
        },
        (err) => console.log(err)
      );
    return false;
  }

  ngOnInit() {
    this.initForm();
  }
}
