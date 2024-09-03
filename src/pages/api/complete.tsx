import { NextPage } from 'next';
import { useRouter, useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';

interface PageProps {
    searchParams: {
        orderId: string;
    };
}

const Page: NextPage<PageProps> = async () => {

    const searchParams = useSearchParams();
    const [orderId, setOrderId] = useState<string | null>(null);

    useEffect(() => {
        if (searchParams) {
            const id = searchParams.get('orderId');
            if (id) {
                setOrderId(id);
            }
        }
    }, [searchParams]);
    // const secretKey = process.env.TOSS_SECRET_KEY;
    // const basicToken = Buffer.from(`${secretKey}:`, "utf-8").toString('base64');

    // const payment = await fetch(
    //     `https://api.tosspayment.com/v1/payment/orders/${searchParams.orderId}`,
    //     {
    //         headers: {
    //             Authorization: `Basic ${basicToken}`,
    //             "Content-Type": "application/json",
    //         }
    //     }
    // ).then((res) => res.json());

    // const { card } = payment;
    // console.log(card);
    return (
        <div>
            <h1>결제가 완료되었습니다</h1>
            <li>결제금액 - {orderId}원</li>
        </div>
    );
}

export default Page;
