
import { useRouter } from 'next/navigation';
import "./payment.scss"
import Header from '@/components/header/Header';

const PaymentPage = () => {
    const router = useRouter();

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
            <Header />
            <div >
                <div className='paymentBox'>
                    <h1 id='paymentTitle' >결제가 실패하였습니다.</h1>
                </div>
                <div>
                    <h2 id='paymentTitle2'>처음부터 다시 해주시길 바랍니다</h2>
                </div>
                <div className='paymentBox'>
                    <button id='paymentBtn' onClick={handlePayment}>처음으로 돌아가기</button>
                </div>
            </div>
        </div>

    );
};

export default PaymentPage;