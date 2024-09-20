import Image from "next/image";
import tossImage from "../../img/toss.png";
import "./Pay.scss";
import { loadTossPayments } from "@tosspayments/payment-sdk";
import { useRecoilValue } from "recoil";
import { totalPay } from "@/recoil/atoms/atoms";
import { filterLanguage } from "@/recoil/selector/selectors";

const Pay = () => {
  const translations = useRecoilValue(filterLanguage);
  const sumPay = useRecoilValue(totalPay);

  const handleToss = async () => {
    const tossClientKey = process.env.NEXT_PUBLIC_TOSS_CLIENT_KEY || "";

    if (!tossClientKey) {
      console.error("TOSS_CLIENT_KEY is not defined");
      return;
    }

    const tossPayments = (await loadTossPayments(tossClientKey)) as any;
    const amountPay = parseFloat(sumPay);
    await tossPayments.requestPayment("카드", {
      amount: amountPay,
      orderId: Math.random().toString(36).slice(2),
      orderName: "마라픽",
      successUrl: `${window.location.origin}/payment`,
      failUrl: `${window.location.origin}/paymentfail`,
    });

    const formatDateToMySql = (date: Date) => {
      const year = date.getFullYear();
      const month = String(date.getMonth() + 1).padStart(2, "0");
      const day = String(date.getDate()).padStart(2, "0");
      const hours = String(date.getHours()).padStart(2, "0");
      const minutes = String(date.getMinutes()).padStart(2, "0");
      const seconds = String(date.getSeconds()).padStart(2, "0");
      return `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
    };
    const sqlData = {
      date: formatDateToMySql(new Date()),
      coin: amountPay,
    };

    const res = await fetch("/api/managerpage", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(sqlData),
    });
    if (!res.ok) {
      throw new Error("서버응답에 실패했습니다");
    }
    return sqlData;
  };

  return (
    <>
      <p className="imgText">{translations.onlycard}</p>
      <div className="imgBox">
        <Image
          className="imgSmallBox"
          src={tossImage}
          alt="Kakao"
          onClick={handleToss}
        />
      </div>
    </>
  );
};

export default Pay;
