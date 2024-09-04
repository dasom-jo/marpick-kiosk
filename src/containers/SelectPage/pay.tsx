
import Image from 'next/image';
import tossImage from '../../img/toss.png';
import "./Pay.scss";
import { loadTossPayments } from "@tosspayments/payment-sdk";
import { useRecoilValue } from 'recoil';
import { totalPay } from '@/recoil/atoms/atoms';

const Pay = () => {

    const sumPay = useRecoilValue(totalPay)
    const handleToss = async () => {
        const tossClientKey = process.env.NEXT_PUBLIC_TOSS_CLIENT_KEY || ''; // 기본값으로 빈 문자열 설정

        if (!tossClientKey) {
            console.error('TOSS_CLIENT_KEY is not defined');
            return;
        }

        const tossPayments = await loadTossPayments(tossClientKey) as any;
        const amountPay = parseFloat(sumPay);
        await tossPayments.requestPayment('카드', {
            amount: amountPay,
            orderId: Math.random().toString(36).slice(2),
            orderName: '마라픽',
            successUrl: `${window.location.origin}/payment`,
            failUrl: `${window.location.origin}/paymentfail`
        });
    };

    return (
        <>
            <p className='imgText'>카드거래만 가능합니다</p>
            <div className="imgBox">
                <Image
                    className="imgSmallBox"
                    src={tossImage} alt="Kakao"
                    onClick={handleToss}
                />
            </div>
        </>
    );
}

export default Pay;