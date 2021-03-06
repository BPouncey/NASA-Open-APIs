import React, { useState, useEffect } from 'react'

import { useStyles } from './epic.styles'
import { LinearProgress } from '@material-ui/core'
import PageTitle from '../page-title/page-title.component'

import API_KEY from '../../api-key'

const Epic = () => {

    const classes = useStyles()
    const [data, setData] = useState(null)
    const [isLoading, setLoading] = useState(false)

    useEffect(() => {
        //API CALL HERE
        getData()
    }, [])

    const getData = async () => {

        setData(null)
        setLoading(true)

        const result = await fetch(
            `https://api.nasa.gov/EPIC/api/natural?api_key=${API_KEY.apiKey}`
        )

        const data = await result.json()

        if (data.error) {
            console.log(data.error)
            setLoading(false)
        }
        else{
            setData(data);
            console.log(data);
            setLoading(false)
            console.log("DATA". data)
        }


    }

    return(
        <div>
            {isLoading && <LinearProgress/>}
            <PageTitle 
                title={"EPIC"}
                subTitle={"Earth Polychromatic Imaging Camera"}/>
        </div>
    )
}

export default Epic