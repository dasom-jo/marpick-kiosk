"use client";
import React from 'react';
import Header from "@/components/header/Header";
import { useRecoilState, useRecoilValue } from "recoil";
import LocationBtn from '@/components/locationBtn/LocationBtn';
import Location from '@/components/location/Location';
import Ingredient from './Ingredient';
import Taste from './taste';
import Pay from './pay';
import { countIcon } from '@/recoil/atoms/atoms';
import "../../app/globals.scss";


const SelectMain = () => {
    const pageNumber = useRecoilValue(countIcon)

    return (
        <>
            <Header />
            <Location/>
            {pageNumber === 0 && <Ingredient/>}
            {pageNumber === 1 && <Taste/>}
            {pageNumber === 2 && <Pay/>}
            <LocationBtn/>
        </>
    );
}

export default SelectMain;
