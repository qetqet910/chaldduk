// 로티 관련 JS

const Lottiepnt = document.querySelector(".pnt");
const LottieCntr2 = document.querySelector(".ctnr2");
const arrowRightBoom = document.querySelector('.Boom');
const arrowLeftBoom = document.querySelector('.LeftBoom');
const tenthLottie = document.querySelector('#tenthLottie');
const LottieRotate = document.querySelector('.LottieRotate');
const LottieRotate2 = document.querySelector('.LottieRotate2');
const FeedbackMailbox = document.querySelector('.FeedbackMailbox');

// Lottie 관련 함수

let animationSkipForward0 = bodymovin.loadAnimation({
    container: Lottiepnt,
    renderer: 'svg',
    loop: false,
    autoplay: true,
    path: "https://lottie.host/1d87354d-efcd-4684-9915-514d50f289e5/FZyjyyo1vA.json"
})

let animationSkipForward2 = bodymovin.loadAnimation({
    container: LottieCntr2,
    renderer: 'svg',
    loop: false,
    autoplay: false,
    path: "https://assets7.lottiefiles.com/datafiles/TtpruaCfUbd0Nk2/data.json"
});

let animationSkipForward3 = bodymovin.loadAnimation({
    container: arrowRightBoom,
    renderer: 'svg',
    loop: false,
    autoplay: false,
    path: "https://assets1.lottiefiles.com/packages/lf20_fiqbbdsz.json"
});

let animationSkipForward4 = bodymovin.loadAnimation({
    container: arrowLeftBoom,
    renderer: 'svg',
    loop: false,
    autoplay: false,
    path: "https://assets1.lottiefiles.com/packages/lf20_fiqbbdsz.json"
});

let animationSkipForward5 = bodymovin.loadAnimation({
    container: tenthLottie,
    renderer: 'svg',
    loop: true,
    autoplay: true,
    path: "https://lottie.host/5cd831ec-1e5b-4866-a4d2-0daddaa50022/EkelIiu6su.json"
});

let animationSkipForward6 = bodymovin.loadAnimation({
    container: LottieRotate,
    renderer: 'svg',
    loop: false,
    autoplay: false,
    path: "https://lottie.host/52d74e8e-0a3a-45ef-b996-2727d0a74290/59bBfpVtOT.json"
});

let animationSkipForward7 = bodymovin.loadAnimation({
    container: LottieRotate2,
    renderer: 'svg',
    loop: true,
    autoplay: true,
    path: "https://lottie.host/a1a0eb4f-d79e-4128-acb1-b82afb77095c/a2SC2Lr7Cg.json"
});

let animationSkipForward8 = bodymovin.loadAnimation({
    container: FeedbackMailbox,
    renderer: 'svg',
    loop: false,
    autoplay: false,
    path: "https://assets1.lottiefiles.com/packages/lf20_3hFUmb.json"
});
// 버튼 Lottie 이벤트 함수

export function AniStart(e){

    let animationSkipForward = bodymovin.loadAnimation({
        container: e,
        renderer: 'svg',
        loop: false,
        autoplay: false,
        path: "https://assets10.lottiefiles.com/packages/lf20_3u3dolxn.json"
    });
    animationSkipForward.playSegments([0, 60], true);
}
export function AniStart0(){
    animationSkipForward0.playSegments([0, 60], true);
}

export function AniStart2(){
    LottieCntr2.style.opacity = '1';
    animationSkipForward2.playSegments([0, 60], true);
}
export function AniStart3(){
    animationSkipForward3.playSegments([0, 60], true);
}
export function AniStart4(){
    animationSkipForward4.playSegments([0, 60], true);
}
export function AniStart5(){
    animationSkipForward5.playSegments([0, 120], true);
}
export function AniStart6(){
    animationSkipForward6.playSegments([0, 60], true);
}
export function AniStart7(){
    animationSkipForward7.playSegments([30, 60], true);
}
export function AniStart9(){
    animationSkipForward8.playSegments([0, 60], true);
}