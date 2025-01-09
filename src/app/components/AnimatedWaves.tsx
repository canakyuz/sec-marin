'use client'

export const AnimatedWaves = () => {
    return (
        <div className="waves-container absolute inset-0 overflow-hidden z-10">
            <svg
                className="waves absolute bottom-0 w-full h-16 min-w-[1000px]"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 24 150 28"
                preserveAspectRatio="none"
                style={{
                    transform: 'scale(1.2)',
                    transformOrigin: 'bottom'
                }}
            >
                <defs>
                    <path
                        id="wave"
                        d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z"
                    />
                </defs>
                <g className="parallax">
                    <use
                        href="#wave"
                        x="48"
                        y="0"
                        fill="rgba(255,255,255,0.2)"
                        style={{
                            animation: 'move-forever 15s cubic-bezier(.55,.5,.45,.5) infinite',
                            animationDelay: '-2s'
                        }}
                    />
                    <use
                        href="#wave"
                        x="48"
                        y="3"
                        fill="rgba(255,255,255,0.15)"
                        style={{
                            animation: 'move-forever 13s cubic-bezier(.55,.5,.45,.5) infinite',
                            animationDelay: '-3s'
                        }}
                    />
                    <use
                        href="#wave"
                        x="48"
                        y="5"
                        fill="rgba(255,255,255,0.1)"
                        style={{
                            animation: 'move-forever 11s cubic-bezier(.55,.5,.45,.5) infinite',
                            animationDelay: '-4s'
                        }}
                    />
                    <use
                        href="#wave"
                        x="48"
                        y="7"
                        fill="rgba(255,255,255,0.05)"
                        style={{
                            animation: 'move-forever 9s cubic-bezier(.55,.5,.45,.5) infinite',
                            animationDelay: '-5s'
                        }}
                    />
                </g>
            </svg>

            <style jsx>{`
                @keyframes move-forever {
                    0% {
                        transform: translate3d(-50px, 0, 0);
                    }
                    100% {
                        transform: translate3d(50px, 0, 0);
                    }
                }

                .waves {
                    transition: all 0.3s ease;
                }

                @media (max-width: 768px) {
                    .waves {
                        height: 30px;
                        min-height: 30px;
                    }
                }
            `}</style>
        </div>
    )
}

