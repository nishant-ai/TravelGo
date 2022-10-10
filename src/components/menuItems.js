// import React from 'react'
// import styled from 'styled-components'

export const menuItems = [
    {
        title: 'Home',
        url: '/',
    },
    {
        title: 'About Us',
        url: '/',
    },
    {
        title: 'Packages',
        url: '/',
        submenu: [
            {
                title: 'Tour Package',
                url:'/',
            },
            {
                title: 'Destination',
                url: '/',
                submenu: [
                    {
                        title: 'Beach',
                        url: '/',
                    },
                    {
                        title: 'Winter Sports',
                        url: '/',
                    },
                    {
                        title: 'Culture-Heritage',
                        url: '/',
                    },
                    {
                        title: 'Countryside',
                        url: '/',
                    }
                ]
            },
            {
                title: 'Typology',
                url: '/',
            },
        ]
    }
]