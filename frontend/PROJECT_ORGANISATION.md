## Overall Project Organisation
The project closely follows the folders-by-feature structure from the [Angular style guide](https://angular.io/guide/styleguide).
The style guide is highly opinionated as this sets standards for colleague developers to follow.

In this structure, the application has four fundamental types of modules. Together, they form what I call the scalable project structure.

- Root module
- Core module
- Shared module
- Feature module

Let’s take a look at the responsibility of each module and see how they help to create a better project structure.

### Core Module
The **CoreModule** of the application is responsible for keeping global services.

Use the core module to store guards, models and other global dependencies such as http interceptor and global error handler.
Please note that there should only ever be a single core module. This is so that the services registered in the core module are only instantiated once in the lifetime of the app. 

We force the single-use of the core module.

### Shared Module
SharedModule contains code that will be used across your feature modules. You only import the SharedModule into the specific feature modules. 

#### Ensure you _**don’t import**_ the SharedModule into your AppModule or CoreModule.

Application-wide singleton services do not belong to the SharedModule, they should be in the CoreModule.
 
SharedModule is only for keeping common components, pipes & directives. Layout component is a great example of a shared component.


### Feature Module
Finally, the last type of module in this structure is the feature module. Feature modules are used to organise a distinct feature of an application.

For example, you can create a feature module to encapsulate all functionality regarding customer management or account management.

Feature modules not only make your application structure better organised, they also allow isolated testing. In addition, assigning a feature module to a fellow developer is a great advantage to support development in parallel.

```
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomersRoutingModule } from './customers-routing.module';
import { SharedModule } from '../shared/shared.module';
import { CustomerListComponent } from './customer-list/customer-list.component';
 
@NgModule({
  imports: [
    CommonModule,
    CustomersRoutingModule,
    SharedModule
  ],
  declarations: [
    CustomerListComponent
  ],
  entryComponents: []
})
export class CustomersModule { }
```


###Routing
**AppModule** enables lazy-loaded routes to feature modules.

This allows each feature module has its own routing configuration, which keeps routes in corresponding feature modules. This approach makes it easy to identify and isolate the feature content.

