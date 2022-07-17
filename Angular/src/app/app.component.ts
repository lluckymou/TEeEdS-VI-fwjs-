import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormControl,
  FormArray,
  FormBuilder,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'Angular Tabs';
  tabs = [
    {
      name: 'Obs.',
      content: 'Adicione abas pelo formulario a esquerda.'
    }
  ];

  tabsInput: string = '';
  error: string = '';

  tabsAddForm: FormGroup = new FormGroup({});

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.tabsAddForm = this.fb.group({
      tabsInput: this.fb.array([]),
    });
  }

  public get formArrayTabs(): FormArray {
    return this.tabsAddForm.get('tabsInput') as FormArray;
  }

  addNewFields() {
    for (let index = 0; index < parseInt(this.tabsInput); index++) {
      this.formArrayTabs.push(
        this.fb.group({
          name: new FormControl(),
          content: new FormControl(),
        })
      );
    }
  }

  removeTabField(i: number) {
    this.formArrayTabs.removeAt(i);
  }

  saveTabs() {
    this.error = '';

    if (this.tabsAddForm.value.tabsInput.length < 1) {
      this.error = 'Digite o número de guias.';
      return;
    }

    for (
      let index = 0;
      index < this.tabsAddForm.value.tabsInput.length;
      index++
    ) {
      const element = this.tabsAddForm.value.tabsInput[index];
      if (element['name'] == null || element['content'] == null) {
        this.error = 'Preencha todos os campos para continuar.';
        return;
      }
      this.tabs.push(element);
    }
    this.tabsAddForm.reset();
    this.formArrayTabs.reset();
  }
}
