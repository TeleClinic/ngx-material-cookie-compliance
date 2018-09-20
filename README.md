# ngx-material-cookie-compliance
Cookie compliance bar for Angular projects in Material Design

![alt text](https://raw.githubusercontent.com/JunusErgin/ngx-material-cookie-compliance/master/image.png)


## Getting started
```
npm install --save ngx-material-cookie-compliance
```

Import the module in your app.module.ts

```
// ...
import { NgxMaterialCookieComplianceModule } from 'ngx-material-cookie-compliance';

@NgModule({
    declarations: [
        // ...
    ],
    entryComponents: [],
    imports: [
        NgxMaterialCookieComplianceModule,
        // ...
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}

```

Add the selector to your app.component.html

```
<ngx-material-cookie-compliance></ngx-material-cookie-compliance>
```

## Features
- Multi language support (en/de/es/fr/it)
- Custom text for every button and message
- Full Angular Material Design


## Dependencies
- @angular/animations
- @angular/cdk
- @angular/common
- @angular/core
- @angular/material

Tested with version 6


## API
| Input         | description       | default  |
| ------------- |:-------------:| -----:|
| language      | en / de / es / fr / it | en |
| text      | Text main text of the cookie compliance      |   This website uses cookies to improve user experience. By continuing to use the website, you are granting your consent. |
| buttonText | Text of the button that leads to your cookie compliance | Cookie policy  |
| buttonCloseText | Text of the button to close the cookie compliance      | Ok |
| targetURL | the URL to your cookie compliance page      |   https://google.com |
| embedCookieCompliance | false will hide the cookie compliance |  true |
| delay | Delay until the cookie bar gets displayed      |    3000 |


## License
MIT
