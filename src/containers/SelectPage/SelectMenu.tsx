"use client";
import React from 'react';
import Header from "@/components/header/Header";

import "../SelectPage/SelectMenu.scss";
import { useRecoilState } from "recoil";
import { colorIcon } from "@/recoil/atoms/atoms";
import Location from '@/components/location/location';
import LocationBtn from '@/components/locationBtn/LocationBtn';

const SelectMain = () => {


    return (
        <>
            <Header />
            <Location/>

            <LocationBtn/>
        </>
    );
}

export default SelectMain;
