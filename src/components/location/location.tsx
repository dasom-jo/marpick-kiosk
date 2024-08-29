"use client";
import { countIcon } from '@/recoil/atoms/atoms';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import { useRecoilState, useRecoilValue } from 'recoil';
import "./Location.scss"
import { filterLanguage } from '@/recoil/selector/selectors';

const Location = () => {

    const iconNumber = useRecoilValue(countIcon)
    const translations = useRecoilValue(filterLanguage);

    return (
        <>
            <div className="icon">
            <div className={`icon1 ${iconNumber === 0 ? 'red' : 'black' }`}>
                    <div>
                        {translations.ingredients}
                    </div>
                    <ShoppingCartOutlinedIcon
                        style={{ fontSize: '50px' }} />
                </div>

                <div className={`icon1 ${iconNumber === 1 ? 'red' : 'black' }`}>
                    <div className="taste">
                    {translations.taste}
                    </div>
                    <ShoppingCartOutlinedIcon
                        style={{ fontSize: '50px'}} />
                </div>

                <div className={`icon1 ${iconNumber === 2 ? 'red' : 'black' }`}>
                    <div>
                    {translations.pay}
                    </div>
                    <ShoppingCartOutlinedIcon
                        style={{ fontSize: '50px' }} />
                </div>
            </div>
        </>
    );
}

export default Location;