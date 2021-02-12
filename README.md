# Boilerplate - Grabarz & Partner

[![GitHub version](https://badge.fury.io/gh/GrabarzUndPartner%2Fgp-boilerplate.svg)](https://badge.fury.io/gh/GrabarzUndPartner%2Fgp-boilerplate) 

[![main][github-workflow-main-src]][github-workflow-main-href]
[![develop][github-workflow-develop-src]][github-workflow-develop-href]

[![Renovate - Status][renovate-status-src]][renovate-status-href]

[![Dependency Status](https://img.shields.io/david/GrabarzUndPartner/gp-boilerplate.svg?style=flat)](https://david-dm.org/GrabarzUndPartner/gp-boilerplate)
[![devDependency Status](https://img.shields.io/david/dev/GrabarzUndPartner/gp-boilerplate.svg?style=flat)](https://david-dm.org/GrabarzUndPartner/gp-boilerplate#info=devDependencies) 


<!-- [![Build Status](https://img.shields.io/travis/GrabarzUndPartner/gp-boilerplate.svg?style=flat&label=Linux%20build)](https://travis-ci.org/GrabarzUndPartner/gp-boilerplate) -->
<!-- [![Windows Build status](https://img.shields.io/appveyor/ci/GrabarzUndPartner/gp-boilerplate.svg?style=flat&label=Windows%20build)](https://ci.appveyor.com/project/GrabarzUndPartner/gp-boilerplate) -->

This boilerplate structure including tasks and servers should help you to develop modular websites + documentation per partial.

## Boilerplate specs

The boilerplate based on [gulp](https://github.com/gulpjs/gulp) and [assemble](https://github.com/assemble/assemble).

## Setup your environment

At first install.

```
npm install
```

The installation process should run without some errors.

### Test the environment

To verify a working environment just run the following command in the root folder of your project.

```
npm test
```

It should build all sources into the 'build'-directory of your project root folder. No error message should be shown in your console.

### Run development-environment

```
npm run dev
```

Url: http://127.0.0.1:8050/dev/

### Run production-environment

```
npm run prod
```

Url: http://127.0.0.1:8050/

### Run production / development with IP

```bash
npm run dev -- --ip=0.0.0.0
```

### Build production-environment

```
npm run build
```

## Documentation

The documentation can be found in the subdirectory "docs".

| Enviroment | Url                            |
| ---------- | ------------------------------ |
| dev        | http://127.0.0.1:8050/dev/docs |
| production | http://127.0.0.1:8050/docs     |




<!-- Badges -->

[renovate-status-src]: <https://img.shields.io/badge/renovate-enabled-brightgreen>
[renovate-status-href]: <https://renovate.whitesourcesoftware.com/>

[github-workflow-main-src]: <https://github.com/GrabarzUndPartner/gp-boilerplate/workflows/Main/badge.svg?branch=main>
[github-workflow-main-href]: <https://github.com/GrabarzUndPartner/gp-boilerplate/actions?query=workflow%3AMain>
[github-workflow-develop-src]: <https://github.com/GrabarzUndPartner/gp-boilerplate/workflows/Test/badge.svg?branch=develop>
[github-workflow-develop-href]: <https://github.com/GrabarzUndPartner/gp-boilerplate/actions?query=workflow%3ATest>
[dependencies-status-src]: <https://david-dm.org/GrabarzUndPartner/gp-boilerplate/status.svg>
[dependencies-status-href]: <https://david-dm.org/GrabarzUndPartner/gp-boilerplate>
[dependencies-dev-status-src]: <https://david-dm.org/GrabarzUndPartner/gp-boilerplate/dev-status.svg>
[dependencies-dev-status-href]: <https://david-dm.org/GrabarzUndPartner/gp-boilerplate?type=dev>
