"use client";
import { useRouter } from 'next/navigation';
import "../payment/payment.scss"
import { useRecoilValue } from 'recoil';
import { filterLanguage } from '@/recoil/selector/selectors';
import { useEffect, useState } from 'react';

const PaymentPage = () => {
    const router = useRouter();
    const translations = useRecoilValue(filterLanguage);
    const [sumPay, setSumPay] = useState<number | null>(null);

    useEffect(() => {
        const savedSumPay = localStorage.getItem('sumPay');
        if (savedSumPay) {
            setSumPay(parseFloat(savedSumPay));
        }
    }, []);

    const handlePayment = async () => {
        try {
            const res = await fetch('/api/complete', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    orderId: 'adwsoo8bxx',
                    paymentKey: 'tviva20240904085616ZcNd9',
                    amount: sumPay,
                }),
            });

            if (res.ok) {
                router.replace('/');
            } else {
                console.error('결제 실패', await res.text());
            }
        } catch (error) {
            console.error('결제 요청 실패', error);
        }
    };

    return (
        <div>
            <div >
                <div className='paymentBox'>
                    <h1 id='paymentTitle' >{translations['Payment failed']}</h1>
                </div>
                <div>
                    <h2 id='paymentTitle2'>{translations.again}</h2>
                </div>
                <div className='paymentBox'>
                    <button id='paymentBtn' onClick={handlePayment}>{translations.back}</button>
                </div>
            </div>
        </div>

    );
};

export default PaymentPage;