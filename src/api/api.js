import axios from "axios";
import urls from "../constants/urls";
import Router from "next/router";

export const getDataFromApi = async (url) => {
    let token = "";
    if (typeof window !== "undefined")
        token = localStorage.getItem("access_token");
    const data = await axios.get(`${urls.host}${url}`, {
        headers: { Authorization: `Bearer ${token}` },
    });

    return data.data;
};

export const postDataFromApi = async (url, param) => {
    const token = localStorage.getItem("access_token");
    if (token) {
        return await axios.post(
            `${urls.host}${url}`,
            { ...param },
            {
                headers: { Authorization: `Bearer ${token}` },
            }
        );
    }
    return await axios.post(`${urls.host}${url}`, { ...param });
};

export const putDataToApi = async (url, param) => {
    const token = localStorage.getItem("access_token");
    if (token) {
        return await axios.put(
            `${urls.host}${url}`,
            { ...param },
            {
                headers: { Authorization: `Bearer ${token}` },
            }
        );
    }
    return await axios.put(`${urls.host}${url}`, { ...param });
};
export const deleteDataFromApi = async (url) => {
    const token = localStorage.getItem("access_token");
    if (token) {
        return await axios.delete(`${urls.host}${url}`, {
            headers: { Authorization: `Bearer ${token}` },
        });
    }
    return await axios.delete(`${urls.host}${url}`);
};
