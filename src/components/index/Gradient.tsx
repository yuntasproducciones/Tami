import React from 'react';

interface GradientProps {
    title: string;
    backgroundColor1: string;
    backgroundColor2: string;
    backgroundColor3: string;
}

const Gradient: React.FC<GradientProps> = ({ title, backgroundColor1, backgroundColor2, backgroundColor3 }) => {
    return (
        <div
            className="w-full mx-0 h-20 md:h-22 2xl:h-40 flex items-center justify-center"
            style={{
                background: `linear-gradient(to right, ${backgroundColor1}, ${backgroundColor2}, ${backgroundColor3})`,
            }}
        >
            <div className="text-center text-white">
                <h3 className="text-lg md:text-2xl 2xl:text-4xl font-bold">{title}</h3>
            </div>
        </div>
    );
};

export default Gradient;