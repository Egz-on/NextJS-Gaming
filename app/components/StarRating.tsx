    'use client'
    import React from 'react'

    type StarRatingProps = {
    value: number
    readOnly?: boolean
    }

    export default function StarRating({ value, readOnly = true }: StarRatingProps) {
    const stars = Array(5).fill(0).map((_, i) => (
        <span key={i} className={i < Math.round(value) ? 'text-yellow-400' : 'text-gray-300'}>
        ★
        </span>
    ))
    return <div className="text-2xl cursor-pointer">{stars}</div>
    }
