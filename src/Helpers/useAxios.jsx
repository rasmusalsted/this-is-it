import { useEffect, useState } from "react";
import axios from "axios";

const apiURL = axios.create({ baseURL: "http://localhost:5333/" });

const useAxios = () => {


    const [isLoading, setIsLoading] = useState()
    const [data, setData] = useState(false)
    const [error, setError] = useState()


    const makeRequest = async (endpoint, headers = null, params = null, method = "GET", bodydata = null) => {

        // sæt loading til true
        setIsLoading(true);
        // tøm data når der loades 
        setData(); 

        try {

            let response

            if (method === "GET") {

                response = await apiURL.get(endpoint, { headers: headers, params: params })


            } else if (method === "POST") {

                response = await apiURL.post(endpoint, bodydata, { headers: headers, params: params })


            } else if (method === "DELETE") {

                response = await apiURL.delete(endpoint, { headers: headers, params: params })


            } else if (method === "PUT") {

                response = await apiURL.put(endpoint, bodydata, { headers: headers, params: params })


            } else if (method === "PATCH") {

                response = await apiURL.patch(endpoint, bodydata, { headers: headers, params: params })


            } else {

                throw new Error("GET POST PUT PATCH DELETE was expected! Dummy!")
            }

            setData(response.data)
            setError()

        } catch (error) {

            console.log("FEJL", error)
            setError("Der er opstået en fejl: " + error.message)
            setData() // tøm evt. "gamle" data i state


        } finally {

            setIsLoading(false)

        }
    }


    return { data, isLoading, error, makeRequest }

}

export default useAxios;