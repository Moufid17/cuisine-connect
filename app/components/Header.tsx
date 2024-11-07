'use client'
import * as React from "react"
import Link from "next/link"
import { useRouter, usePathname } from "next/navigation";

import { Box, Typography } from "@mui/joy"

import UserMenu from "@/app/components/HeaderMenu"

export default function Header () {
    const router = useRouter()
    const pathname = usePathname()
    return (
        <Box component="header" className="Header"
            sx={{
                p: 0.5,
                bgcolor: '#000',
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
                gridColumn: '1 / -1',
                // borderBottom: '1px solid',
                // borderColor: 'divider',
                top: 0,
                zIndex: 1100,
                // boxShadow: 'sm',
            }}
        >
            <Link href="/">
                <Typography
                    onClick={() => pathname != "/" && router.push("/")}
                    startDecorator={
                            <img
                                src="/appIcon.svg"
                                loading="lazy"
                                width="42"
                                height="36"
                                alt=""
                            />
                    }
                    level="h4" 
                    fontWeight="xl"
                    sx={{color: 'white', cursor:'pointer'}}
                >
                    Cuisine-connect
                </Typography>
            </Link>
            <UserMenu />
        </Box>
    )
}