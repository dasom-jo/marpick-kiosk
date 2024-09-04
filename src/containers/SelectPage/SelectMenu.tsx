"use client";
import React from 'react';
import { useRecoilState, useRecoilValue } from "recoil";
import LocationBtn from '@/components/locationBtn/LocationBtn';
import Location from '@/components/location/Location';
import Ingredient from './Ingredient';
import Taste from './Taste';
import Pay from './Pay';
import { countIcon } from '@/recoil/atoms/atoms';
import "../../app/globals.scss";
import List from '@/components/list/List';


const SelectMain = () => {
    const pageNumber = useRecoilValue(countIcon)

    return (
        <>
            <Location/>
            {pageNumber === 0 && <Ingredient/>}
            {pageNumber === 1 && <Taste/>}
            <List/>
            {pageNumber === 2 && <Pay/>}
            <LocationBtn/>

        </>
    );
}

export default SelectMain;
