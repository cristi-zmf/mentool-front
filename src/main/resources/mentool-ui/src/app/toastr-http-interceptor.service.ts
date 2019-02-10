import {Injectable} from '@angular/core';
import {
  HttpErrorResponse,
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
  HttpResponse
} from "@angular/common/http";
import {Observable, of} from "rxjs";
import {ToastrService} from "ngx-toastr";
import {catchError, tap} from "rxjs/operators";


@Injectable({
  providedIn: 'root'
})
export class ToastrHttpInterceptorService implements HttpInterceptor{

  constructor(private toastrService: ToastrService) {}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    return next.handle(req).pipe(
      tap(),
      catchError(
        err => {
          if (err instanceof HttpErrorResponse) {
            this.toastrService.error(err.message,"Error")
          }
          return of(err);
        })
    );
  }
}
