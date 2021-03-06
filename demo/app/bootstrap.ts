import { bootstrap } from "@angular/platform-browser-dynamic";
import { provide, Type } from "@angular/core";
import { LocationStrategy, HashLocationStrategy } from "@angular/common";
import { ROUTER_PROVIDERS } from "@angular/router";
import { HTTP_PROVIDERS } from "@angular/http";

import { AppComponent } from "./components/app";
import { ContextMenuService } from "./services/contextmenu";

bootstrap(<Type>AppComponent, [
	HTTP_PROVIDERS,
	ROUTER_PROVIDERS,
	ContextMenuService,
	provide(LocationStrategy, {useClass: <Type>HashLocationStrategy})
]);
