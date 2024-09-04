"use client";
import { useRouter } from 'next/navigation';
import './payment.scss';
import { useRecoilValue } from 'recoil';
import { filterLanguage } from '@/recoil/selector/selectors';

const PaymentPage = () => {
    const router = useRouter();
    const translations = useRecoilValue(filterLanguage);

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
                    amount: 1500,
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

            <div>
                <div className='paymentBox'>
                    <h2 id='paymentTitle'>{translations.success}</h2>
                </div>
                <div className='paymentBox'>
                    <button id='paymentBtn' onClick={handlePayment}>
                        {translations['Complete payment']}
                    </button>
                </div>
            </div>
        </div>
    );
};

export default PaymentPage;
