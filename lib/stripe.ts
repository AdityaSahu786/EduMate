import Stripe from "stripe"

export const stripe = new Stripe(process.env.STRIPE_SECRET!, {
    apiVersion: "2024-10-28.acacia"
})

export default stripe