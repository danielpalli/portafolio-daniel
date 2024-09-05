import { HttpClient } from '@angular/common/http';
import { computed, inject, Injectable, signal } from '@angular/core';
import { environment } from '../../../environments/environment';
import { delay, Observable } from 'rxjs';
import { Information } from '../interfaces/information.interface';

@Injectable({
  providedIn: 'root',
})
export class InformationService {
  private http = inject(HttpClient);
  private apiUrl: string = environment.apiUrl;

  #state = signal({
    loading: true,
    information: {},
  });

  public information = computed(() => this.#state().information);
  public loading = computed(() => this.#state().loading);

  constructor() {
    this.http
      .get(this.apiUrl)
      .pipe(delay(2000))
      .subscribe((data) => {
        this.#state.set({
          loading: false,
          information: data,
        });
      });
  }

  getInformation(): any {
    return this.http.get(this.apiUrl);
  }
}
