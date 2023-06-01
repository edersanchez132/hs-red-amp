import { LoadRemoteModuleEsmOptions } from '@angular-architects/module-federation';

export interface ConfiguracionMicrofrontend extends LoadRemoteModuleEsmOptions {
    nombreModulo?: string;
    nombreComponente?: string;
}
