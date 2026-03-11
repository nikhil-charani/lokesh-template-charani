import React from 'react';
import nexi5LogoMp4 from '../assets/Nexi5Logo.mp4';

export default function Nexi5GifBg() {
    return (
        <video
            className="w-full h-full object-cover object-center"
            autoPlay
            loop
            muted
            playsInline
        >
            <source src={nexi5LogoMp4} type="video/mp4" />
        </video>
    );
}
