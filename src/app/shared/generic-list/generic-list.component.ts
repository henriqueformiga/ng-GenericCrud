import { Component, Input, OnInit } from '@angular/core';

type GenericListAction = {
  show: boolean;
  url?: string;
};

type GenericListColumn<T> = {
  ordered?: boolean;
  attribute: keyof T;
  title: string;
  className?: string;
};

export type GenericListOptions<T> = {
  tableConfig: {
    items: any[];
    columns: GenericListColumn<T>[];
    actions: {
      delete: boolean;
      inactive: boolean;
      active: boolean;
      view: boolean;
      edit: boolean;
    };
  };
};

@Component({
  selector: 'app-generic-list',
  templateUrl: './generic-list.component.html',
  styleUrls: ['./generic-list.component.css'],
})
export class GenericListComponent implements OnInit {
  @Input() canSubmit: boolean = true;

  @Input() options: GenericListOptions<any>;

  constructor() {}

  get tableConfig() {
    return this.options?.tableConfig;
  }

  ngOnInit() {}
}
