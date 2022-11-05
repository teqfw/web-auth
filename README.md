# @teqfw/web-auth

TeqFW plugin to authenticate web requests.

| CAUTION: TeqFW is an unstable project w/o backward compatibility. Use it at your own risk. |
|--------------------------------------------------------------------------------------------|

This `teq`-plugin contains functionality to register new fronts (browsers) on backend, to generate keys for asymmetric
encryption on front & back and to sign/encrypt data transmitted between front & back.

## Install

```shell
$ npm i @teqfw/web-auth --save 
```

## Namespace

This plugin uses `TeqFw_Web_Auth` namespace.

## `teqfw.json`

[DTO](src/Back/Dto/Plugin/Desc.mjs) for `@teqfw/web-auth` nodes in `teq`-plugins descriptors.

```json
{
  "@teqfw/web-auth": {}
}
```

## `./cfg/local.json`

[DTO](src/Back/Dto/Config/Local.mjs) for `@teqfw/web-auth` node.

## Back

### RDB

* `TeqFw_Web_Auth_Back_RDb_Schema_Front`: registry to store authentication info for fronts (public keys & UUID).

### Actions

* `TeqFw_Web_Auth_Back_Act_Front_Create`: register new front identity on the back.
* `TeqFw_Web_Auth_Back_Act_Front_GetIdByUuid`:
* `TeqFw_Web_Auth_Back_Act_Front_GetUuidById`:

### Models

* `TeqFw_Web_Auth_Back_Mod_Server_Handler`: handler to process authentication requests (space: `/auth/`).

## Front

### Libs

* `/tweetnacl/`:
* `/uuid/`:

### IDB

* ``: ...

### Front models

* `TeqFw_Web_Auth_Front_Mod_Connect`: connector to backend to process authentication requests to server.
* `TeqFw_Web_Auth_Front_Mod_Identity`: encapsulates identification data for application.
