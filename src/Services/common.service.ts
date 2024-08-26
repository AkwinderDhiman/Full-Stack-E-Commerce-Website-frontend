import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, map, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommonService {
  apiUrl: any = "http://localhost:4000";

  constructor(private httpClient: HttpClient) { }

  getdata(): Observable<any> {
    return this.httpClient.get(`${this.apiUrl}`, { responseType: 'text' }).pipe(
      map(response => {
        try {
          return JSON.parse(response);
        } catch (e) {
          // Handle non-JSON response
          return response;
        }
      }),
      catchError(this.handleError)
    );
  }


  signUp(data:any): Observable<any> {
    return this.httpClient.post(`${this.apiUrl}/signup`,data, { responseType: 'text' }).pipe(
      map((response: any) => {
        try {
          console.log(JSON.parse(response));          
          return JSON.parse(response);
        } catch (e) {
          // Handle non-JSON response
          return response;
        }
      }),
      catchError(this.handleError)
    );
  }


  private handleError(error: HttpErrorResponse) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // Client-side error
      errorMessage = `Error: ${error.error.message}`;
    } else {
      // Server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    return throwError(errorMessage);
  }
}