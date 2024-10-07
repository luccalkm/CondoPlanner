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
 * @interface LoginResponseDto
 */
export interface LoginResponseDto {
    /**
     * 
     * @type {string}
     * @memberof LoginResponseDto
     */
    token?: string | null;
    /**
     * 
     * @type {string}
     * @memberof LoginResponseDto
     */
    username?: string | null;
    /**
     * 
     * @type {string}
     * @memberof LoginResponseDto
     */
    email?: string | null;
}

/**
 * Check if a given object implements the LoginResponseDto interface.
 */
export function instanceOfLoginResponseDto(value: object): value is LoginResponseDto {
    return true;
}

export function LoginResponseDtoFromJSON(json: any): LoginResponseDto {
    return LoginResponseDtoFromJSONTyped(json, false);
}

export function LoginResponseDtoFromJSONTyped(json: any, ignoreDiscriminator: boolean): LoginResponseDto {
    if (json == null) {
        return json;
    }
    return {
        
        'token': json['token'] == null ? undefined : json['token'],
        'username': json['username'] == null ? undefined : json['username'],
        'email': json['email'] == null ? undefined : json['email'],
    };
}

export function LoginResponseDtoToJSON(value?: LoginResponseDto | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'token': value['token'],
        'username': value['username'],
        'email': value['email'],
    };
}

