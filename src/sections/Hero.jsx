import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { TextPlugin, Observer } from "gsap/all";
import { images } from '../assets/constants/index.js';

gsap.registerPlugin(TextPlugin, Observer);
const Hero = () => {
    const slidesRef = useRef([]);
    const outerRefs = useRef([]);
    const innerRefs = useRef([]);
    const countRef = useRef(null);



    useEffect(() => {
        gsap.registerPlugin(Observer);

        const slides = slidesRef.current;
        const outers = outerRefs.current;
        const inners = innerRefs.current;
        const count = countRef.current;

        let currentIndex = 0;
        let animating = false;
        const wrap = gsap.utils.wrap(0, slides.length);

        gsap.set(outers, { xPercent: 100 });
        gsap.set(inners, { xPercent: -100 });
        gsap.set(outers[0], { xPercent: 0 });
        gsap.set(inners[0], { xPercent: 0 });

        function gotoSection(index, direction) {
            animating = true;
            index = wrap(index);

            const tl = gsap.timeline({
                defaults: { duration: 1, ease: "expo.inOut" },
                onComplete: () => (animating = false)
            });

            const currentSlide = slides[currentIndex];
            const nextSlide = slides[index];

            gsap.set(slides, { autoAlpha: 0, zIndex: 0 });
            gsap.set([currentSlide, nextSlide], { autoAlpha: 1, zIndex: 1 });

            // ← Replace set with TextPlugin animation here
            gsap.to(count, { duration: 0.3, text: index + 1 });

            tl.fromTo(outers[index], { xPercent: 100 * direction }, { xPercent: 0 }, 0)
                .fromTo(inners[index], { xPercent: -100 * direction }, { xPercent: 0 }, 0);

            currentIndex = index;
        }

        Observer.create({
            type: "wheel,touch,pointer",
            preventDefault: true,
            wheelSpeed: -1,
            onUp: () => {
                if (animating) return;
                gotoSection(currentIndex + 1, 1);
            },
            onDown: () => {
                if (animating) return;
                gotoSection(currentIndex - 1, -1);
            },
            tolerance: 10
        });
        const handleKey = (e) => {
            if (animating) return;
            if (e.code === "ArrowUp" || e.code === "ArrowLeft") gotoSection(currentIndex - 1, -1);
            if (e.code === "ArrowDown" || e.code === "ArrowRight") gotoSection(currentIndex + 1, 1);
        };
        document.addEventListener("keydown", handleKey);

        return () => document.removeEventListener("keydown", handleKey);
    }, []);

    return (
        <div className="hero-wrapper container">
            <div className="hero-text">
                <h1>
                    Welcome to our platform — a space created by a mom-to-be, for moms-to-be.
                    During her own pregnancy, our founder felt the deep need for a pillow that truly
                    supports a woman’s changing body...
                </h1>
            </div>

            <div className="w-full lg:w-1/2 relative overflow-hidden">
                {images.map((img, i) => (
                    <div
                        key={i}
                        className="slide"
                        ref={(el) => (slidesRef.current[i] = el)}
                    >
                        <div className="slide__outer" ref={(el) => (outerRefs.current[i] = el)}>
                            <div className="slide__inner" ref={(el) => (innerRefs.current[i] = el)}>
                                <img src={img} alt={`Product ${i + 1}`} />
                            </div>
                        </div>
                    </div>
                ))}

                <div className="count" ref={countRef}>
                    1
                </div>
            </div>
        </div>
    );
};

    export default Hero;
