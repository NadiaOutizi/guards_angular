import { CanActivateFn, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { UserService } from './user.service';
import  {inject} from '@angular/core';


export const authGuard: CanActivateFn = (
    route,
    state
  ) => {
    const authService = inject(UserService);
    const router = inject(Router)
    return authService.isLogged === true ? true : router.createUrlTree(['/']);
};

