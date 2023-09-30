import { loadStripe } from "@stripe/stripe-js"

export function useStripe(info){
    let sripe= loadStripe(process.env.REACT_APP_STRIPEKEY)
    const extractedArray=[]
    info.forEach(element=>{
        let extractedObject={
            quantity:element.quantity,
            price:element.priceId
        }

        extractedArray.push(extractedObject)
    })
    
}

