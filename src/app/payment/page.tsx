"use client";
import { useRouter } from 'next/navigation';
import './payment.scss';
import { useRecoilState, useRecoilValue } from 'recoil';
import { filterLanguage } from '@/recoil/selector/selectors';
import { langChange, totalPay } from '@/recoil/atoms/atoms';
import { useEffect, useState } from 'react';


const PaymentPage = () => {
    const router = useRouter();
    const translations = useRecoilValue(filterLanguage);
    const [sumPay, setSumPay] = useState<number | null>(null);
    const [currentLang, setCurrentLang] = useRecoilState(langChange);

    useEffect(() => {
        const savedSumPay = localStorage.getItem('sumPay');
        const savedLang = localStorage.getItem('changeKR') || 'ko-KR';

        if (savedSumPay) {
            setSumPay(parseFloat(savedSumPay));
        }
        setCurrentLang(savedLang);
    }, [setCurrentLang]);



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

        const formatDateToMySql = (date:Date) => {
            const year = date.getFullYear();
            const month = String(date.getMonth()+1).padStart(2,'0')
            const day = String(date.getDate()).padStart(2, '0');
            const hours = String(date.getHours()).padStart(2, '0');
            const minutes = String(date.getMinutes()).padStart(2, '0');
            const seconds = String(date.getSeconds()).padStart(2, '0');
            return `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
        }
        const sqlData = {
            date: formatDateToMySql(new Date()),
            coin:sumPay
        }

        const res = await fetch('/api/managerpage',{
            method:'POST',
            headers:{
                "Content-Type" : "application/json",
            },
            body:JSON.stringify(sqlData)
        })
        if(!res.ok){
            throw new Error('서버응답에 실패했습니다');
        }
        return sqlData;
    };

    return (
        <div>

            <div>
                <div className='paymentBox'>
                    <h2 id='paymentTitle'>{translations.success}</h2>
                </div>
                <div  className='paymentBox1'>amountPay:{sumPay}원</div>
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
