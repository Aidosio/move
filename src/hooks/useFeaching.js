import {useState} from "react";

export const useFeaching = (callBack) => {
    const [isLoad, setIsLoad] = useState(false);

    const featching = async (...args) => {
        try {
            setIsLoad(true)
            await callBack(...args)
        } catch (e) {
            console.log(e.message)
        } finally {
            setIsLoad(false)
        }
    }

    return [featching, isLoad]
}