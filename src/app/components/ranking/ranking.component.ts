import { Component, OnInit } from '@angular/core';
import { DataRetrievalService } from 'src/app/services/data-retrieval.service';
import { Ranking } from './models/ranking.model';

@Component({
  selector: 'app-ranking',
  templateUrl: './ranking.component.html',
  styleUrls: ['./ranking.component.css']
})
export class RankingComponent implements OnInit {
  rankings: Ranking[] = [];

  constructor( private dataRetrievalService: DataRetrievalService) { }

  ngOnInit(): void {
    this.getRankings();
  }

  getRankings(): void {
    this.dataRetrievalService.getData().subscribe(response => {
      this.rankings = response.results.rankings
    });
  }
}
