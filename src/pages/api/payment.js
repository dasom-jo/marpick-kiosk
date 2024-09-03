export default async function handleToss(req, res) {
    const { orderId, paymentKey, amount } = req.query;
    const secretKey = process.env.TOSS_SECRET_KEY;

    const url = "https://api.tosspayment.com/v1/payment/confirm";
    const basicToken = Buffer.from(`${secretKey}:`, "utf-8").toString("base64");

    try {
        const response = await fetch(url, {
            method: 'POST',
            body: JSON.stringify({
                amount,
                orderId,
                paymentKey,
            }),
            headers: {
                Authorization: `Basic ${basicToken}`,
                "Content-Type": "application/json",
            },
        });

        const result = await response.json();

        if (response.ok) {
            res.redirect(`/payments/complete?orderId=${orderId}`);
        } else {
            res.status(response.status).json(result);
        }
    } catch (error) {
        res.status(500).json({ error: 'Something went wrong' });
    }
}
