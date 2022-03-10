import { NgModule } from "@angular/core";
import { CustomerComponent } from "../customer/customer.component";
import { NavigationComponent } from "../navigation/navigation.component";

@NgModule({
    declarations:[
        NavigationComponent, CustomerComponent
    ],
    imports:[],
    providers:[],
    exports:[ NavigationComponent, CustomerComponent],
    
})
export class CustomModule{

}