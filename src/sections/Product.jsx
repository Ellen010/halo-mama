import React, {useEffect, useRef} from 'react'
import {samples} from "../assets/constants/index.js";
import gsap from "gsap";
import { TextPlugin, Observer } from "gsap/all";

gsap.registerPlugin(TextPlugin, Observer);
const Product = () => {
    const slidesRef = useRef([]);
    const outerRefs = useRef([]);
    const innerRefs = useRef([]);
    const countRef = useRef(null);


    useEffect(() => {
        requestAnimationFrame(() => {
            gsap.registerPlugin(Observer);

            const slides = slidesRef.current;
            const outers = outerRefs.current;
            const inners = innerRefs.current;
            const count = countRef.current;
            if (!slides.length) return;
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
                    defaults: { duration: 2.2, ease: "power2.out" },
                    onComplete: () => (animating = false)
                });

                const currentSlide = slides[currentIndex];
                const nextSlide = slides[index];

                gsap.set(slides, { autoAlpha: 0, zIndex: 0 });
                gsap.set([currentSlide, nextSlide], { autoAlpha: 1, zIndex: 1 });

                gsap.to(count, { duration: 1.2, text: index + 1, ease: "power1.out" });

                tl.fromTo(outers[index], { xPercent: 100 * direction }, { xPercent: 0 }, 0)
                    .fromTo(inners[index], { xPercent: -100 * direction }, { xPercent: 0 }, 0)
                    .fromTo(nextSlide, { autoAlpha: 0 }, { autoAlpha: 1, duration: 1.5 }, 0);

                currentIndex = index;
            }

            Observer.create({
                type: "wheel,touch,pointer",
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
        });
    }, []);

    return (
        <div className="hero-wrapper container">

            <div className="w-full lg:w-1/2 relative overflow-hidden min-h-[500px]">
                {samples.map((img, i) => (
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
            <div className="hero-text">
                <h1>
                    Discover a new standard of comfort designed with real pregnancy needs in mind.
                    Born from a mom-to-be’s personal experience,
                    this pillow was created to solve a problem many expectant mothers face:
                    finding true, all-around support as the body evolves. Every detail reflects
                    a deep understanding of pregnancy, transforming restless nights and tired days
                    into moments of relief, relaxation, and care.
                </h1>
                <h1>
                    OInnovatively designed to grow with you, our pregnancy pillow adapts seamlessly
                    to each trimester. Its thoughtfully engineered shape supports the belly, back, hips,
                    and legs at the same time, helping to improve alignment and ease everyday discomfort.
                    Crafted from ultra-soft, breathable fabrics, it offers a cocoon-like feel without
                    bulk—making it a practical, elegant, and reassuring solution for pregnant women
                    seeking comfort, balance, and better rest throughout their journey.  </h1>
            </div>
        </div>
    );
};

export default Product
