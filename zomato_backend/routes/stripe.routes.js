const stripeRoute = require('express').Router()
const stripe = require('stripe')('sk_test_51Lc8OPCPmG4ksqcjgt4H2DAuJntTRgHDju88y3dZrtFol3NwuIe6AcsnTdoWdDwAzuhisiz6vyYM0T1XUnlbLG5D00TqRTAWgg')

stripeRoute.post('/checkout', (req, res) => {

    stripe.charges.create({
        source: req.body.tokenId,
        amount: req.body.amount * 100,
        currency: 'INR',

    }, (stripeErr, stripeRes) => {
        if (stripeErr) {
            res.status(500).json(stripeErr)
        }
        else {
            res.status(201).json(stripeRes)
        }
    })
})

module.exports = stripeRoute