import React from "react";
import { Image } from "react-native";
import batLogo from '../../../assets/batsinal.png'

export function BatLogo(){
    return (
        <>
            <Image
            source={batLogo}
            style={{
                resizeMode: 'contain',
                height: 130
            }}
            />
        </>
    )
}