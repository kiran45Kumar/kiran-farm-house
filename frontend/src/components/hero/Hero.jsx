import React from "react";
import hero_img_1 from "../../assets/hero-img1.png";
import hero_img_2 from "../../assets/hero_img2.jpg";
import hero_img_3 from "../../assets/hero-img3.png";
import hero_img_4 from "../../assets/hero-img4.png";
// icons
import bedroom_icon from "../../assets/bedroom-icon.png";
import bathroom_icon from "../../assets/bathroom-icon.png";
import bed_icon from "../../assets/bed-icon.png";
import guest_icon from "../../assets/guest-icon.png";

const Hero = () => {
    return (
        <>
            <section className="mt-0 mb-40">
                <div className="flex items-center justify-evenly ">
                    <div className="flex items-center justify-center">
                        <div className="image-container hero-left">
                            <div className="">
                                <img src={hero_img_1}  loading="lazy" className="h-96 bg" alt="hero_img_1" />
                                <img src={hero_img_2}  loading="lazy" className=" overlay" alt="hero_img_2" />
                                <img src={hero_img_3}  loading="lazy" alt="hero_img_3" className="overlay2" />
                                <img src={hero_img_4}  loading="lazy" alt="hero_img_4" className="overlay3" />
                            </div>
                        </div>
                    </div>
                    <div className="hero-right mt-10">
                        <div className="hero-top">
                            <div>
                                <p className="century-gothic font-normal text-[20px]">
                                    OUR INTRODUCTION
                                </p>
                            </div>
                            <div className="">
                                <p className="livvic-bold font-normal text-5xl py-4">
                                    Pure Agriculture and <br />
                                    Organic Form
                                </p>
                            </div>
                            <div className="py-5">
                                <p className="livvic-bold-medium text-[#F7C35F] text-3xl">
                                    We’re Leader in Agriculture Market
                                </p>
                            </div>
                            <div className="w-120 century-gothic text-lg line-break">
                                There are many variations of passages of available but the
                                majority have suffered alteration in some form, by injected
                                humou or randomised words even slightly believable.
                            </div>
                        </div>
                        <div className="hero-bottom py-5">
                            <div className="flex gap-5 items-center">
                                <div className="flex flex-col">
                                    <div className="flex items-center gap-2">
                                        <img src={bedroom_icon} alt="" />
                                        <p className="eb-garamond-regular text-lg text-[#7D6A0B]">
                                            4 Bedrooms
                                        </p>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <img src={bed_icon} alt="" />
                                        <p className="eb-garamond-regular text-lg text-[#7D6A0B]">
                                            4 Beds
                                        </p>
                                    </div>
                                </div>
                                <div className="flex flex-col">
                                    <div className="flex items-center gap-2">
                                        <img src={bathroom_icon} alt="" />
                                        <p className="eb-garamond-regular text-lg text-[#7D6A0B]">
                                            4 Bathrooms
                                        </p>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <img src={guest_icon} alt="" />
                                        <p className="eb-garamond-regular text-lg text-[#7D6A0B]">
                                            10 Guests
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Hero;
