import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, map, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  apiUrl = 'http://localhost:4000';
  constructor(private httpClient:HttpClient) { }

  getProductData(): Observable<any> {
    return this.httpClient.get(`${this.apiUrl}/product`, { responseType: 'text' }).pipe(
      map((response:any) => {
        try {
          return JSON.parse(response);
        } catch (e) {
          console.log(e)
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
