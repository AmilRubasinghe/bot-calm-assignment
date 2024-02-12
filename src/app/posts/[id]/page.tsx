"use client"
import React from 'react'
import { useParams, useRouter } from "next/navigation";
const PostIdPage = () => {
    const router = useRouter();
    const goBack = () => {
        router.replace('/')
    };

    const { id } = useParams();
    return (
        <div><h1>Post ID: {id}</h1>
            <button onClick={goBack} className="bg-[white] text-black">Go Back </button>
        </div>
    )
}

export default PostIdPage