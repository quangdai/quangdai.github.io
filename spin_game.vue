<template>
    <div class="spin-game-discount d-flex hide">
        <div class="close-game" id="spin-closer"></div>
        <div class="col-6 col-lg-4" style="overflow: hidden;">
            <div class="privy-s2w-wheel-wrapper privy-s2w-animate-in">
                <canvas width="100%" height="100%" style="width: 100%; height: 100%;"></canvas>
                <svg style="width: 100%; height: 100%; position: absolute; top: 0; left: 0;" viewBox="0 0 100 100" class="privy-s2w-wheel">
                    <defs>
                        <filter id="shadow" x="-100%" y="-100%" width="550%" height="550%">
                            <feOffset in="SourceAlpha" dx="1.1" dy="1.4" result="offsetOut"></feOffset>
                            <feGaussianBlur stdDeviation="0.16" in="offsetOut" result="drop"></feGaussianBlur>
                            <feColorMatrix in="drop" result="color-out" type="matrix" values="0 0 0 0   0
            0 0 0 0   0
            0 0 0 0   0
            0 0 0 0.3 0"></feColorMatrix>
                            <feBlend in="SourceGraphic" in2="color-out" mode="normal"></feBlend>
                        </filter>
                    </defs>
                    <g class="privy-s2w-wheel-background privy-s2w-will-spin">
                        <line x1="50" x2="50" y1="50" y2="-0.8" stroke="#ffffff" stroke-width="1.4" stroke-linecap="round" transform="rotate(0, 50, 50)"></line>
                        <line x1="50" x2="50" y1="50" y2="-0.8" stroke="#ffffff" stroke-width="1.4" stroke-linecap="round" transform="rotate(30, 50, 50)"></line>
                        <line x1="50" x2="50" y1="50" y2="-0.8" stroke="#ffffff" stroke-width="1.4" stroke-linecap="round" transform="rotate(60, 50, 50)"></line>
                        <line x1="50" x2="50" y1="50" y2="-0.8" stroke="#ffffff" stroke-width="1.4" stroke-linecap="round" transform="rotate(90, 50, 50)"></line>
                        <line x1="50" x2="50" y1="50" y2="-0.8" stroke="#ffffff" stroke-width="1.4" stroke-linecap="round" transform="rotate(120, 50, 50)"></line>
                        <line x1="50" x2="50" y1="50" y2="-0.8" stroke="#ffffff" stroke-width="1.4" stroke-linecap="round" transform="rotate(150, 50, 50)"></line>
                        <line x1="50" x2="50" y1="50" y2="-0.8" stroke="#ffffff" stroke-width="1.4" stroke-linecap="round" transform="rotate(180, 50, 50)"></line>
                        <line x1="50" x2="50" y1="50" y2="-0.8" stroke="#ffffff" stroke-width="1.4" stroke-linecap="round" transform="rotate(210, 50, 50)"></line>
                        <line x1="50" x2="50" y1="50" y2="-0.8" stroke="#ffffff" stroke-width="1.4" stroke-linecap="round" transform="rotate(240, 50, 50)"></line>
                        <line x1="50" x2="50" y1="50" y2="-0.8" stroke="#ffffff" stroke-width="1.4" stroke-linecap="round" transform="rotate(270, 50, 50)"></line>
                        <line x1="50" x2="50" y1="50" y2="-0.8" stroke="#ffffff" stroke-width="1.4" stroke-linecap="round" transform="rotate(300, 50, 50)"></line>
                        <line x1="50" x2="50" y1="50" y2="-0.8" stroke="#ffffff" stroke-width="1.4" stroke-linecap="round" transform="rotate(330, 50, 50)"></line>
                    </g>
                    <g class="privy-s2w-wheel-middleground privy-s2w-will-spin">
                        <g transform="rotate(0, 50, 50)">
                            <path fill="#7eecec" d="M50,50 L50,0 A50,50 1 0,1 75, 6.6987298107780875 z" style="fill: rgb(126, 236, 236);"></path>
                            <line x1="50" x2="50" y1="50" y2="0" stroke="#000000" stroke-width="0.25" stroke-opacity="0.1"></line>
                        </g>
                        <g transform="rotate(30, 50, 50)">
                            <path fill="#7280fd" d="M50,50 L50,0 A50,50 1 0,1 75, 6.6987298107780875 z" style="fill: rgb(114, 128, 253);"></path>
                            <line x1="50" x2="50" y1="50" y2="0" stroke="#000000" stroke-width="0.25" stroke-opacity="0.1"></line>
                        </g>
                        <g transform="rotate(60, 50, 50)">
                            <path fill="#fff171" d="M50,50 L50,0 A50,50 1 0,1 75, 6.6987298107780875 z" style="fill: rgb(255, 241, 113);"></path>
                            <line x1="50" x2="50" y1="50" y2="0" stroke="#000000" stroke-width="0.25" stroke-opacity="0.1"></line>
                        </g>
                        <g transform="rotate(90, 50, 50)">
                            <path fill="#ff7878" d="M50,50 L50,0 A50,50 1 0,1 75, 6.6987298107780875 z" style="fill: rgb(255, 120, 120);"></path>
                            <line x1="50" x2="50" y1="50" y2="0" stroke="#000000" stroke-width="0.25" stroke-opacity="0.1"></line>
                        </g>
                        <g transform="rotate(120, 50, 50)">
                            <path fill="#7eecec" d="M50,50 L50,0 A50,50 1 0,1 75, 6.6987298107780875 z" style="fill: rgb(126, 236, 236);"></path>
                            <line x1="50" x2="50" y1="50" y2="0" stroke="#000000" stroke-width="0.25" stroke-opacity="0.1"></line>
                        </g>
                        <g transform="rotate(150, 50, 50)">
                            <path fill="#7280fd" d="M50,50 L50,0 A50,50 1 0,1 75, 6.6987298107780875 z" style="fill: rgb(114, 128, 253);"></path>
                            <line x1="50" x2="50" y1="50" y2="0" stroke="#000000" stroke-width="0.25" stroke-opacity="0.1"></line>
                        </g>
                        <g transform="rotate(180, 50, 50)">
                            <path fill="#fff171" d="M50,50 L50,0 A50,50 1 0,1 75, 6.6987298107780875 z" style="fill: rgb(255, 241, 113);"></path>
                            <line x1="50" x2="50" y1="50" y2="0" stroke="#000000" stroke-width="0.25" stroke-opacity="0.1"></line>
                        </g>
                        <g transform="rotate(210, 50, 50)">
                            <path fill="#ff7878" d="M50,50 L50,0 A50,50 1 0,1 75, 6.6987298107780875 z" style="fill: rgb(255, 120, 120);"></path>
                            <line x1="50" x2="50" y1="50" y2="0" stroke="#000000" stroke-width="0.25" stroke-opacity="0.1"></line>
                        </g>
                        <g transform="rotate(240, 50, 50)">
                            <path fill="#7eecec" d="M50,50 L50,0 A50,50 1 0,1 75, 6.6987298107780875 z" style="fill: rgb(126, 236, 236);"></path>
                            <line x1="50" x2="50" y1="50" y2="0" stroke="#000000" stroke-width="0.25" stroke-opacity="0.1"></line>
                        </g>
                        <g transform="rotate(270, 50, 50)">
                            <path fill="#7280fd" d="M50,50 L50,0 A50,50 1 0,1 75, 6.6987298107780875 z" style="fill: rgb(114, 128, 253);"></path>
                            <line x1="50" x2="50" y1="50" y2="0" stroke="#000000" stroke-width="0.25" stroke-opacity="0.1"></line>
                        </g>
                        <g transform="rotate(300, 50, 50)">
                            <path fill="#fff171" d="M50,50 L50,0 A50,50 1 0,1 75, 6.6987298107780875 z" style="fill: rgb(255, 241, 113);"></path>
                            <line x1="50" x2="50" y1="50" y2="0" stroke="#000000" stroke-width="0.25" stroke-opacity="0.1"></line>
                        </g>
                        <g transform="rotate(330, 50, 50)">
                            <path fill="#ff7878" d="M50,50 L50,0 A50,50 1 0,1 75, 6.6987298107780875 z" style="fill: rgb(255, 120, 120);"></path>
                            <line x1="50" x2="50" y1="50" y2="0" stroke="#000000" stroke-width="0.25" stroke-opacity="0.1"></line>
                        </g>
                    </g>
                    <g class="privy-s2w-wheel-foreground">
                        <circle cx="50" cy="50" r="49" fill="transparent" stroke="#FFFFFF" stroke-width="2" filter="url(#shadow)"></circle>
                        <g class="privy-s2w-wheel-pegs privy-s2w-will-spin">
                            <circle cx="50" cy="1" r="0.6" fill="#b5b9ce" stroke="#000000" stroke-width="0.25" stroke-opacity="0.24" transform="rotate(0, 50, 50)"></circle>
                            <circle cx="50" cy="1" r="0.6" fill="#b5b9ce" stroke="#000000" stroke-width="0.25" stroke-opacity="0.24" transform="rotate(30, 50, 50)"></circle>
                            <circle cx="50" cy="1" r="0.6" fill="#b5b9ce" stroke="#000000" stroke-width="0.25" stroke-opacity="0.24" transform="rotate(60, 50, 50)"></circle>
                            <circle cx="50" cy="1" r="0.6" fill="#b5b9ce" stroke="#000000" stroke-width="0.25" stroke-opacity="0.24" transform="rotate(90, 50, 50)"></circle>
                            <circle cx="50" cy="1" r="0.6" fill="#b5b9ce" stroke="#000000" stroke-width="0.25" stroke-opacity="0.24" transform="rotate(120, 50, 50)"></circle>
                            <circle cx="50" cy="1" r="0.6" fill="#b5b9ce" stroke="#000000" stroke-width="0.25" stroke-opacity="0.24" transform="rotate(150, 50, 50)"></circle>
                            <circle cx="50" cy="1" r="0.6" fill="#b5b9ce" stroke="#000000" stroke-width="0.25" stroke-opacity="0.24" transform="rotate(180, 50, 50)"></circle>
                            <circle cx="50" cy="1" r="0.6" fill="#b5b9ce" stroke="#000000" stroke-width="0.25" stroke-opacity="0.24" transform="rotate(210, 50, 50)"></circle>
                            <circle cx="50" cy="1" r="0.6" fill="#b5b9ce" stroke="#000000" stroke-width="0.25" stroke-opacity="0.24" transform="rotate(240, 50, 50)"></circle>
                            <circle cx="50" cy="1" r="0.6" fill="#b5b9ce" stroke="#000000" stroke-width="0.25" stroke-opacity="0.24" transform="rotate(270, 50, 50)"></circle>
                            <circle cx="50" cy="1" r="0.6" fill="#b5b9ce" stroke="#000000" stroke-width="0.25" stroke-opacity="0.24" transform="rotate(300, 50, 50)"></circle>
                            <circle cx="50" cy="1" r="0.6" fill="#b5b9ce" stroke="#000000" stroke-width="0.25" stroke-opacity="0.24" transform="rotate(330, 50, 50)"></circle>
                        </g>
                        <g class="privy-s2w-wheel-center" filter="url(#shadow)">
                            <circle cx="50" cy="50" r="12" fill="#FFFFFF" class="privy-s2w-will-spin"></circle>
                            <polygon points="54.2,50, 52.598076211353316,51.5, 52.1,53.637306695894644, 50,53, 47.9,53.637306695894644, 47.401923788646684,51.5, 45.8,50, 47.401923788646684,48.5, 47.9,46.362693304105356, 50,47, 52.099999999999994,46.362693304105356, 52.598076211353316,48.5, 54.2,50" fill="#c5c8dc" stroke="#000000" stroke-width="0.25" stroke-opacity="0.14" class="privy-s2w-will-spin"></polygon>
                        </g>
                        <g class="privy-s2w-pointer-group" filter="url(#shadow)">
                            <g class="privy-s2w-pointer-wrapper" transform="rotate(52, 86.24849466590922, 21.67957213501972)">
                                <path fill="#333352" d="M 86.24849466590922 21.67957213501972 L 82.74849466590922 14.679572135019718 A 1 1.1 0 0 1 89.74849466590922 14.679572135019718 L 86.24849466590922 21.67957213501972 Z" stroke="#FFFFFF" stroke-width="0.7" class="privy-s2w-pointer"></path>
                                <circle cx="86.24849466590922" cy="14.329572135019717" r="0.7" fill="#b5b9ce" stroke="#000000" stroke-width="0.25" stroke-opacity="0.24"></circle>
                            </g>
                        </g>
                    </g>
                </svg>
                <div class="privy-s2w-text-container privy-s2w-will-spin">
                    <div class="privy-s2w-text-wrapper" data-spin="1" style="color: rgb(0, 0, 0); transform: translate(0px, -50%) rotate(-15deg);">
                        <div class="privy-s2w-text">Free shipping</div>
                    </div>
                    <div class="privy-s2w-text-wrapper" data-spin="2" style="color: rgb(0, 0, 0); transform: translate(0px, -50%) rotate(15deg);">
                        <div class="privy-s2w-text">So close!</div>
                    </div>
                    <div class="privy-s2w-text-wrapper" data-spin="3" style="color: rgb(0, 0, 0); transform: translate(0px, -50%) rotate(45deg);">
                        <div class="privy-s2w-text">50% Off</div>
                    </div>
                    <div class="privy-s2w-text-wrapper" data-spin="4" style="color: rgb(0, 0, 0); transform: translate(0px, -50%) rotate(75deg);">
                        <div class="privy-s2w-text">No luck today.</div>
                    </div>
                    <div class="privy-s2w-text-wrapper" data-spin="5" style="color: rgb(0, 0, 0); transform: translate(0px, -50%) rotate(105deg);">
                        <div class="privy-s2w-text">40% Off</div>
                    </div>
                    <div class="privy-s2w-text-wrapper" data-spin="6" style="color: rgb(0, 0, 0); transform: translate(0px, -50%) rotate(135deg);">
                        <div class="privy-s2w-text">Sorry, try again!</div>
                    </div>
                    <div class="privy-s2w-text-wrapper" data-spin="7" style="color: rgb(0, 0, 0); transform: translate(0px, -50%) rotate(165deg);">
                        <div class="privy-s2w-text">30% Off</div>
                    </div>
                    <div class="privy-s2w-text-wrapper" data-spin="8" style="color: rgb(0, 0, 0); transform: translate(0px, -50%) rotate(195deg);">
                        <div class="privy-s2w-text">Next time!</div>
                    </div>
                    <div class="privy-s2w-text-wrapper" data-spin="9" style="color: rgb(0, 0, 0); transform: translate(0px, -50%) rotate(225deg);">
                        <div class="privy-s2w-text">$5 Off</div>
                    </div>
                    <div class="privy-s2w-text-wrapper" data-spin="10" style="color: rgb(0, 0, 0); transform: translate(0px, -50%) rotate(255deg);">
                        <div class="privy-s2w-text">Almost!</div>
                    </div>
                    <div class="privy-s2w-text-wrapper" data-spin="11" style="color: rgb(0, 0, 0); transform: translate(0px, -50%) rotate(-75deg);">
                        <div class="privy-s2w-text">10% Off</div>
                    </div>
                    <div class="privy-s2w-text-wrapper" data-spin="12" style="color: rgb(0, 0, 0); transform: translate(0px, -50%) rotate(-45deg);">
                        <div class="privy-s2w-text">Not quite.</div>
                    </div>
                </div>
            </div>
        </div>
        <div class="email col-6 col-lg-8">
            <div class="wrap">
                <div class="title">Pop up email subcribe</div>
                <div class="des">Enter your email for the chance to win</div>
                <form action="">
                    <input type="email" name="" placeholder="Your Email">
                    <button type="submit">Sign in</button>
                </form>
            </div>
        </div>
    </div>
</template>
