### Shared feature module
SharedModule contains code that will be used across your feature modules. You only import the SharedModule into the specific feature modules. Ensure you don’t import the SharedModule into your AppModule or CoreModule.

Application-wide singleton services do not belong to the SharedModule, they should be in the CoreModule. SharedModule is only for keeping common components, pipes & directives. Layout component is a great example of a shared component.

**Do** create a feature module named `SharedModule` in a `shared` folder;
for example, `app/shared/shared.module.ts` defines `SharedModule`.

**Do** declare components, directives, and pipes in a shared module when those
items will be re-used and referenced by the components declared in other feature modules.

**Consider** using the name SharedModule when the contents of a shared
module are referenced across the entire application.

**Consider** _not_ providing services in shared modules. Services are usually
singletons that are provided once for the entire application or
in a particular feature module. There are exceptions, however. For example, in the sample code that follows, notice that the `SharedModule` provides `FilterTextService`. This is acceptable here because the service is stateless;that is, the consumers of the service aren't impacted by new instances.

**Do** import all modules required by the assets in the `SharedModule`;
for example, `CommonModule` and `FormsModule`.

**Why?** `SharedModule` will contain components, directives and pipes
that may need features from another common module; for example,
`ngFor` in `CommonModule`.

**Do** declare all components, directives, and pipes in the `SharedModule`.

**Do** export all symbols from the `SharedModule` that other feature modules need to use.

**Why?** `SharedModule` exists to make commonly used components, directives and pipes available for use in the templates of components in many other modules.

**Avoid** specifying app-wide singleton providers in a `SharedModule`. Intentional singletons are OK. Take care.

**Why?** A lazy loaded feature module that imports that shared module will make its own copy of the service and likely have undesirable results.

**Why?** You don't want each module to have its own separate instance of singleton services.
Yet there is a real danger of that happening if the `SharedModule` provides a service.

