"use client";
import { useEffect, useState } from "react";
import "./SalesMain.scss";

const SalesList = () => {
    const [data, setData] = useState<any[]>([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('/api/map');
                const result = await response.json();
                setData(result.managerPage || []); 
            } catch (error) {
                console.error('데이터 가져오기 오류:', error);
            }
        };
        fetchData();
    }, []);

    const formatDate = (dateTime: string) => {
        return dateTime.split('T')[0];
    };

    const formatCurrency = (amount: number) => {
        return new Intl.NumberFormat('ko-KR', { style: 'currency', currency: 'KRW' }).format(amount);
    };

    const sum = () => {
        return data.reduce((total, item) => total + parseFloat(item.coin || '0'), 0);
    };

    return (
        <div className="saleBox">
            <div className="saleTitle">
                총매출
            </div>
            <ul>
                {data.map((item, index) => (
                    <li key={index} className="saleSmallBox">
                        <div>{formatDate(item.date)}</div>
                        <div>{formatCurrency(parseFloat(item.coin || '0'))}</div>
                    </li>
                ))}
            </ul>
            <div className="saleTotal">총매출: {formatCurrency(sum())}</div>
        </div>
    );
}

export default SalesList;
