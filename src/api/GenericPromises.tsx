import sxNetCalaApi from "./sxNetCala"
import { useContext } from "react";


const GenericPromises = () => {

    // const GenericGet = async (url: string): Promise<any> => {
    //     try {
    //         const response = await sxNetCalaApi.get(url, {
    //             headers: {
    //                 'UserId': 10,
    //                 'Password': 123456,
    //                 'Authorization': `Bearer ${localStorage.getItem("token")}`,
    //             }
    //         });
    //         return response;
    //     } catch (error: any) {
    //         throw error;
    //     }
    // };

    const GenericGetResource = async (url: string): Promise<any> => {
        try {
            let resourceId = (url.indexOf("/", 1) === -1) ? (url.indexOf("?") === -1) ? url : url.substring(0, url.indexOf('?', 1)) : url.substring(0, url.indexOf('/', 1));
            const response = await sxNetCalaApi.get(url, {
                headers: {
                    'UserId': 10,
                    'Password': 123456,
                    'GroupId': 1,
                    'ResourceId': 68,
                    'Authorization': `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJKV1RDQUxBQWNjZXNzVG9rZW4iLCJqdGkiOiJlNTM1MWQ1Ny1hYjllLTQyZTItOGMyNC0yMDVmNTEyNzMzY2QiLCJpYXQiOiI2LzIzLzIwMjQgMTE6MDU6NDlQTSIsIlVzZXJJZCI6IjEwIiwiVXNlck5hbWUiOiJKb3JnZSIsIkVtYWlsIjoiZGVzYXJyb2xsYWRvcjNAY2FsYWdyb3VwLmNvbS5teCIsIlNjaGVtYU5hbWUiOiJDRUciLCJleHAiOjE3MjE3NzU5NDksImlzcyI6IkpXVENBTEFBdXRoZW50aWNhdGlvblNlcnZlciIsImF1ZCI6IkpXVENBTEFTZXJ2aWNlcyJ9._w-ORuENtqDm83Bg2kcRVjxdzmH09IyYBgrm7jlwgwA`,
                }
            });
            return response;
        } catch (error: any) {
            throw error;
        }
    };


    return {
        // GenericGet,
        GenericGetResource
    }
}

export default GenericPromises;