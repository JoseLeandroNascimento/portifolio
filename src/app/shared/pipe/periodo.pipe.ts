import { Pipe, PipeTransform } from '@angular/core';
import { MESES } from '../constants/MESES';

@Pipe({
  name: 'periodo',
  standalone: true
})
export class PeriodoPipe implements PipeTransform {

  datePeriodoStr!: string;

  transform(value: Date, dateFim?: Date): string {

    const mesInicioIndex: number = value.getMonth();
    const anoInicio: number = value.getFullYear();
    const periodoInicio: string = `${MESES[mesInicioIndex]} de ${anoInicio}`;

    const mesFimIndex: number | null = dateFim?.getMonth() ?? null;
    const anoFim: number | null = dateFim?.getFullYear() ?? null;

    let periodoFim: string | null = null;

    if (mesFimIndex != null && anoFim != null) {

      periodoFim = `${MESES[mesFimIndex]} de ${anoFim}`;
    }

    this.datePeriodoStr = `${periodoInicio} - ${periodoFim ?? 'Atualmente'}`

    return this.datePeriodoStr;
  }

}
