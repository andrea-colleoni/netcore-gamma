import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Comment } from 'src/app/model/comment';

@Component({
  selector: 'app-commento',
  templateUrl: './commento.component.html',
  styleUrls: ['./commento.component.css']
})
export class CommentoComponent implements OnInit {

  @Input() commento: Comment;

  commentoForm: FormGroup = this.fb.group({
    id: ['', [Validators.min(0)]],
    postId: ['', [Validators.min(0)]],
    name: ['', [Validators.minLength(5)]],
    email: ['', [Validators.email]],
    body: [{ value: '' }, []],
  });

  constructor(
    private fb: FormBuilder,
  ) { }

  get f() {
    return this.commentoForm?.controls;
  }

  ngOnInit(): void {
    this.f.id.setValue(this.commento.id);
    this.f.postId.setValue(this.commento.postId);
    this.f.name.setValue(this.commento.name);
    this.f.email.setValue(this.commento.email);
    this.f.body.setValue(this.commento.body);

    this.commentoForm.valueChanges.subscribe(val => {
    });
  }

  onSubmit() {
    console.log('submit...', this.commentoForm);
  }

}
