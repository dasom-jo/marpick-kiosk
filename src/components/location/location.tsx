"use client";
import { countIcon } from '@/recoil/atoms/atoms';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import { useRecoilState, useRecoilValue } from 'recoil';
import "./Location.scss"

const Location = () => {

    const iconNumber = useRecoilValue(countIcon)

    return (
        <>
            <div className="icon">
            <div className={`icon1 ${iconNumber === 0 ? 'red' : 'black' }`}>
                    <div>
                        재료
                    </div>
                    <ShoppingCartOutlinedIcon
                        style={{ fontSize: '50px' }} />
                </div>

                <div className={`icon1 ${iconNumber === 1 ? 'red' : 'black' }`}>
                    <div className="taste">
                        맛
                    </div>
                    <ShoppingCartOutlinedIcon
                        style={{ fontSize: '50px'}} />
                </div>

                <div className={`icon1 ${iconNumber === 2 ? 'red' : 'black' }`}>
                    <div>
                        결제
                    </div>
                    <ShoppingCartOutlinedIcon
                        style={{ fontSize: '50px' }} />
                </div>
            </div>
        </>
    );
}

export default Location;