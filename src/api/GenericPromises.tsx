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
                    'ResourceId': 39,
                    'Authorization': `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJKV1RDQUxBQWNjZXNzVG9rZW4iLCJqdGkiOiJkMGVkZTdlOC00NmEwLTQyNjktYmFmMy00MDYxZjU0YTkzZDEiLCJpYXQiOiI0LzI3LzIwMjQgNjowMToxOFBNIiwiVXNlcklkIjoiMTAiLCJVc2VyTmFtZSI6IkpvcmdlIiwiRW1haWwiOiJkZXNhcnJvbGxhZG9yM0BjYWxhZ3JvdXAuY29tLm14IiwiU2NoZW1hTmFtZSI6IkNFRyIsImV4cCI6MTcxNjgzMjg3OCwiaXNzIjoiSldUQ0FMQUF1dGhlbnRpY2F0aW9uU2VydmVyIiwiYXVkIjoiSldUQ0FMQVNlcnZpY2VzIn0.c9gIJyCAwOsX6-x9IHvYFkriCs_--sEy3ERVEfSsjEI`,
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