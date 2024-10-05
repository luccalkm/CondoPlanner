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
import type { TimeSpan } from './TimeSpan';
import {
    TimeSpanFromJSON,
    TimeSpanFromJSONTyped,
    TimeSpanToJSON,
} from './TimeSpan';
import type { CommonAreaDto } from './CommonAreaDto';
import {
    CommonAreaDtoFromJSON,
    CommonAreaDtoFromJSONTyped,
    CommonAreaDtoToJSON,
} from './CommonAreaDto';

/**
 * 
 * @export
 * @interface CreateOrEditReservationDto
 */
export interface CreateOrEditReservationDto {
    /**
     * 
     * @type {number}
     * @memberof CreateOrEditReservationDto
     */
    id?: number | null;
    /**
     * 
     * @type {Date}
     * @memberof CreateOrEditReservationDto
     */
    reservationDate?: Date | null;
    /**
     * 
     * @type {TimeSpan}
     * @memberof CreateOrEditReservationDto
     */
    startTime?: TimeSpan;
    /**
     * 
     * @type {TimeSpan}
     * @memberof CreateOrEditReservationDto
     */
    endTime?: TimeSpan;
    /**
     * 
     * @type {number}
     * @memberof CreateOrEditReservationDto
     */
    totalCost?: number | null;
    /**
     * 
     * @type {number}
     * @memberof CreateOrEditReservationDto
     */
    commonAreaId?: number | null;
    /**
     * 
     * @type {CommonAreaDto}
     * @memberof CreateOrEditReservationDto
     */
    commonArea?: CommonAreaDto;
    /**
     * 
     * @type {string}
     * @memberof CreateOrEditReservationDto
     */
    userId?: string | null;
}

/**
 * Check if a given object implements the CreateOrEditReservationDto interface.
 */
export function instanceOfCreateOrEditReservationDto(value: object): value is CreateOrEditReservationDto {
    return true;
}

export function CreateOrEditReservationDtoFromJSON(json: any): CreateOrEditReservationDto {
    return CreateOrEditReservationDtoFromJSONTyped(json, false);
}

export function CreateOrEditReservationDtoFromJSONTyped(json: any, ignoreDiscriminator: boolean): CreateOrEditReservationDto {
    if (json == null) {
        return json;
    }
    return {
        
        'id': json['id'] == null ? undefined : json['id'],
        'reservationDate': json['reservationDate'] == null ? undefined : (new Date(json['reservationDate'])),
        'startTime': json['startTime'] == null ? undefined : TimeSpanFromJSON(json['startTime']),
        'endTime': json['endTime'] == null ? undefined : TimeSpanFromJSON(json['endTime']),
        'totalCost': json['totalCost'] == null ? undefined : json['totalCost'],
        'commonAreaId': json['commonAreaId'] == null ? undefined : json['commonAreaId'],
        'commonArea': json['commonArea'] == null ? undefined : CommonAreaDtoFromJSON(json['commonArea']),
        'userId': json['userId'] == null ? undefined : json['userId'],
    };
}

export function CreateOrEditReservationDtoToJSON(value?: CreateOrEditReservationDto | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'id': value['id'],
        'reservationDate': value['reservationDate'] == null ? undefined : ((value['reservationDate'] as any).toISOString()),
        'startTime': TimeSpanToJSON(value['startTime']),
        'endTime': TimeSpanToJSON(value['endTime']),
        'totalCost': value['totalCost'],
        'commonAreaId': value['commonAreaId'],
        'commonArea': CommonAreaDtoToJSON(value['commonArea']),
        'userId': value['userId'],
    };
}
