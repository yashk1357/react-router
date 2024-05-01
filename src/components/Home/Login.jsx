import React from "react";
import { useParams } from "react-router-dom";

export default function Login() {
    const {id} = useParams()
    return (
        <div className="mx-auto w-full max-w-7xl">
            <label htmlFor=""  className="text-center text-2xl sm:text-5xl py-10 font-medium" >LoginID: {id}</label>
        </div>
    );
}
