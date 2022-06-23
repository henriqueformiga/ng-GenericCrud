import { Component, OnInit } from '@angular/core';
import { GenericListOptions } from '../shared/generic-list/generic-list.component';

type UsuarioListDto = {
  id: number;
  name: string;
  age: number;
};

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css'],
})
export class UsuarioComponent implements OnInit {
  items: UsuarioListDto[] = [
    { id: 1, name: 'Rickson', age: 21 },
    { id: 2, name: 'Dani', age: 32 },
  ];
  options: GenericListOptions<UsuarioListDto> = {
    tableConfig: {
      items: this.items,
      columns: [
        { title: 'ID', attribute: 'id' },
        { title: 'Nome', attribute: 'name' },
        { title: 'Idade', attribute: 'age', className: 'bg-red' },
      ],
      actions: {
        delete: false,
        inactive: true,
        active: true,
        view: true,
        edit: false,
      },
    },
  };
  constructor() {}

  ngOnInit() {}
}
