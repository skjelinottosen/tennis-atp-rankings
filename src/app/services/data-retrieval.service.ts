import { Injectable } from '@angular/core';
import { environment  } from '../../environments/environment';
import { HttpClient}  from '@angular/common/http';
import { Observable } from 'rxjs';
import { Ranking } from '../components/ranking/models/ranking.model';
import { RankingsResponse } from '../components/ranking/models/rankings.response'

@Injectable({
  providedIn: 'root'
})
export class DataRetrievalService {

  constructor(private httpClient: HttpClient) { }

  getData(): Observable<RankingsResponse>{
    return this.httpClient.get<RankingsResponse>(`${environment.tennisLiveDataAPI.baseUrl}`, {
      headers: {
        'x-rapidapi-key': 'xxxxxxxxxxx',
        'x-rapidapi-host': 'xxxxxxxxxxx'
       }
    });
  }
}
