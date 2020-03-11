## Overall structural guidelines

**Do** start small but keep in mind where the app is heading down the road.

**Do** have a near term view of implementation and a long term vision.

**Do** put all of the app's code in a folder named `src`.

**Consider** creating a folder for a component when it has multiple accompanying files (`.ts`, `.html`, `.scss` and `.spec`).

**Why?** Helps keep the app structure small and easy to maintain in the early stages, while being easy to evolve as the app grows.

**Why?** Components often have four files (e.g. `*.html`, `*.scss`, `*.ts`, and `*.spec.ts`) and can clutter a folder quickly.

Here is a compliant folder and file structure:

```
|-- app
      |-- core
           |-- guards
           |-- models
           |-- services
           |-- core.module.ts
           
      |-- shared
           |-- components
                |-- shared component A
                |-- shared component B
           |-- directives
                |-- shared directive A
                |-- shared directive B
           |-- pipes
                |-- shared pipe A
                |-- shared pipe B
           |-- validators
                |-- shared validator A
                |-- shared validator B           
           |-- shared.module.ts
           
      |-- customers (feature module)
           |-- customer
                |-- customer.component.ts|html|scss|spec.ts
           |-- customer-list
                |-- customer-list.component.ts|html|scss|spec.ts
           |-- shared
                |-- customer-button.component.ts|html|scss|spec.ts
                |-- customer.model.ts
                |-- customer.service.ts|spec.ts
           |-- customers.component.ts|html|scss|spec.ts
           |-- customers.module.ts
           |-- customers-routing.module.ts
           
      |-- users (feature module)
           |-- user
                |-- user.component.ts|html|scss|spec.ts
           |-- user-list
                |-- user-list.component.ts|html|scss|spec.ts
           |-- shared
                |-- user-button.component.ts|html|scss|spec.ts
                |-- user.model.ts
                |-- user.service.ts|spec.ts
           |-- users.component.ts|html|scss|spec.ts
           |-- users.module.ts
           |-- users-routing.module.ts
           
      |-- app.component.ts|html|scss|spec.ts
      |-- app.module.ts
      |-- app-routing.module.ts
|-- assets 
      |-- favicon
      |-- fonts
      |-- images
|-- environments
      |-- dev
      |-- prod
```

> While components in dedicated folders are widely preferred, another option for small apps is to keep components flat (not in a dedicated folder). This adds up to four files to the existing folder, but also reduces the folder nesting. Whatever you choose, be consistent.
