import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.scss'],
})
export class AccountComponent implements OnInit {

  formAccount: FormGroup

  constructor(
    private fb: FormBuilder,
    private modalCtrl: ModalController
  ) { }

  ngOnInit() {
    this.load();
  }

    load = () => {
      this.formAccount = this.fb.group({
        id: ['', Validators.required],
        email: ['', Validators.email],
        name: ['', Validators.required],
        phone: ['', Validators.required],
      });
    }

    onSubmit = () => console.log('object');
    onClose = () => this.modalCtrl.dismiss();
}
