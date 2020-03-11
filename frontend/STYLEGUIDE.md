
# Summary of the most important rules [for SMART developers] from the angular guide.

This style guide presents preferred conventions and, as importantly, explains why.
  
## Style vocabulary

Each guideline describes either a good or bad practice, and all have a consistent presentation.

The wording of each guideline indicates how strong the recommendation is.


**Do** is one that should always be followed.
_Always_ might be a bit too strong of a word.
Guidelines that literally should always be followed are extremely rare.
On the other hand, you need a really unusual case for breaking a *Do* guideline.

**Consider** guidelines should generally be followed.
If you fully understand the meaning behind the guideline and have a good reason to deviate, then do so. Please strive to be consistent.

## Coding guidelines

### Folders by feature structure

**Do** create folders named for the feature area they represent.

**Why?** A developer can locate the code and identify what each file represents
at a glance. The structure is as flat as it can be and there are no repetitive or redundant names.

**Why?** The LIFT guidelines are all covered.

**Why?** Helps reduce the app from becoming cluttered through organizing the
content and keeping them aligned with the LIFT guidelines.

**Why?** When there are a lot of files, for example 10+,
locating them is easier with a consistent folder structure
and more difficult in a flat structure.

**Do** create an NgModule for each feature area.

**Why?** NgModules make it easy to lazy load routable features.

**Why?** NgModules make it easier to isolate, test, and reuse features.

### Feature modules

**Do** create an NgModule for all distinct features in an application;
for example, a `Customers` feature.

**Do** place the feature module in the same named folder as the feature area;
for example, in `app/customers`.

**Do** name the feature module file reflecting the name of the feature area
and folder; for example, `app/customers/customers.module.ts`.

**Do** name the feature module symbol reflecting the name of the feature
area, folder, and file; for example, `app/customers/customers.module.ts` defines `CustomersModule`.

**Why?** A feature module can expose or hide its implementation from other modules.

**Why?** A feature module identifies distinct sets of related components that comprise the feature area.

**Why?** A feature module can easily be routed to both eagerly and lazily.

**Why?** A feature module defines clear boundaries between specific functionality and other application features.

**Why?** A feature module helps clarify and make it easier to assign development responsibilities to different teams.

**Why?** A feature module can easily be isolated for testing.

### Shared feature module

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

## Core feature module

**Consider** collecting numerous, auxiliary, single-use classes inside a core module
to simplify the apparent structure of a feature module.


**Consider** calling the application-wide core module, `CoreModule`.
Importing `CoreModule` into the root `AppModule` reduces its complexity
and emphasizes its role as orchestrator of the application as a whole.

**Do** create a feature module named `CoreModule` in a `core` folder (e.g. `app/core/core.module.ts` defines `CoreModule`).

**Do** put a singleton service whose instance will be shared throughout the application in the `CoreModule` (e.g. `ExceptionService` and `LoggerService`).

**Do** import all modules required by the assets in the `CoreModule` (e.g. `CommonModule` and `FormsModule`).

**Why?** `CoreModule` provides one or more singleton services. Angular registers the providers with the app root injector, making a singleton instance of each service available to any component that needs them, whether that component is eagerly or lazily loaded.

**Why?** `CoreModule` will contain singleton services. When a lazy loaded module imports these, it will get a new instance and not the intended app-wide singleton.

**Do** gather application-wide, single use components in the `CoreModule`.
Import it once (in the `AppModule`) when the app starts and never import it anywhere else. (e.g. `NavComponent` and `SpinnerComponent`).


**Why?** Real world apps can have several single-use components (e.g., spinners, message toasts, and modal dialogs) that appear only in the `AppComponent` template.
They are not imported elsewhere so they're not shared in that sense.
Yet they're too big and messy to leave loose in the root folder.

**Avoid** importing the `CoreModule` anywhere except in the `AppModule`.

**Why?** A lazily loaded feature module that directly imports the `CoreModule` will make its own copy of services and likely have undesirable results.


**Why?** An eagerly loaded feature module already has access to the `AppModule`'s injector, and thus the `CoreModule`'s services.

**Do** export all symbols from the `CoreModule` that the `AppModule` will import and make available for other feature modules to use.

**Why?** `CoreModule` exists to make commonly used singleton services available for use in the many other modules.

**Why?** You want the entire app to use the one, singleton instance.
You don't want each module to have its own separate instance of singleton services.
Yet there is a real danger of that happening accidentally if the `CoreModule` provides a service.

