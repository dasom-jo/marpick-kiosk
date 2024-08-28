"use client";
import { colorIcon } from '@/recoil/atoms/atoms';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import { useRecoilValue } from 'recoil';

const Location = () => {
    const iconColor = useRecoilValue(colorIcon);

    return (
        <>
        <div className="icon">
                <div className="icon1">
                    <div>
                        재료
                    </div>
                    <ShoppingCartOutlinedIcon
                        style={{ fontSize: '50px', color: iconColor }} />
                </div>
                <div className="icon1">
                    <div className="taste">
                        맛
                    </div>
                    <ShoppingCartOutlinedIcon
                        style={{ fontSize: '50px',color: iconColor  }} />
                </div>
                <div className="icon1">
                    <div>
                        결제
                    </div>
                    <ShoppingCartOutlinedIcon
                        style={{ fontSize: '50px',color: iconColor  }} />
                </div>
            </div>
        </>
     );
}

export default Location;