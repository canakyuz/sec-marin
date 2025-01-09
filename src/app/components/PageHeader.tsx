import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { AnimatedWaves } from './AnimatedWaves';

interface PageHeaderProps {
    title: string;
    description?: string;
    mediaType: 'image' | 'video';
    mediaSrc: string;
    mediaAlt?: string;
}

const PageHeader: React.FC<PageHeaderProps> = ({ title, description, mediaType, mediaSrc, mediaAlt }) => {
    return (
        <div className="relative py-16 md:py-48 bg-gradient-to-r from-blue-900 via-blue-800 to-blue-700 overflow-hidden">
            {/* Animated Waves Background */}
            <AnimatedWaves />

            {mediaType === 'image' ? (
                <Image
                    src={mediaSrc}
                    alt={mediaAlt || title}
                    layout="fill"
                    objectFit="cover"
                    priority
                    className="opacity-75" // Reduced image opacity for better text contrast
                />
            ) : (
                <video
                    src={mediaSrc}
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="absolute inset-0 w-full h-full object-cover opacity-75" // Reduced video opacity
                />
            )}

            {/* Enhanced overlay with stronger contrast */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/70 flex flex-col justify-center items-center text-white px-4 py-6 ">
                <motion.div
                    className="max-w-3xl mx-auto text-center relative z-10"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <h1 className="text-3xl md:text-5xl font-bold text-white mb-6 tracking-wide [text-shadow:_0_2px_4px_rgba(0,0,0,0.7)] leading-tight">
                        {title}
                    </h1>
                    {description && (
                        <p className="text-base md:text-xl text-white mt-4 [text-shadow:_0_1px_2px_rgba(0,0,0,0.8)] leading-relaxed max-w-2xl mx-auto font-medium">
                            {description}
                        </p>
                    )}
                </motion.div>
            </div>
        </div>
    );
};

export default PageHeader;
