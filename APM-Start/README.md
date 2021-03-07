# APM

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 10.0.3.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).


## Deployment

read https://medium.com/@karthiksagar/how-to-deploy-angular-8-app-on-google-cloud-platform-gcp-cdd79e5cc5cf
Bucket: angular-products-bucket
start a gsutil console in GCP console
(my-project-golearn)$ gcloud auth login
(my-project-golearn)$ gsutil rsync -r gs://angular-products-bucket ./angular-gcp-app
$ cd angular-gcp-app/
$ gcloud app deploy

Do you want to continue (Y/n)?  y
Beginning deployment of service [default]...
╔════════════════════════════════════════════════════════════╗
╠═ Uploading 25 files to Google Cloud Storage               ═╣
╚════════════════════════════════════════════════════════════╝