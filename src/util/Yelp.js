const apiKey = 'Rrb7vDX-paVpreDT88UKYA35EfyYBVOp21h0a8m5CagDuOJiJI5cVTQPn8jHBuDAF-dAcG0JCWRy7TFY1y00m9dVjhDRRIuVeHE941tuf61naOOCXY1zArBlfWhQW3Yx'

const Yelp = {
  search :  function (term,location,sortBy) {
    return fetch(`https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}&sort_by=${sortBy}`,
    {
      headers:{
        Authorization:`Bearer ${apiKey}`
      }
    }).then((response)=>{
      return response.json()
    }).then((jsonResponse)=>{
        if(jsonResponse.businesses){
           return jsonResponse.businesses.map((business) =>{
              return {
              id:business.id,
              imageSrc:business.image_url,
              name:business.name,
              address:business.location.address1,
              city:business.location.city,
              state:business.location.state,
              zipCode:business.location.zip_code,
              category:business.categories[0].title,
              rating:business.rating,
              reviewCount:business.review_count
            }
          }
        )
     }
   }
 )
}
}


export {Yelp}
