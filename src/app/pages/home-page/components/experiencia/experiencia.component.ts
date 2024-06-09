import { Component } from '@angular/core';
import { ListOptionComponent } from '../../../../shared/components/list-option/list-option.component';
import { ListOption } from '../../../../shared/components/list-option/list-options.model';
import { Experiencia } from '../../../../shared/model/experiencia.model';
import { ExperienciaViewComponent } from '../experiencia-view/experiencia-view.component';

@Component({
  selector: 'app-experiencia',
  standalone: true,
  imports: [
    ListOptionComponent,
    ExperienciaViewComponent
  ],
  templateUrl: './experiencia.component.html',
  styleUrl: './experiencia.component.scss'
})
export class ExperienciaComponent {

  public listOptions: ListOption<Experiencia>[] = [
    {

      title: "Upstatement",
      data: {
        cargo: "Dev front end",
        nomeEmpresa: "Sonda",
        dataInicio: new Date(2023, 3, 1),
        dataFim: new Date(2024, 3, 1),
        funcoes: [
          'Aplicativos web interativos desenvolvidos e estilizados para Apple Music usando Ember e SCSS',
          'Construímos e enviamos a Apple Music Extension para Facebook Messenger aproveitando integrações de API internas e de terceiros',
          'Arquitetei e implementei a interface do usuário do widget web player incorporável do Apple Music para autorização do usuário no navegador e reprodução completa da música',
          'Contribuiu extensivamente para a criação do MusicKit JS, um SDK JavaScript público para incorporar reprodutores de música da Apple em aplicativos da web'
        ]
      }
    },
    {
      title: "Apple",
      data: {
        cargo: "Dev Backend",
        nomeEmpresa: "Sonda",
        dataInicio: new Date(2023, 3, 1),
        dataFim: new Date(2024, 3, 1),
        funcoes: [
          'Aplicativos web interativos desenvolvidos e estilizados para Apple Music usando Ember e SCSS',
          'Construímos e enviamos a Apple Music Extension para Facebook Messenger aproveitando integrações de API internas e de terceiros',
          'Arquitetei e implementei a interface do usuário do widget web player incorporável do Apple Music para autorização do usuário no navegador e reprodução completa da música',
          'Contribuiu extensivamente para a criação do MusicKit JS, um SDK JavaScript público para incorporar reprodutores de música da Apple em aplicativos da web'
        ]
      }
    },
    {
      title: "Scout Full stack",
      data: {
        cargo: "Dev front end",
        nomeEmpresa: "Sonda",
        dataInicio: new Date(2023, 3, 1),
        dataFim: new Date(2024, 3, 1),
        funcoes: [
          'Aplicativos web interativos desenvolvidos e estilizados para Apple Music usando Ember e SCSS',
          'Construímos e enviamos a Apple Music Extension para Facebook Messenger aproveitando integrações de API internas e de terceiros',
          'Arquitetei e implementei a interface do usuário do widget web player incorporável do Apple Music para autorização do usuário no navegador e reprodução completa da música',
          'Contribuiu extensivamente para a criação do MusicKit JS, um SDK JavaScript público para incorporar reprodutores de música da Apple em aplicativos da web'
        ]
      }
    },
    {
      title: "Starry",
      data: {
        cargo: "Estagio",
        nomeEmpresa: "Sonda",
        dataInicio: new Date(2023, 3, 1),
        funcoes: [
          'Aplicativos web interativos desenvolvidos e estilizados para Apple Music usando Ember e SCSS',
          'Construímos e enviamos a Apple Music Extension para Facebook Messenger aproveitando integrações de API internas e de terceiros',
          'Arquitetei e implementei a interface do usuário do widget web player incorporável do Apple Music para autorização do usuário no navegador e reprodução completa da música',
          'Contribuiu extensivamente para a criação do MusicKit JS, um SDK JavaScript público para incorporar reprodutores de música da Apple em aplicativos da web'
        ]
      }
    }
  ]

  public selectItem!: Experiencia;

  public handleSelectExperiencia(event: ListOption<Experiencia>) {

    this.selectItem = event.data;

  }


}
