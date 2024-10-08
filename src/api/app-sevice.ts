import axios, {AxiosResponse} from "axios";
import {Response} from "../types/app.ts";

export const getAppOverviewUser = (appID: number) => {
    return axios.get(`/api/v1/app-service/get-app-overview-users/${appID}`, {})
}
export const getAppOverview = (appID: number) => {
    return axios.get(`/api/v1/app-service/get-app-overview/${appID}`, {})
}

export const getApps = async (params: {}): Promise<AxiosResponse<Response>> => {
    return axios.put(`/api/v1/app-service/get-apps`, params)
}