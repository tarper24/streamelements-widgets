/*
This widget contains content from @lx who made the Top Events Rotator. Also from @Benno who made the Social Media Rotator
(https://github.com/StreamElements/widgets)

Both of which were inspirational for this widget.
*/

let socials = [];
let socialList;
let order;

let timeline;
let slides;
let slideTime;

let next = 0;
let amount = 0;

let rotatorBehaviour;
let iterations;
let sleepTime;
let useIconColor;
let animationIn;
let animationOut;
let timeIn;
let timeDisplay;
let timeOut;
let timeInBetween;
let timeDelay;

window.addEventListener('onWidgetLoad', function (obj) {
    const fieldData = obj.detail.fieldData;
    rotatorBehaviour = fieldData.rotatorBehaviour;
    iterations = (rotatorBehaviour === "sleep") ? fieldData.iterations : 0;
    sleepTime = fieldData.sleepTime;
    useIconColor = fieldData.useIconColor;
    animationIn = fieldData.animationIn;
    animationOut = fieldData.animationOut;
    timeIn = fieldData.timeIn;
    timeDisplay = fieldData.timeDisplay;
    timeOut = fieldData.timeOut;
    timeInBetween = fieldData.timeInBetween;
    timeDelay = fieldData.timeDelay;
    slideTime = timeIn + timeDisplay + timeOut + timeInBetween;

    socialList = findSocials(fieldData);
        console.log(socialList);
    order = getOrder(fieldData);

    fillSocials(fieldData);
        console.log(socials);
    init();
    startSlides();
});

function findSocials(fieldData) {
    var regex = /Handle$/;
    return Object.keys(fieldData)
    .reduce(function (sum, key) {
        if (regex.test(key)) {
            sum.push(key.slice(0, -6));
        }
        return sum;
    }, []);
}

function fillSocials(fieldData) {
    /* Change this if you wanted to add more socials */
    socialList.forEach(social => {
        socials[social] =
            {
                handle: fieldData[`${social}Handle`],
                icon: fieldData[`${social}Icon`],
                color: fieldData[`${social}BrandColor`],
            };
    });
}

function getOrder(fieldData) {
    var regex = /^order\d+$/;
    return Object.keys(fieldData)
    .reduce(function (sum, key) {
        if (regex.test(key)) {
            sum.push(key.slice(5));
        }
        return sum;
    }, [])
    .sort(function(a, b){return a-b})
    .reduce(function (sum, order) {
        key = `order${order}`
        sum.push(fieldData[key]);
        return sum;
    }, []);
}

function init() {
    timeline = gsap.timeline({ repeat: (iterations - 1), repeatDelay: timeDelay, paused: true, onComplete: sleep });

    let slide;
    for (let i = 0; i < order.length; i++) {
        if (order[i] === "") continue;
        var social = socials[order[i]];
        amount++;
        x = amount;
        
        const colorStyle = (useIconColor === "icons") ? `color: ${social.color};` : '';

        slide = `<div class="slides" id="slide${x}">` +
            `<span class="slidesContent faWrapper fab fa-${social.icon}" style="color: ${social.color}"></span>` +
            `<span class="slidesContent handle" style="${colorStyle}"> ${social.handle}</span>` +
            `</div>`;

        $("#container").append(slide);

        timeline.set('#slide' + x, {
            visibility: 'visible',
            classList: 'slides animateIn',
            zIndex: x
        }, (x - 1) * slideTime);
        timeline.set('#slide' + x, { classList: 'slides animateOut' }, "+=" + (timeIn + timeDisplay));
        timeline.set('#slide' + x, { visibility: 'hidden', classList: 'slides' }, "+=" + timeOut);
    }
}

function startSlides() {
    if (timeline.progress() === 1) {
        timeline.restart();
    } else {
        timeline.play();
    }
}

function sleep() {
    if (rotatorBehaviour === "sleep") {
        setTimeout(startSlides, (sleepTime * 1000));
    }
}
