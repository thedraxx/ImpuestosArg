'use client'
import React, { useEffect, useState } from 'react'
import './style.css';
import { motion } from 'framer-motion';

const CustomPointer = () => {

    const [mousePosition, setMousePosition] = useState({
        x: 0,
        y: 0
    })

    const variants = {
        default: {
            x: mousePosition.x - 16,
            y: mousePosition.y - 16,
        }
    }

    useEffect(() => {
        document.addEventListener("mousemove", (event) => {
            const { clientX, clientY } = event
            setMousePosition({ x: clientX, y: clientY })
        })
    }, [])

    return (
        <>
            <motion.div
                className="cursor"
                variants={variants}
                animate="default"
            />
        </>
    )
}

export default CustomPointer