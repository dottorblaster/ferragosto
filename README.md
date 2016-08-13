# ferragosto
This is a CLI wrapper for [chefacciamoaferragosto.it](http://chefacciamoaferragosto.it/), a website created by some friends at [nois3](http://www.nois3.it/) which gives you some useful tips for 15th August.

## Install
Just fire up your command line and run:

```shell
$ npm install -g ferragosto
```

## Run
It's easy:

```shell
$ ferragosto
Che facciamo a ferragosto?
- Fare il giro di verifica dei cassonetti di Roma!
```

Pretty neat, ain't that?

## Fetching data
Ferragosto automatically fetches its data source at the first start. If you want to refresh the local dataset, just issue the command with a `-f` flag:

```shell
$ ferragosto -f
Fetching...

Che facciamo a ferragosto?
- 42
```
