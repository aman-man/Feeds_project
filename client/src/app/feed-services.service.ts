import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpParams } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class FeedServicesService {

  constructor( private http: HttpClient) { }

  getAllFeeds() {
    return this.http.get(`${environment.apiUrl}/api/feeds`);
  }

  getFeedDetail(feedId) {
    const httpParams = new HttpParams().set('id', feedId);
    return this.http.get<any>(`${environment.apiUrl}/api/feed/id`, { params: httpParams });
  }

  saveFeed(body: HttpParams) {
    return this.http.post<any>(`${environment.apiUrl}/api/feeds`, body);
  }

  updateFeedDetails(body: HttpParams) {
    return this.http.put<any>(`${environment.apiUrl}/api/feed/id`, body);
  }

  deleteFeed(feedId) {
    const httpParams = new HttpParams().set('id', feedId);
    return this.http.delete<any>(`${environment.apiUrl}/api/feed/id`, { params: httpParams });
  }
}
