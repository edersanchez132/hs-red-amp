import { HttpErrorResponse } from '@angular/common/http';

type erroresDisponible = HttpErrorResponse | DOMException | TypeError | string | Error | undefined;

export { erroresDisponible };



