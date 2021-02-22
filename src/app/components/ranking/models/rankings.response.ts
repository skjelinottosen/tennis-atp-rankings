import { Ranking } from './ranking.model';

export interface RankingsResponse {
    meta: {
        title: string;
        description: string;
        fields: Ranking;
    };
    results: {
        rankings: Ranking[];
    };
}