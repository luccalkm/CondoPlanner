/* tslint:disable */
/* eslint-disable */
/**
 * CondoPlanner API
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: v1
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { mapValues } from '../runtime';
/**
 * 
 * @export
 * @interface RegisterUserDto
 */
export interface RegisterUserDto {
    /**
     * 
     * @type {string}
     * @memberof RegisterUserDto
     */
    fullName?: string | null;
    /**
     * 
     * @type {string}
     * @memberof RegisterUserDto
     */
    email?: string | null;
    /**
     * 
     * @type {string}
     * @memberof RegisterUserDto
     */
    cpf?: string | null;
    /**
     * 
     * @type {string}
     * @memberof RegisterUserDto
     */
    password?: string | null;
    /**
     * 
     * @type {string}
     * @memberof RegisterUserDto
     */
    confirmationPassword?: string | null;
    /**
     * 
     * @type {string}
     * @memberof RegisterUserDto
     */
    unitNumber?: string | null;
    /**
     * 
     * @type {boolean}
     * @memberof RegisterUserDto
     */
    isAdmin?: boolean;
}

/**
 * Check if a given object implements the RegisterUserDto interface.
 */
export function instanceOfRegisterUserDto(value: object): value is RegisterUserDto {
    return true;
}

export function RegisterUserDtoFromJSON(json: any): RegisterUserDto {
    return RegisterUserDtoFromJSONTyped(json, false);
}

export function RegisterUserDtoFromJSONTyped(json: any, ignoreDiscriminator: boolean): RegisterUserDto {
    if (json == null) {
        return json;
    }
    return {
        
        'fullName': json['fullName'] == null ? undefined : json['fullName'],
        'email': json['email'] == null ? undefined : json['email'],
        'cpf': json['cpf'] == null ? undefined : json['cpf'],
        'password': json['password'] == null ? undefined : json['password'],
        'confirmationPassword': json['confirmationPassword'] == null ? undefined : json['confirmationPassword'],
        'unitNumber': json['unitNumber'] == null ? undefined : json['unitNumber'],
        'isAdmin': json['isAdmin'] == null ? undefined : json['isAdmin'],
    };
}

export function RegisterUserDtoToJSON(value?: RegisterUserDto | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'fullName': value['fullName'],
        'email': value['email'],
        'cpf': value['cpf'],
        'password': value['password'],
        'confirmationPassword': value['confirmationPassword'],
        'unitNumber': value['unitNumber'],
        'isAdmin': value['isAdmin'],
    };
}
