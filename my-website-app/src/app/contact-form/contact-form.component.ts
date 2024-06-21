import { Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css']
})
export class ContactFormComponent {
  contactForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private dialogRef: MatDialogRef<ContactFormComponent>,
    private snackBar: MatSnackBar,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    this.contactForm = this.fb.group({
      name: ['', Validators.required],
      description: ['', Validators.required]
    });
  }

  ngOnInit(): void {
    this.dialogRef.afterOpened().subscribe(() => {
      const nameInput = document.getElementById('name-input');
      if (nameInput) {
        nameInput.focus();
      }
    });
  }

  onSubmit(): void {
    if (this.contactForm.valid) {
      const { name, description } = this.contactForm.value;
      window.location.href = `mailto:tmaddox@uwo.ca?subject=${name}&body=${description}`;
      this.snackBar.open('Your message has been sent!', 'Close', {
        duration: 3000
      });
      this.dialogRef.close();
    }
  }

  closeForm(): void {
    this.dialogRef.close();
  }
}