`AppModule` is a little smaller because many app/root classes have moved to other modules.
`AppModule` is stable because you will add future components and providers to other modules, not this one.
`AppModule` delegates to imported modules rather than doing work.
`AppModule` is focused on its main task, orchestrating the app as a whole.

### Lazy Loaded folders

A distinct application feature or workflow may be *lazy loaded* or *loaded on demand* rather than when the application starts.

**Do** put the contents of lazy loaded features in a *lazy loaded folder*.
A typical *lazy loaded folder* contains a *routing component*, its child components, and their related assets and modules.

**Why?** The folder makes it easy to identify and isolate the feature content.

### Never directly import lazy loaded folders

**Avoid** allowing modules in sibling and parent folders to directly import a module in a *lazy loaded feature*.

**Why?** Directly importing and using a module will load it immediately when the intention is to load it on demand.
___

## Single responsibility

Apply the [single responsibility principle](https://wikipedia.org/wiki/Single_responsibility_principle)(SRP)
to all components, services, and other symbols.
This helps make the app cleaner, easier to read and maintain, and more testable.

### Rule of One

**Do** define one thing, such as a service or component, per file.

**Consider** limiting files to 400 lines of code.

**Why?** One component per file makes it far easier to read, maintain, and avoid
collisions with teams in source control.

**Why?** One component per file avoids hidden bugs that often arise when combining components in a file where they may share variables, create unwanted closures, or unwanted coupling with dependencies.

**Why?** A single component can be the default export for its file which facilitates lazy loading with the router.

The key is to make the code more reusable, easier to read, and less mistake prone.

It is a better practice to redistribute the component and its
supporting classes into their own, dedicated files.

As the app grows, this rule becomes even more important.

### Small functions

**Do** define small functions

**Consider** limiting to no more than 75 lines.

**Why?** Small functions are easier to test, especially when they do one thing and serve one purpose.

**Why?** Small functions promote reuse.

**Why?** Small functions are easier to read.

**Why?** Small functions are easier to maintain.

**Why?** Small functions help avoid hidden bugs that come with large functions that share variables with external scope, create unwanted closures, or unwanted coupling with dependencies.

___

## Components

### Components as elements

**Consider** giving components an _element_ selector, as opposed to _attribute_ or _class_ selectors.

**Why?** components have templates containing HTML and optional Angular template syntax.
They display content.
Developers place components on the page as they would native HTML elements and web components.

**Why?** It is easier to recognize that a symbol is a component by looking at the template's html.

### Extract templates and styles to their own files

**Do** extract templates and styles into a separate file, when more than 3 lines.

**Do** name the template file `[component-name].component.html`, where [component-name] is the component name.

**Do** name the style file `[component-name].component.scss`, where [component-name] is the component name.


**Do** specify _component-relative_ URLs, prefixed with `./`.

**Why?** Large, inline templates and styles obscure the component's purpose and implementation, reducing readability and maintainability.

**Why?** In most editors, syntax hints and code snippets aren't available when developing inline templates and styles.
The Angular TypeScript Language Service (forthcoming) promises to overcome this deficiency for HTML templates
in those editors that support it; it won't help with CSS styles.

**Why?** A _component relative_ URL requires no change when you move the component files, as long as the files stay together.

**Why?** The `./` prefix is standard syntax for relative URLs; don't depend on Angular's current ability to do without that prefix.

### Decorate _input_ and _output_ properties

**Do** use the `@Input()` and `@Output()` class decorators instead of the `inputs` and `outputs` properties of the
`@Directive` and `@Component` metadata:

**Consider** placing `@Input()` or `@Output()` on the same line as the property it decorates.

**Why?** It is easier and more readable to identify which properties in a class are inputs or outputs.

**Why?** If you ever need to rename the property or event name associated with
`@Input` or `@Output`, you can modify it in a single place.

**Why?** The metadata declaration attached to the directive is shorter and thus more readable.

**Why?** Placing the decorator on the same line _usually_ makes for shorter code and still easily identifies the property as an input or output.
Put it on the line above when doing so is clearly more readable.

### Avoid aliasing _inputs_ and _outputs_

**Avoid** _input_ and _output_ aliases except when it serves an important purpose.

**Why?** Two names for the same property (one private, one public) is inherently confusing.

**Why?** You should use an alias when the directive name is also an _input_ property,
and the directive name doesn't describe the property.

### Member sequence

**Do** place properties up top followed by methods.

**Do** place private members after public members, alphabetized.

**Why?** Placing members in a consistent sequence makes it easy to read and
helps instantly identify which members of the component serve which purpose.

### Delegate complex component logic to services

**Do** limit logic in a component to only that required for the view. All other logic should be delegated to services.

**Do** move reusable logic to services and keep components simple and focused on their intended purpose.

**Why?** Logic may be reused by multiple components when placed within a service and exposed via a function.

**Why?** Logic in a service can more easily be isolated in a unit test, while the calling logic in the component can be easily mocked.

**Why?** Removes dependencies and hides implementation details from the component.

**Why?** Keeps the component slim, trim, and focused.

### Don't prefix _output_ properties

**Do** name events without the prefix `on`.

**Do** name event handler methods with the prefix `on` followed by the event name.

**Why?** This is consistent with built-in events such as button clicks.

**Why?** Angular allows for an [alternative syntax](https://angular.io/guide/template-syntax#binding-syntax) `on-*`. If the event itself was prefixed with `on` this would result in an `on-onEvent` binding expression.

### Put presentation logic in the component class

**Do** put presentation logic in the component class, and not in the template.

**Why?** Logic will be contained in one place (the component class) instead of being spread in two places.

**Why?** Keeping the component's presentation logic in the class instead of the template improves testability, maintainability, and reusability.
___

## Directives

### Use directives to enhance an element

**Do** use attribute directives when you have presentation logic without a template.

**Why?** Attribute directives don't have an associated template.

**Why?** An element may have more than one attribute directive applied.

### _HostListener_/_HostBinding_ decorators versus _host_ metadata

**Consider** preferring the `@HostListener` and `@HostBinding` to the
`host` property of the `@Directive` and `@Component` decorators.

**Do** be consistent in your choice.

**Why?** The property associated with `@HostBinding` or the method associated with `@HostListener`
can be modified only in a single place&mdash;in the directive's class.
If you use the `host` metadata property, you must modify both the property/method declaration in the 
directive's class and the metadata in the decorator associated with the directive.

Compare with the less preferred `host` metadata alternative.

**Why?** The `host` metadata is only one term to remember and doesn't require extra ES imports.
___

## Services

### Services are singletons

**Do** use services as singletons within the same injector. Use them for sharing data and functionality.

**Why?** Services are ideal for sharing methods across a feature area or an app.

**Why?** Services are ideal for sharing stateful in-memory data.

### Single responsibility

**Do** create services with a single responsibility that is encapsulated by its context.

**Do** create a new service once the service begins to exceed that singular purpose.

**Why?** When a service has multiple responsibilities, it becomes difficult to test.

**Why?** When a service has multiple responsibilities, every component or service that injects it now carries the weight of them all.

### Providing a service

**Do** provide a service with the app root injector in the `@Injectable` decorator of the service.

**Why?** The Angular injector is hierarchical.

**Why?** When you provide the service to a root injector, that instance of the service is shared and available in every class that needs the service. This is ideal when a service is sharing methods or state.

**Why?** When you register a service in the `@Injectable` decorator of the service, optimization tools such as those used by the [Angular CLI's](cli) production builds can perform tree shaking and remove services that aren't used by your app.

**Why?** This is not ideal when two different components need different instances of a service. In this scenario it would be better to provide the service at the component level that needs the new and separate instance.

### Use the @Injectable() class decorator

**Do** use the `@Injectable()` class decorator instead of the `@Inject` parameter decorator when using types as tokens for the dependencies of a service.

**Why?** The Angular Dependency Injection (DI) mechanism resolves a service's own
dependencies based on the declared types of that service's constructor parameters.

**Why?** When a service accepts only dependencies associated with type tokens, the `@Injectable()` syntax is much less verbose compared to using `@Inject()` on each individual constructor parameter.
___

## Data Services

### Talk to the server through a service

**Do** refactor logic for making data operations and interacting with data to a service.

**Do** make data services responsible for XHR calls, local storage, stashing in memory, or any other data operations.

**Why?** The component's responsibility is for the presentation and gathering of information for the view. It should not care how it gets the data, just that it knows who to ask for it. Separating the data services moves the logic on how to get it to the data service, and lets the component be simpler and more focused on the view.

**Why?** This makes it easier to test (mock or real) the data calls when testing a component that uses a data service.

**Why?** The details of data management, such as headers, HTTP methods,
caching, error handling, and retry logic, are irrelevant to components
and other data consumers.

A data service encapsulates these details. It's easier to evolve these
details inside the service without affecting its consumers. And it's
easier to test the consumers with mock service implementations.

