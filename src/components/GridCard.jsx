
import { Button, Card, CardActions, CardContent, CardMedia, Grid, Typography } from '@mui/material'
import axios from 'axios'
import React, { useEffect, useState } from 'react'

const GridCard = () => {
    var[product,setProduct] = useState([])
    useEffect(()=>{
        axios.get("https://fakestoreapi.com/products")
        .then((res)=>{
            console.log(res)
            setProduct(res.data)
        })
        .catch((error)=>{
            console.log(error)
        })
    },[])
  return (
    <div>
     <Grid container spacing={2}>
        {product.map((prod,i)=>{
            return(
                <Grid item xs={12} md={4}>
                     <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image={prod.image}
        title="my products"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {prod.title}
        </Typography>
        <Typography variant="body2" component="div">
          Category : {prod.category}
        </Typography>
        <Typography  variant="body2" color="text.secondary">
          Price : {prod.price}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>

                </Grid>
            )
        })}
     </Grid>

    </div>
  )
}

export default GridCard

